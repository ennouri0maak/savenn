import React, { useState, useEffect } from "react";
import "../styles.css";

function Contact () {
 

 

  return (
   
   <center>
   <form className="form"  >
      <label className="name" >Name</label>
      <input className="plc1"
        placeholder="                                                                                                                                                     Name"

      />

      <label className="email" >Email</label>
      <input
        placeholder="                                                                                                                                                     Email"

      />

      <label>Message</label>
      <textarea
        placeholder="Message"

      ></textarea>
<div className="submit">
  <br></br>
      <button className="submitbtn"
        type="submit"
      >
        <h3>Submit</h3>
      </button>
      </div>
    </form>
    </center>
  );
};

export default Contact;