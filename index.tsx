
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// Business Data
const INFO = {
    name: "M Barbershop",
    address: "13881 Metrotech Dr #D, Chantilly, VA 20151",
    center: "Sully Place Shopping Center",
    phone: "(703) 488-9932",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=13881+Metrotech+Dr+D+Chantilly+VA+20151",
    reviewUrl: "https://www.google.com/maps/place/M+Barbershop/@38.8941189,-77.4275937,17z/data=!4m8!3m7!1s0x89b646875b7fa7c1:0xda834e37ad5e3221!8m2!3d38.8941189!4d-77.4250188!9m1!1b1!16s%2Fg%2F1tcv_98g?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    hours: [
        { day: "Monday", time: "9:00 AM – 7:00 PM" },
        { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
        { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
        { day: "Thursday", time: "9:00 AM – 7:00 PM" },
        { day: "Friday", time: "9:00 AM – 7:00 PM" },
        { day: "Saturday", time: "8:00 AM – 5:00 PM" },
        { day: "Sunday", time: "9:00 AM – 4:00 PM" }
    ],
    services: [
        { name: "Executive Cut", desc: "Precision grooming with a straight razor finish." },
        { name: "The M Fade", desc: "Modern taper or skin fade with expert detailing." },
        { name: "Beard Sculpt", desc: "Shaping, lining, and conditioning for the modern beard." },
        { name: "Hot Towel Shave", desc: "Traditional straight razor shave with luxury oils." },
        { name: "Royal Combo", desc: "The works: Haircut, Beard, Shave, and Facial." },
        { name: "Young Kings", desc: "Quality cuts for ages 12 and under." }
    ]
};

const Logo = () => (
    <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
        <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded shadow-[0_0_15px_rgba(59,130,246,0.5)] transform group-hover:rotate-12 transition-transform">
            <span className="font-modern font-bold text-white text-xl">M</span>
        </div>
        <div className="flex flex-col">
            <span className="font-modern font-bold text-lg tracking-tighter leading-none">BARBERSHOP</span>
            <span className="text-[10px] uppercase font-black tracking-widest text-stone-500">Chantilly</span>
        </div>
    </div>
);

const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [bookingOpen, setBookingOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Nav */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-2xl' : 'py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-widest">
                        {['Services', 'Location', 'Ethos'].map(item => (
                            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-blue-500 transition-colors">{item}</button>
                        ))}
                        <button onClick={() => setBookingOpen(true)} className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 transition-all">Book Now</button>
                    </div>
                    <button onClick={() => setMenuOpen(true)} className="md:hidden text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/></svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[60] bg-black transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-16">
                        <Logo />
                        <button onClick={() => setMenuOpen(false)}><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2"/></svg></button>
                    </div>
                    <div className="flex flex-col space-y-8">
                        {['Services', 'Location', 'Ethos'].map(item => (
                            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-5xl font-modern font-bold text-left hover:text-blue-500">{item}</button>
                        ))}
                        <button onClick={() => { setMenuOpen(false); setBookingOpen(true); }} className="text-5xl font-modern font-bold text-left text-blue-600">Book Now</button>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-30 grayscale" alt="Barbershop" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]"></div>
                </div>
                <div className="relative z-10 text-center px-6 w-full">
                    <div className="inline-block px-4 py-1 border border-blue-500/30 rounded-full mb-8 bg-blue-500/5 backdrop-blur-sm">
                        <span className="text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase italic">Established for Excellence</span>
                    </div>
                    {/* Fixed Font Size: Use text-[12vw] for fluid mobile scaling up to sm size */}
                    <h1 className="text-[12vw] sm:text-7xl md:text-[9rem] lg:text-[10rem] font-modern font-bold leading-[1.1] md:leading-none tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-600">
                        PRECISION<br/>& STYLE
                    </h1>
                    <p className="max-w-xl mx-auto text-stone-400 text-lg mb-12">Chantilly's premier destination for precision barbering and a curated experience.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => setBookingOpen(true)} className="bg-blue-600 px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">Book Now</button>
                        <a href={INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="border border-white/20 bg-white/5 backdrop-blur-md px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl inline-flex items-center justify-center gap-2">
                            Get Directions
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                        </a>
                    </div>
                    <div className="mt-8">
                      <a href={INFO.reviewUrl} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-blue-400 transition-colors text-[10px] uppercase font-black tracking-widest flex items-center justify-center gap-2 group">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        Review us on Google
                      </a>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-blue-500 text-[10px] font-black tracking-widest uppercase mb-4 block">The Selection</span>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-modern font-bold">MENU OF SERVICES</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {INFO.services.map((s, i) => (
                            <div key={i} className="glass p-10 rounded-2xl group hover:border-blue-500/50 transition-all flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">{s.name}</h3>
                                    <p className="text-stone-500 mb-8">{s.desc}</p>
                                </div>
                                <div className="h-[1px] w-full bg-white/5 group-hover:bg-blue-500/20 transition-all"></div>
                            </div>
                        ))}
                        {/* "And More..." card */}
                        <div className="glass p-10 rounded-2xl group hover:border-blue-500/50 transition-all flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-modern font-bold text-stone-600 group-hover:text-blue-500 transition-colors">AND MORE...</h3>
                            <p className="text-stone-500 mt-4 text-sm">Inquire in-shop for specialized grooming services and treatments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ethos Quote */}
            <section id="ethos" className="py-40 bg-[#080808] text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-modern font-bold tracking-tighter leading-tight italic">
                        "QUALITY IS NEVER AN ACCIDENT;<br/>
                        <span className="text-stone-700 not-italic">IT IS ALWAYS THE RESULT OF </span> <br/>
                        <span className="text-blue-600">INTELLIGENT EFFORT."</span>
                    </h2>
                </div>
            </section>

            {/* Location & Hours */}
            <section id="location" className="py-32 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <span className="text-blue-500 text-[10px] font-black tracking-widest uppercase mb-4 block">Where to Find Us</span>
                            <h2 className="text-4xl sm:text-5xl font-modern font-bold mb-12">CHANTILLY, VA</h2>
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xs font-black text-stone-500 uppercase tracking-widest mb-4">The Shop</h4>
                                    <p className="text-2xl sm:text-3xl font-bold mb-2">{INFO.address}</p>
                                    <p className="text-stone-400 text-lg sm:text-xl mb-6">{INFO.center}</p>
                                    <div className="flex flex-wrap gap-4">
                                      <a href={INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
                                          Open in Maps
                                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                      </a>
                                      <a href={INFO.reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-white/10 hover:border-blue-500/50 bg-white/5 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all">
                                          Leave a Review
                                          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                      </a>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-stone-500 uppercase tracking-widest mb-4">Contact</h4>
                                    <a href={`tel:${INFO.phone}`} className="text-3xl sm:text-4xl font-modern font-bold hover:text-blue-500 transition-colors">{INFO.phone}</a>
                                </div>
                            </div>
                        </div>
                        <div className="glass p-8 sm:p-12 rounded-3xl">
                            <h3 className="text-xl sm:text-2xl font-modern font-bold mb-10 text-blue-500">Operating Hours</h3>
                            <div className="space-y-6">
                                {INFO.hours.map((h, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/5 pb-4">
                                        <span className="text-stone-400 font-bold uppercase text-[10px] sm:text-[11px] tracking-widest">{h.day}</span>
                                        <span className="font-medium text-sm sm:text-base">{h.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <Logo />
                    <p className="text-stone-600 text-xs font-bold tracking-widest uppercase text-center">© {new Date().getFullYear()} M Barbershop. All Rights Reserved.</p>
                </div>
            </footer>

            {/* Modals */}
            {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
        </div>
    );
};

const BookingModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose}></div>
        <div className="glass relative max-w-lg w-full p-8 sm:p-12 rounded-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-modern font-bold mb-6">RESERVE A SPOT</h2>
            <p className="text-stone-500 mb-10">To provide the highest standard of service, we recommend booking by phone.</p>
            <a href={`tel:${INFO.phone}`} className="block w-full bg-blue-600 py-5 rounded-2xl text-xl font-bold mb-4 hover:bg-blue-500 transition-colors">Call {INFO.phone}</a>
            <button onClick={onClose} className="text-stone-600 uppercase text-[10px] font-black tracking-widest hover:text-white transition-colors">Close</button>
        </div>
    </div>
);

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
