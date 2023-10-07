import Image from "next/image";
import Color_PFP from "../../public/Color_PFP.jpg";

export const Landing = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-r from-white via-purple-100 to-yellow-100">
      <nav className="sticky top-0 text-sm px-10 w-screen justify-between shadow-xl flex flex-row h-24 items-center text-center rounded-b-lg">
        <div className="font-bold text-lg">SG</div>
        <div>About</div>
      </nav>
      <div className=" h-1/2 flex justify-center align-center mt-28">
        <div className="rounded-full h-80 w-80 p-2 bg-gradient-to-r from-yellow-400 to-purple-400 flex justify-center items-center shadow-lg">
          <Image
            src={Color_PFP}
            width={578}
            height={578}
            className="rounded-full h-full w-full"
            alt="Mac window bar"
          />
        </div>
      </div>
      <div className="h-1/2 flex flex-col text-center gap-8">
        <p className="text-6xl"> Sarah Gu</p>
        <p className="text-3xl">
          {" "}
          Hi! I&apos;m a senior at Columbia University interested in all things
          CS.
        </p>
		<div className ="flex flex-row gap-4 justify-center">
			<button className="bg-purple-500 hover:bg-purple-300 w-28 h-12 rounded-lg text-white">Resume</button>
			<button className="bg-purple-500 hover:bg-purple-300 w-28 h-12 rounded-lg text-white">Projects</button>
		</div>
      </div>

    </div>
  );
};
