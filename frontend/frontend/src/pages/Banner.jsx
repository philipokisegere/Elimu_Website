import React from "react";

function Banner() {
  return (
    <div>
      {}

      <section className="relative bg-[url(https://source.unsplash.com/random/1200x600/?adult-school)] bg-cover bg-center bg-no-repeat py-10 px-4">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-4xl font-extrabold sm:text-5xl text-white">
              Welcome to
              <strong className="block font-extrabold text-rose-700">
                {" "}
                School of Computing and Information Technology{" "}
              </strong>
            </h1>
            {}

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/signin"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="/signup"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Apply Here
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
