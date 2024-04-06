import Link from "next/link";

export default function About() {
  return (
    <div className="w-10/12 m-auto mt-24 relative container grid grid-cols-8 gap-8">
      <nav className={"w-10/12 m-auto flex justify-between fixed z-10"}>
        <Link href={"/"} className="text-4xl flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className="text-4xl font-bold col-span-6">About</h1>
      </nav>

      <div className="col-span-4 flex flex-col gap-4 text-2xl mt-14 ">
        <p>你好，我是xin。</p>
        本科毕业于青岛大学，现在是浙江大学的工业设计工程硕士，研究人机交互。
        <p>
          熟练使用 Figma/PS/Rhino/Fusion 360/Keyshot/Kicad。
          <br />
          正在学习 JavaScript、React 和 Python。
        </p>
        <p>
          作为人机界面设计师，我对设计工程、design
          ops和设计系统感兴趣，我称之为“面向开发的设计（DfD）”。我始终将自然、直观的设计作为第一原则，当然还有漂亮的外表。
        </p>
      </div>

      <div className="col-span-4 flex flex-col gap-4 text-2xl mt-14 font-light">
        <p>Hi, I am Xin. </p>I graduated from Qingdao University with a
        bachelor's degree, and now I am a master's student in industrial design
        engineering at Zhejiang University, specializing in researching
        human-computer interaction.
        <p>
          Familiar with Figma/PS/Rhino/Fusion 360/Keyshot/Kicad.
          <br /> Learning JavaScript, React and Python.
        </p>
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
