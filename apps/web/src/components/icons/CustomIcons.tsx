import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const IconBolt: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconTrainers: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8.5" cy="7" r="4" stroke={color} strokeWidth="2" />
    <path
      d="M17 11C18.0609 11 19.0783 10.5786 19.8284 9.82843C20.5786 9.07828 21 8.06087 21 7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const IconSwords: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M14.5 17.5L3 6V3H6L17.5 14.5M14.5 17.5L19 22L22 19L17.5 14.5M14.5 17.5L17.5 14.5M9.5 14.5L3 21M9.5 6.5L6.5 9.5M17.5 9.5L21 6V3H18L14.5 6.5M17.5 9.5L14.5 6.5M17.5 9.5L14.5 12.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconChatBubble: React.FC<IconProps> = ({ size = 20, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8.5" cy="11.5" r="1" fill={color} />
    <circle cx="12.5" cy="11.5" r="1" fill={color} />
    <circle cx="16.5" cy="11.5" r="1" fill={color} />
  </svg>
);

export const IconSearch: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
    <path d="M21 21L16.65 16.65" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconEye: React.FC<IconProps> = ({ size = 18, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconCrown: React.FC<IconProps> = ({ size = 20, className = '', color = 'var(--pp-warning)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M3 18L5 8L9.5 12.5L12 5L14.5 12.5L19 8L21 18H3Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="4" r="1.5" fill="var(--pp-text-inverse)" />
    <circle cx="5" cy="7" r="1.2" fill="var(--pp-text-inverse)" />
    <circle cx="19" cy="7" r="1.2" fill="var(--pp-text-inverse)" />
  </svg>
);

export const IconMedalSilver: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="14" r="6" fill="var(--pp-type-steel)" stroke="var(--pp-text-muted)" strokeWidth="1.5" />
    <path d="M9 3L12 9L15 3H18L13.5 11H10.5L6 3H9Z" fill="var(--pp-border-strong)" />
    <text x="12" y="17" fontSize="8" fontWeight="bold" fill="var(--pp-text-inverse)" textAnchor="middle">2</text>
  </svg>
);

export const IconMedalBronze: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="14" r="6" fill="var(--pp-type-ground)" stroke="var(--pp-type-ground)" strokeWidth="1.5" />
    <path d="M9 3L12 9L15 3H18L13.5 11H10.5L6 3H9Z" fill="var(--pp-type-ground)" opacity="0.8" />
    <text x="12" y="17" fontSize="8" fontWeight="bold" fill="var(--pp-text-inverse)" textAnchor="middle">3</text>
  </svg>
);

export const IconEggHatch: React.FC<IconProps> = ({ size = 20, className = '', color = 'var(--pp-red)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 3C8 3 5 8.5 5 14C5 18 8 21 12 21C16 21 19 18 19 14C19 8.5 16 3 12 3Z"
      fill={color}
      opacity="0.2"
    />
    <path
      d="M12 3C8 3 5 8.5 5 14C5 18 8 21 12 21C16 21 19 18 19 14C19 8.5 16 3 12 3Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="15" r="2.5" fill={color} />
  </svg>
);

export const IconLevelUp: React.FC<IconProps> = ({ size = 20, className = '', color = 'var(--pp-success)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M18 15L12 9L6 15"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 20L12 14L6 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
  </svg>
);

export const IconSparkle: React.FC<IconProps> = ({ size = 16, className = '', color = 'var(--pp-type-psychic)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
      fill={color}
    />
  </svg>
);
