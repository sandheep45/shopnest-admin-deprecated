import { useState } from "react";

interface Props {
  options: string[]; // Array of options to search through
  placeholder?: string;
}

interface Tag {
  label: string;
  id: string;
}

const useSearchableTags = ({ options, placeholder = "Search..." }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 &&
      !selectedTags.some((tag) => tag.label === option)
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === "Enter" && inputValue) {
      const newTag: Tag = {
        label: inputValue,
        id: Math.random().toString(36).substring(7),
      };
      setSelectedTags([...selectedTags, newTag]);
      setInputValue("");
    }
    if (key === "Backspace" && !inputValue) {
      setSelectedTags(selectedTags.slice(0, selectedTags.length - 1));
    }
  };

  const handleRemoveTag = (id: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
  };

  return {
    inputValue,
    setInputValue,
    selectedTags,
    handleKeyDown,
    handleRemoveTag,
    filteredOptions,
    placeholder,
  };
};

export default useSearchableTags;
