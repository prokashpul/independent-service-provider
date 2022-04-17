import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Title from "../../../Utilities/DynamicTitle";
import "./CheckOut.css";

const CheckOut = () => {
  Title("Check Out your Order");
  const [user] = useAuthState(auth);

  const email = user?.email;
  const name = user?.displayName;
  const handelSubmit = (event) => {
    event.preventDefault();
    if (event.target.address.value && event.target.phone.value) {
      toast("Thank you! For Checked Out!");
    } else {
      toast("Sorry something wrang !! and try again");
    }
  };
  return (
    <div className="check-out">
      <div className=" checked-container">
        <div className="checked">
          <h2>Checked Out Now.. </h2>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                readOnly
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                readOnly
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="checked-btn">
              <button type="submit" className="btn">
                submit
              </button>
            </div>
          </form>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
