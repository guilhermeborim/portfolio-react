import { JSX } from "react";

interface FooterItemProps {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const FooterItem: React.FC<FooterItemProps> = ({ subtitle, title, icon }) => {
  return (
    <div>
      <div className="text-[25px] inline-flex justify-center items-center rounded-full bg-[#f4f4f4] w-[60px] h-[60px] hover:bg-[#1c1c1c] hover:text-[#eee] ease-in duration-200">
        {icon}
      </div>
      <div className="pt-[15px]">
        <h5 className="font-montserrat font-bold text-[16px] md:text-[20px] text-principal">
          {title}
        </h5>
        <p className=" pt-[10px] text-[12px] md:text-[16px] font-poppins font-normal text-[#748182]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FooterItem;
