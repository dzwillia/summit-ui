const focusRing = 'focus:outline-none focus:ring-ring focus:ring-[3px] focus:ring-offset-[3px]';
const focusRingSm = 'focus:ring-offset-2';

const focusRingVisible =
  'focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:ring-offset-[3px] focus-visible:ring-offset-background';
const focusRingVisibleSm = 'focus-visible:ring-offset-[2px]';

const focusRingWithin =
  'focus-within:outline-none focus-within:ring-ring focus-within:ring-[3px] focus-within:ring-offset-[3px] focus-within:ring-offset-background';
const focusRingWithinSm = 'focus-within:ring-offset-[2px]';

const input =
  'flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50';

const button =
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50';

export const styles = {
  focusRing,
  focusRingSm,

  focusRingVisible,
  focusRingVisibleSm,

  focusRingWithin,
  focusRingWithinSm,

  // Link
  link: 'text-primary hover:underline visited:text-[#54278f] transition-colors',

  // Form elements
  input: `${input} ${focusRingVisible}`,

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
  button: `${button} ${focusRing}`,

  popover:
    'relative z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
} as const;
