import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <div className="decorative-line">
          <span className="italian-colors"></span>
          <span className="mexican-colors"></span>
        </div>
      </div>

      <div className="contact-container">
        <div className="lemon-umbrella">
          <div className="lemon">
            <div className="lemon-body"></div>
            <div className="umbrella">
              <div className="umbrella-top"></div>
              <div className="umbrella-stick"></div>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-section">
            <h2>Visit Us</h2>
            <p>123 Lemon Grove Avenue</p>
            <p>Citrus Heights, CA 95610</p>
          </div>

          <div className="contact-section">
            <h2>Hours</h2>
            <p>Monday - Sunday</p>
            <p>Dinner: 5:30 PM - 10:00 PM</p>
            <p><em>Closed on Christmas day</em></p>
          </div>

          <div className="contact-section">
            <h2>Reservations</h2>
            <p>Phone: (555) 123-4567</p>
            <p>Email: reservations@littlelemon.com</p>
          </div>

          <div className="contact-section">
            <h2>Private Events</h2>
            <p>For private event inquiries:</p>
            <p>events@littlelemon.com</p>
          </div>

          <div className="contact-section">
            <h2>Follow Us</h2>
            <p>Instagram: @littlelemonrestaurant</p>
            <p>Facebook: /littlelemonrestaurant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;