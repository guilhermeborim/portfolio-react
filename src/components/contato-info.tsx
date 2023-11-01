import { ReactElement } from "react";

interface ContatosInfoProps {
  icon: React.ElementType;
  title: string;
  text: string;
}
const ContatosInfo = ({
  icon: Icon,
  title,
  text,
}: ContatosInfoProps): ReactElement => {
  return (
    <article className="flex flex-col justify-center items-center">
      <div className="inline-flex justify-center w-[60px] h-[60px] items-center rounded-full bg-[#DD2D4A]">
        <Icon />
      </div>
      <h5>{title}</h5>
      <p>{text}</p>
    </article>
  );
};

export default ContatosInfo;
