import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import NextLink, { LinkProps } from 'next/link';

interface ILink
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export function Link({ children, ...rest }: ILink & LinkProps) {
  return (
    <NextLink href={rest.href || '/'}>
      <a {...rest} href='#'>
        {children}
      </a>
    </NextLink>
  );
}
