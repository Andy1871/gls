// Each string in `body` is one paragraph. Anything in [square brackets] still needs confirming.
export type Policy = { title: string; body: string[] };

export const policies: Policy[] = [
  {
    title: "Bookings",
    body: [
      "Group mat classes can be booked online via the booking page. 1-2-1 reformer sessions, online coaching and business or event sessions are booked through the enquiry form. If you’d like to chat before booking, just drop me a message.",
    ],
  },
  {
    title: "Cancellations",
    body: [
      "Please give at least 24 hours’ notice to cancel or rearrange a session. Late cancellations and missed sessions may be charged in full.",
      "Sessions cancelled with enough notice can be rescheduled within the same block, or carried over to the next one.",
      "If I ever need to cancel a session, I’ll let you know as early as possible and offer you an alternative session or a credit/refund for that session.",
    ],
  },
  {
    title: "Late arrivals",
    body: [
      "Please arrive a few minutes early so we can start on time. If you’re running late, let me know as soon as you can. Sessions will still finish at the usual time so the next client isn’t affected.",
    ],
  },
  {
    title: "Payments & refunds",
    body: [
      "Payment is due in full before the start of each block via cash or bank transfer.",
      "Blocks need to be used within the dates booked and can’t be transferred to another person.",
      "Blocks are non-refundable once started, except in exceptional circumstances such as injury or illness.",
    ],
  },
  {
    title: "Health & safety",
    body: [
      "Before your first session you’ll be asked to complete a health questionnaire. Please tell me about any injuries, health conditions or medication, and let me know if anything changes, so I can adapt your sessions.",
      "If you’re unsure whether exercise is right for you, please check with your GP or physiotherapist first. If you’re pregnant, please get clearance from your GP or midwife, and after birth, wait until you’ve had your postnatal check before returning.",
      "Every exercise comes with options for different levels. Please work at your own pace, listen to your body and let me know straight away if anything feels uncomfortable. You take part at your own risk, and I’m happy to adapt or skip anything that doesn’t feel right.",
      "If you’re feeling unwell, e.g. with a cold or other illness, please stay at home and let me know.",
    ],
  },
  {
    title: "Online coaching",
    body: [
      "Online coaching starts with a 12-week block, including a personalised training programme, weekly check-ins via the app, WhatsApp or a video call, video feedback on your form and personalised nutrition support.",
      "To get the most from your programme, please complete your weekly check-ins and let me know if anything changes with your health, schedule or equipment so I can adjust your plan.",
      "Nutrition support is general guidance on balanced eating and healthy habits. It isn’t medical advice and doesn’t replace advice from your GP or a registered dietitian, particularly if you have a medical condition.",
    ],
  },
  {
    title: "Studio etiquette",
    body: [
      "Wear comfortable clothes you can move freely in. Leggings and a fitted top work well. Grip socks are recommended for reformer sessions. Please bring a water bottle, and your own mat to group mat classes if you have one, or I can provide one.",
      "Please keep your phone on silent during sessions so everyone can enjoy a calm, focused space. Please remove outdoor shoes before entering the studio.",
      "Group classes are kept small, with a maximum of 15, so everyone gets attention and support. Please be respectful of others and help keep the space friendly and welcoming.",
    ],
  },
  {
    title: "Privacy",
    body: [
      "Any personal and health information you share with me is kept confidential and only used to deliver and adapt your sessions.",
      "Photos or videos may occasionally be taken during classes, but they will never be shared without your permission.",
    ],
  },
  {
    title: "Changes to these policies",
    body: [
      "These policies may be updated from time to time. Last updated 19.11.2026. If you have any questions, please get in touch.",
    ],
  },
];
