type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  id: string
  company: string
  title: string
  start: string
  end: string
  location: string
  description: string
}



type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Website Wisata Bali',
    description:
      'An interactive travel agency website built using HTML, Tailwind CSS, and JavaScript. It features sections like Home, About, Hike, Jeep, and Travel to showcase Bali’s top tourist destinations. Designed to be fully responsive and user-friendly for seamless exploration.',
    link: '',
    video: 'https://files.catbox.moe/tawjjq.mp4',
    id: 'project1',
  },
  {
    name: 'Mitra Mutiara Sparing App',
    description:
      'A Flutter-based Android application for real-time water quality monitoring. It integrates sensors for NH3N, COD, pH, and water flow rate, displaying live data through RESTful API integration. Designed to support efficient environmental monitoring systems.',
    link: '',
    video: 'https://files.catbox.moe/2gnz2k.mp4',
    id: 'project2',
  },
  {
    name: 'Quitzone App',
    description:
      'An Android application developed with Kotlin to help users quit smoking through personalized positive activities. Utilizes Machine Learning to cluster and recommend suitable activities based on user preferences. RESTful API integration enhances adaptability and user experience.',
    link: 'https://github.com/Quit-Zone/MD',
    video: 'https://files.catbox.moe/88p3gl.mp4',
    id: 'project3',
  },
  {
    name: 'Veggies App',
    description:
      'A healthy recipe recommendation app built with Flutter, designed to work fully offline. Offers a variety of recipes with filters based on difficulty level, calorie count, and ingredients. Created to promote healthy eating through a simple and intuitive interface.',
    link: 'https://github.com/AbiyyuTsaqif/foodhub',
    video: 'https://files.catbox.moe/cr2ix6.mp4',
    id: 'project4',
  }
  
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'work1',
    company: 'Mitra Mutiara',
    title: 'Software Engineer',
    start: 'Feb 2025',
    end: 'Mar 2025',
    location: 'Jakarta, Indonesia · Remote',
    description: `Designed and developed a company profile landing page using Bootstrap 5, ensuring a responsive and modern user experience.

Developed a mobile application called Sparing using Flutter for real-time water quality monitoring, tracking key parameters such as pH, COD, TSS, NH₃-N, and flow rate (Debit). The application features a modern and interactive UI, providing users with an intuitive and seamless experience for monitoring water quality in real time.`
  },
  {
    id: 'work2',
    company: 'PT. SUCOFINDO',
    title: 'IT Assistant',
    start: 'Jul 2024',
    end: 'Sep 2024',
    location: 'South Jakarta, Jakarta, Indonesia · On-site',
    description: `Developing an IT Asset Management web application using Laravel 10 and building REST APIs to enhance system functionality.

Upgrading the E-Operation application from CodeIgniter 3.2 to PHP 8.0, ensuring improved performance, security, and maintainability.

Designing and implementing REST APIs for an ERP system, enabling seamless data integration and process automation.

Mapping sensor responses via MQTT to MongoDB and developing an API using FastAPI (Python) to integrate with a Java-based mobile application for real-time data processing.`
  },
  {
    id: 'work3',
    company: 'Bangkit Academy',
    title: 'Mobile Development Cohort',
    start: 'Feb 2024',
    end: 'Jul 2024',
    location: 'Bandung, West Java, Indonesia · Remote',
    description: `Learning Kotlin for mobile application development, focusing on modern Android development practices.

Developing a responsive full-stack Android application called QuitZone, designed to encourage people to quit smoking. This application is built using Kotlin and the Jetpack Compose framework, with Firebase as the database, Google Cloud for API management, and machine learning to provide users with personalized positive activities as alternatives to smoking.

Graduated with an A and ranked among the top 50 teams in the capstone project competition.`
  }
]



export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://www.github.com/AbiyyuTsaqif',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abiyyu-tsaqif/',
  },
]

export const EMAIL = 'abiyyutsaqif16@email.com'
