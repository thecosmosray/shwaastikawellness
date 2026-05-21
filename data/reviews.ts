export type Review = {
  id: string;
  name: string;
  time: string;
  rating: number;
  review: string;
};

const googleReviews: Review[] = [
  {
    id: "google-guneeta-choudhary",
    name: "Guneeta choudhary",
    time: "1 year ago",
    rating: 5,
    review:
      "Awesome to explore self through Preeti, through her holistic wellness instruments and skills I got free of so many blockages. I am grateful.",
  },
  {
    id: "google-namita-mann",
    name: "Namita Mann",
    time: "2 years ago",
    rating: 5,
    review:
      "Preeti mam has taken care of me when I was on the edge of breaking and at that point she had patiently listened me, understood me and guided me. I sincerely thank her for her love and guidance. I will continue to take her support in future too.",
  },
  {
    id: "google-jitender-kumar",
    name: "JITENDER KUMAR",
    time: "2 years ago",
    rating: 5,
    review: "Very nice. Excellent yoga sessions.",
  },
  {
    id: "google-tarun-jhatta",
    name: "TARUN JHATTA",
    time: "2 years ago",
    rating: 5,
    review:
      "I am Tarun Jhatta Advocate Punjab And Haryana High Court Chd. I m former executive member of Punjab and Haryana High court bar Association. Mera beta 27.March.2023 ko hua tha Jo after birth cry nahi Kiya tha. Maine apne bete ka treatment PGI Chd. se karvaya or homeopathy medicine bhi li in the meantime mujhe mere friend ne Preety didi ke baare Mai bataya. Didi ne mere bete ka 4 din treatment Kiya ab treatment k bahd mere bete ki chest ka issue solve hua hai pehle kaafi awaz aati thi vo ab nahi hai, seizures pehle se kafi Kam huye Hain or eyes pehle ghumata tha ab stable hai vo bhi theek hain. Didi se Milne k bahad mai aur meri wife kafi positive hain aur didi treatment k bahd bhi daily guide krte hain taa Jo positive environment bnaa rhe aur bete ki recovery as early as possible ho jaaye. I am thankful to Preeti didi for giving us family environment.",
  },
  {
    id: "google-paras-kumar",
    name: "Paras Kumar",
    time: "2 years ago",
    rating: 5,
    review: "She save life of my daughter",
  },
  {
    id: "google-ruchi-dewan",
    name: "ruchi dewan",
    time: "2 years ago",
    rating: 5,
    review: "Very peaceful session's ensuring complete wellness.All the best!!",
  },
  {
    id: "google-mehtab-singh",
    name: "mehtab singh",
    time: "2 years ago",
    rating: 5,
    review:
      "Thank you Ma'am for your magnanimous support to resolve one of the onerous task in my life. Your thoughtful suggestions will always be solicited...",
  },
  {
    id: "google-sai-gokul-ramnath",
    name: "Sai Gokul Ramnath",
    time: "2 years ago",
    rating: 5,
    review:
      "The CST sessions with Preeti gave me a lot of clarity on primal aspects of life that I am sure will be productive for my personal growth.\n\nPreeti is practical, empathetic, ethical, thoughtful, balanced, and yet direct the point.\n\nWith her genuine care and kindness I'm sure her therapy sessions would certainly benefit anyone who is seeking for a Therapy.",
  },
  {
    id: "google-m-a",
    name: "M A",
    time: "3 years ago",
    rating: 5,
    review:
      "She is a beautiful, soulful yoga teacher, and also a wonderful and inspiring human. Thankful to have met her and had the loveliest session recently!",
  },
  {
    id: "google-anurag-tiwari",
    name: "anurag tiwari",
    time: "3 years ago",
    rating: 5,
    review:
      "If you are looking for one stop solution for a healthy mind and fit body.....look no further.\n\nPreeti is a very friendly and professional yoga teacher. Let her know your goals, and she will carefully adjust the sequence and particularly help you work towards them. I highly recommend Preeti and her studio to anyone who wants an amazing yoga experience!",
  },
  {
    id: "google-priti-mishra",
    name: "PRITI MISHRA",
    time: "3 years ago",
    rating: 5,
    review:
      "My pregnancy journey was handheld with such tenderness and care by Preeti that it felt like a beautiful dream. She guided me with right nutrition exercises and meditation to keep me and my baby healthy. I can't thank her enough.",
  },
  {
    id: "google-sharma-kaku",
    name: "Sharma Kaku",
    time: "4 years ago",
    rating: 5,
    review:
      "I have taken yoga sessions from Shwaastika wellness. I was suffering from backache for long. The session are so effective that I was healed and back on my feet up in no time. I recommend classes from Preeti maam for every one. Sessions are full of energy and meditations are very deep.",
  },
  {
    id: "google-sunita-pant",
    name: "Sunita Pant",
    time: "4 years ago",
    rating: 5,
    review:
      "आपकी योगा क्लास काफी उत्साहवर्धन है क्योंकि आप हमेशा सकारात्मक और ऊर्जावान भाव प्रदर्शित करती हैं",
  },
  {
    id: "google-aarzoo-trehan-vyas",
    name: "Aarzoo Trehan Vyas",
    time: "4 years ago",
    rating: 5,
    review:
      "On a journey that is so memorable, pure and challenging there is one thing that kept me going strong all through my pregnancy - Yoga. Pregnant and being able to do so much with your mind and body, knowing that it is going to affect you and your baby so positively, is what I learnt with @preetysemwalbembi. I am thankful for her guidance, support, encouragement and also for understanding my bodily capability to perform various asanas. I would strongly recommend taking pre and post natal clases with her because it is not just physical fitness but mental fitness you need during this time. No matter how much support you have, what you are going through is always going to be your personal journey. My baby and I have such fond memories with you Preety because you have touched us with all your ❤️ Thank you for everything!",
  },
];

export const extractedReviews: Review[] = [...googleReviews].sort(
  (first, second) => second.review.length - first.review.length,
);
