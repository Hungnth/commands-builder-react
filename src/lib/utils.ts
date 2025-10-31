import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { TemplateInputs } from "@/shared/types"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Thay thế các placeholder trong template string bằng giá trị từ inputs
 * @param template - Template string với placeholders dạng ${key}
 * @param inputs - Object chứa các giá trị thay thế
 * @returns String đã được thay thế placeholders
 */
export function replacePlaceholders(
    template: string,
    inputs: TemplateInputs
): string {
    return template.replace(/\$\{(\w+)\}/g, (match, key) => {
        return inputs[key] !== undefined ? inputs[key] : match;
    });
}

export function removeUnderscore(str: string): string {
    if (!str) return '';
    
    // Viết hoa chữ cái đầu tiên, phần còn lại viết thường
    return str.replace(/_/g, ' ');
}

export function toCapitalize(str: string): string {
    if (!str) return '';
    
    // Loại bỏ dấu gạch dưới và thay bằng khoảng trắng
    const withoutUnderscore =removeUnderscore(str);
    
    // Viết hoa chữ cái đầu tiên, phần còn lại viết thường
    return withoutUnderscore.charAt(0).toUpperCase() + withoutUnderscore.slice(1).toLowerCase();
}