import type { CommandTemplate } from '@/shared/types';

export const templates: CommandTemplate[] = [
    {
        id: 'git-add-remote-nth',
        category: 'Git',
        name: '🎉 Config New Repo (HungNth)',
        description: 'Cấu hình một repo hoàn toàn mới với user Hungnth',
        placeholders: ['repo'],
        commands: [
            { cmd: 'git init && git config user.name "Hungnth" && git config user.email "thienhungnth@gmail.com" && git add . && git commit -m "Initial commit" && git branch -M main' },
            { cmd: 'git remote add origin git@hungnth:Hungnth/${repo}.git' },
            { cmd: 'git remote set-url origin git@hungnth:Hungnth/${repo}.git' },
        ],
    },
    {
        id: 'git-clone',
        category: 'Git',
        name: '📥 Clone Repository (HungNth)',
        description: 'Clone một repository từ GitHub với user HungNth',
        placeholders: ['repo'],
        commands: [
            { cmd: 'git clone git@hungnth:Hungnth/${repo}.git' },
            { cmd: 'git config user.name "Hungnth" && git config user.email "thienhungnth@gmail.com"' }
        ],
    },
    {
        id: 'git-commit',
        category: 'Git',
        name: '💬 Commit Message',
        description: 'Tạo commit message',
        placeholders: ['message'],
        commands: [
            { cmd: 'git commit -m "${message}"' }
        ],
    },
    {
        id: 'git-create-branch',
        category: 'Git',
        name: '🌿 Create & Switch Branch',
        description: 'Tạo và chuyển sang branch mới',
        placeholders: ['branch'],
        commands: [
            'git checkout -b ${branch}',
            'git push -u origin ${branch}',
        ],
    },
    {
        id: 'git-merge-branch',
        category: 'Git',
        name: '🔀 Merge Branch',
        description: 'Merge branch vào branch hiện tại',
        placeholders: ['branch'],
        commands: [
            { cmd: 'git merge ${branch}' },
            { cmd: 'git push' },
        ],
    },
    {
        id: 'git-tag-release',
        category: 'Git',
        name: '🏷️ Create Release Tag',
        description: 'Tạo tag cho release mới',
        placeholders: ['version', 'message'],
        commands: [
            { cmd: 'git tag -a ${version} -m "${message}"' },
            { cmd: 'git push origin ${version}' },
        ],
    },
    {
        id: 'git-reset-hard',
        category: 'Git',
        name: '⚠️ Hard Reset',
        description: 'Reset về commit cụ thể (XÓA mọi thay đổi)',
        placeholders: ['commit'],
        commands: [
            { cmd: 'git reset --hard ${commit}' }
        ],
    },
    {
        id: 'git-stash',
        category: 'Git',
        name: '📦 Stash Changes',
        description: 'Lưu tạm thay đổi chưa commit',
        placeholders: ['message'],
        commands: [
            { cmd: 'git stash save "${message}"' },
        ],
    },
];
