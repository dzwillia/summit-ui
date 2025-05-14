import { Loader2 } from 'lucide-react';
import { CommandLoadingProps } from '../types';

const CommandLoading = ({ children = 'Loading...', ...props }: CommandLoadingProps) => {
  return (
    <div className="flex items-center gap-2 p-3 py-2.5 text-sm text-muted-foreground" {...props}>
      <Loader2 className="h-4 w-4 animate-spin" />
      {children}
    </div>
  );
};
CommandLoading.displayName = 'CommandLoading';

export { CommandLoading };
