// Edit this file only: all the text of the site lives here.
export const profile = {
  name: "Djibril Djiré",
  title: "Frontend Engineer",
  headline: "Frontend engineer. My apps have been downloaded 100K+ times.",
  intro:
    "I build React, Next.js and React Native interfaces with designers and backend engineers. Nearly 5 years of professional experience, based in Lomé, working with teams in Mali.",
  email: "djibrilpendadjire@gmail.com",
  phone: "+228 79 09 80 80",
  linkedin: "https://www.linkedin.com/in/djibril-djir%C3%A9-025554245/",
  cv: "/cv.pdf", // put your exported CV in /public/cv.pdf
};

export const skills = [
  { group: "Web", items: "React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, SASS" },
  { group: "State", items: "Redux, Zustand, Context API" },
  { group: "Mobile", items: "React Native, Expo, App Store and Google Play releases" },
  { group: "Testing", items: "Jest, Vitest, Playwright" },
  { group: "Backend", items: "REST APIs, Node.js, PHP, Laravel" },
];

// Projects. The first two entries are the "featured" projects rendered with
// phone screenshots.
//
// HOW TO ADD SCREENSHOTS
// 1. Export portrait phone screenshots (a 9:19.5 ratio fits the phone frames
//    best, e.g. 450x975 px) and drop the files into /public.
// 2. List their public paths in the `screens` array of the matching project,
//    in the order you want them shown (left to right).
// 3. Up to 3 screens are shown per featured project; extra entries are ignored.
//    With 1 or 2 screens the frames stay centered and balanced.
// 4. A project without `screens` shows three empty placeholder frames.
//
// Example:
//   screens: ["/kabakoo-1.png", "/kabakoo-2.png", "/kabakoo-3.png"],
export const projects = [
  {
    name: "Kabakoo App",
    screens: ["/kabakoo-1.png"] as string[], // add more files in /public and list them here
    stack: "React Native, Expo",
    summary: "Mobile learning app on the App Store and Google Play, with over 100K downloads.",
    role: "I develop and maintain the app with designers and backend engineers.",
    // TODO: add a screenshot in /public and a metric (rating, active users)
  },
  {
    name: "CICB GO (bamako.ai event)",
    screens: ["/cicb-go-1.png"] as string[], // add more files in /public and list them here
    stack: "React, Socket, Zustand",
    summary:
      "Interactive game where participants earn reward points while discovering Malian and African culture. 20K+ users in 5 days.",
    role: "Built with my team. I worked on the frontend.",
  },
  {
    name: "bamako.ai, Season 1",
    stack: "React, PHP",
    summary:
      "Web app for the yearly bamako.ai event: play to earn points before the final day, with a real-time leaderboard.",
    role: "I built the frontend and the backend.",
  },
  {
    name: "CFPM App",
    stack: "React Native",
    summary: "Mobile app for the students of a training center in Mali, on the App Store and Google Play.",
    role: "Built by Kabakoo; add your exact contribution here.",
  },
];

export const experience = [
  { role: "Frontend Developer, Kabakoo", period: "January 2022 to present", text: "React Native apps in production, REST API integration, releases." },
  { role: "Web Development Trainer, Kabakoo", period: "2023 to present", text: "Teaching HTML, CSS, JavaScript, React and PHP." },
  { role: "Licence in Computer Science, Institut Universitaire de Gestion de Bamako", period: "2017 to 2020", text: "" },
];

export const tech = ["React", "Next.js", "TypeScript", "React Native", "Expo", "Redux", "Zustand", "SASS", "Jest", "Vitest", "Playwright", "Node.js", "PHP", "Laravel"];
export const openTo = "Currently open to join a product team that values reliable, well-tested interfaces.";
