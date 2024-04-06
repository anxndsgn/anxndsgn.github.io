/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isHover, setIsHover] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isImagesHidden, setIsImagesHidden] = useState(true);

  const handleMouseEnter = (id) => {
    setIsHover(true);
    setIsImagesHidden(false);
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setIsImagesHidden(true);
    setHoveredElement(null);
  };

  return (
    <div className="w-10/12 m-auto mt-24 relative">
      <div className="flex flex-col gap-6 md:gap-12 text-2xl md:text-4xl ">
        <Link
          href={`/about`}
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
          className="inline-flex w-fit hover:pointer-events-auto"
        >
          <h1>
            <span className="hover:underline hover:pr-2">Hi, I am XIN</span>
            <i className="ri-arrow-right-line "></i>
          </h1>
        </Link>

        <p className="">Now postgraduate in Industrial Design Engineering.</p>
        <p></p>
        <h1 className=" font-bold">My Work</h1>
        <Link
          href={`ide`}
          onMouseEnter={() => handleMouseEnter("ide")}
          onMouseLeave={handleMouseLeave}
          className="inline-flex w-fit hover:pointer-events-auto"
        >
          <h1>
            <span className="hover:underline hover:pr-2">
              Industrial Design & Engineering{" "}
            </span>
            <i className="ri-arrow-right-line "></i>
          </h1>
        </Link>
        <Link
          href={`ui`}
          onMouseEnter={() => handleMouseEnter("ui")}
          onMouseLeave={handleMouseLeave}
          className="inline-flex w-fit hover:pointer-events-auto"
        >
          <h1>
            <span className="hover:underline hover:pr-2">
              Web & User Interface
            </span>
            <i className="ri-arrow-right-line "></i>
          </h1>
        </Link>
        <Link
          href={`logo`}
          onMouseEnter={() => handleMouseEnter("logo")}
          onMouseLeave={handleMouseLeave}
          className="inline-flex w-fit hover:pointer-events-auto"
        >
          <h1>
            <span className="hover:underline hover:pr-2">Logo & Icon</span>
            <i className="ri-arrow-right-line "></i>
          </h1>
        </Link>
      </div>

      <BackImages
        hoveredElement={hoveredElement}
        isImagesHidden={isImagesHidden}
      />
    </div>
  );
}

function BackImages({ hoveredElement, isImagesHidden }) {
  return (
    <div
      className={`background -z-10 absolute top-0 right-0 h-full ${
        isImagesHidden ? "hidden" : ""
      }`}
    >
      {hoveredElement && (
        <img
          src={`/homepage/${hoveredElement}.png`}
          className="grayscale h-full w-auto"
          alt="background image"
        />
      )}
    </div>
  );
}
