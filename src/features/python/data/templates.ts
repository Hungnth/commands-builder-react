import type { CommandTemplate } from '@/shared/types';

export const templates: CommandTemplate[] = [
    {
        id: 'python-env-windows',
        category: 'Python',
        name: '📊 Python Env Windows',
        description: 'Cài đặt và quản lý môi trường ảo Python trên Windows',
        placeholders: [],
        commands: [
            { cmd: 'python -m venv .venv' },
            { cmd: '.venv\\Scripts\\activate.bat' },
            { cmd: 'pip install -r requirements.txt' },
        ],
    },
    {
        id: 'python-env-linux',
        category: 'Python',
        name: '📊 Python Env Linux',
        description: 'Cài đặt và quản lý môi trường ảo Python trên Linux',
        placeholders: [],
        commands: [
            { cmd: 'python3 -m venv .venv' },
            { cmd: 'source .venv/bin/activate' },
            { cmd: 'pip install -r requirements.txt' },
        ],
    },
];
