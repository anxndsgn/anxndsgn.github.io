import Link from "next/link";

export default function About() {
  return (
    <div className="w-10/12 m-auto mt-24 relative container grid grid-cols-8 gap-8 text-2xl font-light">
      <nav className={"col-span-8 flex justify-between z-10"}>
        <Link href={"/"} className="text-4xl flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className="text-4xl font-bold col-span-6">About</h1>
      </nav>

      <div className="col-span-8 lg:col-span-4 flex flex-col gap-4  ">
        <p>你好，我是Xin。</p>
        本科毕业于青岛大学，现在是浙江大学的工业设计工程硕士，研究人机交互。
        <p>
          作为人机界面设计师，我对设计工程、design
          ops和设计系统感兴趣，我称之为“面向开发的设计（DfD）”。我始终将自然、直观的设计作为第一原则，当然还有漂亮的外表。
        </p>
      </div>

      <div className="col-span-8 lg:col-span-4 flex flex-col gap-4 ">
        <p>Hi, I am Xin. </p>I graduated from Qingdao University with a
        bachelor's degree, and now I am a master's student in industrial design
        engineering at Zhejiang University, specializing in researching
        human-computer interaction.
        <p>
          As a human interface designer, I am interested in design engineering,
          design ops and design systems, which I call "Design for Development
          (DfD)". And I have always made natural, intuitive design my first
          principle, and, of course, with good looks.
        </p>
      </div>
    </div>
  );
}
