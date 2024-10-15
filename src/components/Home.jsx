import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-full md:h-screen lg:h-screen scroll-smooth ">
      <div className="w-full h-full md:h-screen lg:h-screen  px-5 py-24 md:py-12 flex flex-wrap  flex-basis bg-gradient-to-r from-stone-500 to-sky-700 ">
        <div className="flex w-full h-20  justify-center mb-4">
          <a
            target="_blank"
            href="https://cspr.live/validator/0106eb4a256292100a485953e93d0b9dc4d9442b257405c03fdb91d4e35f185a1b"
          >
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-400
             via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 
             focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  
             font-medium rounded-lg md:text-lg text-md px-10 py-5 text-center text-white-900"
            >
              Stake
            </button>
          </a>
        </div>
        <div className="h-[12rem] overflow-hidden p-4 lg:w-1/3 w-full md:w-1/3 hover:animate-pulse">
          <div className=" bg-gray-100 px-8 pt-8 pb-16 rounded border-slate-300  ">
            <h1 className="title-font font-semibold text-center sm:text-2xl md:text-xl text-2xl mb-1 ">
              High Performance
            </h1>

            <p className="mb-3 font-sans pt-4">
              Our validator node is running on a bare metal machine with top
              hardware specifications
            </p>
          </div>
        </div>
        <div className="h-[12rem] overflow-hidden p-4 lg:w-1/3 w-full md:w-1/3 hover:animate-pulse">
          <div className=" bg-gray-100 px-8 pt-8 pb-16 rounded border-slate-300 ">
            <h1 className="title-font font-semibold text-center sm:text-2xl md:text-xl text-2xl mb-1">
              Low Commission
            </h1>

            <p className="mb-3 font-sans pt-4">Commission rate is currently 0%</p>
          </div>
        </div>
        <div className="h-[12rem] overflow-hidden p-4 lg:w-1/3 w-full md:w-1/3 hover:animate-pulse">
          <div className=" bg-gray-100 px-8 pt-8 pb-16 rounded border-slate-300 ">
            <h1 className="title-font font-semibold text-center sm:text-2xl md:text-xl text-2xl mb-1">
              Trusted & Verified Validator
            </h1>

            <p className="mb-3 font-sans pt-4">
            
            </p>
          </div>
        </div>
        <div className="flex  w-full md:mt-10 mt-20 ">
          <div className="flex-1">
            <div className=" flex flex-row justify-center py-10 ">
              <div className="flex-1/5 w-10 ">
                <a href="https://t.me/telgostake" target="_blank">
                  {/* <!-- Telegram --> */}
                  <span class="[&>svg]:h-7 [&>svg]:w-7 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 496 512"
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </span>
                  
                  {/* <!-- Telegram --> */}
                  {/* <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0088cc]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    > */}
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                      {/* <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                  </span> */}
                </a>
              </div>
              {/* <!-- X --> */}
              <div className="flex-1/5 ">
                <a
                  href="https://twitter.com/telgostake"
                  target="_blank"
                  role="button"
                >
                  <span className="[&>svg]:h-7 [&>svg]:w-10 [&>svg]:fill-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
