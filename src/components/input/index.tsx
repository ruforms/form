import { forwardRef } from 'react'

// Enhanced input component with variant support

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outline'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`flex h-10 w-full rounded-md border px-3 py-2 ${className || ''}`}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
