import { IDEProjectData } from "@/Data/IDEProjectData";

export async function generateStaticParams() {
  return IDEProjectData.map((post) => ({
    id: IDEProjectData.id,
  }));
}

export default function Project({ params }) {
  const project = IDEProjectData.find(
    (project) => project.id.toString() === params.id
  );

  return (
    <div
      className={"flex flex-col gap-4 relative text-sm lg:text-base font-light"}
    >
      <div className="grid grid-cols-6 gap-4">
        <div className={" lg:col-span-2 col-span-6 lg:row-start-1"}>
          <p>{project.description[0]}</p>
        </div>
        {project.video ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full aspect-[16/9] lg:col-span-4 col-span-6 row-start-1 "
          ></iframe>
        ) : (
          <img
            src={project.img[0]}
            className="lg:col-span-4 col-span-6 row-start-1"
          ></img>
        )}
      </div>

      {project.description.length > project.img.length
        ? project.description.slice(1).map((desc, index) => (
            <div className="grid grid-cols-6 gap-4" key={index}>
              <p className="lg:col-span-2 col-span-6 lg:row-start-1">{desc}</p>
              <img
                src={project.img[index + 1]}
                className="lg:col-span-4 col-span-6 row-start-1"
              ></img>
            </div>
          ))
        : project.img.slice(1).map((img, index) => (
            <div className="grid grid-cols-6 gap-6" key={index}>
              <p className="lg:col-span-2 col-span-6 lg:row-start-1">
                {project.description[index + 1]}
              </p>
              <img
                src={img}
                className="lg:col-span-4 col-span-6 row-start-1"
              ></img>
            </div>
          ))}
    </div>
  );
}
