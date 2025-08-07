import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      <section className="relative bg-gray-900 text-white min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nickelfox</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Passionate creators crafting meaningful digital experiences.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Who We Are
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Nickelfox, we’re a team of thinkers, designers, and engineers focused on building
          exceptional digital products. From Fortune 500s to innovative startups, our clients trust
          us to bring their visions to life.
        </p>
      </section>

      <section className="relative py-20">
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?fit=crop&w=1950&q=80"
          alt="Team working together"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-8 md:px-20">
          <div className="text-white max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg">
              Empower businesses by transforming ideas into exceptional digital solutions through design, technology, and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Vision
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          To become the most trusted digital product partner, building impactful solutions that delight users and drive growth for businesses worldwide.
        </p>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Leadership Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-60 flex flex-col items-center">
              <img
                className="w-40 h-40 object-cover rounded-full mb-4 shadow"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="CEO"
              />
              <h4 className="text-xl font-semibold">John Doe</h4>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="w-60 flex flex-col items-center">
              <img
                className="w-40 h-40 object-cover rounded-full mb-4 shadow"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="CTO"
              />
              <h4 className="text-xl font-semibold">Jane Smith</h4>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
            <div className="w-60 flex flex-col items-center">
              <img
                className="w-40 h-40 object-cover rounded-full mb-4 shadow"
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="Head of Design"
              />
              <h4 className="text-xl font-semibold">Michael Brown</h4>
              <p className="text-gray-600">Head of Design</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to join our journey?</h2>
        <a
          href="/careers"
          className="inline-block bg-cyan-500 text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-cyan-600 transition"
        >
          Explore Careers
        </a>
      </section>


      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        2025 Nickelfox. All rights reserved.
      </footer>
    </div>
  );
};

export default React.memo(About);
