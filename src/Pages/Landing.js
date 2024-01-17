import { FaPlay } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PiMusicNotesLight } from "react-icons/pi";
import { PiMusicNoteSimple } from "react-icons/pi";
import { GiMusicalNotes } from "react-icons/gi";
import { GiMusicalScore } from "react-icons/gi";

function Landing() {
  const navigate = useNavigate();

    
  return (
    <div>
    <div className="text-2xl flex lg:hidden">Not Responsive for Smaller Devices</div>
    <div className="h-[100vh] w-full bg-[#0d0d0d] hidden lg:flex flex-col justify-between">
      <div className="h-[80px] w-full z-10 flex justify-between items-center">
        <div className=" ml-[23px] text-white text-lg select-none">tune.in</div>
        <div className="flex items-center mr-[10rem] space-x-4 ">
          <div className="text-white  text-sm opacity-40 select-none">
            Hip-Hop
          </div>

          <div className="flex items-center mt-0.5">
            <div className=" bg-neutral-200 rounded-l-lg h-[4px] w-[80px] text-#ffffff-700 select-none"></div>
            <div className="bg-neutral-200 h-[14px] w-[14px] rounded-full"></div>
            <div className="bg-neutral-400 rounded-r-lg h-[4px] w-[100px] text-#ffffff-700 select-none"></div>
            <div
              className="text-white flex items-center
              space-x-3
              text-sm opacity-70 "
              >
              <div className="ml-[12px] ">
                <IoPlaySkipBack />
              </div>
              <div className="text- ">
                <FaPlay size={10} />
              </div>
              <div className="">
                <IoPlaySkipForward />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-between ">
        <div className="  h-full w-48 relative ">
          <div className="text-neutral-800 font-semibold opacity-50 text-[16rem] tracking-tight -rotate-90 absolute -left-[14.5rem] -top-[62px] select-none">
            tune
          </div>
          <div className="text-white -rotate-90 flex space-x-6 absolute bottom-[165px] -left-[70px] ">
            <p className="opacity-30 hover:opacity-100 transition-opacity duration-150 select-none cursor-pointer">
              hits
            </p>
            <p className="opacity-30 hover:opacity-100 transition-opacity duration-150 select-none cursor-pointer">
              genre
            </p>
            <p className="opacity-30 hover:opacity-100 transition-opacity duration-150 select-none cursor-pointer">
              artist
            </p>
            <p className="opacity-30 hover:opacity-100 transition-opacity duration-150 select-none cursor-pointer">
              log in
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[24rem] w-96 relative">
          <div className="text-indigo-400 absolute -top-[5rem] -rotate-12 left-2"><PiMusicNotesLight size={45}/></div>
          <div className="text-fuchsia-400 absolute -top-[7rem] left-20"><PiMusicNoteSimple size={40}/></div>
          <div className="text-indigo-400 absolute -top-[5rem] left-[9rem]"><GiMusicalNotes size={40}/></div>
          <div className="text-fuchsia-400 absolute -top-[7rem] rotate-12 right-[8rem]"><GiMusicalScore size={40}/></div>
          <div className="text-white font-poppins text-1.2rem ">
            <p className="text-sm">
              Unleash Your Musical Journey. Experience Music Beyond Boundaries.
              Create, Collaborate, and Let Music Define You. Where Melodies Meet
              Innovation. Unleash Your Sound, Amplify Your Story. Discover,
              Connect, and Resonate.
            </p>
          </div>
          <div className=" bg-neutral-800 px-6 py-2 mt-3 rounded-xl w-fit text-white cursor-pointer hover:rounded-lg transition-all duration-300" onClick={() => navigate("/home")}>
            Explore
          </div>
        </div>

        <div className="mr-[9rem] flex ">
          <img alt="ERROR"
            className="object-cover w-[40rem] grayscale"
            src="https://res.cloudinary.com/de2rges3m/image/upload/v1703367867/tunein/pexels-nardo-3574678-PhotoRoom.png-PhotoRoom_f8zfn4.png"
            />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Landing;


