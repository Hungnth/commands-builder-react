import type { CommandTemplate } from "@/shared/types";

export const dockerTemplates: CommandTemplate[] = [
  {
    id: "docker-build",
    category: "Docker",
    name: "🏗️ Build Image",
    description: "Build một Docker image từ Dockerfile",
    placeholders: ["image", "tag"],
    commands: ["docker build -t ${image}:${tag} ."],
  },
  {
    id: "docker-run",
    category: "Docker",
    name: "🚀 Run Container",
    description: "Chạy container từ image",
    placeholders: ["name", "image", "port"],
    commands: ["docker run -d --name ${name} -p ${port}:${port} ${image}"],
  },
  {
    id: "docker-compose-up",
    category: "Docker",
    name: "⬆️ Docker Compose Up",
    description: "Khởi động services với Docker Compose",
    placeholders: ["file"],
    commands: ["docker-compose -f ${file} up -d"],
  },
  {
    id: "docker-exec",
    category: "Docker",
    name: "💻 Execute Command",
    description: "Thực thi lệnh trong container đang chạy",
    placeholders: ["container", "command"],
    commands: ["docker exec -it ${container} ${command}"],
  },
  {
    id: "docker-logs",
    category: "Docker",
    name: "📋 View Logs",
    description: "Xem logs của container",
    placeholders: ["container"],
    commands: ["docker logs -f ${container}"],
  },
  {
    id: "docker-stop-remove",
    category: "Docker",
    name: "🗑️ Stop & Remove Container",
    description: "Dừng và xóa container",
    placeholders: ["container"],
    commands: [
      "docker stop ${container}",
      "docker rm ${container}",
    ],
  },
];
