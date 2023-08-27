import React from 'react';

interface Props {
  children: React.ReactNode;
  styles?: string;
}
const Wrapper: React.FC<Props> = ({ children, styles }: Props) => {
  return <div className={`w-full flex sm:px-4 px-3 ${styles}`}>{children}</div>;
};

export default Wrapper;
