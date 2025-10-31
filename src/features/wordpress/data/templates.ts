import type { CommandTemplate } from '@/shared/types';

export const templates: CommandTemplate[] = [
    {
        id: 'wp-plugin-block-create',
        category: 'WordPress',
        name: '⏏️ Tạo WordPress Plugin Block Mới',
        description: 'Tạo một WordPress Plugin Block mới với cấu trúc chuẩn',
        placeholders: ['plugin_name'],
        commands: [
            'npx @wordpress/create-block ${plugin_name} --textdomain ${plugin_name} --namespace ${plugin_name}'
        ],
    },
    {
        id: 'wp-block-create',
        category: 'WordPress',
        name: '📥 Tạo WordPress Block Mới (Không Plugin)',
        description: 'Tạo một WordPress Block bên trong một Plugin hiện có',
        placeholders: ['plugin_name', 'block_name'],
        commands: [
            'npx @wordpress/create-block ${block_name} --no-plugin --textdomain ${plugin_name} --namespace ${plugin_name}'
        ],
    }
];
