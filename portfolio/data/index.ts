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
    des: "Explore the wonders of our Software Starnite.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/Coming Soon",
  },
  {
    id: 2,
    title: "ltmedia's Instagram",
    des: "check out the Instagram Page of ltmedia.",
    img: "/p2.svg",
    iconLists: [],
    link: "/https://www.instagram.com/ltmedia.ch/",
  },
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
      "I was initially skeptical when Tiago offered to create a website for me without any upfront payment. However, I now understand his motivation. He was working to establish his reputation, and I'm more than willing to invest in another website with him.",
    name: "Meliyah",
    title: "Owner of Meliyahs Afro-shop",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.s65vg",
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js & and my own Website-Builder enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Developer Digital Business",
    desc: "Expanding my expertise as a trainee at Swisscom AG, Switzerland's leading IT and Telecommunication company, in the role of Developer for Digital Businesses EFZ. I'm also engaged in a project as a Scrum Master,",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Starnite Creator",
    desc: "Our crown jewel, STARNITE®, is revolutionizing marketing & media management with its AI-driven automation, intuitive content planning, and deep analytics. It's not just software; it's a growth catalyst for B2B companies looking to amplify their digital presence.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Owner of Leading Technologies - Media",
    desc: "As the founder of ltmedia, I specialize in mostly B2B software solutions.",
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