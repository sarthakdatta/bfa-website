"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Sarthak Datta",
    role: "Co-Founder",
    description: "Hey there! I'm Sarthak. I have lots of experience teaching as I have volunteering and teaching nuero-diverse kids math for almost 2 years.",
    image: "/images/john-doe.jpg", // Replace with your image path
  },
  {
    name: "Rishan Kayal",
    role: "Co-Founder",
    description: "Jane is a tech enthusiast with a passion for building scalable systems. She leads our engineering team with expertise and innovation.",
    image: "/images/jane-smith.jpg", // Replace with your image path
  },
  {
    name: "Alex Johnson",
    role: "COO & Co-Founder",
    description: "Alex is an operations expert who ensures our company runs smoothly. He focuses on process optimization and team collaboration.",
    image: "/images/alex-johnson.jpg", // Replace with your image path
  },
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4">Meet Our Founders</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={founder.image} alt={founder.name} />
                  <AvatarFallback>{founder.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{founder.name}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{founder.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">{founder.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}