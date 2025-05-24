'use client';
import React, { useState } from 'react';

const FAQs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is JV Student Hub?",
      answer: "It's India's largest free platform providing coaching consultancy, mentorship, study materials, hostel support, and community for aspirants preparing for JEE, NEET, UPSC, and RAS."
    },
    {
      question: "Do you charge students?",
      answer: "No. Our platform is 100% free. We believe support should never be expensive."
    },
    {
      question: "Are you connected with top coaching brands?",
      answer: "Yes. We work with Allen, Motion, PW, E-Saral, Bansal, Learn N Prep and are expanding our network."
    },
    {
      question: "Can I join if I'm in a different city?",
      answer: "Yes! We're expanding rapidly. Whether you're in Kota, Pune, Bhopal, Indore or Prayagraj – JV Student Hub supports you."
    },
    {
      question: "Do you help with hostel bookings?",
      answer: "Absolutely. We connect students with reliable hostels and mess options as per budget, location, and lifestyle needs."
    },
    {
      question: "What kind of study materials do you provide?",
      answer: "We offer comprehensive study materials including previous year papers, mock tests, revision notes, and curated content from top educators. All materials are updated regularly and aligned with latest exam patterns."
    },
    {
      question: "How does the mentorship program work?",
      answer: "Our mentorship program connects you with successful students and experienced professionals. You get personalized guidance on study strategies, career planning, and exam preparation through one-on-one sessions and group discussions."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available on both Android and iOS platforms. You can access all features including study materials, community discussions, and mentorship sessions on the go."
    },
    {
      question: "How can I connect with other students?",
      answer: "Join our vibrant community through discussion forums, study groups, and city-wise student networks. You can share experiences, ask doubts, and collaborate with fellow aspirants."
    },
    {
      question: "What support do you provide for exam preparation?",
      answer: "We offer comprehensive exam support including doubt clearing sessions, mock tests with detailed analysis, exam strategy workshops, and stress management guidance. Our experts are available 24/7 to help you."
    },
    {
      question: "How do I get started with JV Student Hub?",
      answer: "Simply sign up on our platform, complete your profile, and explore the features. You can immediately access study materials, join community discussions, and book mentorship sessions."
    },
    {
      question: "Do you provide career counseling?",
      answer: "Yes! We offer comprehensive career counseling including stream selection guidance, college admissions support, and career path planning. Our counselors help you make informed decisions about your future."
    }
  ];

  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-lg-10">
            {/* Header */}
            <div className="text-center mb-5">
              <h2 className="section-title mb-4">
                Frequently Asked <span className="down-mark-line">Questions</span>
              </h2>
              <p className="section-subtitle">
                Got questions? We've got answers! Find everything you need to know about JV Student Hub and how we can help you achieve your academic goals.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item mb-3">
                  <div className="faq-header" onClick={() => toggleAccordion(index)}>
                    <h3 className="faq-question">{faq.question}</h3>
                    <div className={`faq-icon ${activeAccordion === index ? 'active' : ''}`}>
                      <span className="icon-line icon-line-h"></span>
                      <span className="icon-line icon-line-v"></span>
                    </div>
                  </div>
                  <div className={`faq-content ${activeAccordion === index ? 'active' : ''}`}>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="faq-cta text-center mt-5">
              <h3 className="cta-title mb-3">Still have questions?</h3>
              <p className="cta-subtitle mb-4">
                Can't find what you're looking for? Our support team is here to help you 24/7.
              </p>
              <div className="cta-buttons">
                <button onClick={() => window.location.href = '/contact'} className="btn cta-btn primary-btn me-3">Contact Support</button>
                <button className="btn cta-btn secondary-btn">Join Community</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background: white;
          position: relative;
          overflow: hidden;
        }

        .faq-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .faq-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: -15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.04) 0%, transparent 70%);
          border-radius: 50%;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          color: rgb(19, 19, 19);
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          line-height: 1.2;
        }

        .down-mark-line {
          position: relative;
          color: #07A169;
        }

        .section-subtitle {
          font-size: 1.8rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .faq-container {
          margin-top: 4rem;
        }

        .faq-item {
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(7, 161, 105, 0.08);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .faq-item:hover {
          border-color: rgba(7, 161, 105, 0.2);
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.15);
        }

        .faq-header {
          padding: 2rem 2.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .faq-header:hover {
          background: rgba(7, 161, 105, 0.02);
        }

        .faq-question {
          font-size: 1.6rem;
          font-weight: 600;
          color: #333;
          margin: 0;
          line-height: 1.4;
          flex: 1;
          padding-right: 2rem;
        }

        .faq-icon {
          width: 24px;
          height: 24px;
          position: relative;
          transition: transform 0.3s ease;
        }

        .faq-icon.active {
          transform: rotate(45deg);
        }

        .icon-line {
          position: absolute;
          background: #07A169;
          transition: all 0.3s ease;
        }

        .icon-line-h {
          width: 24px;
          height: 3px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .icon-line-v {
          width: 3px;
          height: 24px;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
          background: rgba(7, 161, 105, 0.02);
        }

        .faq-content.active {
          max-height: 300px;
        }

        .faq-answer {
          padding: 0 2.5rem 2rem 2.5rem;
        }

        .faq-answer p {
          font-size: 1.5rem;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        .faq-cta {
          background: linear-gradient(135deg, rgba(7, 161, 105, 0.05) 0%, rgba(5, 152, 98, 0.05) 100%);
          padding: 3rem;
          border-radius: 20px;
          border: 2px solid rgba(7, 161, 105, 0.1);
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
        }

        .cta-subtitle {
          font-size: 1.6rem;
          color: #666;
          max-width: 500px;
          margin: 0 auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cta-btn {
          padding: 12px 30px;
          font-size: 1.5rem;
          font-weight: 600;
          border-radius: 10px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .primary-btn {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.3);
          color: white;
        }

        .secondary-btn {
          background: transparent;
          color: #07A169;
          border-color: #07A169;
        }

        .secondary-btn:hover {
          background: #07A169;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.2);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }

          .section-subtitle {
            font-size: 1.4rem;
          }

          .faq-header {
            padding: 1.5rem 2rem;
          }

          .faq-question {
            font-size: 1.4rem;
            padding-right: 1rem;
          }

          .faq-answer {
            padding: 0 2rem 1.5rem 2rem;
          }

          .faq-answer p {
            font-size: 1.3rem;
          }

          .faq-cta {
            padding: 2rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-subtitle {
            font-size: 1.4rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2.2rem;
          }

          .section-subtitle {
            font-size: 1.2rem;
          }

          .faq-header {
            padding: 1.2rem 1.5rem;
          }

          .faq-question {
            font-size: 1.2rem;
          }

          .faq-answer {
            padding: 0 1.5rem 1.2rem 1.5rem;
          }

          .faq-answer p {
            font-size: 1.1rem;
          }

          .faq-cta {
            padding: 1.5rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-subtitle {
            font-size: 1.2rem;
          }

          .cta-btn {
            padding: 10px 25px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQs;