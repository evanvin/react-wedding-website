import React, { useState } from "react";
import Modal from '../ui/Modal';
import { createCovidCookie } from "../password";

const Covid = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [formData, setFormData] = useState({});

    const onOpen = () => {
        setModalIsOpen(true);
    };

    const onClose = () => {
        setModalIsOpen(false);
        props.covid(false)
    };

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        const { name, emailAddress } = formData
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/evanvin/google_sheets/tYighHjedzwoDprq?tabId=email_addresses",
                {
                    method: "post",
                    body: JSON.stringify([[name, emailAddress]]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const json = await response.json();
            createCovidCookie();
            document.getElementById("covid-form").reset();
            document.body.style.overflow = 'visible';
            onClose();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onClose={onClose}>
                <h4>COVID-19</h4>
                <br />
                <p>We are monitoring the situation closely so that we can make the right decisions on how to proceed for our wedding. Our top priority is the safety and well-being of our friends & family.</p>
                <p>If you would like updates about our wedding, please provide your email below. Thank you!</p>
                <p>♥ Cait & Evan</p>
                <br />
                <form className="form-section" id="covid-form" onSubmit={sendData}>
                    <input type="text" name="name" placeholder="Name" required onChange={handleInput} />
                    <input type="text" name="emailAddress" placeholder="Email Address" required onChange={handleInput} />
                    <input type="submit" value="UPDATE ME" />
                </form>
            </Modal>
        </React.Fragment>
    );
};

export default Covid;
