import React, { useState } from "react";

function Directions() {
    return (<>
        <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
            <div className='my-2'>
                <span className="">Google Maps</span>
                <span className="text-amber-400 "> Directions</span>
            </div>
        </div>
        <div className='w-full h-[300px] flex justify-center rounded-[30px]'
            style={{ backgroundImage: "url('map 1.png')", }}></div>
        {/* <img className="w-[1566px] h-[548px] rounded-[30px]" src="https://via.placeholder.com/1566x548" /> */}
        {/* <div className="w-full h-[300px] flex justify-center bg-slate-900 rounded-[30px]">


        </div> */}

    </>)
}
export default Directions;

