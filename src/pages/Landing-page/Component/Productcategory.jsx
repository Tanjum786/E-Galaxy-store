import { Link } from "react-router-dom";

const Productcategory = ({ cardimg, cardAlt, cardTitle }) => {
  return (
    <>
      <div className="card_container">
        <Link to='/product'>
          <img src={cardimg} alt={cardAlt} />
          <p className="card_overlay padding_small">{cardTitle}</p>
        </Link>

      </div>
    </>
  );
};

export { Productcategory };
