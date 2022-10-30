/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from "next/link"

const Footer = ({heading}) => {
    return (
        <footer className="footer bg-black relative md:p-10 p-1 ">
            <div className="container mx-auto px-6">
        
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col">
                            <span className="text-white mt-4 text-lg md:flex hidden">© 2022 Obodai Brands. All rights reserved</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-xl">Plot No. 10 Ameriya Road,</span>
                            <span className="text-white text-xl mb-8">Ofankor-Ghana.</span>
                        </div>
                        <div className="flex flex-col">
                            <span><a href="tel:+2330302447359" className="text-white text-xl">030 – 244 – 7359</a></span>
                            <span className='mb-8'><a href="mailto:hello@obodai.com" className="text-white text-xl">hello@obodai.com</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span><a href="https://www.instagram.com/weareobodai/" className="text-white text-xl">Instagram</a></span>
                            <span className="my-2"><a href="https://twitter.com/weareobodai" className="text-white text-xl">Twitter</a></span>
                            <span><a href="https://www.linkedin.com/company/weareobodai/" className="text-white text-xl my-2">LinkedIn</a></span>
                        </div>
                
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:mt-0 m-6">
                <span className="text-white text-base md:hidden">© 2022 Obodai Brands. All rights reserved</span>
            </div>
        </footer>

    );
  };
  
  export default Footer;
