import {
  CodeIcon,
  AtomIcon,
  FileJsIcon,
  DatabaseIcon,
  LeafIcon,
  GearSixIcon,
  ToolboxIcon,
  CloudIcon,
  LightningIcon,
  GitBranchIcon,
  GithubLogoIcon,
  FileTextIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

export type SocialIconKey = "github" | "linkedin" | "resume";

export type SkillIconKey =
  | "python"
  | "javascript"
  | "postgresql"
  | "django"
  | "react"
  | "git"
  | "aws"
  | "salesforce";

export const socialIconMap: Record<SocialIconKey, Icon> = {
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  resume: FileTextIcon,
};

export const skillIconMap: Record<SkillIconKey, Icon> = {
  python: AtomIcon,
  javascript: FileJsIcon,
  postgresql: DatabaseIcon,
  django: LeafIcon,
  react: AtomIcon,
  git: GitBranchIcon,
  aws: CloudIcon,
  salesforce: LightningIcon,
};

export const categoryIconMap: Record<string, Icon> = {
  "Coding Languages": CodeIcon,
  Framework: GearSixIcon,
  Tools: ToolboxIcon,
  Cloud: CloudIcon,
  Platform: LightningIcon,
};
