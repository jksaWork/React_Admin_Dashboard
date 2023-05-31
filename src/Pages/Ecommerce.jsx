import React from "react";
import { Button } from "../components";
import { earningData, SparklineAreaData } from "../data/index";
import { GoPrimitiveDot } from "react-icons/go";
import { Sparkline, BarsChart } from "../components/index";
import { useStateContext } from "../context/ContextProvider";
function Ecommerce() {
  const { cureentColor } = useStateContext();
  return (
    <div className="mt-4">
      <div className="flex flex-wrap items-center    lg:no-wrap justify-center">
        <div className="flex flex-wrap  gap-2 m-2 justify-center items-center ">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 items-center cursor-pointer  flex flex-col hover:translate-y-[-5px] transition-all justify-center dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {<item.icon />}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 w-full  p-4 bg-white lg:mx-10 mx-1 dark:bg-secondary-dark-bg  drop-shadow-md hover:translate-y-[-5px] transition-all ">
          <div className="flex justify-between w-full  items-center">
            <div className="text-semibold">
              <span className="text-2xl font-bold">Renvues Update</span>
            </div>
            <div className="flex flex-around gap-2 items-center">
              <div className="flex flex-around gap-2 items-center rounded-md p-3 hover:shadow-md">
                <span className=""> Expanded </span>
                <span className="text-gray-300 font-bold">
                  {" "}
                  <GoPrimitiveDot />{" "}
                </span>
              </div>
              <div className="flex flex-around gap-2 items-center">
                <span className=""> Budge </span>
                <span className="text-green-700 font-bold">
                  {" "}
                  <GoPrimitiveDot />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center ">
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col justify-between items-center">
                <div className="w-2/3 mt-10">
                  <div className="text-2xl  font-extrabold">
                    491,123 ${" "}
                    <span className="bg-green-500  ml-2 px-2 text-white w-[30px]  text-xs rounded-2xl ">
                      59%
                    </span>
                  </div>
                  <span className="italic text-xs">Budge</span>
                </div>
                <div className="w-2/3 mt-5">
                  <div className="text-2xl  font-extrabold">941,13 $ </div>
                  <span className="italic text-xs">Expanded</span>
                </div>
                <Sparkline
                  id="spark_line"
                  height="100px"
                  width="100px"
                  color={cureentColor}
                  data={SparklineAreaData}
                  type="Line"
                  currentColor={cureentColor}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <BarsChart
                //  height="300"
                //  width="300"
                color={cureentColor}
                data={SparklineAreaData}
                type="Line"
                currentColor={cureentColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
