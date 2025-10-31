import { DockerPage } from "./pages/DockerPage";
import { dockerTemplates } from "./data/dockerTemplates";
import { DockerIcon } from "./components/DockerIcon";

/**
 * Docker Module Configuration
 */
export const dockerModule = {
  name: "Docker",
  path: "/docker",
  icon: DockerIcon,
  element: DockerPage,
  templates: dockerTemplates,
} as const;
