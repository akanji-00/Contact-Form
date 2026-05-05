import { useState, useEffect } from "react";
import successIcon from "./assets/icon-success-check.svg";

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [submittedForm, setSubmittedForm] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^\S+@\S+\.\S+$/g.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.queryType) {
      newErrors.queryType = "Please select a query type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "This field is required";
    }
    if (!formData.consent) {
      newErrors.consent =
        "To submit this form, please consent to being contacted";
    }

    return newErrors;
  };

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setFormData(initialState);
    setFormErrors({});
    setSubmittedForm(formData);
  };

  useEffect(() => {
    if (!submittedForm) return;

    const timer = setTimeout(() => {
      setSubmittedForm(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [submittedForm]);

  return (
    <main className="ff-karla">
      <div className="container form-wrapper mg-2">
        <h1 className="text-h font-lg mg-2">Contact Us</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex-field gap-2">
            <div>
              <label htmlFor="first-name" className="flex flex-col py-1">
                <span className="query-field">First Name *</span>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  name="firstName"
                  id="first-name"
                  className={formErrors.firstName ? "input error" : "input"}
                />
              </label>
              {formErrors.firstName && (
                <p className="error" role="alert">
                  {formErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="last-name" className="flex flex-col py-1">
                <span className="query-field">Last Name *</span>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  name="lastName"
                  id="last-name"
                  className={formErrors.lastName ? "input error" : "input"}
                />
              </label>
              {formErrors.lastName && (
                <p className="error" role="alert">
                  {formErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="flex flex-col py-1">
              <span className="query-field">Email Address *</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                className={formErrors.email ? "input error" : "input"}
              />
            </label>
            {formErrors.email && (
              <p className="error" role="alert">
                {formErrors.email}
              </p>
            )}
          </div>

          <div className="py-1">
            <span className="query-field">Query Type *</span>
            <div className="flex-field gap-2 query-labels">
              <label htmlFor="general" className="radio-card">
                <input
                  type="radio"
                  onChange={handleChange}
                  name="queryType"
                  checked={formData.queryType === "general"}
                  id="general"
                  value="general"
                />
                General Enquiry
              </label>
              <label htmlFor="support" className="radio-card">
                <input
                  type="radio"
                  checked={formData.queryType === "support"}
                  id="support"
                  value="support"
                  onChange={handleChange}
                  name="queryType"
                />
                Support Request
              </label>
            </div>
            {formErrors.queryType && (
              <p className="error" role="alert">
                {formErrors.queryType}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="flex flex-col py-1">
              <span className="query-field">Message *</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                id="message"
                rows="5"
                className={formErrors.message ? "input error" : "input"}
              ></textarea>
            </label>
            {formErrors.message && (
              <p className="error" role="alert">
                {formErrors.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="consent" className="consent">
              <input
                type="checkbox"
                name="consent"
                onChange={handleChange}
                id="consent"
                checked={formData.consent}
              />
              I consent to being contacted by the team *
            </label>
            {formErrors.consent && (
              <p className="error" role="alert">
                {formErrors.consent}
              </p>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>

        {submittedForm && (
          <div className="submitted-data-card">
            <div className="card-header">
              <img src={successIcon} alt="Success Icon" />
              <p>Message Sent!</p>
            </div>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
