import { Container } from "lucide-react";

interface DockerIconProps {
    className?: string;
}

/**
 * Docker Icon Component
 */
export function DockerIcon({ className = "size-4" }: DockerIconProps) {
    return (
        <Container className={className} />
    );

}
