import React, { useState, useEffect } from 'react';
import {
    MessageCircle,
    Bot,
    Calendar,
    Users,
    Star,
    CheckCircle,
    Menu,
    X,
    ArrowRight,
    Phone,
    Mail,
    MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: MessageCircle,
            title: "Order using WhatsApp conversion with AI",
            description: "Take orders directly from WhatsApp with AI-powered conversation flow, automated menu sharing and intelligent order confirmation.",
            image: "/images/features/food.jpeg"
        },
        {
            icon: MessageCircle,
            title: "Marketing campaigns on WhatsApp",
            description: "Reach your customers with targeted marketing campaigns directly through WhatsApp with personalized messaging.",
            image: "/images/features/cart-marketing.webp"
        },
        {
            icon: Bot,
            title: "WhatsApp conversion AI bot",
            description: "24/7 AI-powered WhatsApp bot that converts conversations into orders and handles customer inquiries intelligently.",
            image: "/images/features/whatsapp-ai.webp"
        },
        {
            icon: Phone,
            title: "AI calling for delivery or pickup",
            description: "Automated AI calling system that handles delivery confirmations and pickup notifications with natural voice interactions.",
            image: "/images/features/aicalling.jpg"
        },
        {
            icon: Bot,
            title: "In-house LLM model for restaurants",
            description: "Uses our proprietary LLM model trained specifically for restaurants and menu items, ensuring accurate and contextual responses.",
            image: "/images/features/llm.jpeg"
        }
    ];

    const clients = [
        { name: "DLF", logo: "/images/logos/dlf logo.jpg" },
        { name: "The Big Chill", logo: "/images/logos/The Big Chill Logo.png" },
        { name: "Chilis", logo: "/images/logos/chilis logo.png" },
        { name: "Om Sweets", logo: "/images/logos/om sweets logo.jpg" },
        { name: "Paul", logo: "/images/logos/paul-logo.png" },
        { name: "Dasusy", logo: "/images/logos/dasusy logo.jpeg" },
        { name: "Gola", logo: "/images/logos/gola_logo.png" },
        { name: "DCH", logo: "/images/logos/dch logo.png" },
        { name: "Diggin", logo: "/images/logos/Diggin_logo.png" },
        { name: "Leo", logo: "/images/logos/leo logo.png" },
        { name: "Anaardana", logo: "/images/logos/anaardana-logo full name.jpg" },
        { name: "Cafe Amudham", logo: "/images/logos/cafe_amudham_logo.jpeg" },
        { name: "Gardin by Diggin", logo: "/images/logos/gardin by diggin logo.jpg" },
        { name: "MKT", logo: "/images/logos/mkt logo.png" },
        { name: "Rajendra Da Daba", logo: "/images/logos/rajendra_da_daba_logo.png" },
        { name: "Panchgaon", logo: "/images/logos/panchgaon logo.png" },
        { name: "Naivedyam", logo: "/images/logos/naivedyam-logo.png" },
        { name: "Burger Factor", logo: "/images/logos/burger factor logo.png" },
        { name: "Yo Tibet", logo: "/images/logos/yo_tibet_logo.png" },
        { name: "Lha Kitchen", logo: "/images/logos/lha_kitchen_logo.png" },
        { name: "Paparizza", logo: "/images/logos/paparizza logo.jpeg" },
        { name: "Kwality Dhaba", logo: "/images/logos/kwality dhaba logo1.png" },
        { name: "Udupi", logo: "/images/logos/udupi_logo.jpg" },
        { name: "Mysore Cafe", logo: "/images/logos/mysore cafe logo.jpeg" },
        { name: "Library Jaipur", logo: "/images/logos/library_jaipur_logo.jpg" }
    ];

    const testimonials = [
        {
            name: "Aseem Grover",
            restaurant: "The Big Chill Cafe",
            text: "Waitwhiz is a wonderful product and more importantly, they have a wonderful team! This has increased our efficiency and customer satisfaction by 100%",
            rating: 5
        },
        {
            name: "Susaina",
            restaurant: "Dasusy Pizzeria",
            text: "The AI bot handles 95% of our customer queries. Our staff can focus on what matters most.",
            rating: 5
        },
        {
            name: "Harsh Chopra",
            restaurant: "Om Sweets",
            text: "They have solved our most important problem and got a great product for us. We are very happy with the product and the team.",
            rating: 5
        }
    ];

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">W</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Waitwhiz</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">
                                Features
                            </button>
                            <button onClick={() => scrollToSection('clients')} className="text-gray-700 hover:text-blue-600 transition-colors">
                                Clients
                            </button>
                            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
                                Testimonials
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
                                Contact
                            </button>
                        </nav>

                        <div className="hidden md:flex items-center space-x-4">
                            <a
                                href="https://app.waitwhiz.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                Login
                            </a>
                            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-gray-700">
                                    Features
                                </button>
                                <button onClick={() => scrollToSection('clients')} className="block px-3 py-2 text-gray-700">
                                    Clients
                                </button>
                                <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700">
                                    Testimonials
                                </button>
                                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700">
                                    Contact
                                </button>
                                <a
                                    href="https://app.waitwhiz.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-gray-700"
                                >
                                    Login
                                </a>
                                <button onClick={() => scrollToSection('contact')} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Revolutionize Your Restaurant with
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Waitwhiz</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Transform customer experience with WhatsApp orders, AI-powered support, smart reservations, and comprehensive CRM - all in one platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Restaurant dining"
                                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl opacity-20"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Complete AI-Powered Restaurant Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From AI-powered WhatsApp ordering to automated calling systems, Waitwhiz provides cutting-edge solutions built with our proprietary restaurant-trained LLM.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                                            <feature.icon className="text-white" size={28} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-32 object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section id="clients" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Trusted by 100+ Brands
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join over 100 brands already using Waitwhiz to enhance their customer experience
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} logo`}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-900">{client.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Real feedback from restaurant owners who transformed their business with Waitwhiz
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600">{testimonial.restaurant}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Restaurant?
                    </h2>
                    <p className="text-xl text-white mb-8 opacity-90">
                        Join thousands of restaurants already using Waitwhiz to streamline operations and delight customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">W</span>
                                </div>
                                <span className="text-2xl font-bold">Waitwhiz</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Revolutionizing restaurant management with AI-powered solutions and seamless customer experiences.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Features</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>WhatsApp AI Orders</li>
                                <li>AI Customer Bot</li>
                                <li>Marketing Campaigns</li>
                                <li>AI Calling System</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>Contact</li>
                                <li>
                                    <Link to="/privacy-policy" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/data-deletion" className="hover:text-white transition-colors">
                                        Data Deletion
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <div className="space-y-3 text-gray-400">
                                <div className="flex items-center space-x-3">
                                    <Phone size={16} />
                                    <span>+91 8104600736</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail size={16} />
                                    <span>sandeep@waitwhiz.in</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin size={16} />
                                    <span>India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Waitwhiz. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
