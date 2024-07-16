import React from 'react';

const Header = () => {
  const clearAllHandler = () => {
    localStorage.clear();
  }

  return (
    <div>
    <div  className="bg-blue-900 flex w-full h-[100px] items-center justify-center relative [@media(max-width:516px)]:flex-col [@media(max-width:516px)]:justify-around">
        <div className="relative w-[80vw] flex justify-center [@media(max-width:412px)]:flex-col [@media(max-width:412px)]:place-items-center [@media(max-width:412px)]:items-center">
            <h1 className="text-white font-bold text-[3rem] [@media(min-width:360px)]:text-[2rem] [@media(max-width:697)] [@media(max-width:360px)]:text-[1rem]">TODO</h1>
            <span className=" text-red-500 font-bold pt-1 absolute bottom-0 translate-x-[58px] [@media(max-width:412px)]:hidden">App</span>
        </div>
     
    </div>
    </div>
  );
}

export default Header;
