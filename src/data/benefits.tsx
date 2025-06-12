import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Career-Focused Skill Training",
    description:
      "Golden Globe empowers you with the most in-demand skills across industries. Whether it's programming, design, or marketing, our practical, hands-on courses prepare you to succeed in today’s job market.",
    bullets: [
      {
        title: "Industry-Aligned Curriculum",
        description:
          "Courses crafted with input from industry experts to match current trends, technologies, and hiring needs.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Real-World Project Experience",
        description:
          "Work on live projects and practical assignments to build a strong portfolio that impresses employers.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Expert Trainers & Mentorship",
        description:
          "Get trained and mentored by certified professionals with years of experience in the corporate and education sectors.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-3.webp",
  },
  {
    title: "Stress-Free Learning Journey",
    description:
      "Whether you're just starting out or aiming to upgrade your skills, Golden Globe ensures a smooth and stress-free learning path with guided support at every stage.",
    bullets: [
      {
        title: "Beginner-to-Advanced Learning Paths",
        description:
          "Our structured curriculum supports you from fundamentals to job-ready expertise — no prior knowledge needed.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Comprehensive Placement Support",
        description:
          "Get expert assistance with resume building, mock interviews, and direct access to hiring partners.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Live Interactive Classes & Doubt Sessions",
        description:
          "Attend engaging live classes and receive personalized help through dedicated doubt-clearing sessions.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Trusted & Secure Learning Platform",
    description:
      "Golden Globe is committed to delivering a safe, reliable, and high-quality learning experience. We use certified systems, secure access, and professional support to ensure your confidence and success.",
    bullets: [
      {
        title: "ISO-Certified & Compliant",
        description:
          "We follow international standards for quality training and data security across all our programs.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Secure Student Login",
        description:
          "Accounts are protected with OTP and email verification, ensuring only authorized access to your dashboard.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Dedicated Student Support",
        description:
          "Our support team is responsive and available six days a week to help you with any technical or academic queries.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];

