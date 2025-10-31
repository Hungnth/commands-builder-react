import { Container } from "lucide-react";

interface IconProps {
    className?: string;
}

/**
 * Docker Icon Component
 */
export function DockerIcon({ className = "size-4" }: IconProps) {
    return (
        <Container className={className} />
    );

}
