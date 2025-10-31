import { GitPage } from "./pages/GitPage";
import { gitTemplates } from "./data/gitTemplates";
import { GitIcon } from "./components/GitIcon";

/**
 * Git Module Configuration
 */
export const gitModule = {
  name: "Git",
  path: "/git",
  icon: GitIcon,
  element: GitPage,
  templates: gitTemplates,
} as const;
