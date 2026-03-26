import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ChevronRight, Award, Headphones, ShieldCheck, Building } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! Our loan specialists will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#cacdd2', color: '#2b394b' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#2b394b', fontFamily: 'Cormorant Garamond, serif' }}>
              Get in Touch With Our
              <span className="block mt-2">Loan Specialists</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your financial journey begins here. Whether you're looking for a personal loan, mortgage, or business financing,
              our expert team is ready to guide you every step of the way.
            </p>
          </div>
        </div>
      </div>

   

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#2b394b', fontFamily: 'Cormorant Garamond, serif' }}>
              Connect With Us
            </h2>
            <p className="mb-8 text-lg opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Have questions about our loan products? Need assistance with your application?
              Our dedicated team is here to help you secure the best financing solution for your needs.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Call Us', details: ['+1 (888) 123-4567', '+1 (888) 765-4321'], description: 'Mon-Fri, 8am-8pm EST' },
                { icon: Mail, title: 'Email Us', details: ['support@loanpro.com', 'applications@loanpro.com'], description: 'We respond within 24 hours' },
                { icon: MapPin, title: 'Visit Us', details: ['123 Financial District', 'New York, NY 10005'], description: 'Come say hello at our headquarters' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg transition-all hover:translate-x-1" style={{ backgroundColor: 'rgba(43, 57, 75, 0.05)' }}>
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 mt-1" style={{ color: '#2b394b' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{detail}</p>
                    ))}
                    <p className="text-sm opacity-70 mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-2xl p-8 shadow-xl" style={{ backgroundColor: 'rgba(43, 57, 75, 0.08)' }}>
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6" style={{ color: '#2b394b' }} />
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
                  Send Us a Message
                </h2>
              </div>
              <p className="mb-6 opacity-80" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Fill out the form below and our loan experts will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                    style={{ backgroundColor: '#cacdd2', border: `1px solid ${'#2b394b'}`, color: '#2b394b' }}
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{ backgroundColor: '#cacdd2', border: `1px solid ${'#2b394b'}`, color: '#2b394b' }}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                      style={{ backgroundColor: '#cacdd2', border: `1px solid ${'#2b394b'}`, color: '#2b394b' }}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
                    Loan Interest *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2"
                    style={{ backgroundColor: '#cacdd2', border: `1px solid ${'#2b394b'}`, color: '#2b394b' }}
                  >
                    <option value="">Select a loan type</option>
                    <option value="personal">Personal Loan</option>
                    <option value="mortgage">Mortgage / Home Loan</option>
                    <option value="auto">Auto Loan</option>
                    <option value="business">Business Loan</option>
                    <option value="student">Student Loan</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all focus:ring-2 resize-none"
                    style={{ backgroundColor: '#cacdd2', border: `1px solid ${'#2b394b'}`, color: '#2b394b' }}
                    placeholder="Tell us about your loan requirements, desired amount, and any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ backgroundColor: '#2b394b', color: '#cacdd2' }}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
              Find Our Headquarters
            </h2>
            <p className="text-lg opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Visit our main office in the heart of the financial district
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ border: `2px solid ${'#2b394b'}` }}>
            <div className="relative w-full h-[400px] md:h-[450px]">
              <iframe
                title="Loan Company Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0115%2C40.7055%2C-73.9995%2C40.7175&layer=mapnik&marker=40.7115%2C-74.0055"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center" style={{ backgroundColor: 'rgba(43, 57, 75, 0.05)' }}>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: '#2b394b' }} />
                <span style={{ fontFamily: 'Cormorant Garamond, serif' }}>123 Financial District, New York, NY 10005, United States</span>
              </div>
            </div>
          </div>

          {/* Nearby Branches */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { city: 'Manhattan', address: '350 Fifth Ave, Suite 2300', phone: '+1 (212) 555-0100' },
              { city: 'Brooklyn', address: '123 MetroTech Center', phone: '+1 (718) 555-0200' },
              { city: 'Queens', address: '90-15 Queens Blvd', phone: '+1 (718) 555-0300' },
              { city: 'Staten Island', address: '2655 Richmond Ave', phone: '+1 (718) 555-0400' }
            ].map((branch, idx) => (
              <div key={idx} className="p-4 rounded-lg transition-all hover:scale-105" style={{ backgroundColor: 'rgba(43, 57, 75, 0.05)' }}>
                <h4 className="font-bold text-lg mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>{branch.city}</h4>
                <p className="text-sm opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{branch.address}</p>
                <p className="text-sm opacity-85 mt-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{branch.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Quick answers to common questions about our loan services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'What documents are needed for a loan application?', a: 'Typically, we require government ID, proof of income (pay stubs or tax returns), bank statements, and proof of residence. Our team will guide you through the specific requirements.' },
              { q: 'How long does loan approval take?', a: 'Most loan applications are processed within 24-48 hours. Some loans may be approved same-day if all documents are in order.' },
              { q: 'What credit score is required?', a: 'We work with a wide range of credit profiles. While 620+ is ideal for best rates, we have programs for scores as low as 580.' },
              { q: 'Can I apply for a loan online?', a: 'Yes! Our entire application process can be completed online. You can also visit any of our branches for in-person assistance.' }
            ].map((faq, idx) => (
              <div key={idx} className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(43, 57, 75, 0.05)' }}>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>{faq.q}</h3>
                <p className="opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-8 py-12" style={{ backgroundColor: 'rgba(43, 57, 75, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2b394b' }}>
            Ready to Secure Your Financial Future?
          </h3>
          <p className="mb-6 opacity-85" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Start your loan application today and get pre-approved in minutes.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#2b394b', color: '#cacdd2' }}
          >
            Apply for a Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;