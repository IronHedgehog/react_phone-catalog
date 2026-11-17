import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.container} ${className}`.trim()}>{children}</div>
  );
};
