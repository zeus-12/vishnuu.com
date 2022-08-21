import { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/ScrollObserver";

const opacityForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  //tweak this for changing the opacity of text
  return 0.2;
};

const AboutMe = () => {
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef(null);

  //change this for adding more opacityBlocks
  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-4 lg:px-8 pt-24 pb-4 md:pt-28 lg:pt-36 flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15] space-y-4">
          <p className="mb-2 text-gray-300">⚡️</p>
          <div
            className={s.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            A 20-year-old based in India, currently pursuing Engineering Design
            from{" "}
            <a className="text-cyan-300" href="https://www.iitm.ac.in/">
              IIT Madras
            </a>
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I started out building websites using no-code tools. And later on, I{" "}
            <span className="text-cyan-300">taught myself</span> how to code,
            fast-forward to today, I do programming in{" "}
            <span className="text-cyan-300">
              various languages and technologies.
            </span>
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I'm interested in building something awesome or automate tasks with
            code, currently focused on{" "}
            <span className="text-cyan-300">
              Web & Mobile Full-Stack Development.
            </span>
          </span>

          {/* emoji for the next section */}
          <p id="projects" className="pt-32 text-gray-300">
            💪{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] ">
              Favourite Projects
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
