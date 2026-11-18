// Placeholders: swap in your real policies. Each string in `body` is one paragraph.
export type Policy = { title: string; body: string[] };

export const policies: Policy[] = [
  {
    title: "Bookings",
    body: [
      "[How clients book sessions, how far in advance, and how they'll receive confirmation.]",
    ],
  },
  {
    title: "Cancellations",
    body: [
      "[Your cancellation notice period, e.g. 24 hours, and what happens to sessions cancelled late or missed.]",
    ],
  },
  {
    title: "Late arrivals",
    body: [
      "[What happens if a client arrives late, and whether the session still ends at the usual time.]",
    ],
  },
  {
    title: "Payments & refunds",
    body: [
      "[Accepted payment methods, when payment is due, how packages and expiry dates work, and your refund policy.]",
    ],
  },
  {
    title: "Health & safety",
    body: [
      "[Health questionnaire requirements, letting you know about injuries, pregnancy or medical conditions, and taking part at your own pace.]",
    ],
  },
  {
    title: "Studio etiquette",
    body: [
      "[What to wear and bring, phones, shoes, and anything else that keeps the studio calm and comfortable for everyone.]",
    ],
  },
];
