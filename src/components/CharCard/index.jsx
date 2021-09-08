import "./style.css";

function CharCard({ char: { name, image, status, species } }) {
  return (
    <div className="card">
      <div className={`circle ${status}`}>
        <div className="imgBx">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="content">
        <div className="textStatus">
          <h3>{name}</h3>
          <h3 className={status}>{status}</h3>
        </div>
        <h4>Specie: {species}</h4>
      </div>
    </div>
  );
}
export default CharCard;
