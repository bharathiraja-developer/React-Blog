import React from "react";
import Productcard from "./Productcard";
import Contents from "./Contents";

function DataScience() {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-3">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {Contents.map((content) => {
            if (Number(content.id) < 12 && Number(content.id) > 5) {
              return (
                <Productcard
                  key={content.id}
                  id={content.id}
                  src={content.src}
                  title={content.title}
                  description={content.description}
                  footer={content.footer}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default DataScience;
