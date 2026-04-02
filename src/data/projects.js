const projects = [
    {
        title: "ServiPuntosUy",
        id: 9,
        project_type: "Fullstack",
        description: `A multi-tenant loyalty platform for gas station chains, with a .NET backend, an administrative backoffice, an end-user web app, and a mobile app.

        Each tenant can manage its own branches, promotions, loyalty rules, and branding while sharing the same platform.

        The system also includes QR-based redemption flows, JWT-based role handling, and tenant resolution through subdomains or request metadata.`,
        url: "",
        extended_description: [`ServiPuntosUy was a college project, but its scope pushed us far beyond a basic academic CRUD application.`,
            `We had to design a multi-tenant platform where each chain of gas stations could have its own configuration, users, loyalty behavior, and visual customization while sharing the same backend.`,
            `The solution combined a .NET backend, a .NET MVC administrative interface, an end-user web frontend built with React, and a mobile application built with .NET MAUI.`,
            `One of the key technical challenges was tenant resolution. Depending on the scenario, the backend identifies the tenant from JWT claims, subdomains, or request headers, which allowed the same system to support administrators, end users, and mobile clients.`,
            `Another important feature was the QR redemption flow, where users can generate a redemption token and branches can process it through the platform.`,
            `Beyond feature development, the project also required documentation, environment setup, API coordination, and teamwork across backend, frontend, and mobile layers.`],
        github: ["https://github.com/maite-martinez/tecnoinf-dotnet-be.git"],
        goal: "College",
        tecnologies: [".NET", "ASP.NET Core", "React", ".NET MAUI", "SQL Server", "Docker", "JWT", "Firebase"],
        tasks: ["Architecture Design", "Backend Development", "Teamwork", "Documentation", "Multi-tenancy"],
        tags: ["Fullstack Development", "Backend Development", "Multi-Tenant Architecture", "API Design", "Mobile Development", "Teamwork", "Documentation", "SQL Server"]
    },
    {
        title: "Agenda Barber System v2",
        id: 1,
        project_type: "Fullstack",
        description: `Fullstack system to manage barbershop schedules.

        The goal was to develop a backend that would handle all requests from different frontends that were on a whitelist.
        
        Additionally, each frontend would have its own associated database, allowing data isolation between clients.
        
        On the frontend side, there is a calendar that shows available time slots to book appointments at the barbershop.`,
        url: "https://calendar.agenduy.com/",
        extended_description: [`In this project, I aimed to offer the system I had developed in version 1 as a service. To achieve this, I faced the challenge of improving the development practices used previously and enhancing the user experience.`,
            `The main tasks I had to undertake included refactoring the frontend and improving the REST API standards for the backend.`,
            `The goal of the frontend refactoring was to implement React.js for the booking calendar. In version 1, the calendar was built using HTML, CSS, and vanilla JavaScript. After migrating to the new technology, I reduced the amount of code by approximately 75%.`,
            `By adopting React.js, I achieved a direct improvement in performance for the websites using the calendar. Additionally, as an extra benefit, I now have more maintainable code that can also be used as an NPM library in other projects.`,
            `On the backend side, improving REST practices enhanced the quality of data handling. I also implemented security improvements in the process of retrieving available time slots for different barbershops.`,`When deploying the application, one of my tasks was managing the backend server, which runs on a VPS. As an example, I also deployed a frontend on a traditional hosting service.`
        ],
        refereces: {
            links: ["https://administration.agenduy.com/#"],
            text: `Check the app pinned below. There, you will be able to access the administrative dashboard of the calendar implemented for your business. An article will be published soon with extended details about the project.`
        },
        github: [],
        goal: "Side project",
        tecnologies: ["Html", "CSS", "React", "MySQL", "Node.js"],
        tasks: ["Development", "Infrastructure", "Deployment"],
        tags: ["Web Development", "Responsive Web Development", "Backend Development", "Web Design", "Server Administration", "Optimization", "Refactoring", "Cloud Computing", "Backend Development", "Fullstack Development"]
    },
    {
        title: "Box Assistant",
        id: 2,
        project_type: "Frontend",
        description: `This system has two roles: student and teacher.
        From a dashboard, teachers are responsible for creating daily boxing exercise routines.
        Meanwhile, students can view the routine that the teacher has created.
        This was a simple project aimed at learning how to use backend and databases as services. In this case, Supabase was used.`,
        url: "",
        extended_description: [`I started this project while looking for a solution to a daily problem I faced at my gym. During my boxing training sessions, there were too many students, which overwhelmed the coach and caused delays when I needed to ask about the day's workout routine.`,
            `To solve this, I decided to develop a system where the coach could create the daily workout plan, allowing students to access the website and view the routine and training order for each day.`,
            `From a technical perspective, one of my goals was to avoid developing a custom backend. To achieve this, I researched existing solutions and discovered Backend as a Service (BaaS) platforms.`,
            `After building the frontend for the application, I chose Supabase as the backend. Once the system was complete, I explored free deployment options.`,
            `This led to my first deployment using Vercel and my first experience with Backend as a Service.`
        ],
        github: ["https://github.com/fvigliarolo/box-assistant"],
        goal: "Practice",
        tecnologies: ["Html", "CSS", "React", "Deploy Vercel", "Supabase", "NPM"],
        tasks: ["Development", "Deployment"],
        tags: ["Web Development", "Responsive Web Development", "Web Design", "Backend as a Service", "Infrastructure Administration"]
    },
    {
        title: "Hospital System (NoSQL Project)",
        id: 3,
        project_type: "Backend",
        description: `A hospital system where patients and medical records are registered. The records can then be queried either generally or with specific parameters.`,
        url: "College",
        extended_description: [`In this university assignment, along with two classmates, we faced the challenge of creating a system that used a NoSQL database service of our choice. As a team, we selected Firebase.`,
            `The task consisted of developing a backend with any technology we wanted, as long as it performed NoSQL queries. Additionally, the final result had to be delivered in Docker and include automated tests triggered by an orchestrator.`,
            `For the automated tests, I decided to create Postman scripts for backend requests. After defining the test cases, I structured a command using Newman, Postman’s command-line tool.`,
            `Finally, we used Jenkins to automate the execution and generate reports of the tests run with Newman.`
        ],
        github: ["https://github.com/mfmaite/nosql-lab2"],
        goal: "College",
        tecnologies: ["Node.js", "TypeScript", "Firebase", "Postman", "Jenkins", "Docker", "npm"],
        tasks: ["R&D", "Teamwork", "Documentation", "Testing"],
        tags: ["Backend Development", "Testing", "Automation Testing"]
    },
    {
        title: "Museums App",
        id: 4,
        project_type: "Fullstack",
        description: `A web-based museum system with 3 user profiles: Clients, app administrators, and museum administrators
        Clients who accessed the system could view all museums registered in the system, including their address, opening hours, exhibitions, tours, and activities.
        App administrators are responsible for registering museums and managing the bulletin board generated by each museum's publications.
        Museum administrators can manage schedules, input activities (with quotas), assign and manage the inventory of materials needed for activities, maintain exhibition inventory, and handle the museum's agenda (calendar).`,
        url: "College",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/MuseosApp"],
        goal: "College",
        tecnologies: ["Html", "CSS", "JavaScript", "PHP", "MySQL", "GCP"],
        tasks: ["R&D", "Teamwork", "Documentation", "Architecture Design"],
        tags: ["Web Development", "Databases", "Cloud Computing"]
    },
    {
        title: "Agenda Barber System v1",
        id: 5,
        project_type: "Fullstack",
        description: `Fullstack system to manage barbershop schedules.

        The goal was to develop a backend that would handle all requests from different frontends that were on a whitelist.
        
        Additionally, each frontend would have its own associated database, allowing data isolation between clients.
        
        On the frontend side, there is a calendar that shows available time slots to book appointments at the barbershop.`,
        url: "",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/barber_web_server", "https://github.com/fvigliarolo/frontend_barberias_bootstrap", "https://github.com/fvigliarolo/barber_web_frontend"],
        goal: "Practice",
        tecnologies: ["Html", "CSS", "JavaScript", "Bootstrap", "MySQL", "Node.js"],
        tasks: ["Development"],
        tags: ["Web Development", "Responsive Web Development", "Backend Development", "Fullstack Development", "Databases"]
    },
    {
        title: "Administration Barber System",
        id: 6,
        project_type: "Frontend",
        description: `A web system designed to manage and handle reservations and schedules of the barbershop system.

        Manage each barber's weekly schedule at the barbershop.
        
        View reservations for the day, for a specific date, or within a time period.
        
        Create or delete reservations.`,
        url: "https://administration.agenduy.com/",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/barberSystem/tree/master/frontend/administracion-barberias-v2"],
        goal: "Side project",
        tecnologies: ["Html", "CSS", "React", "Deploy Hosting", "NPM"],
        tasks: ["Development"],
        tags: ["Web Development", "Responsive Web Development", "Web Design"]
    },

    {
        title: "Database managing system",
        id: 7,
        project_type: "Backend",
        description: `A database manager developed in low-level language.

        This project was a university assignment for the Data Structures and Algorithms course.
        
        It aimed to understand the use and management of memory through pointers.`,
        url: "",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/obligatorioEDA"],
        goal: "College",
        tecnologies: ["C Language"],
        tasks: ["Development", "Teamwork", "Architecture Design"],
        tags: ["Operating Systems", "Memory Management"]
    },
    {
        title: "Gym App",
        id: 8,
        project_type: "Fullstack",
        description: `A system for gyms where clients can register for classes at the gyms they choose, provided there are available spots for the selected time.

        On the other hand, instructors (associated with one or more gyms) create classes and schedules, setting the number of spots available and any desired restrictions.`,
        url: "",
        extended_description: "",
        github: ["https://github.com/MacielFede/Entrenamos.uy_server", "https://github.com/MacielFede/Entrenamos.uy_admin"],
        goal: "College",
        tecnologies: ["Java", "Maven"],
        tasks: ["Backend Development", "Teamwork", "Documentation"],
        tags: ["ORM", "Optimization"]
    }
];
export default projects;
