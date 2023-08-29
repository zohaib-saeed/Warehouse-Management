import React from 'react';

interface Props {
  layout?: string;
  children: React.ReactNode;
  styles?: string;
}
const Wrapper: React.FC<Props> = ({ children, styles, layout = 'flex' }: Props) => {
  return <div className={`w-full ${layout} sm:px-4 px-3 ${styles}`}>{children}</div>;
};

export default Wrapper;
