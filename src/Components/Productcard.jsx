import React from "react";

function Productcard({ id, src, title, description, footer }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={src} alt="..." />
        <div className="card-body p-4">
          <div className="text-start">
            <h5 className="fw-medium">{title}</h5>
            <p>{description}</p>
            <p className="text-success">Read more ⋙</p>
          </div>
        </div>
        <div className="card-footer p-3 pt-2 border-top-1 bg-transparent">
          <div className="text-left ms-2">{footer}</div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
