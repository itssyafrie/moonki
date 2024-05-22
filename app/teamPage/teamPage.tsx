"use client";

import React, { useEffect, useState, useCallback, memo } from "react";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  picture: string;
  location: string;
}

const SkeletonMemberCard: React.FC = () => (
  <div className="bg-gray-200 p-6 rounded-lg animate-pulse">
    <div className="w-32 h-32 rounded-full mx-auto mb-4"></div>
    <h2 className="text-xl font-semibold text-center bg-gray-300 h-6 mb-2"></h2>
    <p className="text-center bg-gray-300 h-4 mb-2"></p>
    <p className="text-center bg-gray-300 h-4"></p>
  </div>
);
SkeletonMemberCard.displayName = "SkeletonMemberCard";

const TeamMemberCard: React.FC<{ member: TeamMember }> = memo(({ member }) => (
  <div className="bg-[#F5F4FF] p-6 rounded-lg">
    <div className="w-32 h-32 rounded-full mx-auto mb-4 relative">
      <Image
        src={member.picture}
        alt={member.name}
        className="rounded-full"
        layout="fixed"
        width={128}
        height={128}
        objectFit="cover"
        loading="lazy"
      />
    </div>
    <h2 className="text-xl text-[#4328EB] font-semibold text-center">
      {member.name}
    </h2>
    <p className="text-center text-gray-600">{member.location}</p>
    <div className="flex flex-row justify-center pt-16">
      <div className="w-1/3 border border-[#4328EB] rounded-md hover:bg-violet-400 text-center px-2 py-2">
        Contact
      </div>
    </div>
    <div className="mt-4">
      <p className="text-[#36485C] text-center">{member.email}</p>
      <p className="text-[#36485C] text-center">{member.phone}</p>
    </div>
  </div>
));
TeamMemberCard.displayName = "TeamMemberCard";

const Teams: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeamMembers = useCallback(async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=9");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const members = data.results.map((user: any) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        picture: user.picture.thumbnail,
        location: `${user.location.city}, ${user.location.country}`,
      }));
      setTeamMembers(members);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTeamMembers();
  }, [fetchTeamMembers]);

  if (loading) {
    return (
      <div className="min-h-screen py-10">
        <div className="container mx-auto">
          <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px] pb-10">
            Our Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(9)].map((_, index) => (
              <SkeletonMemberCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10">
        <div className="container mx-auto">
          <h1 className="text-center text-[32px] leading-[40px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 lg:text-[64px] lg:leading-[72px] pb-6">
            Meet our team
          </h1>
          <div className="px-[20px] lg:px-[280px]">
            <p className="text-center pt-6 pb-10 text-[#36485C] lg:text-[18px] lg:leading-7">
              Meet our tech wizards. With extensive experience and specialized
              skills, our professionals work collaboratively to provide
              comprehensive monitoring solutions that keep your online presence
              running smoothly and efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
