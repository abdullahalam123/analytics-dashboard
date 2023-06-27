import { IoIosArrowDown } from "react-icons/io";
import { HiEllipsisHorizontal } from "react-icons/hi2";

const ThirdRow = () => {
  return (
    <div className=" w-full p-1 h-[41%] ">
      {/* container */}
      <div className="flex h-full w-full">
        {/* left container */}
        <div className="w-8/12 p-2">
          {/* inner left container */}
          <div className="border rounded-2xl bg-white p-4">
            {/* top element container */}
            <div className="flex items-center h-1/6">
              <span className="text-xl font-medium">
                Top Location for Audience
              </span>
              <div className="flex-grow flex justify-end items-center">
                <button className="mr-3 flex items-center border px-4 py-1 text-slate-500 rounded-md">
                  Top Country <IoIosArrowDown className="ml-3" />
                </button>
                <div>
                  <HiEllipsisHorizontal className="text-3xl text-slate-500 mr-2" />
                </div>
              </div>
            </div>
            {/* bottom element container */}
            <div className="flex flex-col gap-1.5">
              {/* United States */}
              <div className="flex mt-7 items-center">
                <div className="ml-auto">
                  <img
                    className="w-9 h-9 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/3909/3909383.png"
                    alt="Rounded avatar"
                  ></img>
                </div>
                <div className="ml-2 items-end  w-[30%]">
                  <div className="mb-1 text-base font-medium">
                    United States
                  </div>
                  <div className="flex items-center -mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500 w-[54%]"></div>
                    </div>
                    <span className="mx-2 font-base ">54%</span>
                  </div>
                </div>
              </div>

              {/* United Kingdom */}
              <div className="flex items-center ">
                <div className="ml-auto">
                  <img
                    className="w-9 h-9 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/323/323329.png"
                    alt="Rounded avatar"
                  ></img>
                </div>
                <div className="ml-2  items-end w-[30%]">
                  <div className="mb-1 text-base font-medium">
                    United Kingdom
                  </div>
                  <div className="flex items-center -mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-700 h-1.5 rounded-full dark:bg-blue-500 w-[36%]"></div>
                    </div>
                    <span className="mx-2 font-base ">36%</span>
                  </div>
                </div>
              </div>
              {/*India */}
              <div className="flex items-center ">
                <div className="ml-auto">
                  <img
                    className="w-9 h-9 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/9906/9906480.png"
                    alt="Rounded avatar"
                  ></img>
                </div>
                <div className="ml-2  items-end  w-[30%]">
                  <div className="mb-1 text-base font-medium">India</div>
                  <div className="flex items-center -mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                      <div className="bg-amber-600 h-1.5 rounded-full dark:bg-amber-500 w-[15%]"></div>
                    </div>
                    <span className="mx-2 font-base ">15%</span>
                  </div>
                </div>
              </div>
              {/* Indonesia */}
              <div className="flex items-center ">
                <div className="ml-auto">
                  <img
                    className="w-9 h-9 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/6157/6157721.png"
                    alt="Rounded avatar"
                  ></img>
                </div>
                <div className="ml-2  items-end w-[30%]">
                  <div className="mb-1 text-base font-medium">Indonesia</div>
                  <div className="flex items-center -mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                      <div className="bg-red-600 h-1.5 rounded-full dark:bg-red-500 w-[15%]"></div>
                    </div>
                    <span className="mx-2 font-base ">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right container */}
        <div className="w-7/12 p-2">
          {/* inner right container */}
          <div className="border rounded-2xl bg-white p-4">
            {/* top element container */}
            <div className="flex items-center h-1/6">
              <span className="text-xl font-medium">Sessions by Devices</span>
              <div className="flex-grow flex justify-end items-center">
                <button className="mr-3 flex items-center border px-4 py-1 text-slate-500 rounded-md">
                  Last 7 days <IoIosArrowDown className="ml-3" />
                </button>
                <div>
                  <HiEllipsisHorizontal className="text-3xl text-slate-500 mr-2" />
                </div>
              </div>
            </div>
            {/* bottom element container */}
            <div className="flex flex-col gap-1">
              {/* Desktop */}
              <div className="flex mt-5 items-center">
                <div className="ml-auto items-end  w-[60%] mr-3">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="font-medium text-base">Desktop</span>
                    <span className="font-base">4,089 / 76%</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full dark:bg-blue-500 w-[76%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile */}
              <div className="flex mt-2 items-center">
                <div className="ml-auto items-end  w-[60%] mr-3">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="font-medium text-base">Mobile</span>
                    <span className="font-base">1,149 / 21%</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full dark:bg-red-500 w-[21%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tablet */}
              <div className="flex mt-2 items-center">
                <div className="ml-auto items-end  w-[60%] mr-3">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="font-medium text-base">Tablet</span>
                    <span className="font-base">150 / 3%</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full dark:bg-amber-600 w-[5%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-2 items-center">
                <div className="ml-auto items-end  w-[60%] mr-3">
                  <div className="mb-1 flex justify-between items-center">
                    <span className="font-light text-sm text-slate-500 mt-0.5">
                      Your session has increased in the last 7 days especialty
                      on desktop and mobile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;
