const ExperienceData = [
  {
    start: "2019-06",
    finish: "PRESENT",
    position: "Software Engineering Lead",
    company:
      "RDCCO Pty. Ltd. / Permaconn",
    projects: [
      {
        role: "Software Engineering Lead",
        name: "Permaconn Engineering/Product Team",
        start: "2019-06",
        finish: "PRESENT",
        description:
          "Permaconn manufacture and manage IoT devices for high security high availability alarm system communication. The Software team is a small engineering team responsible for fleet automation, CRM, billing, website, customer facing apps and other operations systems.",
        achievements: [
          "I transitioned into the engineering lead of the design, development, testing and operations of this team.",
          "I set up an efficient and ad-hoc agile process fit for team members experience and my service leadership style. I've supported and protected my team members, helped them grow, mentoring and cheerleading them as as necessary to be more engaged and do their best work. I have promoted a culture of autonomy, excellence and openness.",
          "I developed, helped develop and facilitated the development of many new products and services in collaboration the team, with internal teams and external partners.",
          "I introduced continuous integration and automated testing to the team. There were no automated tests prior to my arrival.",
          "I introduced modern DevOps tools and practices to the team. This includes zero downtime deployments, monitoring tools, containerisation, orchastration tools etc.",
          "I transitioned a large monolithic legacy system developed over many years to a high scalability availability microservices architecture."
        ],
        technology: [
          "High Scalability",
          "AWS",
          "High Security",
          "Monolithic architecture",
          "Microservices architecture",
          "TypeScript",
          "JavaScript",
          "NodeJS",
          "React",
          "REST API Design",
          "RPC API Design",
          "C++",
          "DevOps",
          "Docker",
          "Docker Swarm", 
          "Python",
          "Ademco Contact ID",
          "Alarm Systems",
          "Cost Optimisation"
        ],
        soft: [
          "Leadership",
          "Requirements Engineering",
          "Technical Documentation",
          "Recruitment",
          "Mentoring",
          "Prioritisation"
        ],
      }
    ]
  },
  {
    start: "2016-07",
    finish: "2019-06",
    position: "Senior Software Engineer",
    company:
      "Commonwealth Scientific and Industrial Research Organisation (CSIRO) - Data61",
    projects: [
      {
        role: "Technical Lead",
        name: "Free Trade Agreement (FTA) Portal",
        start: "2015-04",
        finish: "2019-06",
        description:
          "FTA Portal was a strategic partnership project with Department of Foreign Affairs and Trade (https://ftaportal.dfat.gov.au/). This project was aimed at making FTA data more accessible for Australian importers and exporters.",
        achievements: [
          "I developed initial prototypes to demonstrate NICTA's ability to deliver to requirements which lead us to win the bidding for the work.",
          "Subsequently, I took ownership of the project, architected, developed and delivered first three phases of this project over four years. This project was handed over to subcontractors for further development and maintenance earlier this year.",
          "I technically lead a multi-disciplinary team of 6-8 members (3-4 Data61 side and 3-4 customer side). I became a domain expert on FTA data. I helped mentor, advise and on-board on technical and domain matters. I enabled work experience students; new and substitute developers; user experience designers, project managers; and members of team on customer side.",
          "I developed a natural language search engine that allows obscurely described product classifications used in foreign trade to be identified via commonly used terms.",
          "I designed a highly scalable public facing REST API for serving trade data.",
          "I produced high standard technical documentation to communicate architecture and designs."
        ],
        technology: [
          "High Scalability",
          "AWS",
          "High Security",
          "ISM",
          "Query Expansion",
          "Server-client architecture",
          "CQRS",
          "TypeScript",
          "JavaScript",
          "NodeJS",
          "React",
          "Natural Language Processing",
          "Information Retrieval / Search",
          "Data Engineering",
          "Word2vec",
          "Wordnet",
          "REST API Design",
          "Python"
        ],
        soft: [
          "Leadership",
          "Requirements Engineering",
          "Technical Documentation",
          "Customer Liaison",
          "Mentoring",
          "Prioritisation",
          "Estimation"
        ],
        images: [
          require("./images/ftaa-1.png"),
          require("./images/ftaa-2.png"),
          require("./images/ftaa-3.png")
        ]
      },
      {
        role: "Senior Engineer",
        start: "2018-07",
        finish: "2019-06",
        name: "Make Australian Government Data Available (MAGDA)",
        description:
          "MAGDA was an open source federated data discovery portal – https://magda.io/. It sourced and harmonised datasets from multiple data catalogues and made them discoverable in one place. It currently powers Australian Government's open data portal (https://data.gov.au/).",
        achievements: [
          "I contributed towards its ongoing architecture, design, development and devops. This included a content management system and associated microservice, a privacy preserving dataset duplicate detection feature and drag and drop add dataset functionality.",
          "I helped the team find its long term goals, vision and customer value proposition with discussion, market analysis, customer interviews, helping facilitate a workshop and participating in a pre-accelerator program."
        ],
        images: [
          require("./images/magda-1.png"),
          require("./images/magda-2.png")
        ],
        technology: [
          "Cloud native (Google Cloud)",
          "Microservices",
          "TypeScript",
          "JavaScript",
          "React",
          "NodeJS",
          "Scala",
          "REST API",
          "ElasticSearch",
          "PostgreSQL"
        ],
        soft: [
          "Agile",
          "Scrum",
          "Kanban",
          "Customer Interviews",
          "Prioritisation",
          "Estimation"
        ]
      },
      {
        role: "Senior Engineer",
        name: "Digiscape",
        start: "2018-01",
        finish: "2018-06",
        description:
          "Digiscape was CSIRO’s Agricultural Sciences Platform that manages sensor data (e.g. rainfall), runs models on sensor data. A new model needed to be integrated and delivered for Digital Agricultural Services (https://digitalagricultureservices.com/).",
        achievements: [
          "I productified and tested risk assessment research model written in R and integrated it to the Digiscape platform.",
          "I produced easy to understand prototypes for customer explaining how to integrate with CSIRO platform programmatically via REST API.",
          "I further developed the platform and API to simplify integration of third-party systems."
        ],
        technology: ["Java", "REST API", "Event Sourcing", "R", "JavaScript"]
      },
      {
        role: "Data harmonisation lead",
        name: "Expert Connect",
        start: "2017-01",
        finish: "2017-06",
        description:
          "Expert Connect was Data61's platform that was the one stop discovery portal of Australian research capability (https://expertconnect.global/). It harvested and harmonised data from multiple sources and indexed them.",
        achievements: [
          "I architected and prototyped data harvesting and harmonisation modules for the first version of Data61 Expert Connect platform. This involved integrating with a number of data sources of grants, publications and patent systems through different types of APIs. The prototype was used for the product's initial launch and subsequent ministerial launch demo."
        ],
        technology: ["Data Engineering", "Golang", "REST", "SOAP"]
      }
    ]
  },
  {
    start: "2011-11",
    finish: "2016-06",
    position: "Software Engineer",
    company: "National ICT Australia (NICTA)",
    projects: [
      {
        role: "Engineer",
        name: "Groundwater Visualisation",
        start: "2014-07",
        finish: "2016-07",
        description:
          "Groundwater Visualisation was a tool to aid decision making in NSW Coal Seam Gas policy-making space. Groundwater subsurface modelling used to be  required before coal seam gas mining could take place. However, the models could be incorrectly produced due to human error or to conclude any results and there was no way to visually or programmatically check these models.",
        achievements: [
          "I built the highly performant browser based 3d subsurface visualisation tool on top of TerriaJS for investigating subsurface modelling and borehole data.",
          "I built time travel functionality for viewing time series model data where available.",
          "I built visual 3d slicing tool for cutting arbitrary intersections within 3d models and comparing model data with borehole data along those intersections.",
          "I designed and implemented an optimised binary format for storing, transferring, inspecting and rendering large 3d model datasets inside browser."
        ],
        technology: [
          "Python",
          "JavaScript",
          "TerriaJS",
          "CesiumJS",
          "Matlab",
          "Maths",
          "C++"
        ],
        images: [
          require("./images/groundwater-1.png"),
          require("./images/groundwater-2.png")
        ]
      },
      {
        role: "Engineer",
        name: "LandSat Demo",
        start: "2015-03",
        finish: "2015-04",
        description:
          "This was a proof of concept demo for a collaboration project. This was to demonstrate ability detect changes in vegetation from Satellite imagery.",
        achievements: [
          "I built a prototype to read in LandSat GeoTiff images using C++ to remove noise and normalised input image data for machine learning.",
          "I trained and built model for filling gaps in LandSat imagery due to clouds etc. using SVM",
          "I trained and built model for predicting deforestation."
        ],
        technology: ["C++", "Data Cube", "Matlab"]
      },
      {
        role: "Engineer",
        name: "Geothermal Data Fusion",
        start: "2014-05",
        finish: "2014-07",
        description:
          "Drilling a hole to detect if there are hot rocks underground for geothermal power stations costs upwards of millions of dollars. GDF was a project for speedy and cost effective detection of potential geothermal power station locations based on sensor data (e.g. gravity, seismic, magnetic etc.).",
        achievements: [
          "I implemented new sensor simulation models to complete the platform.",
          "I scaled simulating models into computing cluster (SGE) and cloud (AWS) for speedy simulation running.",
          "I developed tests and helped reduce technical debts of this platform written in C++"
        ],
        technology: ["Python", "C++", "Boost", "AWS", "ZeroMQ", "Maths"]
      },
      {
        role: "Engineer",
        name: "Automap",
        start: "2011-11",
        finish: "2014-05",
        description:
          "Automap was an Automated Asset Mapping solution from video streams and point cloud sensor data (https://www.youtube.com/watch?v=EsgHkOswsAI).",
        achievements: [
          "I helped design and built platform for distributing large amount of computer vision batch processing work into computing cluster (SGE) and offshore QA processing.",
          "I helped design and built a standalone version of Automap product for an industry partner who wanted to do processing work in house on a single server.",
          "I commercialised computer vision research for automatic classification of assets prior to QA work in image processing and point cloud data.",
          "I designed and built several web-based point cloud libelling and visualisation tools to support computer vision research."
        ],
        technology: [
          "Python",
          "C++",
          "Maths",
          "ThreeJS",
          "Sun Grid Engine (SGE)",
          "ORM"
        ],
        images: [
          require("./images/automap-1.png"),
          require("./images/automap-2.png")
        ]
      }
    ]
  },
  {
    start: "2010-02",
    finish: "2011-11",
    position: "Software Engineer",
    company: "Office of Spatial Policy",
    achievements: [
      "I lead a team of four students to design and develop the extensible xMET ANZLIC desktop metadata entry tool. This tool was meant to take in arbitrary metadata standard schema and produce metadata entry interface of said schema. I later worked with a mentor to further refine the product for the department.",
      "I worked with various metadata management tools including Geonetwork open source metadata catalogue. ",
      "I worked several requirements engineering and procurement processes for agency projects including the national gazetteer project."
    ],
    technology: ["Java", "Swing"]
  },
  {
    start: "2009-02",
    finish: "2009-11",
    position: "Student Software Engineer",
    company: "National ICT Australia (NICTA)",
    description:
      "InterfereX was NICTA's interference cancellation router technology (femtocell) product.",
    achievements: [
      "I developed a Node B simulator (3G/UMTS software) for testing femtocell router.",
      "I developed an XML message editing tool for debugging and editing NBAP messages."
    ],
    technology: ["C++", "Java", "Swing"]
  }
];

export default ExperienceData;
