import "./body.css";
import "react-bootstrap-icons";

const Body = ({ title, price, data }) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0 child-cart">
        <div className="card-body ">
          <h5 className="card-title text-uppercase text-center title">
            {title}
          </h5>
          <h6 className="card-price text-center price">
            {price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="bi-ul">
            {data.map(({ classlist, icon, value }, idx) => (
              <li key={idx} className={`${classlist} align-text`}>
                <span className="bi-li">
                  <i className={icon} style={{ fontWeight: "bold" }}>
                    {" "}
                  </i>
                </span>
                {title === "Pro" && idx === 6 && <strong> Unlimited </strong>}
                {title !== "Free" && idx === 0 ? (
                  <strong> {value}</strong>
                ) : (
                  `${value}`
                )}
              </li>
            ))}
          </ul>
          <div className="d-grid">
            <a href="/" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
