import { HTMLAttributes } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
