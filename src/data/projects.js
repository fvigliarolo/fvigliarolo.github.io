const projects = [
    {
        title: "Agenda Barber System v2",
        id: 1,
        project_type: "Fullstack",
        description: `Fullstack system to manage barbershop schedules.

        The goal was to develop a backend that would handle all requests from different frontends that were on a whitelist.
        
        Additionally, each frontend would have its own associated database, allowing data isolation between clients.
        
        On the frontend side, there is a calendar that shows available time slots to book appointments at the barbershop.`,
        description_es: `Un sistema fullstack de agenda para barberias disenado como servicio. El backend atiende peticiones de multiples frontends en una whitelist, cada uno con su propia base de datos para aislar datos entre clientes. El frontend incluye un calendario de reservas. El proyecto incluye refactorizacion con React, mejoras en practicas REST, optimizacion de rendimiento y despliegue en VPS y hosting.`,
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
        goal_es: "Proyecto personal",
        tecnologies: ["Html", "CSS", "React", "MySQL", "Node.js"],
        tasks: ["Development", "Infrastructure", "Deployment"],
        tags: ["Web Development", "Responsive Web Development", "Backend Development", "Web Design", "Server Administration", "Optimization", "Refactoring", "Cloud Computing", "Backend Development", "Fullstack Development"]
    },
    {
        title: "ServiPuntosUy",
        id: 9,
        project_type: "Fullstack",
        description: `A multi-tenant loyalty platform for gas station chains, with a .NET backend, an administrative backoffice, an end-user web app, and a mobile app.

        Each tenant can manage its own branches, promotions, loyalty rules, and branding while sharing the same platform.

        The system also includes QR-based redemption flows, JWT-based role handling, and tenant resolution through subdomains or request metadata.`,
        description_es: `Una plataforma multi-tenant de fidelizacion para cadenas de estaciones de servicio, con backend en .NET, backoffice administrativo, aplicacion web para usuarios finales y app mobile.

        Cada tenant puede gestionar sus sucursales, promociones, reglas de fidelizacion e identidad visual compartiendo la misma plataforma.

        El sistema tambien incluye flujos de canje por QR, manejo de roles mediante JWT y resolucion de tenant por subdominios o metadatos de la request.`,
        url: "",
        extended_description: [`ServiPuntosUy was a college project, but its scope pushed us far beyond a basic academic CRUD application.`,
            `We had to design a multi-tenant platform where each chain of gas stations could have its own configuration, users, loyalty behavior, and visual customization while sharing the same backend.`,
            `The solution combined a .NET backend, a .NET MVC administrative interface, an end-user web frontend built with React, and a mobile application built with .NET MAUI.`,
            `One of the key technical challenges was tenant resolution. Depending on the scenario, the backend identifies the tenant from JWT claims, subdomains, or request headers, which allowed the same system to support administrators, end users, and mobile clients.`,
            `Another important feature was the QR redemption flow, where users can generate a redemption token and branches can process it through the platform.`,
            `Beyond feature development, the project also required documentation, environment setup, API coordination, and teamwork across backend, frontend, and mobile layers.`],
        github: ["https://github.com/maite-martinez/tecnoinf-dotnet-be.git"],
        goal: "College",
        goal_es: "Facultad",
        tecnologies: [".NET", "ASP.NET Core", "React", ".NET MAUI", "SQL Server", "Docker", "JWT", "Firebase"],
        tasks: ["Architecture Design", "Backend Development", "Teamwork", "Documentation", "Multi-tenancy"],
        tags: ["Fullstack Development", "Backend Development", "Multi-Tenant Architecture", "API Design", "Mobile Development", "Teamwork", "Documentation", "SQL Server"]
    },
    {
        title: "Alum-net",
        id: 10,
        project_type: "Fullstack",
        description: `A virtual learning environment built as my final degree project, with a Java backend, a shared React Native codebase for web and Android, and features for administrators, teachers, and students.`,
        description_es: `Un entorno virtual de aprendizaje desarrollado como mi tesis o proyecto de grado, con backend en Java, una base compartida en React Native para web y Android, y funcionalidades para administradores, docentes y estudiantes.`,
        url: "",
        extended_description: [`Alum-net was my final degree project for the Tecnologo en Informatica program. The challenge was to design and build an initial virtual learning environment for an educational institution, combining academic analysis with a real software implementation.`,
            `The system included three user roles: administrator, teacher, and student. Administrators could manage users and courses, teachers could organize course content and academic activities, and students could access materials, submit tasks, participate in forums, and review their grades from both web and mobile.`,
            `From a technical perspective, we built a Java backend with Spring Boot and a frontend based on React Native with Expo, reusing a large portion of the codebase between the web client and the Android app. We also integrated PostgreSQL, MongoDB, Keycloak, WebSockets, S3, Postman, and GitHub Actions workflows.`,
            `One of the biggest challenges was the integration layer: coordinating backend and frontend changes, validating JWT tokens with Keycloak and Spring Security, and keeping the system stable while multiple parts evolved at the same time.`,
            `The project also included testing, deployment pipelines, Docker-based environments, and production-oriented concerns such as reverse proxy configuration, certificates, and deployment automation. That combination made it much closer to a real product than to a typical academic assignment.`],
        github: ["https://github.com/alum-net/alum-net.git"],
        goal: "Final Degree Project",
        goal_es: "Tesis",
        tecnologies: ["Java", "Spring Boot", "React Native", "Expo", "TypeScript", "PostgreSQL", "MongoDB", "Keycloak", "WebSockets", "Docker", "Postman", "GitHub Actions"],
        tasks: ["Architecture Design", "Frontend Development", "Teamwork", "Documentation", "R&D"],
        tags: ["Fullstack Development", "Mobile Development", "Architecture", "Authentication", "Real-time Features", "CI/CD", "Teamwork"]
    },
    {
        title: "Box Assistant",
        id: 2,
        project_type: "Frontend",
        description: `This system has two roles: student and teacher.
        From a dashboard, teachers are responsible for creating daily boxing exercise routines.
        Meanwhile, students can view the routine that the teacher has created.
        This was a simple project aimed at learning how to use backend and databases as services. In this case, Supabase was used.`,
        description_es: `Un sistema con dos roles: profesor y alumno. Los profesores crean rutinas diarias de boxeo desde un panel, y los alumnos pueden visualizarlas. El proyecto se enfoca en el uso de Backend as a Service (Supabase) y despliegue con Vercel.`,
        url: "",
        extended_description: [`I started this project while looking for a solution to a daily problem I faced at my gym. During my boxing training sessions, there were too many students, which overwhelmed the coach and caused delays when I needed to ask about the day's workout routine.`,
            `To solve this, I decided to develop a system where the coach could create the daily workout plan, allowing students to access the website and view the routine and training order for each day.`,
            `From a technical perspective, one of my goals was to avoid developing a custom backend. To achieve this, I researched existing solutions and discovered Backend as a Service (BaaS) platforms.`,
            `After building the frontend for the application, I chose Supabase as the backend. Once the system was complete, I explored free deployment options.`,
            `This led to my first deployment using Vercel and my first experience with Backend as a Service.`
        ],
        github: ["https://github.com/fvigliarolo/box-assistant"],
        goal: "Practice",
        goal_es: "Practica",
        tecnologies: ["Html", "CSS", "React", "Deploy Vercel", "Supabase", "NPM"],
        tasks: ["Development", "Deployment"],
        tags: ["Web Development", "Responsive Web Development", "Web Design", "Backend as a Service", "Infrastructure Administration"]
    },
    {
        title: "Hospital System (NoSQL Project)",
        id: 3,
        project_type: "Backend",
        description: `A hospital system where patients and medical records are registered. The records can then be queried either generally or with specific parameters.`,
        description_es: `Un sistema hospitalario donde se registran pacientes e historias clinicas, que pueden consultarse de forma general o con parametros. Utiliza Firebase como base de datos NoSQL, incluye pruebas automatizadas con Postman/Newman y despliegue con Docker y Jenkins.`,
        url: "College",
        extended_description: [`In this university assignment, along with two classmates, we faced the challenge of creating a system that used a NoSQL database service of our choice. As a team, we selected Firebase.`,
            `The task consisted of developing a backend with any technology we wanted, as long as it performed NoSQL queries. Additionally, the final result had to be delivered in Docker and include automated tests triggered by an orchestrator.`,
            `For the automated tests, I decided to create Postman scripts for backend requests. After defining the test cases, I structured a command using Newman, Postman’s command-line tool.`,
            `Finally, we used Jenkins to automate the execution and generate reports of the tests run with Newman.`
        ],
        github: ["https://github.com/mfmaite/nosql-lab2"],
        goal: "College",
        goal_es: "Facultad",
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
        description_es: `Un sistema web de museos con tres perfiles de usuario: clientes, administradores de la app y administradores de museos. Los clientes pueden ver museos con su direccion, horarios, exposiciones, tours y actividades. Los administradores de la app gestionan el alta de museos y la cartelera de publicaciones, mientras que los administradores de museos manejan horarios, actividades con cupos, inventario de materiales y exposiciones, y la agenda del museo.`,
        url: "College",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/MuseosApp"],
        goal: "College",
        goal_es: "Facultad",
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
        description_es: `Un sistema de agenda para una barberia con una web frontend que incluye un calendario para mostrar la disponibilidad horaria. El backend procesa las solicitudes de reserva y provee la disponibilidad diaria.`,
        url: "",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/barber_web_server", "https://github.com/fvigliarolo/frontend_barberias_bootstrap", "https://github.com/fvigliarolo/barber_web_frontend"],
        goal: "Practice",
        goal_es: "Practica",
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
        description_es: `Un sistema web para administrar reservas y horarios de barberias. Permite gestionar los dias de trabajo de los barberos, visualizar reservas por dia, fecha o periodo, y crear o eliminar reservas.`,
        url: "https://administration.agenduy.com/",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/barberSystem/tree/master/frontend/administracion-barberias-v2"],
        goal: "Side project",
        goal_es: "Proyecto personal",
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
        description_es: `Un gestor de base de datos desarrollado en lenguaje de bajo nivel (C) como proyecto universitario. Su objetivo es comprender la gestion de memoria y el uso de punteros en estructuras de datos y algoritmos.`,
        url: "",
        extended_description: "",
        github: ["https://github.com/fvigliarolo/obligatorioEDA"],
        goal: "College",
        goal_es: "Facultad",
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
        description_es: `Un sistema para gimnasios donde los clientes pueden inscribirse a clases con cupos disponibles. Los instructores crean clases, definen horarios, establecen cupos y restricciones, y pueden estar asociados a multiples gimnasios.`,
        url: "",
        extended_description: "",
        github: ["https://github.com/MacielFede/Entrenamos.uy_server", "https://github.com/MacielFede/Entrenamos.uy_admin"],
        goal: "College",
        goal_es: "Facultad",
        tecnologies: ["Java", "Maven"],
        tasks: ["Backend Development", "Teamwork", "Documentation"],
        tags: ["ORM", "Optimization"]
    }
];
export default projects;
