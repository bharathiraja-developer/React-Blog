import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Productcard from "./Productcard";
import Contents from "./Contents";
import FullStack from "./FullStack";

function Home() {
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-3">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
            {Contents.map((content) => {
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
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
