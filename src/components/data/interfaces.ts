//Project interface
export interface Project {
  title: string;
  description: string;
  site?: string;
  github: string;
  isDone: boolean;
  img: string;
}

//Stack interface
export interface StackFrameworkTool {
  id: number;
  name: string;
  category: string;
  icon: any;
  url?: string;
}

//Component stack interface
export interface Props {
  title: string;
  content: StackFrameworkTool[];
}

export interface ExperienceInterface {
  title: string;
  description: string;
  date: string;
}
