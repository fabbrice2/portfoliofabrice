import React from "react";
import { MdArrowOutward } from "react-icons/md";

const WorkComponent: React.FC = () => {
  return (
    <div className="pt-40 px-32 flex items-center">
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">
          Hi, i'm Fabrice,
          <span className="bg-gradient-to-br from-[#093069] to-[#1d66d5a7] bg-clip-text text-transparent mx-1">
            fullstack developer <br />
          </span>
          with passion for creativity.
        </h1>
        <ul>
          <ul className="flex items-center gap-1">
            <li className="text-[#A0A09F]">Student at </li>
            <div className="flex items-center gap-1 cursor-pointer">
              <li>
                <a href="https://www.hetic.net/?gge_source=google&gge_medium=cpc&gge_term=hetic&gge_campaign=Search-MarquePure&gad_source=1&gclid=CjwKCAiAxaCvBhBaEiwAvsLmWDBLMMuK_tfWWQCsGiSY5YExmR9Zr9MyavbT-gvwMWvjylyYkTypUBoCiSAQAvD_BwE" target="_blank" rel="noopener noreferrer">
                  Hétic
                </a>
              </li>
              <li>
                <MdArrowOutward />
              </li>
            </div>
          </ul>
          <ul className="flex items-center gap-1">
            <li className="text-[#A0A09F]">Previously worked with</li>
            <div className="flex items-center gap-1 cursor-pointer">
              <li>Norela</li>
              <li>
                <MdArrowOutward />
              </li>
            </div>
          </ul>
          <ul className="flex items-center gap-1">
            <li className="text-[#A0A09F]">Graduated from</li>
            <div className="flex items-center gap-1 cursor-pointer">
              <li>
                <a
                  href="https://fr.wikipedia.org/wiki/Coll%C3%A8ge_Saint-Joseph_de_Lom%C3%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  St Joseph
                </a>
              </li>
              <li>
                <MdArrowOutward />
              </li>
            </div>
          </ul>
        </ul>
      </div>
      <div className="w-1/2">
        <img
          src="https://static.wixstatic.com/media/b0335f_a8448969f5794b93917697364434c1be~mv2.gif"
          alt="gif"
        />
      </div>
    </div>
  );
};

export default WorkComponent;
