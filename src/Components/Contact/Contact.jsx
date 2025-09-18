import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow2.png'

//web3forms package is using..
export const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "254e8c42-4e4d-4f0f-8be2-0c962c03ce47");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
<div className="contact-col">
    <h3>Send us a message <img src={msg_icon} alt="" /></h3>
    <p>Feel free to reach out through contact from or find our contact
        information below. Your feedback, questions, and suggestions are 
        important to us as we strive to provide exceptional service our
        university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contaact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambrigde<br/>MA 02139, United
            States</li>
        </ul>
</div>
<div className="contact-col">
<form onSubmit={onSubmit}>
    <label htmlFor='name'>Your name</label>
    <input type="text" name='name' id='name' 
    placeholder='Enter your name'
    autoComplete="given-name" 
    required/>
    <label htmlFor="phone">Phone Number</label>
    <input type="tel" name='phone' id='phone' 
    placeholder='Enter your mobile number' 
    autoComplete="given-name"
    required/>
    <label htmlFor="message">Write your messages here</label>
    <textarea name="message" id='message' rows='6' placeholder='Enter your message' required></textarea>
    <button type='submit' id='btn' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
</form>
<span>{result}</span>
</div>
    </div>
  )
}
