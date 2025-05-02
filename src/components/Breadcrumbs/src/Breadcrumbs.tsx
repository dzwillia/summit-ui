import { cn, styles } from '@/lib/styles';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import { BreadcrumbsProps } from '../types';

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator = <ChevronRight className="h-4 w-4" />, className }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('flex', className)}>
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-muted-foreground">{separator}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);
Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumbs };
