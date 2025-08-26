"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    
    <section className="pt-40 pb-20 px-4 bg-black text-white">
   {/* <div className="glow-fade top-0 left-0"></div>
      <div className="glow-fade top-120 right-1"></div> */}
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with  FinApt
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4 m-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8  text-black" variant="outline">
              Get Started
            </Button>
          </Link>
          
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
  <div className="hero-image" ref={imageRef}>
    <Image
      src="/banner.png"
      width={800}
      height={720}
      alt="Dashboard Preview"
      className="rounded-lg  mx-auto h-150 w-200"
      priority
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default HeroSection;