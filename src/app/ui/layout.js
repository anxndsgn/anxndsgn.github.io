"use client";
import Link from "next/link";
import { UIProjectData } from "@/Data/UIProjectData";
import { useSelectedLayoutSegment } from "next/navigation";

export default function ProjectLayout({ children }) {
  const currentPageId = useSelectedLayoutSegment();

  return (
    <div className="w-10/12 m-auto mt-20 relative flex-col flex gap-6">
      <nav
        className={
          "w-10/12 m-auto flex justify-between fixed text-2xl md:text-4xl z-10"
        }
      >
        <Link href={"/"} className=" flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className=" font-bold col-span-6 hidden md:block">
          Web & User Interface
        </h1>
      </nav>

      <div className={"grid grid-cols-10 relative mt-14 mb-14 "}>
        <div className="md:fixed grid grid-cols-10 w-10/12 mb-4">
          <nav className=" md:flex flex-col gap-2 md:gap-4 lg:gap-6 text-xl md:text-2xl lg:text-4xl col-span-2">
            {UIProjectData.map((project) => (
              <Link
                href={`/ui/${project.id}`}
                key={project.id}
                className={"flex justify-items-center relative"}
              >
                {currentPageId === project.id ? (
                  <i className="ri-arrow-right-line  absolute md:-left-10 -left-5"></i>
                ) : (
                  ""
                )}
                <p
                  className={`t ${
                    currentPageId === project.id ? "underline" : ""
                  }`}
                  key={project.id}
                >
                  {project.projectName}
                </p>
              </Link>
            ))}
          </nav>
        </div>

        <section className={"md:col-span-8 md:col-start-3 col-span-full"}>
          {children}
        </section>
      </div>
    </div>
  );
}
