import "./tags.css"

interface TagProps {
  type: validateTypes;
}

type validateTypes = 
| "HTML"
| "CSS"
| "JavaScript"
| "TypeScript"
| "React"
| "SASS"
| "Node"

const Tag = ({ type }: TagProps) => {
  return (
    <>
      <span className={`tag ${type}`}>
        {type}
      </span>
    </>
  );
};

export default Tag;
