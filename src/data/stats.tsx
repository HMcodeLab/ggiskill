import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "10,000+",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Students trained in-demand skills across India through our expert-led programs.",
  },
  {
    title: "4.8★",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Average rating on Google and student platforms — based on real feedback from learners.",
  },
  {
    title: "100+",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Hiring and training partners across India helping us deliver job-oriented outcomes.",
  }
];
