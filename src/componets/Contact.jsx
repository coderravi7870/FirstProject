import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder='Enter name'/>
          </div>
          <div>
            <label>Emain</label>
            <input type="email" required placeholder='Enter Email'/>
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder='Tell us about your query...'/>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;