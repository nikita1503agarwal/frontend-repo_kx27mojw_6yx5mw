import { memo } from 'react'
import { motion } from 'framer-motion'

/*
  APILOS Premium 3D Wordmark + Symbol
  - Geometric "A" symbol with sharp angles and inner cut
  - Neon electric blue → deep sapphire → cyber-aqua gradient
  - Subtle glow, reflections, and motion-ready light sweep
  - Clean APILOS wordmark beside the symbol (sans-serif, spaced)
  - No background
*/

function APILOSWordmark({ size = 64, showText = true, className = '' }) {
  const s = Math.max(48, size)
  const textSize = Math.round(s * 0.45)

  return (
    <div className={`inline-flex items-center gap-5 ${className}`} style={{ filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.45))' }}>
      {/* Symbol */}
      <motion.svg
        width={s}
        height={s}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.98 }}
        animate={{ scale: [0.98, 1.0, 0.98] }}
        transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
        aria-label="APILOS A symbol"
      >
        <defs>
          <linearGradient id="aBody" x1="10" y1="74" x2="70" y2="6" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0E2A6E" />
            <stop offset="55%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#5EEAD4" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60A5FA"/>
            <stop offset="100%" stopColor="#3B82F6"/>
          </linearGradient>
          <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 48) rotate(90) scale(42 30)">
            <stop offset="65%" stopColor="rgba(94,234,212,0)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.9)" />
          </radialGradient>
          <filter id="innerSoft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="rgba(0,0,0,0.55)"/>
          </filter>
          <linearGradient id="sweep" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Core A silhouette: outer solid + inner cut */}
        <g filter="url(#softShadow)">
          <path
            d="M40 6 L72 74 H58.5 L49.8 56.5 H30.2 L21.5 74 H8 L40 6 Z M40 22 L34 36 L28.5 48.5 H51.5 L46 36 L40 22 Z"
            fill="url(#aBody)"
            stroke="#7DD3FC"
            strokeOpacity="0.28"
            strokeWidth="0.8"
            filter="url(#innerSoft)"
          />
          {/* Neon rim light */}
          <path
            d="M40 6 L72 74 H58.5 L49.8 56.5 H30.2 L21.5 74 H8 L40 6 Z"
            fill="url(#glow)"
            opacity="0.85"
          />
        </g>

        {/* Energy vein along the left stroke */}
        <motion.path
          d="M40 10 L14 70"
          stroke="url(#edge)"
          strokeWidth="3.2"
          strokeLinecap="round"
          initial={{ pathLength: 0.2, opacity: 0.6 }}
          animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4.8, ease: 'easeInOut', repeat: Infinity }}
        />

        {/* Light sweep reflection across the face */}
        <motion.rect
          x="-60" y="0" width="120" height="80" fill="url(#sweep)" opacity="0.25"
          animate={{ x: [ -60, 80, -60 ] }}
          transition={{ duration: 5.6, ease: 'easeInOut', repeat: Infinity }}
          style={{ mixBlendMode: 'screen' }}
        />
      </motion.svg>

      {/* Wordmark */}
      {showText && (
        <div className="select-none">
          <motion.span
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="block font-semibold tracking-[0.28em]"
            style={{
              fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
              fontSize: textSize,
              letterSpacing: `${Math.max(2, Math.round(textSize * 0.08))}px`,
              lineHeight: 1,
              background: 'linear-gradient(180deg, #E5F2FF 0%, #A5C8FF 40%, #6BA6FF 60%, #B8F3EB 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 14px rgba(59,130,246,0.35)'
            }}
          >
            APILOS
          </motion.span>
          <div className="mt-2 h-px w-full max-w-[520px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        </div>
      )}
    </div>
  )
}

export default memo(APILOSWordmark)
