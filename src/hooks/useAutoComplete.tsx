import { useState, useEffect } from "react";

export type AutocompleteResult = {
  value: string;
  label: string;
};

export type AutocompleteHook = {
  inputValue: string;
  results: AutocompleteResult[];
  loading: boolean;
  error: string | null;
  setInputValue: (value: string) => void;
};

export type SearchFunction = (
  query: string
) => AutocompleteResult[] | Promise<AutocompleteResult[]> | undefined;

const useAutocomplete = (
  searchFunction: SearchFunction,
  initialInputValue = ""
): AutocompleteHook => {
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [results, setResults] = useState<AutocompleteResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const searchResults = await searchFunction(inputValue);

        if (!cancel) {
          setResults(searchResults || []);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }

      setLoading(false);
    };

    if (inputValue) {
      fetchData()
        .then(() => undefined)
        .catch(() => undefined);
    } else {
      setResults([]);
    }

    return () => {
      cancel = true;
    };
  }, [inputValue, searchFunction]);

  return {
    inputValue,
    results,
    loading,
    error,
    setInputValue,
  };
};

export default useAutocomplete;
