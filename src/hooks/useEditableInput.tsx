import { useState } from "react";

type EditableInputHookOptions<T> = {
  initialValue?: T;
  onSubmit: (value: T) => void;
};

function useEditableInput<T = string>({
  initialValue = "" as T,
  onSubmit,
}: EditableInputHookOptions<T>) {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    onSubmit(value);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  };

  return {
    value,
    isEditing,
    handleSubmit,
    handleCancel,
    handleEdit,
    handleChange,
  };
}

export default useEditableInput;
