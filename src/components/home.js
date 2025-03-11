import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function Home() {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => setShowModal(false);

    return (
        <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light text-center">

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to Communion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Connecting People Across Faiths & Interests. Discover events and engage with the community!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Get Started</Button>
                </Modal.Footer>
            </Modal>

            <main className="d-flex flex-column align-items-center mt-2 text-center px-3">
                <h2 className="display-6 fw-bold text-dark mb-3 px-2 px-md-0">
                    Connecting People Across Faiths & Interests
                </h2>
                <p className="text-secondary lead w-100 w-md-75 px-2">
                    Communion is a platform that brings people together through events and shared experiences, fostering connections across different faiths and interests.
                </p>
                <Link to="/event" className="btn btn-primary btn-lg mt-3">
                    Explore Events
                </Link>
            </main>
        </div>
    );
};


