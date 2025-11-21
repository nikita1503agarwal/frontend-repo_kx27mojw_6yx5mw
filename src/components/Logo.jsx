import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'

/*
  Premium Animated Flame Logo
  - Electric blue gradient with neon edge glow
  - Clean geometric silhouette with sharp contours
  - Soft depth shadow + reflective highlight
  - Gentle pulse + rising micro-particles (seamless loop)
  - No text
*/

const particlesBase = [
  { x: 6, r: 0.8 }, { x: 10, r: 1.1 }, { x: 14, r: 0.9 }, { x: 18, r: 1.2 },
  { x: 22, r: 0.9 }, { x: 26, r: 1.0 }, { x: 30, r: 1.1 }, { x: 34, r: 0.8 },
  { x: 38, r: 1.0 }, { x: 42, r: 0.9 }, { x: 16, r: 0.7 }, { x: 28, r: 0.7 }
]

function FlameLogo({ size = 32, className = '' }) {
  const s = Math.max(24, size)

  const particles = useMemo(() => {
    return particlesBase.map((p, i) => ({
      ...p,
      delay: (i * 0.12) % 1.8,
      dur: 2.2 + (i % 5) * 0.15,
      amp: 8 + (i % 3) * 2,
    }))
  }, [])

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: s, height: s }}
      initial={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
      animate={{}}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[28%] blur-md"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 55%, rgba(59,130,246,0.35), rgba(59,130,246,0) 70%)',
        }}
      />

      <motion.svg
        width={s}
        height={s}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Apilos flame logo"
        initial={{ scale: 0.98, rotate: 0 }}
        animate={{ scale: [0.98, 1.02, 0.98], rotate: [0, 0.5, 0] }}
        transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity }}
      >
        <defs>
          <linearGradient id="flameGradient" x1="12" y1="42" x2="36" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="45%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <radialGradient id="edgeGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 24) rotate(90) scale(24 18)">
            <stop offset="60%" stopColor="rgba(94,234,212,0.0)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.75)" />
          </radialGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="rgba(0,0,0,0.5)"/>
          </filter>
          <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main geometric flame silhouette */}
        <g filter="url(#softShadow)">
          <motion.path
            d="M24 4c2.8 4.2 4.7 7.7 5.7 10.5 1 2.8 1 4.9 0.3 6.4-.7 1.5-2.2 2.6-4.8 3.7 2.5.5 4.5 1.5 5.8 3.1 1.3 1.6 1.9 3.6 1.6 5.9-.3 2.3-1.5 4.5-3.6 6.3-2.1 1.8-5.1 3.1-9 3.1-3.9 0-7-1.2-9.2-3.2-2.2-2-3.4-4.7-3.3-7.4.1-2.7 1.4-5.2 3.6-7.3 2.2-2.1 5.3-3.7 9.2-4.6-2.4-1.3-3.8-2.8-4.2-4.6-.4-1.8.2-4 1.8-6.7 1.6-2.7 4.2-5.9 7.9-9.2Z"
            fill="url(#flameGradient)"
            stroke="#7DD3FC"
            strokeOpacity="0.3"
            strokeWidth="0.6"
            filter="url(#innerGlow)"
            initial={{ pathLength: 0.98 }}
            animate={{ pathLength: [0.98, 1, 0.98] }}
            transition={{ duration: 4.6, ease: 'easeInOut', repeat: Infinity }}
          />

          {/* Neon edge glow */}
          <path
            d="M24 4c2.8 4.2 4.7 7.7 5.7 10.5 1 2.8 1 4.9 0.3 6.4-.7 1.5-2.2 2.6-4.8 3.7 2.5.5 4.5 1.5 5.8 3.1 1.3 1.6 1.9 3.6 1.6 5.9-.3 2.3-1.5 4.5-3.6 6.3-2.1 1.8-5.1 3.1-9 3.1-3.9 0-7-1.2-9.2-3.2-2.2-2-3.4-4.7-3.3-7.4.1-2.7 1.4-5.2 3.6-7.3 2.2-2.1 5.3-3.7 9.2-4.6-2.4-1.3-3.8-2.8-4.2-4.6-.4-1.8.2-4 1.8-6.7 1.6-2.7 4.2-5.9 7.9-9.2Z"
            fill="url(#edgeGlow)"
            opacity="0.85"
          />

          {/* Reflective highlight */}
          <path
            d="M17 19c2.6-1.8 5.7-2.8 9.3-3.1-1.4-1.8-1.9-3.6-1.4-5.5-3.9 2.7-6.6 5.5-7.9 8.6Z"
            fill="#FFFFFF"
            opacity="0.18"
          />

          {/* Inner white-hot core pulse */}
          <motion.ellipse
            cx="24" cy="29" rx="5.2" ry="6.2"
            fill="#E0F2FE"
            opacity="0.25"
            initial={{ scale: 0.9, opacity: 0.18 }}
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
          />
        </g>

        {/* Rising micro-particles */}
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={34}
            r={p.r}
            fill="#7DD3FC"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -12 - p.amp, opacity: [0, 1, 0] }}
            transition={{ duration: p.dur, delay: p.delay, ease: 'easeOut', repeat: Infinity }}
          />
        ))}
      </motion.svg>
    </motion.div>
  )
}

export default memo(FlameLogo)
