import type { CommandTemplate } from '@/shared/types';

export const templates: CommandTemplate[] = [
        {
        id: 'rclone-copy',
        category: 'Rclone',
        name: '💿 Rlcone Copy',
        description: 'Sao chép dữ liệu giữa các vị trí sử dụng Rclone',
        placeholders: ['remote_1', 'remote_2'],
        commands: [
            {
                cmd: 'rclone copy -vP --checksum --checkers 10 --transfers 10 --server-side-across-configs --drive-copy-shortcut-content "${remote_1}" "${remote_2}"',
                note: 'Giữa các cloud với nhau'
            },
            { 
                cmd: 'rclone copy -vP --checksum --checkers 10 --transfers 10 --server-side-across-configs "${remote_1}" "${remote_2}"',
                note: 'Từ cloud về local'
             },
            { 
                cmd: 'rclone copy -vP --checksum --checkers 10 --transfers 10 --server-side-across-configs "${remote_2}" "${remote_1}"',
                note: 'Từ local lên cloud'
             },
        ],
    },
        {
        id: 'rclone-list-remote',
        category: 'Rclone',
        name: '📄 Rclone List Remote',
        description: 'Kiểm tra kích thước của thư mục từ xa bằng Rclone',
        placeholders: [],
        commands: [
            { cmd: 'rclone listremotes', note: 'Liệt kê các remote đã cấu hình' },
        ],
    },
    {
        id: 'rclone-size-check',
        category: 'Rclone',
        name: '👝 Rclone Size Check',
        description: 'Kiểm tra kích thước của thư mục từ xa bằng Rclone',
        placeholders: ['remote'],
        commands: [
            { cmd: 'rclone size ${remote}' }
        ],
    }
];
