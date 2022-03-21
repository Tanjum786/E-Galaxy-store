const Productcategory = ({cardimg, cardAlt, cardTitle })=>{
    return(
        <>
         <div className="card_container">
              <a href="/">
                <img src={cardimg} alt={cardAlt} />
                <p className="card_overlay padding_small">{cardTitle}</p>
              </a>
            </div>

        </>
    )
};

export {Productcategory};