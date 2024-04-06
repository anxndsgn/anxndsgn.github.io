"use client";
import Link from "next/link";
import { IDEProjectData } from "@/Data/IDEProjectData";
import { useSelectedLayoutSegment } from "next/navigation";

export default function ProjectLayout({ children }) {
  const currentPageId = useSelectedLayoutSegment();

  return (
    <div className="w-10/12 m-auto mt-20 relative flex-col flex gap-6">
      <nav className={"w-10/12 m-auto flex justify-between fixed z-10"}>
        <Link href={"/"} className="text-4xl flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className="text-4xl font-bold col-span-6">
          Industrial Design & Engineering
        </h1>
      </nav>

      <div className={"grid grid-cols-10 relative mt-14 mb-14"}>
        <nav className="flex flex-col gap-6 col-span-2 fixed">
          {IDEProjectData.map((project) => (
            <Link
              href={`/ide/${project.id}`}
              key={project.id}
              className={"flex justify-items-center relative"}
            >
              {currentPageId === project.id ? (
                <i className="ri-arrow-right-line text-4xl absolute -left-10"></i>
              ) : (
                ""
              )}
              <p
                className={`text-4xl ${currentPageId === project.id ? "underline" : ""}`}
                key={project.id}
              >
                {project.projectName}
              </p>
            </Link>
          ))}
        </nav>

        <section className={"col-span-8 col-start-3"}>{children}</section>
      </div>
    </div>
  );
}
