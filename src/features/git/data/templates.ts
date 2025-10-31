import type { CommandTemplate } from '@/shared/types';

export const templates: CommandTemplate[] = [
    {
        id: 'git-add-remote-nth',
        category: 'Git',
        name: '🎉 Config New Repo (HungNth)',
        description: 'Cấu hình một repo hoàn toàn mới với user Hungnth',
        placeholders: ['repo'],
        commands: [
            'git init && git config user.name "Hungnth" && git config user.email "thienhungnth@gmail.com" && git add . && git commit -m "Initial commit" && git branch -M main',
            'git remote add origin git@hungnth:Hungnth/${repo}.git'
        ],
    },
    {
        id: 'git-clone',
        category: 'Git',
        name: '📥 Clone Repository (HungNth)',
        description: 'Clone một repository từ GitHub với user HungNth',
        placeholders: ['repo'],
        commands: [
            'git clone git@hungnth:Hungnth/${repo}.git',
            'git config user.name "Hungnth" && git config user.email "thienhungnth@gmail.com"'
        ],
    },
    {
        id: 'git-commit',
        category: 'Git',
        name: '💬 Commit Message',
        description: 'Tạo commit message',
        placeholders: ['message'],
        commands: ['git commit -m "${message}"'],
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
            'git merge ${branch}',
            'git push',
        ],
    },
    {
        id: 'git-tag-release',
        category: 'Git',
        name: '🏷️ Create Release Tag',
        description: 'Tạo tag cho release mới',
        placeholders: ['version', 'message'],
        commands: [
            'git tag -a ${version} -m "${message}"',
            'git push origin ${version}',
        ],
    },
    {
        id: 'git-reset-hard',
        category: 'Git',
        name: '⚠️ Hard Reset',
        description: 'Reset về commit cụ thể (XÓA mọi thay đổi)',
        placeholders: ['commit'],
        commands: ['git reset --hard ${commit}'],
    },
    {
        id: 'git-stash',
        category: 'Git',
        name: '📦 Stash Changes',
        description: 'Lưu tạm thay đổi chưa commit',
        placeholders: ['message'],
        commands: [
            'git stash save "${message}"',
        ],
    },
];
