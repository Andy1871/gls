// Placeholders: swap in your real questions and answers
export type Faq = { question: string; answer: string };

export type FaqSection = {
  title: string;
  faqs: Faq[];
};

const placeholders = (topic: string): Faq[] =>
  Array.from({ length: 6 }, (_, i) => ({
    question: `[${topic} question ${i + 1}?]`,
    answer: `[Answer to ${topic.toLowerCase()} question ${i + 1}. Keep it short and friendly, a couple of sentences is plenty.]`,
  }));

export const faqSections: FaqSection[] = [
  {
    title: "General",
    faqs: placeholders("General"),
  },
  {
    title: "Pilates",
    faqs: placeholders("Pilates"),
  },
  {
    title: "Online Coaching",
    faqs: placeholders("Online coaching"),
  },
];
