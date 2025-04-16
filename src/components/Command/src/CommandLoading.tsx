import { Loader2 } from 'lucide-react';
import { CommandLoadingProps } from '../types';

const CommandLoading = ({ children = 'Loading...', ...props }: CommandLoadingProps) => {
  return (
    <div
      className="py-6 text-center text-sm flex items-center justify-center gap-2 text-muted-foreground"
      {...props}
    >
      <Loader2 className="h-4 w-4 animate-spin" />
      {children}
    </div>
  );
};
CommandLoading.displayName = 'CommandLoading';

export { CommandLoading };
