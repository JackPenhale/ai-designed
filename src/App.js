import "./App.css";
import header from "./images/header.svg";
import vroom from "./images/vroom.png";
import logo from "./images/logo123.png";
import Nav from "./components/nav";
import bottomImage from "./images/bottomImage.svg";
import bg from "./images/bg.svg";

function App() {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-[#EFF0ED]">
      <div className="h-3/6 bg-[url('./images/header.svg')] bg-cover">
        <nav className="h-14 flex flex-col w-screen p-14  items-center justify-between sm:flex-row ">
          <div className="flex">
            <img className="w-20 " src={logo} />
            <h1 className="text-white text-3xl font-extraboldbold pt-6">
              LUMINANCE
            </h1>
          </div>
          <div className="flex flex-col items-center sm:flex-row ">
            <a className="sm:pr-10 pt-2 my-2 text-white" href="">
              Our Story
            </a>
            <a className="sm:pr-10 my-2 pt-2 text-white" href="">
              Our Cars
            </a>
            <a
              class="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 rounded-full"
              href=""
            >
              Build Yours
            </a>
          </div>
        </nav>
        <div className="">
          <h1 className="font-extrabold text-yellow-500 text-4xl text-center pt-48 sm:pt-0 ">
            {" "}
            SPEED SET APART
          </h1>
        </div>
      </div>

      <div className="w-screen h-1/6 bg-[#EFF0ED] overflow-hidden flex justify-center items-center align-middle">
        <img
          className=" mt-10 sm:-mt-56 absolute z-10 max-h-full  w-screen max-w-5xl overflow-hidden"
          src={vroom}
        />
      </div>

      <div className="h-2/6 flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/5">
          <img src={bottomImage} className="h-2/6 absolute z-10" />
          <h3 className=" absolute z-20 text-yellow-500 text-3xl pl-16 font-bold pt-10">
            {" "}
            LUMINANCE SOL GT
          </h3>
          <p className=" absolute z-20 text-gray-600 w-4/5 sm:w-1/4 pl-16 pt-20">
            Equipped with a powerful engine, advanced suspension, and
            cutting-edge technology features, the Luminance Sol GT delivers an
            unmatched driving experience that is both exhilarating and
            effortless.
          </p>
        </div>
        <div className="pt-80 sm:w-3/5 flex sm:pt-10 items-center align-middle flex-col bg-[#EFF0ED] ">
          <h3 className="pb-10 text-3xl font-bold">OUR SOL</h3>

          <div className="p-5 flex flex-col sm:flex-row">
            <a
              className="border-2 border-slate-200 hover:bg-slate-200 text-black py-7 px-24 rounded-lg m-4"
              href=""
            >
              The Engine
            </a>
            <a
              className="border-2 border-slate-200 hover:bg-slate-200 text-black py-7 px-24 rounded-lg m-4"
              href=""
            >
              The Platform
            </a>
            <a
              class="bg-yellow-500 hover:bg-yellow-400 text-black py-7 px-24 rounded-lg m-4 border-2 border-yellow-500"
              href=""
            >
              Test Drive
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
