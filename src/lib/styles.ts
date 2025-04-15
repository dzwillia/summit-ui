export const styles = {
  // Layout
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  grid: {
    cols1: 'grid grid-cols-1',
    cols2: 'grid grid-cols-2',
    cols3: 'grid grid-cols-3',
    cols4: 'grid grid-cols-4',
    gap4: 'gap-4',
  },
  
  // Spacing
  space: {
    y1: 'space-y-1',
    y2: 'space-y-2',
    y4: 'space-y-4',
    y6: 'space-y-6',
    y8: 'space-y-8',
    x2: 'space-x-2',
  },
  
  // Form elements
  input: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  
  // Typography
  text: {
    title: 'text-3xl font-bold',
    subtitle: 'text-muted-foreground mt-2',
    hint: 'text-sm text-muted-foreground',
    error: 'text-sm font-medium text-destructive',
    label: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
  
  // Common component styles
  button: 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  
  popover: 'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  
  // Container styles
  container: {
    outer: 'min-h-screen flex items-center justify-center bg-background p-6',
    inner: 'w-full max-w-xl space-y-8',
  }
} as const;