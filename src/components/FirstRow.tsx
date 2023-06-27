import { HiEllipsisHorizontal } from "react-icons/hi2";
const FirstRow = () => {
  return (
    <div className="w-full h-[23%] grid grid-cols-3 ">
      {/* first inner card */}
      <div>
        <div className="bg-white m-2 h-[85%] rounded-2xl p-1">
          <div className="flex items-center p-2">
            <span className="text-lg font-medium">Total Revenue</span>
            <span className="flex items-center justify-center bg-green-100 p-1 w-[4rem] text-green-600 text-xs font-medium ml-2 rounded border border-slate-200">
              +15%
            </span>
            <div className="flex-grow flex justify-end">
              <HiEllipsisHorizontal className="text-3xl text-slate-500" />
            </div>
          </div>

          <div className="flex flex-col p-2 mt-5">
            <span className="text-3xl font-base">$56,472</span>
            <span className="text-[#9c9ea1] mt-1">480 orders</span>
          </div>
        </div>
      </div>
      {/* second inner card */}
      <div>
        <div className="bg-white m-2 h-[85%]  rounded-2xl p-1">
          {/* text above */}
          <div className="flex items-center p-2">
            <span className="text-lg font-medium">Conversations</span>
            <span className="flex items-center justify-center bg-red-100 p-1 w-[4rem] text-red-600 text-xs font-medium ml-2 rounded border border-slate-200">
              -0.72%
            </span>
            <div className="flex-grow flex justify-end">
              <HiEllipsisHorizontal className="text-3xl text-slate-500" />
            </div>
          </div>

          {/* text below */}
          <div className="flex flex-col p-2 mt-5">
            <span className="text-3xl font-base">372</span>
            <span className="text-[#9c9ea1] mt-1">214 clicks</span>
          </div>
        </div>
      </div>
      {/* third inner card */}
      <div>
        <div className="bg-white m-2 h-[85%]  rounded-2xl p-1">
          {/* text above */}
          <div className="flex items-center p-2">
            <span className="text-lg font-medium">Subscribers</span>
            <span className="flex items-center justify-center bg-green-100 p-1 w-[4rem] text-green-600 text-xs font-medium ml-2 rounded border border-slate-200">
              +10.4%
            </span>
            <div className="flex-grow flex justify-end">
              <HiEllipsisHorizontal className="text-3xl text-slate-500" />
            </div>
          </div>

          {/* text below */}
          <div className="flex flex-col p-2 mt-5">
            <span className="text-3xl font-base">2,873</span>
            <span className="text-[#9c9ea1] mt-1">$62 Lifetime Value</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
