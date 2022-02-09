import "./tags.css"

interface Props {
    children: JSX.Element | JSX.Element[];
}

const TagContainer = ({children}:Props) => {
  return (
      <div className="tags-container">
        {children}
      </div>
  );
};

export default TagContainer;
