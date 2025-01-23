import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-12 md:py-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-11 md:mt-30">
          <div className="space-y-11">
            <h1 className="text-4xl font-bold">
              Hello, welcoms here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores accusantium harum veritatis hic exercitationem? Vitae
              quaerat earum eaque at suscipit?
            </p>
            <label className="input bg-white input-bordered flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 45"
                fill="currentcolor"
                className="h-12 w-12 mt-6 opacity-19 text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Enter your Email to login"
              />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className="order-1 ml-57 m-12 w-full md:w-1/2">
          <img src={banner} className="w-92 h-92" alt="   " />
        </div>
      </div>
    </>
  );
}

export default Banner;
