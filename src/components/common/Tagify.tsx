import useSearchableTags from "@src/hooks/useSearchableTag";
import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Input from "./Input";
import Card from "./Card";

interface ITagifyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  tags: string[];
}

const Tagify: React.FC<ITagifyProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const {
    filteredOptions,
    inputValue,
    setInputValue,
    selectedTags,
    handleKeyDown,
    handleAddTag,
    handleRemoveTag,
  } = useSearchableTags({
    options: props.tags,
    placeholder: "Search...",
  });

  function focusInputOnClickDiv() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="flex w-full flex-wrap rounded-md border border-gray-700 p-2 dark:bg-[#1e1e2d] dark:text-gray-300">
      <div onClick={focusInputOnClickDiv} className="flex w-full flex-wrap">
        {selectedTags.map((option) => (
          <span
            key={option.id}
            className="mb-2 mr-2 flex items-center gap-2 rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-[#2b2b40] dark:text-gray-400"
          >
            {option.label}
            <RxCross2
              className="cursor-pointer"
              onClick={() => handleRemoveTag(option.id)}
            />
          </span>
        ))}
      </div>
      <div className="relative flex w-full">
        <Input
          onFocus={() => setShowSuggestion(true)}
          ref={inputRef}
          className="border-0"
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {showSuggestion && filteredOptions.length > 0 && (
          <Card
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-[50px] z-[7] w-full flex-col gap-3"
          >
            <button
              onClick={() => setShowSuggestion(false)}
              className="flex w-full justify-end"
            >
              <RxCross2 className="scale-x-110" />
            </button>
            <div className="flex flex-wrap">
              {filteredOptions.map((option) => (
                <span
                  onClick={() => handleAddTag(option)}
                  key={option}
                  className="mb-2 mr-2 cursor-pointer rounded-md bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-[#2b2b40] dark:text-gray-400"
                >
                  {option}
                </span>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Tagify;
