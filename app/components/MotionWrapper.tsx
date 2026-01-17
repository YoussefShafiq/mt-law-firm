'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    initial?: { opacity: number; y: number; x: number };
    whileInView?: { opacity: number; y: number; x: number };
}

export default function MotionWrapper({
    children,
    className = "",
    delay = 0,
    initial = { opacity: 0, y: 50, x: 0 },
    whileInView = { opacity: 1, y: 0, x: 0 }
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
