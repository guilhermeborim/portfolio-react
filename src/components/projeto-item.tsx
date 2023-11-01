interface ProjetoItemProps {
  image: string;
  alt: string;
  width?: number;
}

const ProjetoItem = ({ image, alt, width }: ProjetoItemProps) => {
  return (
    <div>
      <div>
        <img
          src={image}
          alt={alt}
          width={width}
          className="cursor-pointer max-w-[280px] md:max-w-[420px]"
        />
      </div>
    </div>
  );
};

export default ProjetoItem;
