<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Micheal Samuel - Web Developer Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <style>
        body { font-family: 'Inter', sans-serif; }
        .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .tech-pattern { background-image: radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.1) 2%, transparent 0%); background-size: 100px 100px; }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="text-xl font-bold text-blue-600">MS</div>
                <div class="hidden md:flex space-x-8">
                    <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                    <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
                    <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
                    <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                </div>
                <button class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center gradient-bg tech-pattern relative overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="text-white" data-aos="fade-right">
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Hi, I'm <span class="text-cyan-300">Micheal Samuel</span>
                    </h1>
                    <p class="text-xl sm:text-2xl mb-8 text-gray-200">
                        Front-End Web Developer passionate about crafting clean and interactive digital experiences.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#projects" class="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center">
                            View Projects
                        </a>
                        <a href="#contact" class="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div class="flex justify-center lg:justify-end" data-aos="fade-left">
                    <div class="relative">
                        <div class="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Micheal Samuel" class="w-full h-full rounded-full object-cover">
                        </div>
                        <div class="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    I'm a passionate front-end developer with a unique background in Mechatronics Engineering, bringing both technical precision and creative problem-solving to web development.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" alt="Developer workspace" class="rounded-lg shadow-xl">
                </div>
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        With a National Diploma in Mechatronics Engineering from LASPOTECH and one year of hands-on front-end development experience, I combine analytical thinking with creative design to build exceptional web experiences.
                    </p>
                    <div class="mb-8">
                        <a href="#" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            <i class="fas fa-download mr-2"></i>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <!-- Skills Section -->
            <div class="mt-20">
                <h3 class="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">Technical Skills</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div class="text-center" data-aos="zoom-in" data-aos-delay="100">
                        <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fab fa-html5 text-2xl text-orange-600"></i>
                        </div>
                        <p class="font-semibold text-gray-700">HTML5</p>
                    </div>
                    <div class="text-center" data-aos="zoom-in" data-aos-delay="200">
                        <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fab fa-css3-alt text-2xl text-blue-600"></i>
                        </div>
                        <p class="font-semibold text-gray-700">CSS3</p>
                    </div>
                    <div class="text-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fab fa-js-square text-2xl text-yellow-600"></i>
                        </div>
                        <p class="font-semibold text-gray-700">JavaScript</p>
                    </div>
                    <div class="text-center" data-aos="zoom-in" data-aos-delay="400">
                        <div class="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fab fa-react text-2xl text-cyan-600"></i>
                        </div>
                        <p class="font-semibold text-gray-700">React</p>
                    </div>
                    <div class="text-center" data-aos="zoom-in" data-aos-delay="500">
                        <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fab fa-bootstrap text-2xl text-purple-600"></i>
                        </div>
                        <p class="font-semibold text-gray-700">Bootstrap</p>
                    </div>
                    <div class="text-center" data-aos="zoom-in" data-aos-delay="600">
                        <div class="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fab fa-github text-2xl text-gray-700"></i>
                        </div>
                        <p class="font-semibold text-gray-700">Git/GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                <p class="text-xl text-gray-600">A showcase of my recent work and personal projects</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" alt="E-commerce Platform" class="w-full h-48 object-cover">
                        <div class="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                            Featured
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">E-commerce Platform</h3>
                        <p class="text-gray-600 mb-4">A modern e-commerce solution with React, featuring product catalog, shopping cart, and payment integration.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MongoDB</span>
                        </div>
                        <div class="flex gap-4">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">
                                <i class="fab fa-github mr-1"></i>Code
                            </a>
                            <a href="#" class="text-green-600 hover:text-green-800 font-semibold">
                                <i class="fas fa-external-link-alt mr-1"></i>Demo
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop" alt="Task Management App" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Task Management App</h3>
                        <p class="text-gray-600 mb-4">A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">Vue.js</span>
                            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Firebase</span>
                            <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Tailwind</span>
                        </div>
                        <div class="flex gap-4">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">
                                <i class="fab fa-github mr-1"></i>Code
                            </a>
                            <a href="#" class="text-green-600 hover:text-green-800 font-semibold">
                                <i class="fas fa-external-link-alt mr-1"></i>Demo
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" alt="Weather Dashboard" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Weather Dashboard</h3>
                        <p class="text-gray-600 mb-4">Interactive weather application with location-based forecasts, charts, and responsive design.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">JavaScript</span>
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Chart.js</span>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">API</span>
                        </div>
                        <div class="flex gap-4">
                            <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">
                                <i class="fab fa-github mr-1"></i>Code
                            </a>
                            <a href="#" class="text-green-600 hover:text-green-800 font-semibold">
                                <i class="fas fa-external-link-alt mr-1"></i>Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-12" data-aos="fade-up">
                <a href="https://mykelsown.github.io" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                    View All Projects
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Experience & Education Section -->
    <section id="experience" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
                <p class="text-xl text-gray-600">My professional journey and academic background</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Experience -->
                <div data-aos="fade-right">
                    <h3 class="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <i class="fas fa-briefcase text-blue-600 mr-3"></i>
                        Experience
                    </h3>
                    <div class="space-y-8">
                        <div class="relative pl-8 border-l-2 border-blue-200">
                            <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h4 class="text-lg font-semibold text-gray-800">Front-End Web Developer</h4>
                                <p class="text-blue-600 font-medium mb-2">Freelance • 2023 - Present</p>
                                <p class="text-gray-600">
                                    Developed responsive web applications using modern JavaScript frameworks. 
                                    Collaborated with clients to deliver pixel-perfect designs and optimal user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education -->
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <i class="fas fa-graduation-cap text-green-600 mr-3"></i>
                        Education
                    </h3>
                    <div class="space-y-8">
                        <div class="relative pl-8 border-l-2 border-green-200">
                            <div class="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h4 class="text-lg font-semibold text-gray-800">National Diploma in Mechatronics Engineering</h4>
                                <p class="text-green-600 font-medium mb-2">Lagos State Polytechnic (LASPOTECH) • 2020 - 2022</p>
                                <p class="text-gray-600">
                                    Gained strong analytical and problem-solving skills through engineering coursework. 
                                    Developed proficiency in programming, automation, and system design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl font-bold mb-4">Let's Work Together</h2>
                <p class="text-xl text-gray-300">Ready to bring your ideas to life? Get in touch!</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div data-aos="fade-right">
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                            <input type="text" id="name" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white">
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                            <textarea id="message" rows="5" class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div data-aos="fade-left">
                    <div class="space-y-8">
                        <div class="flex items-center">
                            <div class="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold">Email</h4>
                                <p class="text-gray-300">mykelsamuel512@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold">Phone</h4>
                                <p class="text-gray-300">09132392431</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <i class="fab fa-github text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold">GitHub</h4>
                                <a href="https://mykelsown.github.io" class="text-blue-400 hover:text-blue-300">mykelsown.github.io</a>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="bg-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                                <i class="fas fa-globe text-white"></i>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold">Portfolio</h4>
                                <a href="https://mykelsown.github.io" class="text-blue-400 hover:text-blue-300">mykelsown.github.io</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <p class="text-gray-400">&copy; 2024 Micheal Samuel. All rights reserved.</p>
                <div class="flex justify-center space-x-6 mt-4">
                    <a href="https://mykelsown.github.io" class="text-gray-400 hover:text-white transition-colors">
                        <i class="fab fa-github text-xl"></i>
                    </a>
                    <a href="mailto:mykelsamuel512@gmail.com" class="text-gray-400 hover:text-white transition-colors">
                        <i class="fas fa-envelope text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/95');
            } else {
                nav.classList.remove('bg-white/95');
            }
        });
    </script>
</body>
</html>