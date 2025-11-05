
// src/components/ui/Card.jsx

export function Card({ children, className = "" }) {
  return (
    <div className={`p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-semibold text-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-2 text-sm text-gray-500">{children}</div>;
}
