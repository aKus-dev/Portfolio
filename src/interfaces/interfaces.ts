
export interface DescriptionProjectsProps {
    id:string;
    desc:string;
    url:string;
    title:string;
    tags: validateTypes[];
  }
  
  
  export type validateTypes = 
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "PHP"
  | "API"
  | "React"
  | "SASS"
  | "Node"
  