export interface Tag {
  id: string;
  text: string;
}

export interface TagInputProps {
  value: Tag[];
  onChange: (tags: Tag[]) => void;
  placeholder?: string;
  maxTags?: number;
  className?: string;
  disabled?: boolean;
  errorText?: string;
  delimiterChars?: string | string[];
}
