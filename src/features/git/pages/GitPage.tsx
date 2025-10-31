import { TemplateCard, TableOfContents } from "@/shared/components";
import { gitTemplates } from "../data/gitTemplates";

/**
 * Git Page - Hiển thị tất cả Git templates
 */
export function GitPage() {
    return (
        <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1 space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Git Commands</h1>
                    <p className="text-muted-foreground mt-2">
                        Tạo nhanh các lệnh Git thông dụng với các template được định nghĩa sẵn
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {gitTemplates.map((template) => (
                        <TemplateCard key={template.id} template={template} />
                    ))}
                </div>
            </div>

            {/* Table of Contents - Sticky */}
            <aside className="hidden xl:block w-64 shrink-0">
                <div className="sticky top-20">
                    <TableOfContents templates={gitTemplates} />
                </div>
            </aside>
        </div>
    );
}
