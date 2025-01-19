export function Button({ children, onClick, variant = 'default', disabled = false, className = '' }) {
  const variants = {
    default: 'bg-blue-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
    destructive: 'bg-red-500 text-white',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
