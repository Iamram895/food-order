import Hero from "../components/layout/Hero.js";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-8">
        <SectionHeader subHeader={"Our Story"} mainHeader={"About us"} />
        <div class="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            totam distinctio dignissimos atque, illo debitis aspernatur
            similique exercitationem deleniti voluptas possimus dolores maxime
            pariatur non ratione eveniet aperiam corrupti, voluptatem quo harum.
            Corrupti fuga dicta minima expedita distinctio molestias nam
            laudantium quos ex, dolor corporis eaque sint, et atque saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            explicabo aliquam corrupti quibusdam nobis ab a inventore, deserunt
            voluptate veritatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            explicabo aliquam corrupti quibusdam nobis ab a inventore, deserunt
            voluptate veritatis.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          {" "}
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+919783501841"
          >
            +919783501841
          </a>
        </div>
      </section>
    </>
  );
}
