import { UIProjectData } from "@/Data/UIProjectData";

export async function generateStaticParams() {
  return UIProjectData.map((post) => ({
    id: UIProjectData.id,
  }));
}

export default function Project({ params }) {
  const project = UIProjectData.find(
    (project) => project.id.toString() === params.id
  );

  return (
    <div className={"grid grid-cols-6 gap-6 relative"}>
      <div className={"col-span-2 text-base font-light flex gap-2 flex-col"}>
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={"col-span-4 flex flex-col gap-4 col-start-3"}>
        {project.video && (
          <iframe
            src={`https://www.youtube.com/embed/${project.video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full aspect-[16/9]"
          ></iframe>
        )}

        {project.img.slice(0).map((img, index) => (
          <img src={img} className="w-full" key={index}></img>
        ))}

        {project.figma && (
          <iframe
            src={project.figma}
            allowFullScreen
            className="w-full aspect-[4/3]"
          ></iframe>
        )}
      </div>
    </div>
  );
}
