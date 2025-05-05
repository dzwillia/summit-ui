import { cn } from '@/lib/utils';
import * as React from 'react';
import { ImageProps } from '../types';

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback, isLazy = true, shape = 'square', className, onError, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true);
      onError?.(event);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    const shapeStyles = {
      square: '',
      rounded: 'rounded-lg',
      circle: 'rounded-full',
    };

    return (
      <div className={cn('relative overflow-hidden', shapeStyles[shape], className)}>
        {isLoading ? (
          <div
            className="absolute inset-0 animate-pulse bg-muted"
            aria-hidden="true"
            role="presentation"
          />
        ) : null}
        <img
          ref={ref}
          src={hasError && fallback ? fallback : src}
          alt={alt}
          loading={isLazy ? 'lazy' : 'eager'}
          onError={handleError}
          onLoad={handleLoad}
          className={cn('h-full w-full object-cover', isLoading && 'invisible')}
          {...props}
        />
      </div>
    );
  },
);
Image.displayName = 'Image';

export { Image };
