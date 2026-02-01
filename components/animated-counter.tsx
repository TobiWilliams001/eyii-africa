"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
          separator=","
        />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </motion.span>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
  variant?: 'light' | 'dark';
}

export function StatCard({ 
  value, 
  label, 
  suffix = "", 
  prefix = "", 
  delay = 0,
  variant = 'dark'
}: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const textColor = variant === 'dark' ? 'text-white' : 'text-foreground';
  const labelColor = variant === 'dark' ? 'text-white/70' : 'text-muted-foreground';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="text-center p-6 md:p-8"
    >
      <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${textColor} mb-2`}>
        {inView ? (
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            delay={0.2}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        ) : (
          <span>{prefix}0{suffix}</span>
        )}
      </div>
      <div className={`${labelColor} text-sm sm:text-base md:text-lg font-medium`}>{label}</div>
    </motion.div>
  );
}

// Stats data - easily updatable
export const siteStats = [
  { value: 1200, label: 'Students Empowered', suffix: '+' },
  { value: 4, label: 'Countries Reached', suffix: '' },
  { value: 50, label: 'University Partners', suffix: '+' },
  { value: 2, label: 'Years of Impact', suffix: '' },
];