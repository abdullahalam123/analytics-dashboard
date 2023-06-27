import { HiEllipsisHorizontal } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
const SecondRow = () => {
  return (
    // container
    <div className="w-full h-[38%] ">
      {/* overview container*/}
      <div className="flex h-full w-full">
        {/* left container */}
        <div className=" w-4/6 p-2">
          <div className=" bg-white rounded-2xl p-4  h-full">
            {/* top item */}
            <div className="flex items-center  h-1/6">
              <span className="text-xl font-medium">Sessions Overview</span>
              <div className="flex-grow flex justify-end items-center">
                <button className="mr-3 flex items-center border px-4 py-1 text-slate-500 rounded-md">
                  Last 7 days <IoIosArrowDown className="ml-3" />
                </button>
                <div>
                  <HiEllipsisHorizontal className="text-3xl text-slate-500" />
                </div>
              </div>
            </div>
            {/* middle item */}
            <div className=" h-4/6 flex mt-4">
              <div className="flex flex-col text-slate-500 font-base gap-2">
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              <div className="mx-auto mt-2">
                <div className="bg-black text-white font-normal rounded-lg py-1 px-3">
                  Overview 312
                  <span className="text-[#65a183]"> +12%</span>
                  <div className="absolute w-2 h-2 bg-black rotate-45"></div>
                </div>
              </div>
            </div>
            {/* bottom item */}
            <div className=" h-1/6 text-slate-500 font-base ml-8 flex items-center justify-between">
              <span>27 Nov</span>
              <span>28 Nov</span>
              <span>29 Nov</span>
              <span>30 Nov</span>
              <span>1 Dec</span>
              <span>2 Dec</span>
              <span>3 Dec</span>
              <span>4 Dec</span>
            </div>
          </div>
        </div>

        {/* right container */}
        <div className="w-2/6 p-2">
          <div className=" h-full rounded-2xl p-4 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium">Most Active Users</span>
              <HiEllipsisHorizontal className="text-3xl text-slate-500" />
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center">
                <span className="text-3xl font-base">1.684</span>
                <span className="flex items-center justify-center bg-green-100 p-1 w-[4rem] text-green-600 text-xs font-medium ml-3 rounded border border-slate-200">
                  +12%
                </span>
              </div>
              <span className="text-slate-500">Last 3 Years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondRow;
