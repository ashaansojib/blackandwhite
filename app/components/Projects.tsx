"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React from "react";

// init scrollTrigger
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    // ------- if i want to animate all box in different direction or time then it will work
    // tl.to(".box", { y: 100, rotate: 360, ease: "power2.inOut" })
    //   .to(".area", { y: 200, rotate: 360, ease: "bounce.out" })
    //   .to(".server", { y: 300, rotate: 360, ease: "power1.inOut" });

    // ------ if i want to animate all box at a time then it will work
    // gsap.to(".box, .area, .server", {
    //   x: 200,
    //   opacity: 1,
    //   rotation: 360,
    //   duration: 3,
    //   ease: "power2.inOut",
    //   stagger: 2,
    //   repeat: -1,
    //   yoyo: true,
    // });
    // ------- for scrollTrigger animation when i hit a certain point on this container then it will work

    gsap.to("#container", {
      x: 200,
      rotation: 360,
      stagger: 2,
      scrollTrigger: {
        trigger: ".box, .area, .server",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
        markers: true,

      },
    });
  });

  return (
    <>
      <div className="h-[450px] border border-blue-600 p-2"></div>

      <div className="h-[450px] border border-red-600 p-2">
        <h2 className="text-2xl font-semibold py-6">Recent Projects</h2>

        <div id="container" className="flex gap-2 justify-center">
          <div className="p-4 bg-gray-200 box">
            <p>box1</p>
          </div>

          <div className="p-4 bg-blue-300 area">
            <p>area1</p>
          </div>
          <div className="p-4 bg-red-300 server">
            <p>server1</p>
          </div>
        </div>

        <Link
          href="/notes"
          className="border-b border-primary my-6 inline-block"
        >
          View All
        </Link>
      </div>
      <div className="h-[450px] border border-blue-600 p-2"></div>
    </>
  );
};

export default Projects;
