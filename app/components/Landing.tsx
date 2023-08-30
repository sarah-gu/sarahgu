import Image from "next/image";
import PFP from "../../public/PFP.jpg";

export const Landing = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      <nav className="sticky top-0 bg-gray-100 text-sm px-10 w-screen justify-between border-b border-gray-500 flex flex-row h-24 items-center text-center">
        <div className="font-bold text-lg">Sarah Gu</div>
        <div>About me </div>
      </nav>
      <div className=" h-1/2 flex justify-center align-center mt-28">
        <div className="rounded-full h-80 w-80 p-2 bg-gradient-to-r from-purple-600 to-pink-600 flex justify-center items-center">
          <Image
            src={PFP}
            width={578}
            height={578}
            className="rounded-full h-full w-full"
            alt="Mac window bar"
          />
        </div>
      </div>
      <div className="h-1/2 flex flex-col align-center justify-center text-center gap-8">
        <p className="text-5xl"> Sarah Gu</p>
        <p className="text-3xl">
          {" "}
          Hi! I&apos;m a senior at Columbia University interested in all things
          CS
        </p>
      </div>
    </div>
  );
};
