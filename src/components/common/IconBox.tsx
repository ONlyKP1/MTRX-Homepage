import type { ReactNode } from 'react';

interface IconBoxProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconBox({ children, size = 'md', className = '' }: IconBoxProps) {
  return (
    <div className={`icon-box icon-box-${size} ${className}`}>
      {children}
    </div>
  );
}
