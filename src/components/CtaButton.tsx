import React from 'react';
import { CHECKOUT_URL } from '../data';

interface CtaButtonProps {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  showIcon?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  href = CHECKOUT_URL,
  onClick,
  variant = 'primary',
  className = '',
  showIcon = true,
}) => {
  const baseClass = variant === 'secondary' ? 'flip-card__btn2' : 'flip-card__btn';
  const isAnchor = href?.startsWith('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (isAnchor) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a
      href={href}
      target={isAnchor ? undefined : '_blank'}
      rel={isAnchor ? undefined : 'noopener noreferrer'}
      onClick={handleClick}
      className={`${baseClass} px-8 py-4 text-center font-medium transition-all select-none ${className}`}
    >
      <span className="flex items-center justify-center gap-3">
        {showIcon && (
          <svg
            aria-hidden="true"
            className="w-4 h-4 fill-current rotate-0"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
          </svg>
        )}
        <span className="tracking-wide text-base md:text-xl font-medium">{text}</span>
      </span>
    </a>
  );
};
