"use client";
import Link from "next/link";
import { LogoProjectData } from "@/Data/LogoProjectData";

export default function LOGOS() {
  return (
    <div className="w-10/12 m-auto mt-20 relative flex-col flex gap-6 ">
      <nav className={"w-10/12 flex justify-between fixed z-10"}>
        <Link href={"/"} className="text-4xl flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className="text-4xl font-bold col-span-6">Logo & Icon</h1>
      </nav>

      <div
        className={
          "grid mt-14 mb-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6"
        }
      >
        {LogoProjectData.map((project) => (
          <LOGO key={project.id} project={project} />
        ))}
        <div className={"text-2xl lg:text-4xl font-light"}>
          <p>
            如果你需要设计Icon，欢迎
            <a href={"mailto:anxanxx@gmail.com"} className={"underline"}>
              联系我
            </a>
            🙌
          </p>
          <p>
            If you need a beautiful icon, feel free to{" "}
            <a href={"mailto:anxanxx@gmail.com"} className={"underline"}>
              contact me
            </a>
            🙌
          </p>
        </div>
      </div>
    </div>
  );
}

function LOGO({ project }) {
  return (
    <Link href={project.link} className={"hover:"}>
      <div className=" w-full flex flex-col gap-3 place-content-start">
        <img
          src={project.thumbnail}
          alt=""
          className=" w-full h-full aspect-square object-cover"
        />
      </div>
    </Link>
  );
}
