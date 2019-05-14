import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our-story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              modi tempore illo itaque? Iste, delectus? Porro pariatur
              doloremque possimus qui odit nobis odio accusantium et sed.
              Accusantium nesciunt cumque voluptas!
            </p>
            <Link to="/about/">
              <button
                className="btn text-uppercase 
              btn-yellow"
              >
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
