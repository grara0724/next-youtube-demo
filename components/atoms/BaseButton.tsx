"use client";

type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function BaseButton({
  children,
  onClick,
  className,
}: BaseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded transition bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
