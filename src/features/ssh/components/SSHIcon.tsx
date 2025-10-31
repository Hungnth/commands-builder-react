import { LockKeyhole } from "lucide-react";

interface IconProps {
    className?: string;
}

/**
 * Git Icon Component
 */
export function SSHIcon({ className = 'size-4' }: IconProps) {
    return (
        <LockKeyhole className={className}/>
    );
}
