import { Button } from '@/components/Button';
import {
  Command,
  CommandForceEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandLoading,
} from '@/components/Command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AutocompleteOption, AutocompleteProps } from '../types';

const Autocomplete = React.forwardRef<HTMLButtonElement, AutocompleteProps>(
  (
    {
      loadOptions,
      options = [],
      value,
      onChange,
      placeholder = 'Select an option...',
      loadingMessage = 'Loading...',
      emptyMessage = 'No results found',
      errorMessage = 'Failed to load options',
      className,
      maxSuggestions = 10,
      debounceMs = 300,
      minSearch = 2,
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [asyncOptions, setAsyncOptions] = useState<AutocompleteOption[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    // Debounce timer reference
    const debounceTimer = useRef<NodeJS.Timeout>();

    // Cleanup timer on unmount
    useEffect(() => {
      return () => {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }
      };
    }, []);

    const fetchOptions = useCallback(
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
    const filteredStaticOptions = useMemo(() => {
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

    const selectedOption = useMemo(
      () => displayOptions.find(option => option.value === value),
      [displayOptions, value],
    );

    const handleSelect = useCallback(
      (selectedValue: string) => {
        onChange(selectedValue);
        setOpen(false);
        setInputValue('');
        setHasSearched(false);
      },
      [onChange],
    );

    const handleInputChange = useCallback(
      (input: string) => {
        setInputValue(input);

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
      [loadOptions, minSearch, debounceMs, fetchOptions],
    );

    const handleClear = useCallback(() => {
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
            variant="input"
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
              {value || inputValue ? (
                <X
                  className="h-4 w-4 opacity-50 hover:opacity-100"
                  onClick={e => {
                    e.stopPropagation();
                    handleClear();
                  }}
                />
              ) : null}
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
            {loading ? <CommandLoading>{loadingMessage}</CommandLoading> : null}
            {!loading && error ? <CommandForceEmpty>{errorMessage}</CommandForceEmpty> : null}
            {!loading && !error && hasSearched && displayOptions.length === 0 ? (
              <CommandForceEmpty>{emptyMessage}</CommandForceEmpty>
            ) : null}
            {!loading && !error && displayOptions.length > 0 ? (
              <CommandGroup className="max-h-[12rem] overflow-y-auto">
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
            ) : null}
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
);
Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
