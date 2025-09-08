// import { cn } from '@ruforms/primitives'
import { forwardRef } from 'react'

// Textarea component with better styling

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'outline'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex min-h-20 w-full rounded-md border px-3 py-2 ${className || ''}`}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
