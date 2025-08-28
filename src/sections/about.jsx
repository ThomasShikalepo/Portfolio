import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import { World } from "../components/World";
// import countries from "../components/data/globe.json";

const About = () => {
  const grind2Container = useRef();
  return (
    <section className=" c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-6
      md:auto-rows-[18rem] mt-12"
      >
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt=""
          />
          <div className="z-10">
            <p className="headtext hover:text-neutral-300">
              Hi, I'm Thomas Deon
            </p>
            <p className="subtext ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              amet quam .
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grind2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grind2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grind2Container}
            />
            {/* icons */}
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="/public/assets/logos/csharp-pink.png"
              containerRef={grind2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="/public/assets/logos/dotnet-pink.png"
              containerRef={grind2Container}
            />

            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="/public/assets/logos/blazor-pink.png"
              containerRef={grind2Container}
            />
          </div>
        </div>

        {/* grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="heardText">Time Zone</p>
            <p className="subtext">
              I'm based in Namibia, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%] w-[400px] h-[400px]">
            {/* <World
              globeConfig={{
                ambientLight: "#ffffff",
                directionalLeftLight: "#ffcccc",
                directionalTopLight: "#ccccff",
                pointLight: "#ffffff",
                globeColor: "#1d072e",
              }}
              data={[countries]}
            /> */}

            <Globe />
          </figure>
        </div>

        {/* grid 4 */}
        <div className="grid-special-color grid-4"></div>

        {/* grid 5 */}
        <div className="grid-default-color grid-5"></div>
      </div>
    </section>
  );
};

export default About;
