// import { cn } from '@ruforms/primitives'
import { forwardRef } from 'react'

// Button component with improve

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'default', size = 'md', children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors ${
          variant === 'default'
            ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            : variant === 'primary'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-600 text-white hover:bg-gray-700'
        } ${
          size === 'sm'
            ? 'h-8 px-2 text-sm'
            : size === 'md'
              ? 'h-10 px-4'
              : 'h-12 px-6 text-lg'
        } ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
