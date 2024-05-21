import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-300">
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-5" id="Home">
        <Image src={"/ansh.png"} alt="some thing" height={300} width={300} className="rounded-full h-60 w-60 justify-center items-center"></Image>
        <div className="text-wrap w-[50vw]">
          <header className="text-6xl text-center">R Ansh Joseph</header>
          <p className="text-2xl text-gray-500 text-center">Software Engreeiner</p>
          <p className="text-lg text-justify mt-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical Latin literature from 45 BC, making it  over 2000 years old.</p>
        </div>
        <div className="flex flex-row gap-5">
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
        </div>
      </div>


      <div className="w-screen h-screen flex flex-col justify-center items-center gap-5" id="Project">
        <Image src={"/ansh.png"} alt="some thing" height={300} width={300} className="rounded-full h-60 w-60 justify-center items-center"></Image>
        <div className="text-wrap w-[50vw]">
          <header className="text-6xl text-center">R Ansh Joseph</header>
          <p className="text-2xl text-gray-500 text-center">Software Engreeiner</p>
          <p className="text-lg text-justify mt-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical Latin literature from 45 BC, making it  over 2000 years old.</p>
        </div>
        <div className="flex flex-row gap-5">
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col justify-center items-center gap-5" id="Exp">
        <Image src={"/ansh.png"} alt="some thing" height={300} width={300} className="rounded-full h-60 w-60 justify-center items-center"></Image>
        <div className="text-wrap w-[50vw]">
          <header className="text-6xl text-center">R Ansh Joseph</header>
          <p className="text-2xl text-gray-500 text-center">Software Engreeiner</p>
          <p className="text-lg text-justify mt-5">Contrary to popular belief, Lorem Ipsum is not simply random text. It  has roots in a piece of classical Latin literature from 45 BC, making it  over 2000 years old.</p>
        </div>
        <div className="flex flex-row gap-5">
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
          <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
        </div>
      </div>

    </main>
  );
}
