import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isFluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  isFluid = false,
}) => {
  const baseClass = isFluid ? styles['container-fluid'] : styles.container;

  return <div className={`${baseClass} ${className}`.trim()}>{children}</div>;
};
