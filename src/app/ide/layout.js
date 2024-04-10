"use client";
import Link from "next/link";
import { IDEProjectData } from "@/Data/IDEProjectData";
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
        <h1 className=" font-bold col-span-6">
          Industrial Design & Engineering
        </h1>
      </nav>

      <div className={"grid grid-cols-10 relative mt-14 mb-14 "}>
        <div className="fixed grid grid-cols-10 w-10/12">
          <nav className="hidden md:flex flex-col gap-4 md:gap-6 text-2xl md:text-4xl col-span-2">
            {IDEProjectData.map((project) => (
              <Link
                href={`/ide/${project.id}`}
                key={project.id}
                className={"flex justify-items-center relative"}
              >
                {currentPageId === project.id ? (
                  <i className="ri-arrow-right-line  absolute -left-10"></i>
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
