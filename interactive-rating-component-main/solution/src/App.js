import { Fragment } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import StarImage from "./assets/images/icon-star.svg";
import ThankImage from "./assets/images/illustration-thank-you.svg";

function App() {
  const ratingCircle = (
    <Fragment>
      <div className="border border-1 rounded-circle px-4 py-3 ">
        <p className="mb-0">1</p>
      </div>
    </Fragment>
  );

  const normalCard = (
    <Card>
      <CardBody className="d-flex flex-column">
        <div>
          <img src={StarImage} alt="star icon" />
        </div>

        <div>
          <CardTitle>How did we do ?</CardTitle>
          <CardSubtitle>
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
        <Button>Submit</Button>
      </CardBody>
    </Card>
  );

  return (
    <div class="d-flex min-vh-100 justify-content-center align-items-center">
      {normalCard}
      {/* <Card>
        <CardBody className="d-flex flex-column align-items-center">
          <div>
            <img src={ThankImage} alt="" />
          </div>
          <div>
            <p>You selected 4 out of 5</p>
          </div>

          <div>
            <CardTitle className="text-center">Thank you!</CardTitle>
            <CardSubtitle className="text-center">
              <p>We appreciate you taking the time to give us a rating.</p>
              <p>
                If you ever need more support, don't hesitate to get in touch!
              </p>
            </CardSubtitle>
          </div>
        </CardBody>
      </Card> */}
    </div>
  );
}

export default App;
