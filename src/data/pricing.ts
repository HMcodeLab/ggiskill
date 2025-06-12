import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: 'Basic Plan',
    price: 1999, // INR
    features: [
      'Access to One Course',
      'Live Instructor-Led Sessions',
      'Downloadable Study Materials',
      'Doubt Clearing via Email',
      'Course Completion Certificate',
    ],
  },
  {
    name: 'Pro Plan',
    price: 3999, // INR
    features: [
      'Access to All Courses (1 Domain)',
      'Live + Recorded Sessions',
      'Weekly Doubt Clearing Sessions (Live)',
      'Resume Building & Interview Prep',
      'Job Assistance via Hiring Partners',
      'Completion + Skill Certification',
    ],
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    features: [
      'Access to All Courses (Multiple Domains)',
      '1-on-1 Mentorship with Industry Experts',
      'Real-Time Project Work with Feedback',
      'Priority Placement Support & Mock Interviews',
      'Lifetime Access to Course Materials',
      'Custom Learning Path & Certification',
    ],
  },
];

