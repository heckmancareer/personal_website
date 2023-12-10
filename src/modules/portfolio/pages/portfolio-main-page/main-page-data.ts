
export const PORTFOLIO_DATA = {
  navLinks: [
    {
      text: 'Intro',
      icon: 'desktop',
      navTarget: 'introSection'
    },
    {
      text: 'Skills',
      icon: 'wrench',
      navTarget: 'skillsSection'
    },
    {
      text: 'Employment History',
      icon: 'book',
      navTarget: 'employmentHistorySection'
    },
    {
      text: 'Certifications',
      icon: 'check-square',
      navTarget: 'certificationsSection'
    },
    {
      text: 'Projects',
      icon: 'briefcase',
      navTarget: 'projectsSection'
    },
    // {
    //   text: 'About Me',
    //   icon: 'user',
    //   navTarget: 'aboutMeSection'
    // },
  ],
  skills: [
    {
      groupName: 'Core Technologies',
      groupSkills: [
        {
          imagePath: 'html.svg',
          imageLabel: 'HTML'
        },
        {
          imagePath: 'css.svg',
          imageLabel: 'CSS'
        },
        {
          imagePath: 'javascript.svg',
          imageLabel: 'JavaScript/TypeScript'
        },
      ]
    },
    {
      groupName: 'Frameworks',
      groupSkills: [
        {
          imagePath: 'angular.svg',
          imageLabel: 'Angular'
        },
        {
          imagePath: 'svelte.svg',
          imageLabel: 'Svelte'
        },
        {
          imagePath: 'vue.svg',
          imageLabel: 'Vue'
        },
        {
          imagePath: 'phoenix.svg',
          imageLabel: 'Phoenix'
        },
      ]
    },
    {
      groupName: 'Cloud Services',
      groupSkills: [
        {
          imagePath: 'aws.svg',
          imageLabel: 'AWS'
        },
        {
          imagePath: 'firebase.svg',
          imageLabel: 'Firebase'
        },
        {
          imagePath: 'mongodb.svg',
          imageLabel: 'MongoDB'
        },
      ]
    },
    {
      groupName: 'Misc Technologies',
      groupSkills: [
        {
          imagePath: 'cypress.png',
          imageLabel: 'Cypress'
        },
        {
          imagePath: 'jest.svg',
          imageLabel: 'Jest'
        },
        {
          imagePath: 'nestjs.svg',
          imageLabel: 'NestJS'
        },
        {
          imagePath: 'electron.svg',
          imageLabel: 'Electron'
        },
        {
          imagePath: 'wave.svg',
          imageLabel: 'WAVE'
        }
      ]
    }
  ],
  employmentHistory: [
    {
      logoPath: 'vanguard.png',
      employerName: 'The Vanguard Group, Inc.',
      employerDescription: 'American registered investment advisor that is the largest provider of mutual funds and the second-largest provider of exchange-traded funds in the world.',
      startDate: 'July 2021',
      endDate: 'Present',
      jobTitle: 'Application Engineer II',
      summaryBullets: [
        'Led an initiative to create an Angular front-end for new internal data management platform. Created charts and tables to help business users monitor cloud processes, using libraries such as AG-Grid and AM Charts.',
        'Partitioned out and managed multiple AWS resources responsible for feeding data to the front-end, such as Lambdas and ECS instances for our APIs.',
        'Maintained Python library that was adopted by other teams to help them publish custom business events that would be ingested by our platform for visualization.',
      ],
      primarySkills: [
        {
          imagePath: 'angular.svg',
          imageLabel: 'Angular'
        },
        {
          imagePath: 'aws.svg',
          imageLabel: 'AWS'
        },
        {
          imagePath: 'python.svg',
          imageLabel: 'Python'
        }
      ]
    }
  ],
  certifications: [
    {
      logoPath: 'aws-cloud-practitioner.png',
      certName: 'AWS Cloud Practitioner',
      dateAcquired: 'December 2023',
      vendorLink: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      certDescription: `"The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.  This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy."`,
      certEvidencePath: ''
    },
    {
      logoPath: 'bloomsburg.png',
      certName: 'Bloomsburg University Bachelors Degree of Computer Science',
      dateAcquired: 'May 2021',
      vendorLink: 'https://www.bloomu.edu/academics/programs/computer-science-bs',
      certDescription: 'Computer Science (B.S.) acquired from the ABET accredited program of Bloomsburg University. Completed a curriculum heavily focused in math, Java, and data structures.',
      certEvidencePath: ''
    }
  ],
  projects: [
    {
      imagePath: 'ip-tracker.png',
      projectName: 'IP Address Tracker',
      codeRepoLink: 'https://github.com/heckmancareer/frontend-mentor_ip-address-tracker',
      demoLink: 'https://heckmancareer.github.io/frontend-mentor_ip-address-tracker/',
      projectDescription: 'A Front-End Mentor exercise to create UI that allows a user to input an ID address, then displays its global geographic position on a map.',
      skillsDemonstrated: [
        {
          imagePath: 'html.svg',
          imageLabel: 'HTML'
        },
        {
          imagePath: 'css.svg',
          imageLabel: 'CSS'
        },
        {
          imagePath: 'javascript.svg',
          imageLabel: 'JavaScript'
        }
      ]
    }
  ]
}