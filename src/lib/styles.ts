export const styles = {
  // Form elements
  input:
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',

  // Typography
  text: {
    title: 'text-3xl font-bold',
    subtitle: 'text-muted-foreground mt-2',
    hint: 'text-sm text-muted-foreground',
    error: 'text-sm font-medium text-destructive',
    label:
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },

  // Common component styles
  button:
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
} as const;
