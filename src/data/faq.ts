import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} a trusted training platform?`,
    answer: 'Yes. Golden Globe is ISO-certified and has helped hundreds of students upskill and get placed. We use secure logins, verified accounts, and encrypted payment gateways.',
  },
  {
    question: `Can I access ${siteDetails.siteName} from different devices?`,
    answer: 'Absolutely. You can learn anytime from your laptop, tablet, or mobile. Your course progress is synced across all devices.',
  },
  {
    question: 'Will I get placement assistance after completing a course?',
    answer: 'Yes. We offer job assistance, resume-building help, mock interviews, and access to hiring partners. Our goal is to get you job-ready.',
  },
  {
    question: 'Do I need prior knowledge before enrolling?',
    answer: 'No prior experience is needed. Our beginner-friendly courses guide you step-by-step, and you can always ask for doubt-clearing help.',
  },
  {
    question: 'What if I have doubts during the course?',
    answer: 'You’ll have access to live doubt sessions, chat/email support, and dedicated mentors to guide you throughout your learning journey.',
  }
];
