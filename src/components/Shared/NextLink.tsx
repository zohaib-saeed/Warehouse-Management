import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NextLink: React.FC<Props> = ({ href, className, children }: Props) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NextLink;
