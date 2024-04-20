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
          "w-10/12 m-auto flex justify-between fixed text-2xl md:text-3xl z-10"
        }
      >
        <Link href={"/"} className=" flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className=" font-bold col-span-6 hidden md:block">
          Web & User Interface
        </h1>
      </nav>

      <div className={"grid grid-cols-10 gap-4 relative mt-14 mb-14 "}>
        <div className="md:w-10/12 md:fixed md:col-span-2 col-span-full mb-4">
          <nav className="flex flex-col gap-2 md:gap-4 md:col-span-2 lg:gap-6 text-xl md:text-2xl lg:text-3xl w-full md:w-2/12 ">
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
                  className={`${
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
