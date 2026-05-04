export const Button = ({className = "", size = "default", children }) => {
    const baseClasses =
        "relative overflow-hidden rounded-full font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-prominent-muted text-primary-foreground hover:bg-primary/75 shadow-lg shadow-primary/25 animate-hover"

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const classes= `${baseClasses} ${sizeClasses[size]} ${className}`;
    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center">
                {children}
            </span>
        </button>
    )
}