import { Button } from '@/components/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandLoading,
} from '@/components/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import * as React from 'react';
import { AutocompleteOption, AutocompleteProps } from '../types';

const Autocomplete = React.forwardRef<HTMLButtonElement, AutocompleteProps>(
  (
    {
      loadOptions,
      options = [],
      value,
      onChange,
      placeholder = 'Select an option...',
      emptyMessage = 'No results found.',
      loadingMessage = 'Loading...',
      errorMessage = 'Failed to load options.',
      className,
      freeSolo = false,
      maxSuggestions = 10,
      debounceMs = 300,
      minSearch = 2,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [asyncOptions, setAsyncOptions] = React.useState<AutocompleteOption[]>([]);
    const [hasSearched, setHasSearched] = React.useState(false);

    // Debounce timer reference
    const debounceTimer = React.useRef<NodeJS.Timeout>();

    // Cleanup timer on unmount
    React.useEffect(() => {
      return () => {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }
      };
    }, []);

    const fetchOptions = React.useCallback(
      async (search: string) => {
        if (!loadOptions) return;

        try {
          setLoading(true);
          setError(false);
          const results = await loadOptions(search);
          setAsyncOptions(results.slice(0, maxSuggestions));
          setHasSearched(true);
        } catch (err) {
          console.error('Error fetching options:', err);
          setError(true);
          setAsyncOptions([]);
        } finally {
          setLoading(false);
        }
      },
      [loadOptions, maxSuggestions],
    );

    // Filter static options
    const filteredStaticOptions = React.useMemo(() => {
      if (loadOptions) return []; // Don't show static options in async mode

      const normalizedInput = inputValue.toLowerCase().trim();
      if (normalizedInput.length > 0) {
        setHasSearched(true);
      }
      return options
        .filter(
          option =>
            option.label.toLowerCase().includes(normalizedInput) ||
            option.value.toLowerCase().includes(normalizedInput),
        )
        .slice(0, maxSuggestions);
    }, [loadOptions, options, inputValue, maxSuggestions]);

    // Combined options for rendering
    const displayOptions = loadOptions ? asyncOptions : filteredStaticOptions;

    const selectedOption = React.useMemo(
      () => displayOptions.find(option => option.value === value),
      [displayOptions, value],
    );

    const handleSelect = React.useCallback(
      (selectedValue: string) => {
        onChange(selectedValue);
        setOpen(false);
        setInputValue('');
        setHasSearched(false);
      },
      [onChange],
    );

    const handleInputChange = React.useCallback(
      (input: string) => {
        setInputValue(input);
        if (freeSolo) {
          onChange(input);
        }

        if (input.length === 0) {
          setHasSearched(false);
        }

        // Clear existing timer
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }

        // Handle async search
        if (loadOptions && input.length >= minSearch) {
          debounceTimer.current = setTimeout(() => {
            fetchOptions(input);
          }, debounceMs);
        } else if (loadOptions && input.length === 0) {
          setAsyncOptions([]);
        }
      },
      [freeSolo, onChange, loadOptions, minSearch, debounceMs, fetchOptions],
    );

    const handleClear = React.useCallback(() => {
      onChange('');
      setInputValue('');
      setAsyncOptions([]);
      setHasSearched(false);
    }, [onChange]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'w-full justify-between',
              !selectedOption && !value && 'text-muted-foreground',
              className,
            )}
          >
            <span className="truncate">
              {selectedOption ? selectedOption.label : value || placeholder}
            </span>
            <div className="flex items-center gap-1">
              {(value || inputValue) && (
                <X
                  className="h-4 w-4 opacity-50 hover:opacity-100"
                  onClick={e => {
                    e.stopPropagation();
                    handleClear();
                  }}
                />
              )}
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[--radix-popover-trigger-width] p-0">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder={placeholder}
              value={inputValue}
              onValueChange={handleInputChange}
            />
            {loading && <CommandLoading>{loadingMessage}</CommandLoading>}
            {!loading && error && <CommandEmpty>{errorMessage}</CommandEmpty>}
            {!loading && !error && hasSearched && displayOptions.length === 0 && (
              <CommandEmpty>{emptyMessage}</CommandEmpty>
            )}
            {!loading && !error && displayOptions.length > 0 && (
              <CommandGroup className="max-h-[200px] overflow-y-auto">
                {displayOptions.map(option => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={handleSelect}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        option.value === value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
