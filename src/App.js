import "./App.css";
import React from "react";
import { GeneratorCard } from "./components/GeneratorCard";
import { FeatureCard } from "./components/FeatureCard";
import { SloganCard } from "./components/SloganCard";
import { Logo, NextIcon } from "./components/SVGs";
import { feats,  generators, slogans } from "./data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative bg-[#FAFAFA]">
      <div className="h-[328px] bg-brand absolute w-full top-0 z-[1]">
        &nbsp;
      </div>
      <nav className="flex max-w-[1120px] mx-auto pt-5 justify-between relative mb-16 z-[3]">
        <div>
          <Logo />
        </div>
        <div>
          <button className="text-white">Sign in</button>
          <button className="py-3 px-6 bg-white text-brand ml-8 rounded-[4px]">
            Dukaan for PC
          </button>
        </div>
      </nav>
      <div
        style={{
          boxShadow: "0px 2px 8px rgba(26, 24, 30, 0.06)",
        }}
        className="bg-white z-[3] relative py-16 max-w-[1120px] mx-auto px-[192px] mb-[80px]"
      >
        <h1 className="mb-3 text-[#1A181E] font-semibold text-4xl">
          Free slogan maker
        </h1>
        <p className="text-xl text-[#4D4D4D] font-normal mb-12">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
        <p className="text-base mb-2 font-normal text-[#4D4D4D]">
          Word for your slogan
        </p>
        <div className="flex px-4 items-center justify-between max-w-[352px] mb-12 border border-[#D9D9D9]">
          <input className="flex-1 py-3 outline-none focus:outline-none" />
          <span className="text-2xl">&times;</span>
        </div>
        <button className="bg-brand text-white rounded-[4px] py-3 px-6 mb-16">
          Generate slogans
        </button>
        <hr className="text-[#D9D9D9]" />
        <div className="flex items-center justify-between mt-12 mb-8">
          <p className="text-[#1A181E] text-xl">
            We have generated 1,023 slogans for “cozy”
          </p>
          <button className="border border-brand py-2 px-6 rounded-[4px] text-brand bg-white">
            Download all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-[20px] mb-12">
          {slogans.map((slogan, index) => (
            <SloganCard slogan={slogan} key={index} />
          ))}
        </div>
        <hr className="text-[#D9D9D9]" />
        <div className="flex items-center justify-between mt-6 mb-6">
          <p>&nbsp;</p>
          <div className="flex">
            <p className="flex items-center justify-center w-6 h-6 text-sm text-white rounded-full bg-brand">
              1
            </p>
            <p className="flex items-center justify-center w-6 h-6 text-sm bg-white rounded-full text-brand">
              2
            </p>
            <p className="flex items-center justify-center w-6 h-6 text-sm bg-white rounded-full text-brand">
              3
            </p>
            <p className="flex items-center justify-center w-6 h-6 text-sm bg-white rounded-full text-brand">
              ...
            </p>
            <p className="flex items-center justify-center w-6 h-6 text-sm bg-white rounded-full text-brand">
              21
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-sm w-6 h-6 flex items-center justify-center rounded-full text-brand bg-white mr-[5px]">
              Next
            </p>
            <NextIcon />
          </div>
        </div>
      </div>
      <div className="bg-brand/5 mb-[80px] py-16">
        <div className="flex gap-8 justify-center  items-center max-w-[1120px] mx-auto">
          {feats.map((feat, index) => (
            <FeatureCard {...feat} key={index} />
          ))}
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto">
        <p className="text-4xl font-semibold mb-11">
          Try our other free products
        </p>
        <div className="grid grid-cols-3 gap-8">
          {generators.map((generator, index) => (
            <GeneratorCard key={index} generator={generator} />
          ))}
        </div>
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;
