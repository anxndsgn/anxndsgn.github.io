import Link from 'next/link';

export default function About() {
  return (
    <div className="w-10/12 m-auto mt-24 relative container grid grid-cols-8 gap-8 text-2xl font-light">
      <nav className={'col-span-8 flex justify-between z-10'}>
        <Link href={'/'} className="text-4xl flex ">
          <span className="hover:underline font-bold">Back</span>
        </Link>
        <h1 className="text-4xl font-bold col-span-6">About</h1>
      </nav>

      <div className="col-span-8 lg:col-span-4 flex flex-col gap-4  ">
        <p>你好，我是Xin。</p>
        本科毕业于青岛大学，现在是浙江大学的工业设计工程硕士。
        <p>
          作为人机界面设计师，我对设计工程、design
          ops和设计系统感兴趣，我称之为“面向开发的设计（DfD）”，这类似于工业设计领域的“面向制造的设计（DfM）”。除此之外，我始终将自然、直观的设计作为第一原则，当然还有漂亮的外表。正在学习JavaScript
          和 React。
        </p>
        <p>
          作为工业设计师，我热衷于为创造者创造工具。这其中包括通用气动、可穿戴、气味开发套件与小型
          Arduino
          开发板。因为我相信优秀的创作者会创作自己的工具，但是更好的工具会创造更优秀的创作者。
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
        <p>
          As an industrial designer, I am passionate about creating tools for
          creators. This includes general pneumatics, wearables, scent
          development tools, and small Arduino development boards.
        </p>
      </div>
    </div>
  );
}
