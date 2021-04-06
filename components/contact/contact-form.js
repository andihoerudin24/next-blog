import classes from "./contact-form.module.css";
import Notification from "../ui/notification";
import { useState,useEffect } from "react";

const sendContactData = async (ContactDetail) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(ContactDetail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log("data", data);
  if (!response.ok) {
    throw new Error(data.message || "Somethnik went wrong");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setrequestStatus] = useState("");
  const [requestError, setrequestError] = useState("");
  
  useEffect(()=>{
    if(requestStatus === 'success' || requestStatus === 'error'){
      const timer = setTimeout(() =>{
        setrequestStatus(null)
        setrequestError(null)
      },3000)
       return () => clearTimeout(timer)
    }
  },[requestStatus])

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setrequestStatus("pending");
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setrequestStatus("success");
    } catch (error) {
      setrequestError(error.message);
      setrequestStatus("error");
    }
  };

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message",
      message: "Your Message is on its way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "success",
      message: "Your Message send success",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you ?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Yout Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Yout Name</label>
            <input
              value={enteredName}
              onChange={(event) => {
                setEnteredName(event.target.value);
              }}
              type="text"
              id="name"
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            value={enteredMessage}
            onChange={(event) => {
              setEnteredMessage(event.target.value);
            }}
            id="message"
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
