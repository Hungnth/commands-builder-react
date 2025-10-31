import { Card, CardContent } from "@/components/ui/card";
import { CopyButton } from "./CopyButton";

interface CommandOutputProps {
  command: string;
}

/**
 * Component hiển thị một command với nút copy
 */
export function CommandOutput({ command }: CommandOutputProps) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-800">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-4">
          <code className="flex-1 text-sm text-slate-900 dark:text-slate-100 font-mono break-all">
            {command}
          </code>
          <CopyButton text={command} />
        </div>
      </CardContent>
    </Card>
  );
}
