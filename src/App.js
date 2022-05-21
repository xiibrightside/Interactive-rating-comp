import { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import thankyou from "./images/illustration-thank-you.svg";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="numbers bg-gray-700 rounded-full text-gray-200 "
      >
        {number}
      </button>
    );
  };

  const Thanks = ({ items }) => {
    return (
      <>
        <div className="wrapper">
          <img
            className="thximg pt-3 block mx-auto"
            src={thankyou}
            alt="thankyou"
          ></img>
          <p className="selected bg-gray-700 rounded-full mx-auto">
            You selected {items} out of 5
          </p>
          <h2 className="text-center">Thank You !</h2>
          <p className="pthanks text-center">
            We appreciate you taking the time to give a rating. If you ever need
            support, don't hesitate to get in touch.{" "}
            <b>
              {" "}
              <a
                className="again"
                href="#0"
                onClick={() => setIsSubmitted(false)}
              >
                ( Rate Again ? )
              </a>
            </b>
          </p>
        </div>
      </>
    );
  };

  return (
    <body>
      {!isSubmitted && (
        <div className="wrapper">
          <img
            className="bg-gray-700 p-2 rounded-full"
            src={star}
            alt="starticon"
          ></img>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering !
          </p>
          <ul>
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>
          <button
            onClick={() => setIsSubmitted(true)}
            className="submit rounded-full"
          >
            SUBMIT
          </button>
        </div>
      )}

      {isSubmitted && <Thanks items={items} />}
    </body>
  );
}

export default App;
