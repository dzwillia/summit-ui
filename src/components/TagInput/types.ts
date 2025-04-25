export interface Tag {
  id: string;
  text: string;
}

export interface TagInputProps {
  value: Tag[];
  className?: string;
  placeholder?: string;
  maxTags?: number;
  delimiterChars?: string | string[];
  isDisabled?: boolean;
  onChange: (tags: Tag[]) => void;
}
