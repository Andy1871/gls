export interface Testimonial {
  name: string;
  text: string;
  image?: string;
  // Shown in the circle when there is no photo; worked out from the name if left out
  initials?: string;
  rating: number;
}

// Google reviews, copied word for word. "\n\n" is a paragraph break.
export const testimonials: Testimonial[] = [
  {
    name: "Amelia Roberts",
    text: "I have been going to Tasha’s Mat classes for over a year now and I don’t think I will ever stop! I cannot recommend Tasha and her classes enough, she is an absolutely amazing teacher, who is knowledgeable, encouraging and extremely passionate about what she does! Every class is thoughtfully planned, with a perfect balance of challenge and relaxation and she always makes sure everyone feels comfortable and supported, whatever their level. I have noticed a difference in my strength, flexibility and overall wellbeing since starting and this is all down to Tasha.\n\nTasha’s energy is infectious and she creates such a welcoming and positive space which makes her classes something to truly look forward to! If you’re are thinking about starting Pilates, then I would 100% recommend going to Tasha’s classes, you won’t regret it!🤍",
    rating: 5,
  },
  {
    name: "Sophie Lines",
    text: "I’ve been strength training for several years now, but wanted to introduce a new way of working out into my weekly regime. I didn’t know what to expect from a Pilates class and was a bit nervous as I walked in for the first time. Tash made me feel welcome and at ease. I’ve now been going for a few months now and am really enjoying it. The classes are well organised, friendly and as it’s a mixed ability class, you can go at a pace that suits you. On the days where maybe you’re not feeling it! there’s no pressure, just maybe a bit of ‘gentle’ encouragement! Tash’s Wednesday evening mat class is always full as it’s so popular, so you need to get booked in early! As a woman in her 50’s and being more conscious about the importance of my physical and mental wellbeing, Pilates and Tash’s class has been a great addition to my looking after my future self. Great for working on your core strength and mobility! Great class! Great teacher and would highly recommend! See you next week Tash! 💗",
    rating: 5,
  },
  {
    name: "Gemma Setchell",
    text: "I have been doing Pilates with Natasha for about 9 months now and it has been amazing. I was nervous initially as haven’t done any exercise for a while post children but she has created a welcoming studio and is really supportive. She tailored the movements to suit my skill level and I love the mix of mat and reformer Pilates in a session too. I’d highly recommend giving her a try if you’re interested in Pilates.",
    rating: 5,
  },
  {
    name: "Atifa A",
    text: "Tasha is a fantastic Pilates instructor - I cannot recommend her enough. She's created a lovely space for reformer and mat Pilates. She tailors each session and exercise to your needs and capacity. I'm seeing so many improvements from our 1:2:1 sessions that I never thought were possible. She's listens to all my concerns and what I'd like to focus on. As a complete beginner to Pilates, she made me feel comfortable and confident with trying something new and now it's something I look forward to every week!\n\nHer sessions are always very well thought out as she builds up the intensity of the exercises. She demonstrates/explains the exercises clearly and motivates you to dig deeper.\n\nShe's a great teacher and always has a warm, welcoming and friendly approach. She's very passionate about Pilates and fitness and it shines through in her amazing work. I would 100% recommend Green Life Pilates for reformer or mat Pilates.",
    rating: 5,
  },
  {
    name: "Issy Hazelden",
    text: "I cannot recommend Tasha enough! She is amazing at what she does and creates such a welcoming environment.\n\nI’ve been attending her group mat classes for over a month now and absolutely love them! I enjoyed them so much that I decided to try reformer Pilates as well, and I’m so glad I did. The 121 sessions with Tasha have been fantastic. I would 100% recommend her classes to anyone!",
    rating: 5,
  },
  {
    name: "Charlotte Read",
    text: "Tasha has been very welcoming and tailored the pilates to suit me. It's been very enjoyable and I always feel good after a session.",
    rating: 5,
  },
  {
    name: "Eleanor Kempton",
    text: "I’ve been going to Tasha’s group mat class for about 7 months now and I always really enjoy the classes. I hadn’t done Pilates in years so started as a beginner again, and I feel a lot stronger and can see a positive change in my body. Tasha and the class in general is very welcoming and friendly!",
    rating: 5,
  },
  {
    name: "Lily Lines",
    text: "I absolutely love going to Green Life Pilates with Tasha! I’ve been going to both reformer and mat classes for a few months now, and highly recommend both. Tasha has personalised my training to ensure it matches my strengths and weaknesses, and tailors to my needs alongside my marathon training. Always a fun yet challenging session! A highlight of my week 🥰",
    rating: 5,
  },
  {
    name: "Rachel Mott",
    text: "Been going to Tasha’s mat class for over a year and love it! She’s so lovely and welcoming. Highly recommend 💕",
    rating: 5,
  },
  {
    name: "Brogan Amica",
    text: "Tasha has been amazing at supporting me through my journey in Pilates I started as a complete reformer beginner and together we built my confidence so that I finally feel really to go into a group class she is such a lovely person and a fun energy to be around! Definitely recommend",
    rating: 5,
  },
  {
    name: "The Surrey Laser Room",
    text: "This was my first time trying reformer Pilates and I absolutely loved it! Tasha is just so lovely and welcoming and really tailors the session to your abilities. Pilates is now part of my weekly routine and I feel so good for it 💖",
    rating: 5,
  },
  {
    name: "Sarah-Jane Sykes",
    text: "Tasha is a fantastic Pilates instructor. When I first met Tasha I was struggling with motion sickness on the reformer. She was not phased by this and tailored my 1-1 to sessions so I don’t get the sickness but still achieve the most out of the session. I enjoy seeing Tasha every week as I know she will give me a good workout but still have a good laugh and a chat in between sets.",
    rating: 5,
  },
  {
    name: "Lisa Watson",
    text: "This is my first time doing Pilates and I can’t recommend it enough- I love it! I was worried about being a beginner with the main goal of wanting to feel stronger but I instantly felt comfortable in Tasha’s class! She is an amazing teacher that explains and demonstrates every aspect of each move in a clear and articulate way. She takes her time with everyone and listens to everyone’s differences to then offer various options for the different levels. She shares her knowledge of all the Pilates moves and what parts of the body it focuses on. You can tell how passionate she is about Pilates and fitness in general- really it’s a pleasure going to her class 🥰",
    rating: 5,
  },
  {
    name: "Shannon Glew",
    text: "Tasha’s classes have been amazing since I have started. She has made it a very friendly environment where all levels can go and learn. She is amazing at adapting to all abilities and I would highly recommend for anyone looking to start or rejoin Pilates.",
    rating: 5,
  },
  {
    name: "Veronica Evans",
    text: "Myself and my daughter started with Tasha at Greenlife back in April and have throughly enjoyed our duo sessions split between Reformer and mat. A great way to get a taste for both styles.\n\nBoth of us are at completely different fitness levels and Tasha was able to adapt to our abilities so we both got so much out of each session.\n\nNeither of us had done Pilates before and were surprised at how much of a full body work out it was! Our main reason for choosing the duo session was primarily to get an understanding of Pilates and a little bit of confidence before attending group sessions, as well as being able to do something together despite are very opposite abilities!\n\nTashas space is inviting and calming. Her teaching technique is perfectly pitched and her ability to flex between two different abilities and learning styles was very impressive! I would have got completely confused 😂\n\nHighly recommend Tasha and Greenlife Pilates for all ages and abilities. Tasha herself is such a lovely person who makes you feel completely at ease.",
    rating: 5,
  },
  {
    name: "Suzanne Foster",
    text: "Very easy to book my mat sessions and Tasha is so lovely. Would recommend to anyone",
    rating: 5,
  },
  {
    name: "Shannon Devine",
    text: "Have been doing Pilates with Tasha since November 2024. I was a complete beginner.\nTasha is amazing at teaching she explains the exercises to us so clearly and the benefits which I love. I am starting to see a difference in my body and I feel much stronger. I can’t recommend Tasha enough.",
    rating: 5,
  },
  {
    name: "Ruby",
    text: "Love Tasha’s mat Pilates class! Such good fun, Tasha is so lovely and her classes are brilliant. Would definitely recommend!",
    rating: 5,
  },
  {
    name: "Jade Anders",
    text: "I was nervous for my first pilates class, however, Tasha welcomed me and made me feel very comfortable. I really enjoyed the group mat pilate class, and will be returning!",
    rating: 5,
  },
  {
    name: "AJR Nails",
    text: "I started duo sessions with Tash in march & been loving them ever since! I’ve noticed such a difference physically since doing weekly sessions & feel a lot stronger/ more toned. Tash is so lovely & welcoming, we love our chats aswell as she pushes us to work harder each week!",
    rating: 5,
  },
  {
    name: "Life neRutendo",
    text: "Absolutely loved the classes. I don't feel pressured to have to get it right. Definitely feel refreshed and stretch though. Tash is amazing and very friendly. I highly recommend 🙌🏾",
    rating: 5,
  },
  {
    name: "Pippa Allen",
    text: "Cannot recommend Tasha at Green Life Pilates enough. She has a wonderful set up and is super supportive. Would recommend to everyone and anyone!!",
    rating: 5,
  },
  {
    name: "Ellie Nicholson-Shiel",
    text: "Highly recommend Green Life Pilates with Tasha, I love my sessions, such a warm inviting environment! I felt confident straight away x",
    rating: 5,
  },
  {
    name: "Georgia Crowe",
    text: "Tasha is an amazing and incredibly knowledgeable instructor and the studio is absolutely gorgeous, 10/10 would recommend!",
    rating: 5,
  },
  {
    name: "Antoinette Johnston",
    text: "Tasha is great and always makes the session fun but also challenging",
    rating: 5,
  },
  {
    name: "Molly Holt",
    text: "Loved it!! 5/5 great teacher & class",
    rating: 5,
  },
];
