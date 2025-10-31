import type { CommandTemplate } from '@/shared/types';

export const templates: CommandTemplate[] = [
    {
        id: 'docker-compose',
        category: 'Docker',
        name: '⬆️ Docker Compose',
        description: 'Khởi động services với Docker Compose',
        placeholders: [],
        commands: [
            { cmd: 'docker-compose up -d' },
            { cmd: 'docker-compose down -v' },
        ],
    },
    {
        id: 'docker-clear',
        category: 'Docker',
        name: '🗑️ Docker Clear',
        description: 'Xóa tất cả container, image, volume không sử dụng',
        placeholders: [],
        commands: [
            { cmd: 'docker system prune -a' },
            { cmd: 'docker builder prune --all' },
        ],
    },
    {
        id: 'docker-volume',
        category: 'Docker',
        name: '🗂️ Docker Volume',
        description: 'Liệt kê và xóa các volume theo tên',
        placeholders: ['volume_name'],
        commands: [
            { cmd: 'docker volume ls' },
            { cmd: 'docker volume rm ${volume_name}' },
        ],
    },
    {
        id: 'docker-network',
        category: 'Docker',
        name: '🖥️ Docker Network',
        description: 'Liệt kê và xóa các network theo tên',
        placeholders: ['network_name'],
        commands: [
            { cmd: 'docker network ls' },
            { cmd: 'docker network rm ${network_name}' },
        ],
    },
    {
        id: 'docker-image',
        category: 'Docker',
        name: '📷 Docker Images',
        description: 'Liệt kê và xóa các image theo tên',
        placeholders: ['image_name'],
        commands: [
            { cmd: 'docker images ls' },
            { cmd: 'docker rmi ${image_name}' },
        ],
    },
    {
        id: 'docker-exec',
        category: 'Docker',
        name: '💻 Execute Command',
        description: 'Thực thi lệnh trong container đang chạy',
        placeholders: ['container', 'command'],
        commands: [
            { cmd: 'docker exec -it ${container} ${command}' }
        ],
    },
    {
        id: 'docker-logs',
        category: 'Docker',
        name: '📋 View Logs',
        description: 'Xem logs của container',
        placeholders: ['container'],
        commands: [
            { cmd: 'docker logs -f ${container}' }
        ],
    },
    {
        id: 'docker-stop-remove',
        category: 'Docker',
        name: '🗑️ Stop & Remove Container',
        description: 'Dừng và xóa container',
        placeholders: ['container'],
        commands: [
            { cmd: 'docker stop ${container}' },
            { cmd: 'docker rm ${container}' },
        ],
    },
];
