import './Contact.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    // eslint-disable-next-line no-unused-vars
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "d624681d-62a2-438f-ab51-1f003d68a04f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
                setResult("Message sent successfully!");
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error"
                });
                setResult("Something went wrong. Please try again.");
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error"
            });
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' required/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' name='email' required/>
                </div>
                <div className="input-box">
                    <label>Your message</label>
                    <textarea name='message' className='field mess' placeholder='Enter your message' required></textarea>                
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
