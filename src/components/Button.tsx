import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);
