import React from "react";
import { Fade } from "react-reveal";

import Button from "elements/Button";

export default function Categories(props) {
  return props.data.map((category, index1) => {
    if (category.itemId.length === 0) return null;
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <Fade
                  bottom
                  delay={300 * index2}
                  key={`category-${index1}-item-${index2}`}
                >
                  <div className="item column-3 row-1">
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper">
                        <img
                          src={
                            item.imageId[0]
                              ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                              : ""
                          }
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          href={`/details/${item._id}`}
                          className="stretched-link d-block text-gray-900"
                        >
                          <h5>{item.title}</h5>
                        </Button>
                        <span className="text-gray-300 font-weight-light">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  });
}
