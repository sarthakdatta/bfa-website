/* eslint-disable react/no-unescaped-entities */

"use client"

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { CircleDollarSign, HandHelping, InstagramIcon, MapPin } from "lucide-react";
import Image from "next/image"; // Keep this import

const sections = [
  {
    title: "STEM Oriented Learning",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex items-center w-full mt-12">
        {/* Left Section - Heading */}
        <div className="w-1/2 ml-10 p-9">
          <h1 className="text-primary-foreground font-bold text-6xl">
            Helping underprivileged kids reach their potential
          </h1>
          <h2 className="text-secondary-foreground text-2xl mt-4">
            Local nonprofit located in <b><i>Folsom, California</i></b>. <br></br>Partnered with
            <a 
            href="https://saintjohnsprogram.org/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
            
            > Saint John&apos;s Program for Real Change</a>
            
            <p className="text-xl">(est. 2025)</p>
          </h2>

          <br></br>
          <p className="text-secondary-foreground text-2xl mt-2">
            Donate Now and Transform a Life.
          </p>
          <div className="mt-6">
            <Button className="text-xl px-8 py-4" size="lg">
              Get Started as a Volunteer
            </Button>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="w-2/6 mt-11 pl-11">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <Image src="/logo.png" alt="Logo" width ={500} height={500} className="w-68 h-68 object-contain" />
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-8xl p-6" />
            <CarouselNext className="text-8xl p-6" />
          </Carousel>
        </div>
      </div>

      <div>
        <h1 className="text-primary-foreground font-bold text-5xl p-9 ml-10 mt-11">
          Our Mission
        </h1>
      </div>

      <div className="p-9 ml-10 space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-6 shadow-md 
                 hover:shadow-xl hover:-translate-y-1 
                 transition-all duration-300 ease-in-out
                 bg-white cursor-pointer"
          >
            {/* Left: Text Content */}
            <div className="flex-1 pr-6">
              <Badge className="text-xl mb-4 transition-transform duration-300 hover:scale-105">
                {section.title}
              </Badge>
              <p className="mt-3">
                {section.content}
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-1/3">
              <Image className="w-full h-auto rounded-md" src="/saintjohnsimg.jpg" alt="Saint Johns Image" width ={1000} height={666}/>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <h1 className="text-primary-foreground font-bold text-5xl p-9 ml-10 mt-11">
          Your Impact Makes all the Difference
        </h1>

      </div>
      <div className="flex justify-center">
        <h2 className="text-secondary-foreground text-xl mt-1">Help educate and guide displaced children towards brighter futures today. </h2>

      </div>

      <div className="flex justify-center mt-11 p-8">
        <div className="pr-8">
          <Button className="text-3xl px-12 py-7 flex items-center space-x-4" size="lg">
            <CircleDollarSign className="!w-10 !h-10 flex-shrink-0" />
            <span className="leading-none">Make a Donation Today</span>
          </Button>
        </div>
        <div className="pl-8" >
          <Button className="text-3xl px-12 py-7 flex items-center space-x-4" size="lg">
            <HandHelping className="!w-10 !h-10 flex-shrink-0" />
            <span className="leading-none">Become a Sponsor</span>
          </Button>
        </div>
      </div>

      <footer className="bg-primary mt-11">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-2/3">
              <h1 className="pl-9 pt-9 ml-10 text-3xl text-primary-foreground font-bold">Bright Futures Academy</h1>
              <h2 className="pl-9 mt-11 ml-10 text-xl text-primary-foreground">Contact Info:</h2>
              <p className="pl-9 ml-10 mt-2 text-lg text-primary-foreground">Email: support@bfa.com</p>
              <p className="pl-9 pb-8 ml-10 mt-2 text-lg text-primary-foreground">Phone Number: +1 916-365-2292</p>
            </div>

            <div className="w-full flex  pl-9 ml-10 items-center mt-5">
              <div className="flex flex-col  space-y-2">
                <div className="flex space-x-2">
                  <InstagramIcon className="text-primary-foreground" size="24" />
                  <a href="https://instagram.com/yourprofile" className="text-lg text-primary-foreground hover:text-primary-300">
                    Follow us on Instagram!
                  </a>
                </div>
                <div className="flex space-x-2">
                  <MapPin className="text-primary-foreground" size="24" />
                  <p className="text-lg text-primary-foreground hover:text-primary-300">
                    Folsom, California.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
