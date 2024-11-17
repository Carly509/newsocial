import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Main Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center flex-wrap text-6xl font-bold text-indigo-950 leading-tight">
            <span>CONNECT</span>
            <div className="mx-4 w-16 h-16 rounded-full bg-pink-200 overflow-hidden transform hover:scale-105 transition-transform">
              <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="profile" className="w-full h-full object-cover" />
            </div>
            <span>CREATE</span>
          </div>

          <div className="flex justify-center items-center flex-wrap text-6xl font-bold text-indigo-950 leading-tight mt-4">
            <span>AUGMENT</span>
            <div className="mx-4 w-16 h-16 rounded-full bg-green-200 overflow-hidden transform hover:scale-105 transition-transform">
              <img src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="profile" className="w-full h-full object-cover" />
            </div>
            <span>YOUR</span>
          </div>

          <div className="flex justify-center items-center flex-wrap text-6xl font-bold text-indigo-950 leading-tight mt-4">
            <span>REALITY</span>
            <div className="ml-4 w-16 h-16 rounded-full bg-purple-200 overflow-hidden transform hover:scale-105 transition-transform">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-8 text-3xl text-pink-400 italic">
            (Download now ↓)
          </div>
        </div>

        {/* Sliding Cards Section with Custom Shapes */}
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * 25}%)` }}
          >
            {/* About Card */}
            <div className="flex-none w-72">
              <Link to="/about" className="block bg-gray-50 rounded-3xl p-8 h-full hover:shadow-lg transition-all">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">DISCOVER OUR HISTORY</p>
                <h3 className="text-2xl font-bold text-indigo-950">
                  About
                  <br />
                  CircleUp
                </h3>
                <div className="absolute top-4 right-4">
                  <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Feature Set Card - Blob Shape */}
            <div className="flex-none w-72">
              <div className="bg-indigo-950 rounded-[60px] p-8 h-full text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900 opacity-50 blob-shape"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center">
                    View
                    <br />
                    feature set
                  </h3>
                </div>
              </div>
            </div>

            {/* How it Works Card */}
            <div className="flex-none w-96">
              <Link to="/how-it-works" className="block bg-indigo-100 rounded-3xl p-8 h-full hover:shadow-lg transition-all">
                <p className="text-xs uppercase tracking-wide text-indigo-600 mb-2">EXPLORE POSSIBILITIES</p>
                <h3 className="text-2xl font-bold text-indigo-950">
                  How it works
                </h3>
              </Link>
            </div>

            {/* Blog Card */}
            <div className="flex-none w-72">
              <Link to="/blog" className="block bg-orange-500 rounded-3xl p-8 h-full hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-white">
                  Our blog
                </h3>
              </Link>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-950 rounded-3xl p-8 text-white">
              <h3 className="text-2xl mb-6">What do you want to add?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <span className="text-lg">My bio</span>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <span className="text-lg">Choose interests</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-indigo-950">Create an account</h3>
                <p className="text-gray-600 mt-4">
                  To fully utilize the social networking aspects, create an account on the app.
                </p>
                <button className="mt-4 inline-flex items-center text-indigo-950 font-medium">
                  WATCH VIDEO TUTORIAL
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>

              <div className="bg-pink-100 rounded-3xl p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-2xl font-bold text-indigo-950">It's completely new feelings</p>
                    <p className="text-gray-600 mt-2">— Lisa Johnson</p>
                    <p className="text-indigo-400 text-sm">Influencer</p>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="testimonial" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
