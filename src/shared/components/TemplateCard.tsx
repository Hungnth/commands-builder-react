import { useState, useMemo } from 'react';
import type { CommandTemplate, TemplateInputs } from '@/shared/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CommandOutput } from './CommandOutput';
import { replacePlaceholders, toCapitalize, removeUnderscore } from '@/lib/utils';

interface TemplateCardProps {
    template: CommandTemplate;
}

/**
 * Component để render một template với các input fields và output commands
 */
export function TemplateCard({template}: TemplateCardProps) {
    const [inputs, setInputs] = useState<TemplateInputs>({});

    const handleInputChange = (key: string, value: string) => {
        setInputs((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // Generate commands với placeholders được thay thế
    const generatedCommands = useMemo(() => {
        return template.commands.map((cmd) => replacePlaceholders(cmd, inputs));
    }, [template.commands, inputs]);

    // Kiểm tra xem có input nào được điền chưa
    const hasInputs = Object.values(inputs).some((value) => value.trim() !== '');

    return (
        <Card className="w-full" id={template.id}>
            <CardHeader>
                <CardTitle className="text-xl">{template.name}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Input Fields */}
                {template.placeholders.length > 0 && (
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Nhập thông tin:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {template.placeholders.map((placeholder) => (
                                <div key={placeholder} className="space-y-2">
                                    <Label htmlFor={`${template.id}-${placeholder}`}>
                                        {toCapitalize(placeholder)}
                                    </Label>
                                    <Input
                                        id={`${template.id}-${placeholder}`}
                                        type="text"
                                        placeholder={`Nhập ${removeUnderscore(placeholder)}...`}
                                        value={inputs[placeholder] || ''}
                                        onChange={(e) => handleInputChange(placeholder, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Generated Commands */}
                {(hasInputs || template.placeholders.length === 0) && (
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Kết quả:
                        </h4>
                        <div className="space-y-3">
                            {generatedCommands.map((command, index) => (
                                <CommandOutput key={index} command={command} />
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
