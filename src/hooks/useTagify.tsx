import { useState, useEffect, useRef } from "react";
import Tagify from "@yaireo/tagify";

interface TagifyHookProps {
  initialTags: string[];
}

const useTagify = ({ initialTags }: TagifyHookProps) => {
  const [tags, setTags] = useState(initialTags);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const tagify = new Tagify(inputRef.current, {
        mode: "mix",
        enforceWhitelist: true,
        whitelist: ["apple", "banana", "cherry", "durian"],
        dropdown: {
          enabled: 1,
          maxItems: 5,
          position: "text",
        },
        callbacks: {
          add: onAddTag,
          remove: onRemoveTag,
        },
      });
      return () => tagify.destroy();
    }
  }, []);

  const onAddTag = (e: CustomEvent<Tagify.AddEventData<Tagify.BaseTagData>>) => {
    setTags([...tags, e.detail.data?.value as string]);
  };

  const onRemoveTag = (e: CustomEvent<Tagify.AddEventData<Tagify.BaseTagData>>) => {
    setTags(tags.filter((tag) => tag !== e.detail.data?.value));
  };

  return {
    inputRef,
    tags,
  };
};

export default useTagify;
