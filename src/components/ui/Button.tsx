import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariance = cva(
  "active:scale-95 inline-flex  items-center justify-center rounded-md test-sm font-medium transition-color focus:outline-none  focus:ring-2 focus:ring-slate-2 focus:ring-offset-2 disabled:opcaity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent  hover:test-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-10 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return <button className="" disabled={isLoading} {...props}>{
 isLoading ? <Loader2/> : null 
}</button>;
};
export default Button;
