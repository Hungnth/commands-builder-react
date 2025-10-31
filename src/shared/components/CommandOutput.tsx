import { Card, CardContent } from '@/components/ui/card';
import { CopyButton } from './CopyButton';

interface CommandOutputProps {
    command: string;
}

/**
 * Component hiển thị một command với nút copy
 */
export function CommandOutput({command}: CommandOutputProps) {
    return (
        <Card className="bg-muted/50 border-border">
            <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                    <code className="flex-1 text-sm text-foreground font-mono break-all">
                        {command}
                    </code>
                    <CopyButton text={command} />
                </div>
            </CardContent>
        </Card>
    );
}
