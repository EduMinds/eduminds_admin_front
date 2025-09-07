export default function Button({
  label,
  onClick,
  type,
  className,
}: {
  label: string;
  onClick: () => void;
  type: "submit" | "reset" | "button";
  className: string;
}) {
  return (
    <button 
    type={type}
    onClick={onClick} className={`bg-blue-500 text-white p-2 rounded-lg w-full cursor-pointer ${className}`}>
      {label}
    </button>
  );
}
