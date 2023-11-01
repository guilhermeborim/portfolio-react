import { Button } from "./ui/button";

const ButtonDownload = () => {
  // const api = "https://api-teste-wnfm.onrender.com/download";

  // const handleDownload = () => {
  //   fetch(api)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("erro ao baixar o pdf");
  //       }
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = "file.pdf";
  //       document.body.appendChild(a);
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <div className="text-center">
      <Button
        className="bg-principal font-montserrat font-light  text-[16px]"
        // onClick={handleDownload}
      >
        BAIXE CV
      </Button>
    </div>
  );
};

export default ButtonDownload;
