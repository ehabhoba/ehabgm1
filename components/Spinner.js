export default function Spinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={`animate-spin rounded-full border-4 border-blue-600 border-t-transparent ${sizeClasses[size]}`}>
      <span className="sr-only">جاري التحميل...</span>
    </div>
  )
}
