import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Components/Avatar";
import Footer from "../Components/Footer";
import { useResultContext } from "../Context/ResultContextProvider";

const Home = () => {

  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const {setSearchTerm} = useResultContext();

  const search = (e:FormEvent) => {
    e.preventDefault();
    const term = searchInputRef!.current!.value;
    setSearchTerm(term);
    navigate("/search");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700 ">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer p-2" />
          <Avatar url="https://c4.wallpaperflare.com/wallpaper/16/671/726/lionel-messi-football-barcelona-hd-wallpaper-preview.jpg" />
        </div>
      </header>

      <form onSubmit={search} className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <img
          src="https://thelogofinder.com/wp-content/uploads/edd/2021/10/google-2015.svg"
          height={200}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow " />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
