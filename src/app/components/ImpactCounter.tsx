import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Users, Globe, Handshake, PhoneCall, TrendingUp, Award } from 'lucide-react';

interface CounterStat {
  baseNumber: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;
}

interface ImpactCounterProps {
  variant?: 'home' | 'services';
}

// Animated counter component
function AnimatedNumber({ 
  value, 
  prefix = '', 
  suffix = '',
  duration = 2 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      const thousands = num / 1000;
      // Format with one decimal if needed, remove .0
      return `${thousands.toFixed(1).replace(/\.0$/, '')}k`;
    }
    return num.toString();
  };

  return (
    <span>
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  );
}

export function ImpactCounter({ variant = 'home' }: ImpactCounterProps) {
  const [tick, setTick] = useState(0);

  // Refresh counter every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Generate random variation for counter (±10% of base)
  const getAnimatedNumber = (base: number): number => {
    const variation = Math.floor(base * 0.1);
    return base + Math.floor(Math.random() * variation * 2 - variation);
  };

  const homeStats: CounterStat[] = [
    { baseNumber: 10000, label: 'Active Members', icon: Users, suffix: '+' },
    { baseNumber: 8, label: 'Regions Covered', icon: Globe, suffix: '' },
    { baseNumber: 50, label: 'Partner Organizations', icon: Handshake, suffix: '+' },
    { baseNumber: 247, label: 'Support Available', icon: PhoneCall, prefix: '24/', suffix: '' }
  ];

  const servicesStats: CounterStat[] = [
    { baseNumber: 7, label: 'Key Services', icon: Award, suffix: '+' },
    { baseNumber: 50, label: 'Partner Organizations', icon: Handshake, suffix: '+' },
    { baseNumber: 10000, label: 'Members Served', icon: Users, suffix: '+' },
    { baseNumber: 8, label: 'Regions Covered', icon: Globe, suffix: '' }
  ];

  const stats = variant === 'home' ? homeStats : servicesStats;

  if (variant === 'home') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const animatedNumber = stat.label === 'Support Available' 
            ? 7 // Keep 24/7 static
            : getAnimatedNumber(stat.baseNumber);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: 'var(--light-mist)' }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--red-cta))' }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="text-3xl md:text-4xl mb-2" 
                style={{ color: 'var(--red-cta)' }}
              >
                {stat.label === 'Support Available' ? (
                  '24/7'
                ) : (
                  <AnimatedNumber 
                    key={tick}
                    value={animatedNumber} 
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </h3>
              <p className="text-lg" style={{ color: 'var(--graphite-black)' }}>{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Services variant
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const animatedNumber = getAnimatedNumber(stat.baseNumber);
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 rounded-xl"
            style={{ background: 'linear-gradient(135deg, var(--navy-blue), var(--gold-highlight))' }}
          >
            <div className="text-4xl md:text-5xl text-white mb-2">
              <AnimatedNumber 
                key={tick}
                value={animatedNumber} 
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="text-white opacity-90">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}