export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  // Async function to fetch options
  loadOptions?: (inputValue: string) => Promise<AutocompleteOption[]>;
  // Static options (used if loadOptions is not provided)
  options?: AutocompleteOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  freeSolo?: boolean;
  maxSuggestions?: number;
  // Debounce delay for async searches (in milliseconds)
  debounceMs?: number;
  // Minimum characters before triggering async search
  minSearch?: number;
  // Loading message
  loadingMessage?: string;
  // Error message when async fetch fails
  errorMessage?: string;
}
