
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
import Image from "next/image";

const sections = [
  {
    title: "STEM Oriented Learning",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full mt-12">
        {/* Left Section - Heading */}
        <div className="w-full md:w-1/2 ml-0 md:ml-10 p-4 md:p-9 text-center md:text-left">
          <h1 className="text-primary-foreground font-bold text-4xl md:text-6xl">
            Helping underprivileged kids reach their potential
          </h1>
          <h2 className="text-secondary-foreground text-xl md:text-2xl mt-4">
            Local nonprofit located in <b><i>Folsom, California</i></b>. <br />Partnered with
            <a 
              href="https://saintjohnsprogram.org/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-primary"
            >
              {" "}Saint John&apos;s Program for Real Change
            </a>
            <p className="text-lg md:text-xl">(est. 2025)</p>
          </h2>

          <br />
          <p className="text-secondary-foreground text-xl md:text-2xl mt-2">
            Donate Now and Transform a Life.
          </p>
          <div className="mt-6">
            <Button className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4" size="lg">
              Get Started as a Volunteer
            </Button>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="w-full md:w-2/6 mt-8 md:mt-11 p-4 md:pl-11">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <Image src="/logo.png" alt="Logo" width={500} height={500} className="w-70 h-70 md:w-68 md:h-68 object-contain" />
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-4xl md:text-8xl p-3 md:p-6" />
            <CarouselNext className="text-4xl md:text-8xl p-3 md:p-6" />
          </Carousel>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission">
        <h1 className="text-primary-foreground font-bold text-3xl md:text-5xl p-4 md:p-9 ml-0 md:ml-10 mt-8 md:mt-11 text-center md:text-left">
          Our Mission
        </h1>
      </div>

      <div className="p-4 md:p-9 ml-0 md:ml-10 space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between rounded-lg border border-gray-200 p-4 md:p-6 shadow-md 
                 hover:shadow-xl hover:-translate-y-1 
                 transition-all duration-300 ease-in-out
                 bg-white cursor-pointer"
          >
            {/* Left: Text Content */}
            <div className="flex-1 pr-0 md:pr-6 text-center md:text-left">
              <Badge className="text-lg md:text-xl mb-4 transition-transform duration-300 hover:scale-105">
                {section.title}
              </Badge>
              <p className="mt-3">
                {section.content}
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <Image className="w-full h-auto rounded-md" src="/saintjohnsimg.jpg" alt="Saint Johns Image" width={1000} height={666} />
            </div>
          </div>
        ))}
      </div>

      {/* Impact Section */}
      <div className="flex justify-center">
        <h1 className="text-primary-foreground font-bold text-3xl md:text-5xl p-4 md:p-9 ml-0 md:ml-10 mt-8 md:mt-11 text-center">
          Your Impact Makes all the Difference
        </h1>
      </div>
      <div className="flex justify-center">
        <h2 className="text-secondary-foreground text-lg md:text-xl mt-1 text-center">
          Help educate and guide displaced children towards brighter futures today.
        </h2>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-11 p-4 md:p-8">
        <div className="mb-4 md:mb-0 md:pr-8">
          <Button className="text-lg md:text-3xl px-6 md:px-12 py-4 md:py-7 flex items-center space-x-2 md:space-x-4 transition-transform duration-300 hover:scale-105" size="lg">
            <CircleDollarSign className="!w-6 !h-6 md:!w-10 md:!h-10 flex-shrink-0" />
            <span className="leading-none ">Make a Donation Today</span>
          </Button>
        </div>
        <div className="md:pl-8">
          <Button className="text-lg md:text-3xl px-6 md:px-12 py-4 md:py-7 flex items-center space-x-2 md:space-x-4 transition-transform duration-300 hover:scale-105" size="lg">
            <HandHelping className="!w-6 !h-6 md:!w-10 md:!h-10 flex-shrink-0" />
            <span className="leading-none">Become a Sponsor</span>
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-primary mt-8 md:mt-11">
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl text-primary-foreground font-bold">Bright Futures Academy</h1>
              <h2 className="text-lg md:text-xl mt-4 md:mt-11 text-primary-foreground">Contact Info:</h2>
              <p className="text-base md:text-lg mt-2 text-primary-foreground">Email: support@bfa.com</p>
              <p className="text-base md:text-lg mt-2 text-primary-foreground">Phone Number: +1 916-365-2292</p>
            </div>

            <div className="w-full flex flex-col items-center md:items-start mt-4 md:mt-20">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <InstagramIcon className="text-primary-foreground" size="24" />
                  <a href="https://instagram.com/yourprofile" className="text-base md:text-lg text-primary-foreground hover:text-primary-300">
                    Follow us on Instagram!
                  </a>
                </div>
                <div className="flex space-x-2">
                  <MapPin className="text-primary-foreground" size="24" />
                  <p className="text-base md:text-lg text-primary-foreground hover:text-primary-300">
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