"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import InfoBox from "../../components/layout/infoBox";
import SuccessBox from "../../components/layout/successBox";
import toast from "react-hot-toast";

const Profile = () => {
  const session = useSession();
  console.log(session);
  const { status } = session;
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data?.user?.name);
      setImage(session.data?.user?.image);

      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setPhone(data.phone);
          setStreetAddress(data.streetAddress);
          setCity(data.city);
          setCountry(data.country);
          setPostalCode(data.postalCode);
        });
      });
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    redirect.push("/login");
  }

  const handleProfileInfoUpdate = async (e) => {
    e.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          image,
          phone,
          streetAddress,
          postalCode,
          city,
          country,
        }),
      });

      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });
    await toast.promise(savingPromise, {
      loading: "saving...",
      success: "Profile is saved successfully",
      error: "error",
    });
  };

  const handleUpload = async (e) => {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);

      const uploadingPromise = new Promise(async (resolve, reject) => {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: data,
        });

        if (response.ok) {
          const link = await response.json();
          setImage(link);
          resolve();
        } else {
          reject();
        }
      });

      await toast.promise(uploadingPromise, {
        loading: "Uploading...",
        success: "Upload successfully ",
        error: "error in upload!",
      });
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-2xl mx-auto mt-8">
        <div className="flex gap-2 ">
          <div>
            <div className="p-2 rounded-lg relative max-w-[120px]">
              {image && (
                <Image
                  className="rounded-lg w-full h-full mb-1 "
                  src={image}
                  width={250}
                  height={250}
                  alt={"avatar"}
                />
              )}

              <label>
                <input type="file" className="hidden" onChange={handleUpload} />
                <span
                  type="button"
                  className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer"
                >
                  Edit
                </span>
              </label>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <label>First and LastName</label>
            <input
              type="text"
              placeholder="Enter first and lastName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              name=""
              id=""
              disabled={true}
              placeholder="Email"
              value={session.data.user.email}
            />
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Street address</label>
            <input
              type="text"
              placeholder="Street address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <div className="flex gap-2">
              <div>
                {" "}
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label>Postal Code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>

            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
