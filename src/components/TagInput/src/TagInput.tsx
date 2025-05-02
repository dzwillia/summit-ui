import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Tag, TagInputProps } from '../types';

const TagInput = React.forwardRef<HTMLDivElement, TagInputProps>(
  (
    {
      value,
      className,
      placeholder = 'Type and press Enter...',
      maxTags,
      delimiterChars,
      isDisabled = false,
      onChange,
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [focusedTagIndex, setFocusedTagIndex] = useState<number>(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const tagsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const delimiters = useMemo(() => {
      if (!delimiterChars) return [];
      return Array.isArray(delimiterChars) ? delimiterChars : [delimiterChars];
    }, [delimiterChars]);

    const addTag = (text: string) => {
      if (maxTags && value.length >= maxTags) return;
      if (!text.trim()) return;

      const newTag: Tag = {
        id: crypto.randomUUID(),
        text: text.trim(),
      };

      onChange([...value, newTag]);
      setInputValue('');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && inputValue.trim()) {
        event.preventDefault();
        addTag(inputValue);
      } else if (event.key === 'Backspace' && !inputValue && value.length > 0) {
        event.preventDefault();
        setFocusedTagIndex(value.length - 1);
        tagsRef.current[value.length - 1]?.focus();
      } else if (
        event.key === 'ArrowLeft' &&
        !inputValue &&
        focusedTagIndex === -1 &&
        value.length > 0
      ) {
        event.preventDefault();
        setFocusedTagIndex(value.length - 1);
        tagsRef.current[value.length - 1]?.focus();
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      if (delimiters.length > 0) {
        const lastChar = newValue.slice(-1);

        if (delimiters.includes(lastChar)) {
          const tagText = newValue.slice(0, -1);
          addTag(tagText);
          return;
        }

        // Split on any delimiter
        const pattern = new RegExp(`[${delimiters.map(d => `\\${d}`).join('')}]`);
        if (pattern.test(newValue)) {
          const tags = newValue.split(pattern);
          const lastTag = tags.pop() || '';

          tags.forEach(tag => addTag(tag));
          setInputValue(lastTag);
          return;
        }
      }

      setInputValue(newValue);
    };

    const handleTagKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        removeTag(value[index].id);
        if (index > 0) {
          setFocusedTagIndex(index - 1);
          tagsRef.current[index - 1]?.focus();
        } else {
          inputRef.current?.focus();
          setFocusedTagIndex(-1);
        }
      } else if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        setFocusedTagIndex(index - 1);
        tagsRef.current[index - 1]?.focus();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        if (index < value.length - 1) {
          setFocusedTagIndex(index + 1);
          tagsRef.current[index + 1]?.focus();
        } else {
          inputRef.current?.focus();
          setFocusedTagIndex(-1);
        }
      }
    };

    const removeTag = (tagId: string) => {
      onChange(value.filter(tag => tag.id !== tagId));
    };

    const handleContainerClick = (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) {
        inputRef.current?.focus();
        setFocusedTagIndex(-1);
      }
    };

    // Reset refs array when tags change
    useEffect(() => {
      tagsRef.current = tagsRef.current.slice(0, value.length);
    }, [value.length]);

    const placeholderText = useMemo(() => {
      if (!delimiterChars?.length) return placeholder;
      const delims = Array.isArray(delimiterChars) ? delimiterChars : [delimiterChars];
      return `Type and press Enter or use ${delims.map(d => `"${d}"`).join(' or ')} to add tags...`;
    }, [delimiterChars, placeholder]);

    return (
      <div
        ref={ref}
        className={cn(
          styles.input,
          styles.focusRingWithin,
          'flex min-h-[2.5rem] w-full cursor-text flex-wrap gap-1.5 !p-1.5',
          isDisabled && 'cursor-not-allowed',
          className,
        )}
        onClick={handleContainerClick}
      >
        {value.map((tag, index) => (
          <button
            key={tag.id}
            ref={el => (tagsRef.current[index] = el)}
            type="button"
            disabled={isDisabled}
            onClick={e => e.stopPropagation()}
            onKeyDown={e => handleTagKeyDown(e, index)}
            className={cn(
              'flex items-center gap-1 rounded-sm bg-secondary px-2 py-0.5 text-sm text-secondary-foreground transition-colors',
              'hover:bg-secondary/80',
              isDisabled && 'opacity-50 cursor-not-allowed',
              styles.focusRing,
              'focus:ring-2 focus:ring-offset-0',
            )}
          >
            {tag.text}
            {!isDisabled ? (
              <X
                className="h-3 w-3 opacity-50 transition-opacity hover:opacity-100"
                role="button"
                aria-label={`Remove ${tag.text}`}
                onClick={e => {
                  e.stopPropagation();
                  removeTag(tag.id);
                }}
              />
            ) : null}
          </button>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocusedTagIndex(-1)}
          placeholder={value.length === 0 ? placeholderText : ''}
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
          disabled={isDisabled || (maxTags !== undefined && value.length >= maxTags)}
        />
      </div>
    );
  },
);
TagInput.displayName = 'TagInput';

export { TagInput };
