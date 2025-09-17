import linkedinProfilePicture from "./assets/images/linkedin profile picture.jpeg";

const logotext = "SUR";
const meta = {
    title: "Suraj Sharma",
    description:
        "Lead Software Engineer and Project Manager delivering scalable digital experiences across cloud, mobile, and enterprise platforms.",
};

const introdata = {
    title: "I’m Suraj Sharma",
    animated: {
        first: "Lead Software Engineer & Project Manager",
        second: "Building resilient cloud-native platforms",
        third: "Championing people, process, and product",
    },
    description:
        "Motivated and adaptable professional with 5+ years delivering high-impact software, guiding teams end-to-end, and thriving in fast-moving environments across Canada, the UK, and Denmark.",
    your_img_url: linkedinProfilePicture,
};

const dataabout = {
    title: "A bit about myself",
    aboutme:
        "I blend engineering leadership, hands-on development, and client partnership to ship secure, scalable software. With experience spanning product delivery, guest services, and business analysis, I adapt quickly, communicate clearly, and keep teams focused on outcomes. Certified in Professional Scrum Master I, Azure Fundamentals, AWS Partner Accreditation (Technical) & Cloud Economics, and Scrum for Operations & DevOps, I back execution with disciplined delivery practices. University of Kent Computer Science graduate with a triple-distinction Software Development diploma from Derby College.",
};

const worktimeline = [
    {
        jobtitle: "Lead Software Engineer & Project Manager (Owner)",
        where: "Suessy · Calgary, Canada",
        date: "Jul 2025 – Present",
    },
    {
        jobtitle: "Front Desk & Bell Desk Guest Services Support",
        where: "Fairmont Chateau Lake Louise · Alberta, Canada",
        date: "May 2025 – Jul 2025",
    },
    {
        jobtitle: "Software Developer Consultant / Senior Consultant",
        where: "Netcompany · Copenhagen & London",
        date: "Apr 2022 – May 2025",
    },
    {
        jobtitle: ".NET Engineer & Support Specialist",
        where: "Tata Consultancy Services · London, United Kingdom",
        date: "Sep 2021 – Mar 2022",
    },
    {
        jobtitle: "Full Stack Web Developer",
        where: "Alphageek · Derby, United Kingdom",
        date: "Jun 2021 – Sep 2021",
    },
    {
        jobtitle: "Technical Business Analyst",
        where: "Elanco · Basingstoke, United Kingdom",
        date: "Jul 2019 – Jul 2020",
    },
    {
        jobtitle: "Sales Assistant",
        where: "Boots | Walgreens Company · Derby, United Kingdom",
        date: "Sep 2014 – Sep 2017",
    },
];

const skills = [
    {
        name: "React Native & Mobile Delivery",
        value: 90,
    },
    {
        name: "Java Spring Boot & Microservices",
        value: 92,
    },
    {
        name: "Cloud Architecture (AWS & Azure)",
        value: 88,
    },
    {
        name: "Agile Product Leadership",
        value: 95,
    },
    {
        name: "Data & Event-Driven Systems",
        value: 87,
    },
    {
        name: "Client & Stakeholder Engagement",
        value: 93,
    },
];

const services = [
    {
        title: "Product & Delivery Leadership",
        description:
            "End-to-end roadmap, sprint, and release ownership that keeps teams aligned on value, scope, and delivery.",
    },
    {
        title: "Cloud-Native Platform Engineering",
        description:
            "Designing resilient microservices with Java Spring Boot, Docker, PostgreSQL, and event-driven orchestration.",
    },
    {
        title: "Mobile & Web Application Development",
        description:
            "Building user-focused experiences with React Native, modern web stacks, and integrated backend services.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description:
            "Suessy iOS platform: spearheaded React Native app development backed by Spring Boot microservices and cloud-native infrastructure.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
        description:
            "HMRC Digital Customer Services: led Netcompany delivery streams, aligning stakeholders and delivering scalable services for millions of UK taxpayers.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
        description:
            "Cloud cost optimisation: reduced AWS spend by 25% via performance tuning and right-sized infrastructure across production workloads.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1603573355547-23c94af74cf0",
        description:
            "Operational enablement: created technical documentation and onboarding playbooks that accelerated team ramp-up and knowledge transfer.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf",
        description:
            "Guest experience operations: supported luxury resort front-of-house teams with concierge, valet, and multi-department coordination.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        description:
            "Retail & customer engagement: delivered high-touch service, merchandising, and sales support across Boots / Walgreens locations.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "suraj.sharma1998@yahoo.com",
    YOUR_FONE: "+1 (587) 576-4213",
    description:
        "Based in Calgary, AB (T2J6M7). Let’s connect on building resilient products, optimising operations, or exploring new opportunities across tech and business.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "#",
    github: "#",
    linkedin: "#",
    twitter: "#",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
