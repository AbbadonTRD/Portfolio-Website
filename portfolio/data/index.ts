import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for Marketing.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Software called Starnite",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Software for Marketing Businesses called Starnite",
    des: "All in one CRM for everyone. Currently in development, but you can already sign up for the beta version.",
    img: "/picture1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.instagram.com/ltmedia.ch/",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Upcoming School Software",
    des: "Frustrated with outdated school software from the 1980s? A modern solution is on its way, developed in collaboration with Schulen Frauenfeld.",
    img: "/Picture2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.instagram.com/ltmedia.ch/",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Learning Wizard",
    des: "An interactive learning platform designed to enhance the educational experience through gamification and personalized content.",
    img: "/Picture3.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://learningwizard.duneify.com/",
    status: "completed",
  },
  {
    id: 4,
    title: "Quarantsize",
    des: "Created a Shopify store for a client, with marketing and SEO included.",
    img: "/Picture4.svg",
    iconLists: ["/Shopify Bag.svg", "/ts.svg", "/tail.svg"],
    link: "https://quarantsize.store/",
    status: "completed",
  },
  {
    id: 5,
    title: "Starnite Construction Site",
    des: "Currently under construction: Starnite, our all-in-one CRM for Marketing & Media.",
    img: "/Picture5.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://starnite.com/",
    status: "completed",
  },
  {
    id: 6,
    title: "IT-Frauenfeld",
    des: "IT services website featuring booking functionality and a blog section.",
    img: "/Picture6.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/Supabase Icon.svg", "/ghost.svg", "/vite.svg"],
    link: "https://it-frauenfeld.ch/",
    status: "completed",
  },
  {
    id: 7,
    title: "Meliyah Afro Shop",
    des: "A booking website for a local Afro hair salon, emphasizing exceptional UX and UI.",
    img: "/Picture7.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/Supabase Icon.svg"],
    link: "https://meliyahafrohair.ch/",
    status: "in-progress",
  },
  {
    id: 8,
    title: "Tiago Carvalho Swisscom Site",
    des: "Timeline website showcasing the journey of Swisscom and its impact on the digital landscape.",
    img: "/Picture8.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://tiago-carvalho.ch/",
    status: "completed",
  },
  {
    id: 9,
    title: "LT&M Website",
    des: "Cooperate Website for lt&m showcasing our services and expertise.",
    img: "/Picture9.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/Flamelink.svg", "/vite.svg"],
    link: "https://ltmedia.ch/",
    status: "in-progress",
  },
  {
    id: 10,
    title: "Personal Portfolio for Jon Lumi",
    des: "Custom portfolio website showcasing Jon Lumi's work and achievements.",
    img: "/Picture10.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/vite.svg"],
    link: "https://jonlumi.com/",
    status: "in-progress",
  }
];

export const testimonials = [
  {
    quote:
      "I was initially skeptical when Tiago offered to create a website for me without any upfront payment. However, I now understand his motivation. He was working to establish his reputation, and I'm more than willing to invest in another website with him.",
    name: "Meliyah",
    title: "Owner of Meliyahs Afro-shop",
  },
  {
    quote:
      "Collaborating with Tiago was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tiago's enthusiasm for every facet of development & Marketing truly stands out. If you're seeking to elevate your website and elevate your brand, Tiago is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "I can't speak highly enough of Tiago's work. As a non-tech-savvy business owner, I was apprehensive about the website creation process. Tiago made it seamless and stress-free, patiently explaining each step and incorporating my feedback.",
    name: "Joyce Paola Carvalho",
    title: "Customer Manager & Team leader of Forever",
  },
  {
    quote: "I was struggling to get my business noticed online until I started working with Tiago for SEO. His approach to search engine optimization is nothing short of transformative. Within months, I saw a significant increase in organic traffic to my website and a boost in my search engine rankings. What impressed me most was Tiago's ability to explain complex SEO concepts in a way that I could understand and implement.",
    name: "Tanja Pichler",
    title: "Owner of Demakos & Baurausch"
  },
  {
    quote:
      "Tiago's work surpassed our expectations, demonstrating a level of expertise and creativity that perfectly aligned with our vision. His dedication to our project, despite the lack of immediate financial gain, spoke volumes about his character and professional ethics.",
    name: "Carole",
    title: "Co. Owner of Meliyahs Afro-shop",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
 ];

export const workExperience = [
  {
    id: 1,
    title: "UI/UX Expert",
    desc: "Leveraging UX/UI expertise to design visually appealing and intuitive interfaces. Currently contributing to Starnite, an all-in-one CRM for Marketing & Media.",
    desc2: "Leading the development of an innovative school software for Schulen Frauenfeld, designed to transform the educational experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Developer Digital Business",
    desc: "Expanding my skills as a Developer for Digital Businesses EFZ during my apprenticeship at Swisscom AG, Switzerland’s leading IT and telecommunications company. I am also engaged as a Scrum Master on a key project.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Starnite Creator",
    desc: "Our flagship product, STARNITE®, is set to revolutionize marketing & media management with AI-driven automation, intuitive content planning, and deep analytics. It’s more than software—it’s a catalyst for growth for companies and freelancers seeking to enhance their digital presence.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Founder of lt&m",
    desc: "As the founder of lt&m, I specialize in website development, marketing, SEO, and innovative software solutions. My focus is on delivering exceptional services that drive client satisfaction and success.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  { 
    id: 1,
    img: "/git.svg",
    link: "https://www.instagram.com/ltmedia.ch/"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tiago-cevallos-de-carvalho-13783a271"
  }
];