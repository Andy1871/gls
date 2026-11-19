export type Faq = { question: string; answer: string };

export type FaqSection = {
  title: string;
  faqs: Faq[];
};

export const faqSections: FaqSection[] = [
  {
    title: "General",
    faqs: [
      {
        question: "Who do you work with?",
        answer:
          "I work with women of all ages and fitness levels. Some are complete beginners, some are coming back after a break, and some already train regularly and want more support. Wherever you’re starting from, you’re welcome here.",
      },
      {
        question: "Where are you based?",
        answer:
          "I teach Pilates in Camberley, Surrey. Personal training and nutrition coaching are delivered online, so you can work with me wherever you are.",
      },
      {
        question: "I’m a complete beginner. Is that OK?",
        answer:
          "Absolutely. Lots of my clients have never done Pilates or strength training before. Every session is adapted to you, and I’ll guide you through each step so you always feel comfortable.",
      },
      {
        question: "I have an injury or health condition. Can I still take part?",
        answer:
          "In many cases, yes. Please tell me about any injuries or health conditions before we start so I can adapt your sessions. If you’re unsure, check with your GP or physiotherapist first.",
      },
    ],
  },
  {
    title: "Pilates",
    faqs: [
      {
        question: "What’s the difference between 1-2-1 reformer and group mat classes?",
        answer:
          "1-2-1 reformer sessions are private, with my full attention and a session tailored completely to you. The reformer uses springs for support and resistance, so it’s great for building strength and refining technique. Group mat classes are friendly and relaxed, a lovely way to build a regular practice alongside other women. Each exercise comes with options for different levels.",
      },
      {
        question: "Which should I choose?",
        answer:
          "If you’re new to Pilates, want focused attention or have specific goals, 1-2-1 reformer is a great place to start. If you’d like a regular, sociable class, group mat is ideal. Lots of clients do both. If you’re not sure, get in touch and we can talk it through.",
      },
      {
        question: "How big are the group classes?",
        answer:
          "Classes are kept small, with a maximum of 15, so I can give everyone attention and support.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Wear comfortable clothes you can move freely in. Leggings and a fitted top work well. Grip socks are recommended for reformer sessions. Bring a water bottle, and a mat to group mat classes if you have one, or I can provide one.",
      },
      {
        question: "Can I do Pilates while pregnant or after having a baby?",
        answer:
          "Yes, I’ll adapt your sessions to suit you. Please get clearance from your GP or midwife first, and after birth, wait until you’ve had your postnatal check.",
      },
    ],
  },
  {
    title: "Online Coaching & Nutrition",
    faqs: [
      {
        question: "How does online coaching work?",
        answer:
          "You start with a 12-week block built around your goals, your schedule and your starting point. You’ll get a personalised training programme for home or the gym, weekly check-ins, and video feedback on your form. I’ll track your progress and adjust your plan as you go. You’ll also receive personalised nutrition support, so your meals can match your goals.",
      },
      {
        question: "How do the check-ins work?",
        answer:
          "Each week you’ll check in with me via the app, WhatsApp or a video call to share how things are going. I’ll give feedback, answer questions and adjust your plan if needed.",
      },
      {
        question: "Do I need a gym membership?",
        answer:
          "No. Your programme can be designed for home or the gym. If you train at home, I’ll build it around the equipment you have.",
      },
      {
        question: "What’s included in the nutrition support?",
        answer:
          "Simple meal ideas that fit your week and realistic habits that support your energy, sleep and hormones. There are no strict diets or rigid rules, just a balanced approach to food that works with your life.",
      },
      {
        question: "What happens after the first 12 weeks?",
        answer:
          "You can keep building with 4, 8 or 12-week blocks, depending on what suits you.",
      },
    ],
  },
  {
    title: "Booking & Business Events",
    faqs: [
      {
        question: "How do I book?",
        answer:
          "Group classes can be booked online via the booking page, and 1-2-1 sessions through the enquiry form. If you’d like to chat first, just drop me a message.",
      },
      {
        question: "Do you offer packages or class passes?",
        answer:
          "Sessions are booked in blocks, so you can build a routine and see real progress.\n\nGroup Mat Classes: 4-week blocks\n1-2-1 Reformer Pilates: 4 or 8-week blocks\nOnline Coaching: 4, 8 or 12-week blocks following the initial 12 weeks",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Please give at least 24 hours’ notice to cancel or rearrange a session. Late cancellations may be charged in full.",
      },
      {
        question: "Do you run sessions for businesses and events?",
        answer:
          "Yes. I bring Pilates and wellbeing sessions to your workplace or event. They’re a relaxed, accessible way to help your team de-stress, move and recharge. No experience is needed, and sessions can be tailored to your group and space. To book, get in touch via the contact form with your date, location and group size, and I’ll put together options for you.",
      },
    ],
  },
];
