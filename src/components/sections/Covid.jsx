import React, { useState } from "react";
import Modal from "../ui/Modal";
import { createCovidCookie } from "../password";

const Covid = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [formData, setFormData] = useState({});

  const onOpen = () => {
    setModalIsOpen(true);
  };

  const onClose = () => {
    setModalIsOpen(false);
    props.covid(false);
  };

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, emailAddress } = formData;
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/evanvin/google_sheets/tYighHjedzwoDprq?tabId=email_addresses",
        {
          method: "post",
          body: JSON.stringify([[name, emailAddress]]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      createCovidCookie();
      document.getElementById("covid-form").reset();
      document.body.style.overflow = "visible";
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <React.Fragment>
      <Modal isOpen={modalIsOpen} onClose={onClose}>
        <h4>COVID-19</h4>
        <span className="br" />
        <p>
          Due to the challenges and especially the uncertainty around the
          Coronavirus, we have decided to adjust our Wedding Plans. We love each
          other very much -- and will still be getting married in Vermont on
          August 8th. Unfortunately, we are saddened to announce that we will be
          canceling our planned larger wedding reception, and we will need to
          limit the number of people attending to just immediate family.
        </p>
        <p>
          It's incredibly important to us that our friends and family stay safe
          during these uncertain times. When the world gets back on track, we
          plan to have a celebration with everyone invited.
        </p>
        <p>
          Things are changing rapidly and there are still many unknowns. If you
          would like us to keep you updated, the best way to do that is by
          filling out the COVID email form below. In the meantime, be safe and
          be well.
        </p>
        <p>♥ Cait & Evan</p>
        <span className="br" />
        <form className="form-section" id="covid-form" onSubmit={sendData}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleInput}
          />
          <input
            type="text"
            name="emailAddress"
            placeholder="Email Address"
            required
            onChange={handleInput}
          />
          <input type="submit" value="UPDATE ME" />
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default Covid;
