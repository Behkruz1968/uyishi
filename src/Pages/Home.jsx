import React from "react";

const Home = () => {
  return (
    
    <div className="bg-white text-gray-800 overflow-hidden">
        
      <section className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Meaningful Digital Products
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We craft user-centered web and mobile applications that make a difference.
          </p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-cyan-600 transition"
          >
            Start your project
          </a>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="uppercase text-gray-600 mb-8 tracking-widest text-sm font-semibold">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Google_Logo.svg" alt="Google" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/IBM_logo.svg" alt="IBM" className="h-8" />
          </div>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We design & build scalable digital solutions
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Our expert teams work with startups, enterprises and agencies to turn
          ideas into world-class products. From design thinking to engineering,
          we are with you at every step.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Product Design</h3>
            <p className="text-gray-600">
              Human-centered UI/UX for web and mobile apps.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Engineering</h3>
            <p className="text-gray-600">
              Robust backend, scalable frontend & mobile development.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Emerging technologies & strategies for competitive advantage.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
        <a
          href="#contact"
          className="inline-block bg-cyan-500 text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-cyan-600 transition"
        >
          Contact Us
        </a>
      </section>
      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        © 2025 Nickelfox. All rights reserved.
      </footer>
    </div>
  );
};

export default React.memo(Home);
