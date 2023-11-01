import { ReactElement } from "react";

interface ServiceProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}
const ServicoItem = ({
  title,
  subtitle,
  icon: Icon,
}: ServiceProps): ReactElement => {
  return (
    <div className="max-w-[320px] m-auto flex flex-col items-center bg-[#f4f4f4] rounded-xl p-5 md:my-0">
      <div className="inline-flex justify-center items-center  rounded-full bg-white w-[60px] h-[60px]">
        <Icon />
      </div>
      <div className="text-center">
        <h5 className="font-montserrat font-bold text-[16px] md:text-[20px] text-principal pt-4">
          {title}
        </h5>
        <p className="text-[12px] md:text-[16px] font-poppins font-normal text-[#748182] pt-4">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ServicoItem;
