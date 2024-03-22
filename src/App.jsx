import { useState, useEffect } from "react";
import "./App.css";

const fonts = [
  "Inter",
  "Verdana",
  "Courier",
  "Times New Roman",
  "JetBrains Mono",
  "Monaco",
]; // Add more fonts

function App() {
  const [font, setFont] = useState("Monaco");

  useEffect(() => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setFont(randomFont);
  }, []);

  return (
    <>
      <div className="container" style={{ fontFamily: font }}>
        <h1>Hello World!</h1>
        <p>
          I am{" "}
          <a
            href="https://twitter.com/anxndsgn"
            target="_blank "
            rel="noopener noreferrer"
          >
            XIN
          </a>
          .
        </p>
        <p>
          A postgraduate in Industrial Design Engineering. Researching in HCI.
        </p>
        <p>
          As a designer, I enjoy crafting beautiful user interfaces. and As an
          HCI researcher, I am mainly interested in wearable and textile
          interfaces.
        </p>
        <p>
          This site is under construction. I am currently learning JavaScript
          and React to build this site from scratch.
        </p>
        <p>
          You can visit this <a href="https://design.zeabur.app/">site</a> to see my
          old works.
        </p>
      </div>
    </>
  );
}

export default App;
