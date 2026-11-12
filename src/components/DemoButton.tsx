import { openDemo } from "@/lib/demo";

export function DemoButton({
  className = "",
  children = "Book a demo",
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openDemo();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
