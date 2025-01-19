export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`border-b pb-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
