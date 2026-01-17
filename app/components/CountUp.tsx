'use client';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
    end: number;
    className?: string;
    suffix?: string;
    decimals?: number;
}

export default function CountUp({ end, className = "", suffix = "", decimals = 0 }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: 2
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(end);
        }
    }, [isInView, end, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                const formated = latest.toFixed(decimals);
                const numberPart = Number(formated).toLocaleString('en-US');
                ref.current.textContent = `${numberPart}${suffix}`;
            }
        });
    }, [springValue, suffix, decimals]);

    // Initial render
    return <span ref={ref} className={className}>0{suffix}</span>;
}
