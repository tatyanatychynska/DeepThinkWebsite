import wordmark from "@/imports/deepthink1__1_.png";
import mark from "@/imports/DT_logo512__1_.png";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src={wordmark}
      alt="DeepThink"
      className={`w-auto object-contain ${className}`}
    />
  );
}

export function Mark({ className = "" }: { className?: string }) {
  return (
    <img
      src={mark}
      alt="DeepThink"
      className={`w-auto object-contain ${className}`}
    />
  );
}
