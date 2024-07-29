import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2acd9253-9055-4162-9d23-43001ca8e016");

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
    <div className="col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Your inquiries are important to us, and we are committed to providing you with the best possible support.</p>
        <ul>
            <li><img src={mail} alt="" />customersupport@university.edu</li>
            <li><img src={phone} alt="" />+1 120-3010-809</li>
            <li><img src={location} alt="" />77 Massachusetts Ave, Cambrigde <br />MA 02139, United States</li>
        </ul>
    </div>
    <div className="col">
     <form onSubmit={onSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required />
        <label htmlFor="">Phone Number</label>
        <input type="tel" name="phone" placeholder='Enter Your Phone No.' required />
        <label htmlFor="">Write your message here</label>
        <textarea name="message"rows="6" placeholder='Enter Your Message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
     </form>
     <span>{result}</span>
    </div>      
    </div>
  )
}

export default Contact
