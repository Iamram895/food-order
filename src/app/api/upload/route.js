import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import uniqid from "uniqid";

export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    console.log("we have file", data.get("file"));
    const file = data.get("file");

    const s3Client = new S3Client({
      region: "ap-south-1",
      endpoint: "https://s3.ap-south-1.amazonaws.com",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });

    const ext = file.name.split(".").slice(-1)[0];
    const newFileName = uniqid() + "." + ext;

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);
    const bucket = "doctor-kitchens";

    try {
      await s3Client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: newFileName,
          ACL: "public-read",
          ContentType: file.type,
          Body: buffer,
        })
      );

      const link = "https://" + bucket + ".s3.amazonaws.com/" + newFileName;
      return Response.json(link);
    } catch (error) {
      console.error("Error uploading to S3:", error);
      return Response.json(
        { error: "Failed to upload to S3" },
        { status: 500 }
      );
    }
  }

  console.log(data);
  return Response.json(true);
}
