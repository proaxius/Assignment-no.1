import React from "react";
import {FaFacebook ,} from "react-icons/fa";

import {  SiInstagram , SiWhatsapp}from "react-icons/si";
export default function Footer() {
    return (
        <div className=" bg-lime-300 h-auto w-full sm:flex sm:flex-col lg:grid lg:grid-cols-3 leading-relaxed p-5 sm:text-start lg:text-inherit" >
            <div className=" flex flex-col ml-4 mt-2">
                <p> Your friend, your guide and your partner in the journey of parenting</p>
                <span className="flex flex-row p-5  ">
                <FaFacebook className="h-8 w-8  m-4"/>
                <SiInstagram className="h-8 w-8 m-4" />
                <SiWhatsapp className="h-8 w-8  m-4"/>
                </span>
              <p className="text-xs ">© 2022 All Rights Reserved. Younglabs</p>
            </div>
            <div className="flex flex-col mt-2 items-center leading-7">
                <div className="container h-auto w-40 flex flex-col items-start list-none" >
                <h2 >
                    <li><a href="#quicklink">Quick Links</a></li>
                </h2>
                
                <div className=" ">
                    <li href="#"> <a href="#about">About</a></li>
                    <li href="#"><a href="#privacy">Privacy Policy</a></li>
                    <li href="#"><a href="#terms">Terms & Condition</a></li>
                    <li href="#"><a href="#Shipping">Shipping & Delivery</a></li>
                    <li href="#"><a href="#Return,refund,exchange">Return,Refunds & Exchange Policy</a></li>
                </div>
                </div>
            </div>
            <div className="mx-4 my-4 leading-8">
             <h2>Address</h2>
             <span className="flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>
<a href="#Location"> A-39, Sector-4, Noida-201301</a></span>
<span className="flex flex-row"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg><a href="#Phone-Number">(+91)92890 29696</a></span>
<span className="flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg> <a href="#Mail">info@younglabs.in</a></span>
            </div>

        </div>
    );
}