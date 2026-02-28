import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone } from 'lucide-react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('mobile-menu-open');
        }
    }, [isOpen]);

    const menuVariants: any = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: any = {
        closed: { opacity: 0, y: 20 },
        opened: { opacity: 1, y: 0 }
    };

    const links = [
        { name: 'Início', href: '/' },
        { name: 'Serviços', href: '/#services' },
        { name: 'Sobre', href: '/sobre' },
    ];

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-brand hover:scale-110 transition-transform"
                aria-label="Abrir menu"
            >
                <Menu size={28} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        variants={menuVariants}
                        style={{ backgroundColor: '#0A0A0A' }}
                        className="fixed inset-0 z-[200] w-screen h-screen bg-[#0A0A0A] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-2xl font-serif text-charcoal tracking-tighter">
                                Ateliê<span className="italic font-light">dasUnhas</span>
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-charcoal hover:rotate-90 transition-transform duration-300"
                                aria-label="Fechar menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-8 mb-auto">
                            {links.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    variants={itemVariants}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-serif text-charcoal hover:text-brand hover:italic transition-all inline-block"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/#services"
                                variants={itemVariants}
                                onClick={() => setIsOpen(false)}
                                className="bg-brand text-white text-center py-4 rounded-sm font-medium tracking-widest text-sm uppercase"
                            >
                                Selecionar Serviço
                            </motion.a>
                        </nav>

                        <motion.div
                            variants={itemVariants}
                            className="mt-auto border-t border-charcoal/10 pt-8 flex gap-6"
                        >
                            <a href="#" className="flex items-center gap-2 text-charcoal/60 hover:text-brand transition-colors">
                                <Instagram size={20} />
                                <span className="text-xs uppercase tracking-widest">Instagram</span>
                            </a>
                            <a href="https://wa.me/5527999717063" target="_blank" className="flex items-center gap-2 text-charcoal/60 hover:text-brand transition-colors">
                                <Phone size={20} />
                                <span className="text-xs uppercase tracking-widest">(27) 99971-7063</span>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
