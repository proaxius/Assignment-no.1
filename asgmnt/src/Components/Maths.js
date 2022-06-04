import React from "react";
import { BiLocationPlus, } from "react-icons/bi";
// import { BsCalendar } from "react-icons/bs";
// import { MdCake } from "react-icons/md";
// import { IoIosPeople } from "react-icons/io";
import box_img from "./vigneshwar-rajkumar-9TSYyblXGEA-unsplash.jpg"
import "../App.css";

export default function Maths() {
    return (
        <div>
            <span className="flex flex-row">
                <BiLocationPlus className="h-6 w-6 text-blue-600 ml-4 " size="2x" />
                <text className="text-blue-600 font-bold ">Maths</text>
            </span>
            <div className="  ml-5 mt-5">
                <div >
                    <h1 className=" text-3xl  sm:justify-start font-bold text-stone-800">MENTAL MATHS</h1>
                    <div className="grid sm:grid-cols-2 grid-rows sm:mr-4 mr-7">
                        <img className="sm:col-end-3 flex flex-col-reverse  rounded"
                            src={box_img} alt="clicked from unsplash"></img>                        
<text className="flex flex-col-reverse sm:col-start-1"> Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!</text>



                    </div>

                </div>

            </div>
        </div>
    );
}