import { FiGlobe } from "react-icons/fi";
import { FaBook, FaTrophy } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";
import { GiPartyPopper, GiPublicSpeaker } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

export const TAGS_DATA = [
    {
        id: 1,
        /* 
        type: number
        (Can just do a number from 1-x so the event data can easily reference it)
        */
        icon: FiGlobe,
        /* 
        type: string (name of icon)
        (Please choose an icon from here: https://react-icons.github.io/react-icons/ )
        */
        text: "Networking",
        /* 
        type: string
        (text of tags: Educational, Networking, Competition, Flagship, Workshop, etc…)
        */
        color: "yellow",
        /* 
        type: string - choose from the following: "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink"
        https://v2.chakra-ui.com/docs/styled-system/theme#colors
        (accent color)       
        */
    },
    {
        id: 2,
        icon: FaBook,
        text: "Educational",
        color: "pink",
    },
    {
        id: 3,
        icon: MdOutlineSportsTennis,
        text: "Sports",
        color: "cyan",
    },
    {
        id: 4,
        icon: FaTrophy,
        text: "Competition",
        color: "green",
    },
    {
        id: 5,
        icon: GiPublicSpeaker,
        text: "Panel",
        color: "teal",
    },
    {
        id: 6,
        icon: GiPartyPopper,
        text: "Fun",
        color: "orange",
    },
    {
        id: 7,
        icon: BsTools,
        text: "Workshop",
        color: "gray",  
    },
    {
        id: 99,
        icon: IoRocket,
        text: "Flagship",
        color: "purple",
    },
]
