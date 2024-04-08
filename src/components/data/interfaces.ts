//Project interface
export interface Project {
  title: string;
  description: string;
  icon: any;
  site?: string;
  github: string;
  isDone: boolean;
}

//Stack interface
export interface StackFrameworkTool {
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

