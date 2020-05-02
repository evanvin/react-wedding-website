import React, { useState } from "react";
import Modal from '../ui/Modal'

const Covid = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const onOpen = () => {
        setModalIsOpen(true);
    };

    const onClose = () => {
        setModalIsOpen(false);
        props.covid(false)
    };

    const sendData = () => {

    }

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onClose={onClose}>
                <h4>COVID-19</h4>
                <br />
                <p>We are monitoring the situation closely so that we can make the right decisions on how to proceed for our wedding. Our top priority is the safety and well-being of our friends & family.</p>
                <p>If you would like updates about our wedding, please provide your email below. Thank you!</p>
                <p>♥ Cait & Evan</p>
                <br />
                <form class="form-section" onSubmit={sendData}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="text" name="email-address" placeholder="Email Address" required />
                    <input type="submit" value="UPDATE ME" />
                </form>
            </Modal>
        </React.Fragment>
    );
};

export default Covid;
