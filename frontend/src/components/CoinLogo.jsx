export default function CoinLogo({ className = 'w-12 h-12', id = 'coin', variant = 'solid' }) {
  // "solid": primary-colored coin with white € for neutral/card backgrounds
  // "light": white coin with primary-colored € for use on the colored hero panel
  const isLight = variant === 'light';

  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="22" fill={isLight ? '#ffffff' : 'var(--primary)'} />
      <circle
        cx="24" cy="24" r="17" fill="none"
        stroke={isLight ? 'var(--primary)' : '#ffffff'}
        strokeOpacity={isLight ? 0.25 : 0.5}
        strokeWidth="1.5"
      />
      <text
        x="24"
        y="32"
        fontFamily="Outfit, sans-serif"
        fontSize="24"
        fontWeight="800"
        fill={isLight ? 'var(--primary)' : '#ffffff'}
        textAnchor="middle"
      >
        €
      </text>
    </svg>
  );
}
