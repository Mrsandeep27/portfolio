"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-lg mb-4 font-mono">// Hello World</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            I'M A WEB
            <br />
            <span className="text-green-400">DESIGNER</span>
          </h2>
        </div>

        {/* Images Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Image (About) */}
          <div className="space-y-6">
            <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src="image1.jpeg"
                alt="Developer Desk"
                width={700}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Two Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/image2.jpeg"
                  alt="Code 3D Illustration"
                  width={300}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/image3.jpeg"
                  alt="VSCode Terminal"
                  width={300}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text + Resume Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black rounded-lg p-8 mb-8">
            <p className="text-green-400 text-lg mb-4 font-mono">
              &lt;p&gt; I CRAFT FAST, SCALABLE, AND <span className="text-white">USER-FRIENDLY WEB</span>
            </p>
            <p className="text-white text-lg mb-4">
              APPLICATIONS WITH MODERN <span className="text-green-400">JAVASCRIPT FRAMEWORKS</span> —
            </p>
            <p className="text-white text-lg mb-4">COMBINING REACT ON THE FRONTEND WITH ROBUST</p>
            <p className="text-green-400 text-lg font-mono">
              <span className="text-white">SERVER-SIDE SOLUTIONS</span> USING NODE.JS. &lt;/p&gt;
            </p>
          </div>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through
            experimentation. You'll find me building side projects, diving into new tech stacks, or simply exploring web
            development.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-8 py-3">
              View My Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
