import React from "react";
import Image from "next/image";

export default function Pocket() {
  return (
    <main>
      <div className="w-full flex justify-start px-28 py-24">
        <div className="w-full grid grid-cols-6 gap-4 ">
          <div className=" h-[100vh] col-span-4 shadow-lg ">
            <div className="p-2">Pocket list (2)</div>
            <div className="flex justify-between p-2 ">
              <div>Product Name</div>
              <div className="pr-28">Quantity</div>
            </div>
            <div className="p-2 flex flex-col gap-4">
              <div className="flex ">
                <Image
                  src={`/img/bulbasaur.png`}
                  alt={"bulbasaur"}
                  width={80}
                  height={80}
                  className=""
                />
                <div className="flex justify-between w-full pr-6">
                  <div>
                    <p className="p-4">Bulbasaur</p>
                    <div className="flex pl-4 ">
                      <p className="text-sm text-center px-2 py-1 rounded-full mr-2 bg-orange-100 text-yellow-500">
                        Grass
                      </p>
                      <p className="text-sm text-center px-2 py-1 rounded-full mr-2 bg-orange-100 text-yellow-500">
                        Poison
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-24 ">
                    <p>1</p>
                    <span className="material-symbols-outlined">delete</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  src={`/img/ivysaur.png`}
                  alt={"ivysaur"}
                  width={80}
                  height={80}
                  className=""
                />
                <div className="flex justify-between w-full pr-6">
                  <div>
                    <p className="p-4">ivysuar</p>
                    <div className="flex pl-4 ">
                      <p className="text-sm text-center px-2 py-1 rounded-full mr-2 bg-orange-100 text-yellow-500">
                        Grass
                      </p>
                      <p className="text-sm text-center px-2 py-1 rounded-full mr-2 bg-orange-100 text-yellow-500">
                        Poison
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-24 ">
                    <p>4</p>
                    <span className="material-symbols-outlined">delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="h-[30%] w-[70%] shadow-lg ">
              <div className="p-2 bg-yellow-50">Order Summary</div>
              <div className="p-3">
                <div className="flex justify-between">
                  <div>Subtotal</div>
                  <div>2 Produuct</div>
                </div>
                <div className="flex justify-between">
                  <div>Quantity</div>
                  <div className="pr-1">6 Quantity</div>
                </div>
              </div>
              <div className="mt-4 flex justify-center items-center pt-10">
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer">
                  Process To Checkout
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
