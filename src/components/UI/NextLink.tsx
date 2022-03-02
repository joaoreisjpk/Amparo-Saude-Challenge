import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink from 'next/link';

interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: any;
}

export function Link({ children, ...rest }: LinkProps) {
  return (
    <NextLink href={rest.href || '/'}>
      <a {...rest} href='#'>
        {children}
      </a>
    </NextLink>
  );
}
