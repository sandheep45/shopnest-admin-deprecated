import React, { createContext, useContext, useState } from "react";
import * as Toast from "@radix-ui/react-toast";

type ToastType = "info" | "success" | "warning" | "error";

type ToastData = {
  id: number;
  type: ToastType;
  message: string;
};

type ToastContextType = {
  addToast: (type: ToastType, message: string) => number;
  removeToast: (id: number) => void;
};

const ToastContext = createContext<ToastContextType>({
  addToast: () => 0,
  removeToast: () => undefined,
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const toastCounter = React.useRef(0);

  const addToast = (type: ToastType, message: string) => {
    const id = toastCounter.current++;
    const newToast: ToastData = {
      id,
      type,
      message,
    };
    setToasts([...toasts, newToast]);
    return id;
  };

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <Toast.Provider>
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            className={`animate-toast-enter absolute bottom-4 right-6 z-10 flex gap-4 rounded-md px-4 py-2 ${getToastClass(
              toast.type
            )}`}
          >
            <Toast.Title>{toast.message}</Toast.Title>
            <Toast.Close aria-label="Close">
              <span aria-hidden>X</span>
            </Toast.Close>
          </Toast.Root>
        ))}
        <Toast.Viewport />
      </Toast.Provider>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

const getToastClass = (type: ToastType) => {
  switch (type) {
    case "info":
      return "bg-blue-500 text-white";
    case "success":
      return "bg-green-500 text-white";
    case "warning":
      return "bg-yellow-500 text-black";
    case "error":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};
