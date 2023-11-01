import { MoveUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const rolagemTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <MoveUp
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed  bottom-10 right-2 md:right-6 cursor-pointer transition-all duration-500 ease-in-out`}
      size={32}
      onClick={rolagemTop}
    />
  );
};

export default ScrollTop;
