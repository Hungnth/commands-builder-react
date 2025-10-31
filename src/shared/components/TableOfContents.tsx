import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CommandTemplate } from "@/shared/types";

interface TableOfContentsProps {
  templates: CommandTemplate[];
  className?: string;
}

/**
 * Table of Contents component để điều hướng nhanh đến templates
 */
export function TableOfContents({ templates, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0.5,
      }
    );

    // Observe tất cả template cards
    templates.forEach((template) => {
      const element = document.getElementById(template.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [templates]);

  const scrollToTemplate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset cho sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          📑 Quick Navigation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          <ul className="space-y-1">
            {templates.map((template) => (
              <li key={template.id}>
                <button
                  onClick={() => scrollToTemplate(template.id)}
                  className={cn(
                    "text-left text-sm w-full px-3 py-2 rounded-md transition-all hover:bg-accent hover:text-accent-foreground",
                    activeId === template.id
                      ? "bg-accent text-accent-foreground font-medium border-l-2 border-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {template.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
