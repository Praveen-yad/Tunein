import { FiSearch } from "react-icons/fi";
import { GiMusicalScore } from "react-icons/gi";
import { PiMicrophoneStage } from "react-icons/pi";
import { BsSoundwave } from "react-icons/bs";
import { LuScanFace } from "react-icons/lu";
import { CiMusicNote1 } from 'react-icons/ci'
import axios from "axios";
import { useEffect, useState } from "react";
import { motion} from "framer-motion";
import { IoPause, IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import ReactPlayer from "react-player/lazy";
import Emotion from "../components/Emotion";


const Homepage = ()=>{
    const [popular, setPopular] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState("")
    const [suggestion, setSuggestion] = useState("")
    const [reanimate, setReanimate] = useState(true)
    const [player, setPlayer] = useState({})
    const [pause, setPause] = useState(true)
    const [emotionPage, setEmotionPage ] = useState(false)

    const options = {
      method: 'GET',
      url: 'https://youtube-music-api3.p.rapidapi.com/recommend',
      params: {gl: 'IN'},
      headers: {
        // 'X-RapidAPI-Key': '6c9dd360bcmshbd2960c67693380p1b6720jsnf2ca77d7e3e0',
        // 'X-RapidAPI-Key': '07fe85ef41msha707d181c6dfa9ep1e32a3jsne0216f14b61e',
        'X-RapidAPI-Key': '3f794735eamsh8773e9693dca730p143f5fjsn6ddbb670fd71',
        'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
      }
    };
    
    useEffect(() => {
      apiCall();
       // eslint-disable-next-line 
    },[])
    const apiCall = async() => {
      try {
        const response = await axios.request(options);
        setPopular(response.data.results)
      } catch (error) {
        console.error(error);
      }
    }

    const SearchHandler = async(data) => {
        setSuggestion("")
        const options = {
            method: 'GET',
            url: 'https://youtube-music-api3.p.rapidapi.com/search',
            params: {
              q: data,
              type: 'song'
            },
            headers: {
            //   'X-RapidAPI-Key': '6c9dd360bcmshbd2960c67693380p1b6720jsnf2ca77d7e3e0',
            //   'X-RapidAPI-Key': '07fe85ef41msha707d181c6dfa9ep1e32a3jsne0216f14b61e',
              'X-RapidAPI-Key': '3f794735eamsh8773e9693dca730p143f5fjsn6ddbb670fd71',
              'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
            //   console.log(response)
              setSearchResult(response.data.result);
              setSearch("")
              setReanimate(!reanimate)
          } catch (error) {
              console.error(error);
          }
    }

    const changeHandler = async(e) => {
        setSearch(e.target.value)
        const options = {
            method: 'GET',
            url: 'https://youtube-music-api3.p.rapidapi.com/search_suggestions',
            params: {q: e.target.value},
            headers: {
            //   'X-RapidAPI-Key': '6c9dd360bcmshbd2960c67693380p1b6720jsnf2ca77d7e3e0',
            //   'X-RapidAPI-Key': '07fe85ef41msha707d181c6dfa9ep1e32a3jsne0216f14b61e',
              'X-RapidAPI-Key': '3f794735eamsh8773e9693dca730p143f5fjsn6ddbb670fd71',
              'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setSuggestion(response.data)
          } catch (error) {
              console.error(error);
          }
    }

    const animate = {
        hidden:{
          y:70
        },
        visible:{
          y:0
        }
    }

    const PlayNext = async() => {
        const options = {
            method: 'GET',
            url: 'https://youtube-music-api3.p.rapidapi.com/next',
            params: {id: player.videoId},
            headers: {
            //   'X-RapidAPI-Key': '6c9dd360bcmshbd2960c67693380p1b6720jsnf2ca77d7e3e0',
            //   'X-RapidAPI-Key': '07fe85ef41msha707d181c6dfa9ep1e32a3jsne0216f14b61e',
              'X-RapidAPI-Key': '3f794735eamsh8773e9693dca730p143f5fjsn6ddbb670fd71',
            'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        //   console.log(response.data[0])
        setPlayer(response.data[0])
    } catch (error) {
        console.error(error);
    }
}

return (
    <div className="relative bg-neutral-100 overflow-hidden">
        <div className="flex  font-poppins w-full">
            <div className="h-[100vh] w-[260px] bg-neutral-50 p-4">
                <div className="flex border rounded-xl border-neutral-400 px-3 py-1 items-center w-full ">
                <input className="w-full bg-transparent outline-none placeholder:text-xs placeholder:text-neutral-400" type="text" placeholder="Search..."></input>
                <div className="text-neutral-400"><FiSearch/></div>
                </div>
                <div className="flex flex-col mt-6 text-lg">
                    <p className="text-sm text-neutral-500 font-medium">Music</p>
                    <div className="space-y-2">
                        <div className="cursor-pointer flex items-center mt-3 group hover:bg-indigo-100 py-2 px-3 rounded-lg transition-all ease-in-out ">
                            <div className="text-[23px] mr-3 group-hover:text-indigo-500 text-neutral-800 transition-all ease-in-out"><CiMusicNote1 /></div>
                            <p className="text-xs font-medium group-hover:text-indigo-500 text-neutral-500 transition-all ease-in-out">Songs</p>
                        </div>
                        <div className="cursor-pointer flex items-center mt-3 group hover:bg-indigo-100 py-2 px-3 rounded-lg transition-all ease-in-out ">
                            <div className="text-[23px] mr-3 group-hover:text-indigo-500 text-neutral-800 transition-all ease-in-out"><GiMusicalScore /></div>
                            <p className="text-xs font-medium group-hover:text-indigo-500 text-neutral-500 transition-all ease-in-out">Albums</p>
                        </div>
                        <div className="cursor-pointer flex items-center mt-3 group hover:bg-indigo-100 py-2 px-3 rounded-lg transition-all ease-in-out ">
                            <div className="text-[23px] mr-3 group-hover:text-indigo-500 text-neutral-800 transition-all ease-in-out"><PiMicrophoneStage /></div>
                            <p className="text-xs font-medium group-hover:text-indigo-500 text-neutral-500 transition-all ease-in-out">Artist</p>
                        </div>
                        <div className="cursor-pointer flex items-center mt-3 group hover:bg-indigo-100 py-2 px-3 rounded-lg transition-all ease-in-out ">
                            <div className="text-[23px] mr-3 group-hover:text-indigo-500 text-neutral-800 transition-all ease-in-out"><BsSoundwave /></div>
                            <p className="text-xs font-medium group-hover:text-indigo-500 text-neutral-500 transition-all ease-in-out">Podcast</p>
                        </div>
                        <div  onClick={() => setEmotionPage(true)} className="cursor-pointer flex items-center mt-3 group hover:bg-indigo-100 py-2 px-3 rounded-lg transition-all ease-in-out ">
                            <div className="text-[23px] mr-3 group-hover:text-indigo-500 text-neutral-800 transition-all ease-in-out"><LuScanFace /></div>
                            <p className="text-xs font-medium group-hover:text-indigo-500 text-neutral-500 transition-all ease-in-out">Emotion Recognition</p>
                        </div>
                    </div>
                    {
                        player.title && 
                        <div className="relative mt-[5rem] overflow-hidden py-3 px-2 rounded-xl w-[11.5rem] flex flex-col items-center justify-center">
                            <div className="absolute blur-2xl opacity-70 z-0 h-full w-full"><img alt="ERROR" className="w-full h-full object-cover  rounded-xl" src={player.thumbnail}/></div>
                            <div className="z-10 w-full text-sm font-medium text-neutral-900 mb-3">Playing Music</div>
                            <div className="z-10">
                                <img alt="ERROR" src={player.thumbnail}className="w-[10rem] h-[9rem] rounded-lg" />
                                <div className="truncate text-sm mt-1 w-[10rem]">{player.title}</div>
                                <div className="truncate text-xs font-medium mt-1 w-[10rem]">{player.author}</div>
                                <div className="flex justify-between w-full items-center mt-2 px-3 text-neutral-900">
                                    <IoPlaySkipBack className="cursor-pointer" size={26}/>
                                    {!pause ? <IoPlay className="cursor-pointer" size={28} onClick={() => setPause(true)}/> : <IoPause className="cursor-pointer" size={28} onClick={() => setPause(false)}/>} 
                                    <IoPlaySkipForward className="cursor-pointer" size={26} onClick={PlayNext}/>
                                </div>
                                <div className="hidden">
                                <ReactPlayer url={`https://www.youtube.com/embed/${player.videoId}`} width='0%' height='0%' playing={pause}/>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
            <div className="w-full h-full flex p-8">
                <div>
                    <div className="flex justify-between w-full">
                        <div className="w-[60%] h-[11rem] overflow-hidden rounded-2xl">
                            <img alt="Error" src="https://res.cloudinary.com/de2rges3m/image/upload/v1704380327/Magazine/Screenshot_2024-01-04_202557_1_wbq5zo.png" className="object-cover w-[52rem] h-[10rem] scale-[1.2] ml-2 mt-2"/>
                        </div> 

                        <div className="w-[28rem] shadow-md bg-white rounded-2xl pr-3 pt-3 h-[11rem] select-none">
                        <div className="text-sm font-medium ml-3">Popular Artist</div>
                        <div className="w-full overflow-y-hidden h-full flex space-x-3 overflow-x-auto pt-3 pl-3">
                            {data.map((item) => (
                                <div className="w-32 hover:scale-105 transition-all duration-200 cursor-pointer group" key={item.id} onClick={() => SearchHandler(item.name)}>
                                    <img alt="Error" src={item.img} className="min-w-28 object-cover h-28 rounded-3xl transition-all hover:rounded-2xl duration-300" />
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="h-full w-[30rem] mt-2 p-5">
                            <div className="flex w-full justify-between relative">
                                <input value={search} onChange={(e) => changeHandler(e)} className="outline outline-1 w-[21rem] px-3 bg-white rounded-lg placeholder:text-neutral-700" placeholder="Search.."/>
                                <div className="bg-indigo-500 cursor-pointer text-neutral-50 px-5 py-2 rounded-lg" onClick={() => SearchHandler(search)}>Search</div>
                                {suggestion &&
                                    <div className="w-full absolute bg-neutral-200 py-2 rounded-lg top-[3rem]">
                                        {suggestion.map((item) => (
                                            <div  onClick={() => {
                                                SearchHandler(item)
                                                setSuggestion("")
                                            }} className="py-1 cursor-pointer px-2 hover:bg-neutral-100">🔍{" "}{item}</div>
                                        ))}
                                    </div>
                                }
                            </div>
                            <div className="w-full h-[56vh] px-2 pt-1 mt-2 overflow-y-auto">
                                {searchResult[0] ?
                                    <motion.div
                                    key={reanimate}
                                    initial="hidden"
                                    animate="visible"
                                    variants={animate}
                                    className="space-y-2"
                                    >
                                    {searchResult.map((item, index) => (
                                        <div key={index} className="w-full h-[4.3rem] hover:bg-white transition-all duration-300 hover:shadow-md shadow-neutral-500 cursor-pointer rounded-xl px-2 flex items-center" onClick={() => {
                                            setPlayer(item)
                                        }}>
                                            <img alt="ERROR" src={item.thumbnail} className="w-[3.5rem] h-[3.5rem] object-cover rounded-md"/>
                                            <div className="flex flex-col pl-3 w-[22rem]">
                                                <div className="truncate text-sm">{item.title}</div>
                                                <div className="truncate text-xs font-medium">{item.author}</div>
                                            </div>
                                        </div>
                                    ))}
                                    </motion.div>
                                    :
                                    <div className="space-y-2">
                                        {popular.map((item, index) => (
                                            <div key={index} className="w-full h-[4.3rem] hover:bg-white transition-all duration-300 hover:shadow-md shadow-neutral-500 cursor-pointer rounded-xl px-2 flex items-center" onClick={() => {
                                                setPlayer(item)
                                            }}>
                                            <img alt="ERROR" src={item.thumbnail} className="w-[3.5rem] h-[3.5rem] object-cover rounded-md"/>
                                            <div className="flex flex-col pl-3 w-[22rem]">
                                                <div className="truncate text-sm">{item.title}</div>
                                                <div className="truncate text-xs font-medium">{item.author}</div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="flex flex-col w-[50vw] space-y-3 mt-5">
                            <div className="px-4 pt-3 w-full h-[14rem] bg-white shadow-[0px_2px_5px_-2px] shadow-neutral-400 rounded-3xl">
                                <div className="text-sm font-medium">Popular songs</div>
                                <div className="h-full flex overflow-x-auto space-x-4 pt-2">
                                    {popular.map((item, index) => (
                                        <div key={index} className="min-w-[10rem] cursor-pointer rounded-lg transition-all duration-200 hover:bg-neutral-200 p-2 mb-3" onClick={() => {
                                            setPlayer(item)
                                        }}>
                                            <img alt="ERROR" src={item.thumbnail} className="w-[9rem] h-[7.5rem] object-cover rounded-lg" />
                                            <div className="truncate text-sm mt-1">{item.title}</div>
                                            <div className="truncate text-xs font-medium">{item.author}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="px-4 pt-3 pb-2 w-full h-[14rem] bg-white shadow-[0px_2px_5px_-2px] shadow-neutral-400 rounded-3xl overflow-y-auto">
                                <div className="text-sm font-medium">Genre</div>
                                <div className="flex flex-wrap gap-4 mt-2 ">
                                    {genre.map((item) => (
                                        <div key={item.id} className="relative h-[4.9rem] w-[8.25rem]  bg-neutral-200 flex rounded-md overflow-hidden items-center group cursor-pointer" onClick={() => SearchHandler(item.name)}>
                                            <div className="h-full w-2 absolute group-hover:w-[100%] transition-all duration-500 ease-in-out " style={{background:`#${item.hex}`}}></div>
                                            <div className="w-full flex flex-col items-center z-10">
                                                <div>{item.icon}</div>
                                                <div className="text-sm">{item.name}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        {emotionPage && <Emotion setEmotionPage={setEmotionPage} SearchHandler={SearchHandler}/>}
    </div>
  );
} 
export default Homepage

const data = [
    {
        id: 0,
        name:"arijit Singh",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391337/tunin/arijit-singh2-header-image-Instagram_64707b13a0df8_kdzhsh.jpg"
        
    },
    {   id: 1,
        name:"A.R. Rahman",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391337/tunin/1686723490_a-r-rahman_fb9ubv.jpg" 
        
    },
    {
        id: 2,
        name:"salina gomez",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391336/tunin/506666_v9_bc_pnlop3.jpg"
        
    },
    {
        id: 3,
        name:"shreya ghoshal",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391335/tunin/81450030_gs4gl4.webp"
        
    },
    {
        id: 4,
        name:"arman malik",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391335/tunin/armaan-malik-stills-photos-pictures-04_ywexne.webp" 
        
    },
    {
        id: 5,
        name:"palak muchhal",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391336/tunin/unnamed_wthonp.jpg"
        
    },
    {
        id: 6,
        name:"Charli puth",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391336/tunin/Charlie-Puth-1525722403-scaled_gyzhph.jpg" 
        
    },
    {
        id: 7,
        name:"zyan malik",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391336/tunin/Zayn_Wiki__cropped_rkv6ue.jpg" 
        
    },
    {
        id: 8,
        name:"atif aslam",
        img:"https://res.cloudinary.com/de2rges3m/image/upload/v1704391337/tunin/pinkvilla_ybgmxf.jpg"
        
    }
]

const genre = [
    {
        id:0, 
        icon: "🍵",
        hex:"92C1E9",
        name:"Chill",
        
    },
    {
        id:1, 
        icon:"😄",
        hex:"FF8200",
        name:"Feel Good"
    },
    {
        id:2, 
        icon:"🕺",
        hex:"0072CE",
        name:"Party"
    },
    {
        id:3,
        icon:"😔",
        hex:"898D8D",
        name:"Sad"
    },
    {
        id:4, 
        icon:"😴",
        hex:"5F259F",
        name:"Sleep"
    },
    {
        id:5, 
        icon:"💪",
        hex:"0072CE",
        name:"Workout"
    },
    {
        id:6, 
        icon:"💣",
        hex:"54585A",
        name:"Arabic"
    },
    {
        id:7, 
        icon:"😄",
        hex:"F5E1A4",
        name:"Classic"
    },
    {
        id:8, 
        icon:"🙏",
        hex:"49C5B1",
        name:"Divotional"
    },
    {
        id:9, 
        icon:"😎",
        hex:"C8102E",
        name:"Hip Hop"
    },
]










