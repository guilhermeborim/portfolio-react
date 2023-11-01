import TypeScript from "../assets/typescript.png";
import JavaScript from "../assets/js.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import ReactJS from "../assets/physics.png";
import NodeJs from "../assets/node-js.png";
import ApiLogo from "../assets/api.png";
import GitLogo from "../assets/commit-git.png";

const Linguagens = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 pt-5 pb-[30px] md:py-[30px]">
      <img src={HTML} alt="" />
      <img src={CSS} alt="" />
      <img src={JavaScript} alt="" className="rounded-[10px]" />
      <img src={TypeScript} alt="" className="rounded-[10px]" />
      <img src={ReactJS} alt="" />
      <img src={NodeJs} alt="" />
      <img src={ApiLogo} alt="" />
      <img src={GitLogo} alt="" />
    </div>
  );
};

export default Linguagens;
