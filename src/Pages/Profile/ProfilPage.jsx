import React from 'react';

const Profile = () => {
  return (

    <div className="font-poppins bg-black min-h-screen">
      <div className="p-20 w-auto flex px-4 sm:px-8 md:px-24 justify-center relative">
        <div className="p-4 sm:p-8 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row relative">
          
          {/* Left Image */}
          <div className="mr-10 mb-6 md:mb-0">
            <img
              className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
              src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
              alt="image of myself"
            />
          </div>

          {/* Right Content */}
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-white font-bold text-3xl mt-6 mb-8">
              Hey it's me, Aydin Vesali Moghaddam
            </h1>

            <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
              I'm Aydin, an 18-year-old high schooler with a passion for web
              development. My tech journey started with HTML, CSS, and JavaScript,
              and I was hooked by the thrill of crafting dynamic, interactive
              websites. As I grew, Node.js and ReactJS became my go-to tools for
              building scalable applications. Feel free to connect if you have
              questions, collaboration ideas, or just want to discuss the latest in
              web development!
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-start items-center gap-4">
              <a
                rel="noopener"
                target="_blank"
                href="https://github.com/Behkruz1968"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                  width="20"
                  height="20"
                  alt="Github"
                />
                <span>Visit my Github</span>
              </a>

              <a
                rel="noopener"
                target="_blank"
                href="#"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                  width="20"
                  height="20"
                  alt="LinkedIn"
                />
                <span>Follow me on Linkedin</span>
              </a>

              <a
                rel="noopener"
                target="_blank"
                href="#"
                className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
              >
                <img
                  className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                  src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                  width="20"
                  height="20"
                  alt="Twitter"
                />
                <span>Follow me on Twitter</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
