import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
// npm i @emailjs/browser
const Requests = () => {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_4ik89zv",
                "template_rkgcqoo",
                form.current,
                "Ac1RL4TgJZVZgpMSY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    alert("your message has been sent.");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.log(error.text);
                    setStatus("Error sending message.");
                }
            );
    };
    return (
        <form className="contantForm" ref={form} onSubmit={sendEmail}>
            <h1>Request to be a valnteer</h1>
        

            Name:
            <label>
                <input type="text" name="name" value={name} onChange={handleNameChange} className="contact-input" />
            </label>
            Email:
            <label>
                <input type="email" name="email" value={email} onChange={handleEmailChange} className="contact-input" />
            </label>
                Why do you want to be a volunteer? Talk about yourself
            <label>
                <textarea name="message" value={message} onChange={handleMessageChange} className="contact-textarea" />
            </label>
            <button type="submit" className="contact-button">Send</button>
            {status && <div>{status}</div>}
        </form>
    );
};
export default Requests;