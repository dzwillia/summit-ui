export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  fallback?: string;
  isLazy?: boolean;
  shape?: 'square' | 'rounded' | 'circle';
  className?: string;
}
