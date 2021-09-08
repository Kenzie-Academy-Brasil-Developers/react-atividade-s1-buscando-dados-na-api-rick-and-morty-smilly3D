import CharCard from "../CharCard";
import "./style.css";

const Characters = ({ characters }) => {
  return (
    <div className="container">
      {characters.map((char) => (
        <CharCard key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Characters;
