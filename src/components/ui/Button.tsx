import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const buttonVariants = cva('active: scale-95 inline-flex items-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none', 
    {
        variants: {
            variant: {
                default : 'bg-slate-900 text-white hover:bg-slate-800',
                ghost : 'bg-transparent hover:text-slate-900 hover:bg-slate-200'
            },
            size: {
                default: 'px-4 py-2 h-10',
                sm: 'h-9 px-2',
                lg: 'px-8 h-11'
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
    }

)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}

const Button: FC<ButtonProps> = ({className, children, variant, size, isLoading, ...props}) => {
  return <button className={cn(buttonVariants({variant, size, className}))} 
  {...props} disabled={isLoading}>
    {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : null}
    {children}
  </button>
}

export default Button