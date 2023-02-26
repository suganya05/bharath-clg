import React from "react";
import "./Card.css";

const Card: React.FC = () => {
  return (
    <div className="cardWrapper">
      <div>
        <div className="container">
          <div className="card">
            <div className="imgBox">
              <img
                src="https://blog.vantagecircle.com/content/images/2019/06/company-event.png"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Card One</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis dolorem molestiae nisi minima dolores nostrum, iure
                commodi, omnis porro voluptate voluptas cumque non similique
                voluptatibus voluptates aspernatur, fuga dolor ea!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOJcV4KNxFI3IboeD1YYVxoNojZkzM3rqWs94RzyjFSqNxbLvWzk28i9xsuMpOCol7mE&usqp=CAU"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Card Two</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis dolorem molestiae nisi minima dolores nostrum, iure
                commodi, omnis porro voluptate voluptas cumque non similique
                voluptatibus voluptates aspernatur, fuga dolor ea!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img
                src="https://media.istockphoto.com/id/1193355523/vector/business-presentation-with-charts-on-the-board-in-front-of-the-audience-at-the-conference.jpg?s=612x612&w=0&k=20&c=7dUOP-tf5dgme6J8ZNQ2uBmqZzOfg2odxMN3d0_3hII="
                alt=""
              />
            </div>
            <div className="content">
              <h2>Card Three</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis dolorem molestiae nisi minima dolores nostrum, iure
                commodi, omnis porro voluptate voluptas cumque non similique
                voluptatibus voluptates aspernatur, fuga dolor ea!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imgBox">
              <img
                src="https://blog.vantagecircle.com/content/images/2019/06/company-event.png"
                alt=""
              />
            </div>
            <div className="content">
              <h2>Card One</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis dolorem molestiae nisi minima dolores nostrum, iure
                commodi, omnis porro voluptate voluptas cumque non similique
                voluptatibus voluptates aspernatur, fuga dolor ea!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
