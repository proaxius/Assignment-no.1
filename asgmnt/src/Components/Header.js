import React from "react";

export default function Header(){
    return(
        <div>
    <div className=" w-full  mr-7 grid grid-cols-3 h-24">
<div className=" flex ml-3  justify-start flex-col p-4 ">
<svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />

</svg>  <h2 >
      Young labs
  </h2>    


 
    </div> 
    <div>
        </div><div className=" flex  lg:justify-end   mr-5 pr-10 " >
      <button className="h-8 w-20  rounded m-8  bg-green-300">
        Login
    </button>
</div>
</div>
<hr className="w-full bg-gray-500"/>
    </div>

    );
}