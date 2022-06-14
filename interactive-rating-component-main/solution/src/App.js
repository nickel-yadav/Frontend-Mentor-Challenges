import { Fragment } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

import StarImage from "./assets/images/icon-star.svg";
import ThankImage from "./assets/images/illustration-thank-you.svg";

function App() {
  const ratingCircle = (
    <Fragment>
      <div
        className="rounded-circle px-4 py-3"
        style={{ backgroundColor: "hsl(216, 12%, 54%)" }}
      >
        <p className="mb-0">1</p>
      </div>
    </Fragment>
  );

  const normalCard = (
    <Card className="py-3" style={{ backgroundColor: "hsl(213, 19%, 18%)" }}>
      <CardBody className="d-flex flex-column justify-content-start">
        <div>
          <img
            src={StarImage}
            alt="star icon"
            className="rounded-circle p-3"
            style={{ backgroundColor: "#262e38" }}
          />
        </div>

        <div>
          <CardTitle style={{ color: "white" }}>How did we do ?</CardTitle>
          <CardSubtitle style={{ color: "hsl(217, 12%, 63%)" }}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </CardSubtitle>
        </div>
        <div className="d-flex align-items-center justify-content-evenly">
          {ratingCircle}
          {ratingCircle}
          {ratingCircle}
          {ratingCircle}
          {ratingCircle}
        </div>
        <Button style={{ backgroundColor: "hsl(25, 97%, 53%)" }}>Submit</Button>
      </CardBody>
    </Card>
  );

  return (
    <div
      className="container-fluid d-flex min-vh-100 justify-content-center align-items-center"
      style={{ backgroundColor: "hsl(216, 12%, 8%)" }}
    >
      <div className="col-11 col-sm-6 col-lg-5 col-xl-4">
        {/* {normalCard} */}
        <Card
          className="py-3 rounded-5"
          style={{ backgroundColor: "hsl(213, 19%, 18%)" }}
        >
          <CardBody className="d-flex flex-column align-items-center ">
            <div>
              <img src={ThankImage} alt="" />
            </div>
            <div
              className="px-3 py-2 rounded-pill"
              style={{ backgroundColor: "hsl(216, 12%, 54%)" }}
            >
              <p className="mb-0" style={{ color: "hsl(25, 97%, 53%)" }}>
                You selected 4 out of 5
              </p>
            </div>

            <div>
              <CardTitle className="text-center" style={{ color: "white" }}>
                Thank you!
              </CardTitle>
              <CardSubtitle
                className="text-center"
                style={{ color: "hsl(216, 12%, 54%)" }}
              >
                <p>We appreciate you taking the time to give us a rating.</p>
                <p>
                  If you ever need more support, don't hesitate to get in touch!
                </p>
              </CardSubtitle>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
