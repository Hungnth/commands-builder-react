import { TemplateCard, TableOfContents } from '@/shared/components';
import { templates } from '../data/templates.ts';

export function ModulePage() {
    return (
        <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Docker Commands</h1>
                    <p className="text-muted-foreground mt-2">
                        Tạo nhanh các lệnh Docker thông dụng với các template được định nghĩa sẵn
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {templates.map((template) => (
                        <TemplateCard key={template.id} template={template} />
                    ))}
                </div>
            </div>

            {/* Table of Contents - Sticky */}
            <aside className="hidden xl:block w-64 shrink-0">
                <div className="sticky top-20">
                    <TableOfContents templates={templates} />
                </div>
            </aside>
        </div>
    );
}
