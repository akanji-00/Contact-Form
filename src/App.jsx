import { useState } from "react";

function App() {
  return (
    <main className="ff-karla">
      <div className="container mg-2">
        <h1 className="text-h font-lg mg-2">Contact Us</h1>

        <form className="flex flex-col gap-2">
          <div className="flex-field gap-2">
            <label htmlFor="first-name" className="flex flex-col py-1">
              <span className="query-field">First Name *</span>
              <input type="text" id="first-name" />
            </label>
            <label htmlFor="last-name" className="flex flex-col py-1">
              <span className="query-field">Last Name *</span>
              <input type="text" id="last-name" />
            </label>
          </div>

          <label htmlFor="email" className="flex flex-col py-1">
            <span className="query-field">Email Address *</span>
            <input type="email" id="email" />
          </label>

          <div className="py-1">
            <span className="query-field">Query Type *</span>
            <div className="flex-field gap-2 query-labels">
              <label htmlFor="general">
                <input type="radio" name="query-type" value="general" />
                General Enquiry
              </label>
              <label htmlFor="support">
                <input type="radio" name="query-type" value="support" />
                Support Request
              </label>
            </div>
          </div>

          <label htmlFor="message" className="flex flex-col py-1">
            <span className="query-field">Message *</span>
            <textarea id="message" rows="5"></textarea>
          </label>

          <label htmlFor="consent" className="consent">
            <input type="checkbox" id="consent" />
            <span className="query-field">
              I consent to being contacted by the team *
            </span>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* !/^\S+@\S+\.\S+$/ regex code */}
      {/* This field is required This field is required Email Address Please enter a
      valid email address This field is required Query Type General Enquiry
      Support Request Please select a query type Message This field is required
      I consent to being contacted by the team To submit this form, please
      consent to being contacted Submit Message Sent! Thanks for completing the
      form. We'll be in touch soon! */}
    </main>
  );
}

export default App;
