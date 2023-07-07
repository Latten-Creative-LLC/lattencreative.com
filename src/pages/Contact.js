import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

// Include layout
import Layout from './includes/layouts/Layout';

export default function Contact() {
  const form = useRef();

  const sendgrid = "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";

  const meta = {
    title: "Contact Us",
    description: "Let's work on something amazing, contact us now!"
  }

  // Email form
  const emailForm = (e) => {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //sendgrid.setApiKey(sendgrid);

    const options = {
      to: 'jlatten@lattencreative.com',
      from: email,
      subject: `New lead from ${name}`,
      text: message
    }

    //sendgrid.send(options);
    // Set submit button to loading
    document.getElementById('submit').value = 'Sending...';

    // Send email
    emailjs.sendForm('service_n3b24wi', 'template_ymmc01y', form.current, 'DJCyb-LogEanTw7MI')
      .then((result) => {
          console.log(result.text);

          // Reset form
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';

          // Show success message
          document.getElementById('submit').value = 'Message Sent!';
      }, (error) => {
          console.log(error.text);
      }); 
    }

  return (
    <Layout pageMeta={meta}>
    <div className='about-us-page'>
      <div className='about-us-page-inner'>
        <div className='about-us-page-welcome container-lg'>
          <div className='welcome-upper'>
            <h1>{meta.title}</h1>
          </div>
          <div className='welcome-lower'>
            <p>We're always looking forward to working with new customers and businesses like yours. Contact us now so we can work together and create something new and unique!</p>
          </div>
        </div>
        <div className='line'></div>
        <div className='about-us-page-main'>
          <div className='about-us-page-main-inner container-lg'>
            <div className='about-us-page-main-row row'>
              <div className='about-us-page-main-right col-lg-9'>
                <div className='about-us-page-main-right-inner'>
                  <div className='upper-quote'>
                    <h2>Let's work on something amazing</h2>
                    <p>Fill out the form below and we'll get back to you as soon as possible</p>


                    <form ref={form} onSubmit={emailForm} id="contact-form" className='contact-form'>
                      <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' id='name' placeholder='John Doe' required/>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' placeholder="Email Address" required/>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' id='message' placeholder='Tell us about your project' required></textarea>
                      </div>
                      <div className='form-group'>
                        <input type='submit' id="submit" value='Submit' />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='about-us-page-main-left col-lg-3'>
                <div className='about-us-page-main-left-inner'>
                  <h2>Outline</h2>

                  <div className='outline-block'>
                    <h2>Team</h2>
                    <ul>
                      <li><a href='https://jameslatten.com'>James Latten - Founder/Dev</a></li>
                      <li><a href='https://larryalesley.com'>Larry Lesley - UI/UX</a></li>
                    </ul>
                  </div>
                  <div className='outline-block'>
                    <h2>Social</h2>

                    <ul>
                      <li><a href='https://twitter.com/lattencreative'>Twitter</a></li>
                    </ul>
                  </div>
                  <div className='outline-block'>
                    <h2>Contact</h2>

                    <ul>
                      <li><a href='mailto:business@lattencreative.com'>business@lattencreative.com</a></li>
                      <li><a href='tel:4402134860'>440-213-4860</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</Layout>
  )
}
