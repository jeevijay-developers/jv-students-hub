'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AutoCounter from './Counter';
import Image from 'next/image';

const EnhancedAboutJVSection = () => {
  const [animatedFeatures, setAnimatedFeatures] = useState<number[]>([]);
  const [animatedStats, setAnimatedStats] = useState<number[]>([]);
  const [visibleSection, setVisibleSection] = useState('');

  const supportFeatures = [
    {
      icon: '🎯',
      title: 'Personalized Guidance & Mentorship',
      desc: 'Get mentored by toppers and industry experts with one-on-one strategy sessions',
      details: ['Real stories from successful candidates', 'Time management tips', 'Doubt-clearing support', 'Weekly progress tracking']
    },
    {
      icon: '🏫',
      title: 'Coaching Discovery & Admission Support',
      desc: 'Find the best coaching institutes tailored to your location, exam type, and budget',
      details: ['Verified partner network', 'Exclusive discounts', 'Scholarship opportunities', 'Admission guidance']
    },
    {
      icon: '🏠',
      title: 'Hostel & Mess Finder',
      desc: 'Discover clean, affordable, and safe accommodations near coaching hubs',
      details: ['Verified reviews from students', 'Photo galleries', 'Food quality ratings', 'Safety assessments']
    },
    {
      icon: '💬',
      title: 'Motivated Peer Community',
      desc: 'Join active student forums and connect with like-minded aspirants',
      details: ['Daily motivation sessions', 'Mock test discussions', 'Study groups', 'Productivity challenges']
    },
    {
      icon: '📚',
      title: 'Study Resources Hub',
      desc: 'Access comprehensive study materials and practice tests',
      details: ['Previous year papers', 'Mock test series', 'Video lectures', 'Study notes compilation']
    },
    {
      icon: '🤝',
      title: 'Industry Partnerships',
      desc: 'Collaborate with top educators and institutions for stronger ecosystems',
      details: ['Brand collaborations', 'Affiliate partnerships', 'Faculty tie-ups', 'Educational content creation']
    }
  ];

  const impactStats = [
    { number: 100, label: 'Top Coaching Institutions', icon: '🏢' },
    { number: 25000, label: 'Students Helped', icon: '🎓' },
    { number: 50, label: 'Educational Partners', icon: '🤝' },
    { number: 15, label: 'Cities Covered', icon: '🌍' }
  ];

  const examCategories = [
    { name: 'JEE', color: '#FF6B35', desc: 'Joint Entrance Examination' },
    { name: 'NEET', color: '#4ECDC4', desc: 'National Eligibility Entrance Test' },
    { name: 'UPSC', color: '#45B7D1', desc: 'Union Public Service Commission' },
    { name: 'RAS', color: '#96CEB4', desc: 'Rajasthan Administrative Service' },
    { name: 'CAT', color: '#FFEAA7', desc: 'Common Admission Test' },
    { name: 'GATE', color: '#DDA0DD', desc: 'Graduate Aptitude Test' }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      exam: "JEE Main 2024",
      rank: "AIR 1,247",
      quote: "JV Student Hub helped me find the perfect coaching institute and connected me with amazing mentors. The community support was incredible!",
      image: "/assets/images/testimonial/Students/1.png"
    },
    {
      name: "Arjun Kumar",
      exam: "NEET 2024",
      rank: "AIR 856",
      quote: "The hostel finder feature was a game-changer. Found a safe, affordable place near my coaching center with verified reviews.",
      image: "/assets/images/testimonial/Students/4.png"
    },
    {
      name: "Sneha Patel",
      exam: "UPSC CSE 2023",
      rank: "AIR 45",
      quote: "The mentorship program and peer community kept me motivated throughout my preparation journey. Highly recommended!",
      image: "/assets/images/testimonial/Students/3.png"
    }, {
      name: "Ravi Meena",
      exam: "RAS 2023",
      rank: "Rank 28",
      quote: "Being from a small town, I had no idea where to start. JV Student Hub guided me step by step — coaching, hostel, even daily study plans!",
      image: "/assets/images/testimonial/Students/5.png"
    },
    {
      name: "Ananya Verma",
      exam: "JEE Advanced 2024",
      rank: "AIR 2,190",
      quote: "Thanks to JV Student Hub, I got a scholarship I didn’t even know existed. It made my entire coaching journey financially easier.",
      image: "/assets/images/testimonial/Students/2.png"
    },
    {
      name: "Mohit Raj",
      exam: "NEET 2023",
      rank: "AIR 1,034",
      quote: "The personal mentorship calls and study strategies helped me boost my scores big time. It's more than just a platform — it’s a support system.",
      image: "/assets/images/testimonial/Students/7.png"
    },
    {
      name: "Fatima Khan",
      exam: "CUET 2024",
      rank: "99.4 Percentile",
      quote: "I joined late but caught up fast, thanks to JV Student Hub’s structured resources and mentor sessions. The community vibe is super positive!",
      image: "/assets/images/testimonial/Students/6.png"
    },
    {
      name: "Devansh Patel",
      exam: "UPSC CSE 2022",
      rank: "AIR 73",
      quote: "As someone juggling a job and UPSC prep, the curated resources and efficient mentorship from JV Student Hub kept me on track. Truly grateful!",
      image: "/assets/images/testimonial/Students/7.png"
    }

  ];

  useEffect(() => {
    // Animate features one by one
    supportFeatures.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedFeatures(prev => [...prev, index]);
      }, index * 200);
    });

    // Animate stats
    setTimeout(() => {
      impactStats.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => [...prev, index]);
        }, index * 150);
      });
    }, 1000);
  }, []);

  return (
    <section className="enhanced-about-jv-section">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section text-center mb-5">
          <div className="hero-illustration mb-4">
            <Image width={500} height={500} className='banner-image' src="/assets/images/banner/jvBanner.svg" alt="JV Illustration" />
          </div>

          <div className="badge-wrapper mb-3">
            <span className="mission-badge">
              🧠 Empowering Aspirants ➡ Connecting Communities ➡ Creating Futures.
            </span>
          </div>

          <h1 className="hero-title">
            About <span className="brand-highlight">JV Student Hub</span>
          </h1>

          <p className="hero-subtitle mb-4">
            <strong>JV Student Hub</strong>, an initiative by <strong>Jeevijay Technologies</strong>,
            is India's first student-centric platform built with a singular goal — to support and
            uplift competitive exam aspirants across the nation.
          </p>

          <div className="vision-statement my-5">
            <h3 className="vision-title">🌟 Our Vision</h3>
            <p className="vision-text">
              To become <strong>India's largest student empowerment network</strong> — a one-stop hub
              for everything a student needs beyond textbooks. We believe success isn't just about
              studying harder, but about <em>studying smarter</em> with the right guidance, environment,
              and emotional support.
            </p>
          </div>
        </div>

        {/* Exam Categories */}
        <div className="exam-categories-section ">
          <h2 className="section-heading text-center ">🎯 Exams We Support</h2>
          <div className="exam-grid">
            {examCategories.map((exam, index) => (
              <div
                key={exam.name}
                className="exam-card"
                style={{ '--exam-color': exam.color } as React.CSSProperties & Record<string, string>}
              >
                <div className="exam-name">{exam.name}</div>
                <div className="exam-desc">{exam.desc}</div>
              </div>
            ))}
            <div className="exam-card more-exams">
              <div className="exam-name">& More!</div>
              <div className="exam-desc">Additional competitive exams</div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="offerings-section ">
          <div className="section-header text-center">
            <h2 className="section-heading ">🚀 What We Offer</h2>
            <p className="section-description">
              Comprehensive support system designed to guide you through every phase of your academic journey
            </p>
          </div>

          <div className="features-grid">
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className={`enhanced-feature-card ${animatedFeatures.includes(index) ? 'animate-in' : ''}`}
              >
                <div className="feature-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                </div>
                <p className="feature-desc">{feature.desc}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="impact-section mb-5">
          <div className="stats-illustration mb-4">
            <div className="illustration-placeholder">
              📊📈 [Infographic: Growth graphs, milestone achievements, success metrics] 📈📊
            </div>
          </div>

          <h2 className="section-heading text-center mb-4">📈 Our Impact So Far</h2>
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`stat-card ${animatedStats.includes(index) ? 'count-up' : ''}`}
              >
                <div className="stat-icon">{stat.icon}</div>
               <div className="stat-number"><AutoCounter maxValue={stat.number} duration={4000} /></div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>        {/* Student Testimonials */}
        <div className="testimonials-section">
          <h2 className="section-heading text-center mb-4">💬 Success Stories</h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <Image width={100} height={100} style={{marginBottom: "1rem", borderRadius:"50%", margin: "0 auto 1rem"}} src={testimonial.image} alt={testimonial.name} />
                  <div className="testimonial-content">
                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.name}</strong>
                      <span className="testimonial-achievement">{testimonial.exam} • {testimonial.rank}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Visual Suggestions Section */}
        {/* <div className="visual-suggestions-section mb-5">
          <h2 className="section-heading text-center mb-4">🎨 Platform Features Preview</h2>
          <div className="feature-previews-grid">
            <div className="preview-card">
              <div className="preview-placeholder">🗺️ [Interactive Map: Hostel locations with live reviews]</div>
              <h5>Hostel Finder Interface</h5>
            </div>
            <div className="preview-card">
              <div className="preview-placeholder">💬 [Live Dashboard: Online students counter, active discussions]</div>
              <h5>Community Hub</h5>
            </div>
            <div className="preview-card">
              <div className="preview-placeholder">🏫 [Card Slider: Institute logos, reviews, scholarship tags]</div>
              <h5>Coaching Discovery</h5>
            </div>
            <div className="preview-card">
              <div className="preview-placeholder">📈 [Timeline: Student journey with mentor tips]</div>
              <h5>Mentorship Program</h5>
            </div>
          </div>
        </div> */}

        {/* Join Our Community */}
        <div className="community-section ">
          <div className="community-illustration mb-4">
            <div className="illustration-placeholder">
              🤝📚 [Illustration: Students joining hands, holding books and laptops, diverse group] 📚🤝
            </div>
          </div>

          <h2 className="section-heading text-center mb-4">🙌 Join the JV Student Hub Family</h2>
          <p className="community-description text-center mb-4">
            Whether you're a student, educator, or an educational brand — there's a place for you at JV Student Hub.
          </p>

          <div className="join-options">
            <div className="join-card">
              <div className="join-icon">🎓</div>
              <strong>Students</strong>
              <p>Start your journey with the right tools and community support</p>
            </div>
            <div className="join-card">
              <div className="join-icon">👨‍🏫</div>
              <strong>Educators</strong>
              <p>Share your wisdom and guide future achievers</p>
            </div>
            <div className="join-card">
              <div className="join-icon">🤝</div>
              <strong>Partners</strong>
              <p>Collaborate to amplify your reach in the student community</p>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="partnership-section">
          <div className="partnership-card">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="partnership-title">Open for Collaborations</h3>
                <p className="partnership-text">
                  We are proud to be connected with India's most reputed institutes and educators.
                  Join our network and help us build India's most trusted student community.
                </p>
                <div className="partnership-types">
                  <span className="partnership-type">🤝 Brand Collaborations</span>
                  <span className="partnership-type">👨‍🏫 Faculty Tie-ups</span>
                  <span className="partnership-type">🔗 Affiliate Partnerships</span>
                  <span className="partnership-type">📝 Content Creation</span>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <button className="btn btn-partnership" onClick={() => { window.location.href = '/partner-with-us'; }}>
                  <span className="btn-text">Get Started Today</span>
                  <span className="btn-icon">🚀</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Swiper Customization */
        :global(.testimonials-swiper) {
          padding: 30px 50px !important;
          max-width: 700px !important;
          margin: 0 auto !important;
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #07A169 !important;
          background: white;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(7, 161, 105, 0.2);
          transition: all 0.3s ease;
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: #07A169;
          color: white !important;
          transform: scale(1.1);
        }

        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 20px !important;
        }
        
        :global(.swiper-pagination-bullet) {
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease;
        }
        
        :global(.swiper-pagination-bullet-active) {
          width: 24px !important;
          border-radius: 5px !important;
        }
      
        .banner-image{
          height: 25%;
          width: 100%;
        }

        .section-header{
          margin-top: 40px;
        }
      
        .partnership-section{
          margin-top: 120px;
        }

        .enhanced-about-jv-section {
          background: linear-gradient(135deg, #f8fffe 0%, #e8f7f2 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .enhanced-about-jv-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .enhanced-about-jv-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: -15%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(7, 161, 105, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .illustration-placeholder {
          background: linear-gradient(135deg, rgba(7, 161, 105, 0.1) 0%, rgba(7, 161, 105, 0.05) 100%);
          border: 2px dashed #07A169;
          border-radius: 15px;
          padding: 40px 20px;
          font-size: 1.2rem;
          color: #07A169;
          font-weight: 600;
          text-align: center;
          margin: 20px 0;
        }

        .mission-badge {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.5rem;
          box-shadow: 0 6px 20px rgba(7, 161, 105, 0.3);
          display: inline-block;
          animation: pulse 3s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 2rem;
          margin-top:4rem;
          line-height: 1.2;
        }

        .brand-highlight {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #666;
          line-height: 1.7;
          max-width: 900px;
          margin: 0 auto;
          font-weight: 500;
        }

        .vision-statement {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.12);
          border-left: 5px solid #07A169;
        }

        .vision-title {
          font-size: 3rem;
          font-weight: 700;
          color: #07A169;
          margin-bottom: 1rem;
        }

        .vision-text {
          font-size: 1.55rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        .section-heading {
          font-size: 3rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .section-description {
          font-size: 1.5rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .exam-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin: 2rem 0;
        }

        .exam-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-left: 4px solid var(--exam-color, #07A169);
          transition: all 0.3s ease;
        }

        .exam-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .exam-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--exam-color, #07A169);
          margin-bottom: 0.5rem;
        }

        .exam-desc {
          font-size: 1.25rem;
          color: #666;
        }

        .more-exams {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          border: none;
        }

        .more-exams .exam-name,
        .more-exams .exam-desc {
          color: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .enhanced-feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.12);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .enhanced-feature-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .enhanced-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(7, 161, 105, 0.2);
          border-color: #07A169;
        }

        .feature-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-right: 1rem;
        }

        .feature-title {
          font-size: 2rem;
          font-weight: 700;
          color: #07A169;
          margin: 0;
          line-height: 1.3;
        }

        .feature-desc {
          font-size: 1.5rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .feature-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-details li {
          padding: 0.3rem 0;
          color: #555;
          font-size: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.12);
          transition: all 0.3s ease;
          opacity: 0;
          transform: scale(0.8);
        }

        .stat-card.count-up {
          opacity: 1;
          transform: scale(1);
          animation: countUp 0.6s ease-out;
        }

        @keyframes countUp {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .stat-card:hover {
          transform: translateY(-5px) scale(1.02);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 2.75rem;
          font-weight: 900;
          color: #07A169;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.5rem;
          color: #666;
          font-weight: 600;
        }        /* Swiper Customization */
        :global(.testimonials-swiper) {
          padding: 30px 50px !important;
          margin: 2rem 0;
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #07A169 !important;
          background: white;
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(7, 161, 105, 0.2);
        }

        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 20px !important;
        }

        :global(.swiper-pagination-bullet) {
          background: #07A169 !important;
          opacity: 0.5;
        }

        :global(.swiper-pagination-bullet-active) {
          opacity: 1;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.12);
          transition: all 0.3s ease;
          height: 100%;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(7, 161, 105, 0.2);
        }

        .testimonial-quote {
          font-size: 1.5rem;
          color: #555;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .testimonial-author {
          text-align: center;
          font-size: 1.75rem;
        }

        .testimonial-achievement {
          display: block;
          color: #07A169;
          font-weight: 600;
          font-size: 1.25rem;
          margin-top: 0.3rem;
        }

        .feature-previews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .preview-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(7, 161, 105, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .preview-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(7, 161, 105, 0.15);
        }

        .preview-placeholder {
          background: rgba(7, 161, 105, 0.05);
          border: 1px dashed #07A169;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: #07A169;
        }

        .join-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .join-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(7, 161, 105, 0.12);
          border-top: 4px solid #07A169;
          transition: all 0.3s ease;
        }

        .join-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(7, 161, 105, 0.2);
        }

        .join-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .community-description {
          font-size: 1.55rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .partnership-card {
          background: white;
          padding: 3rem;
          border-radius: 25px;
          box-shadow: 0 12px 40px rgba(7, 161, 105, 0.15);
          border: 1px solid rgba(7, 161, 105, 0.1);
          margin-top: 4rem;
        }

        .partnership-title {
          font-size: 3rem;
          font-weight: 800;
          color: #07A169;
          margin-bottom: 1.5rem;
        }

        .partnership-text {
          font-size: 1.5rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .partnership-types {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .partnership-type {
          background: rgba(7, 161, 105, 0.1);
          color: #1a1a1a;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .partnership-type:hover {
          background: #07A169;
          color: white;
        }

        .btn-partnership {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          border: none;
          color: white;
          padding: 20px 50px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(7, 161, 105, 0.3);
          cursor: pointer;
        }

        .btn-partnership:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(7, 161, 105, 0.4);
          background: linear-gradient(135deg, #059862 0%, #047d56 100%);
        }

        .btn-icon {
          font-size: 1.5rem;
          animation: rocket 2s infinite;
        }

        @keyframes rocket {
          0%, 90%, 100% { transform: translateY(0); }
          45% { transform: translateY(-3px); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-heading {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .enhanced-feature-card {
            padding: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .partnership-card {
            padding: 2rem;
          }
          
          .partnership-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .section-heading {
            font-size: 1.8rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .vision-statement {
            padding: 1.5rem;
          }
          
          .vision-title {
            font-size: 1.5rem;
          }
          
          .vision-text {
            font-size: 1rem;
          }
          
          .exam-grid {
            grid-template-columns: 1.5fr;
          }
          
          .features-grid {
            gap: 1rem;
          }
          
          .enhanced-feature-card {
            padding: 1.5rem;
          }
          
          .feature-header {
            flex-direction: column;
            text-align: center;
          }
          
          .feature-icon {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
          
          .feature-title {
            font-size: 1.2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .stat-card {
            padding: 1.5rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .testimonial-card {
            padding: 1.5rem;
          }
          
          .feature-previews-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .join-options {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .join-card {
            padding: 1.5rem;
          }
          
          .partnership-card {
            padding: 1.5rem;
          }
          
          .partnership-title {
            font-size: 1.5rem;
          }
          
          .partnership-text {
            font-size: 1rem;
          }
          
          .partnership-types {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-partnership {
            padding: 15px 35px;
            font-size: 1rem;
          }
          
          .illustration-placeholder {
            padding: 20px 15px;
            font-size: 1rem;
          }
        }

        /* Additional animations and effects */
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-section {
          animation: fadeInUp 1s ease-out;
        }

        .exam-categories-section {
          margin-top: 120px;
          animation: slideInFromLeft 1s ease-out 0.2s both;
        }

        .offerings-section {
          margin-top: 120px;
          animation: slideInFromRight 1s ease-out 0.4s both;
        }

        .impact-section {
          margin-top: 120px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .testimonials-section {
          margin-top: 120px;
          animation: slideInFromLeft 1s ease-out 0.8s both;
        }

        .visual-suggestions-section {
          margin-top: 120px;
          animation: slideInFromRight 1s ease-out 1s both;
        }

        .community-section {
          margin-top: 120px;
          animation: fadeInUp 1s ease-out 1.2s both;
        }

        /* Scroll-triggered animations */
        @media (prefers-reduced-motion: no-preference) {
          .enhanced-feature-card {
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .stat-card {
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .testimonial-card {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
        }

        /* Enhanced hover effects */
        .exam-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--exam-color, #07A169), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 15px;
        }

        .exam-card {
          position: relative;
          overflow: hidden;
        }

        .exam-card:hover::before {
          opacity: 0.1;
        }

        .enhanced-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #07A169, #059862);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px;
        }

        .enhanced-feature-card {
          position: relative;
          overflow: hidden;
        }

        .enhanced-feature-card:hover::before {
          opacity: 0.05;
        }

        /* Glowing effect for CTA button */
        .btn-partnership {
          position: relative;
          overflow: hidden;
        }

        .btn-partnership::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .btn-partnership:hover::before {
          left: 100%;
        }

        /* Loading animation for stats */
        .stat-number {
          position: relative;
          overflow: hidden;
        }

        .stat-card.count-up .stat-number::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #07A169, #059862);
          animation: loadingBar 1.5s ease-out;
        }

        @keyframes loadingBar {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        /* Testimonial card flip effect */
        .testimonial-card {
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        .testimonial-card:hover {
          transform: rotateY(5deg) translateY(-5px);
        }

        /* Enhanced focus states for accessibility */
        .btn-partnership:focus,
        .exam-card:focus,
        .enhanced-feature-card:focus {
          outline: 3px solid #07A169;
          outline-offset: 2px;
        }

        /* Print styles */
        @media print {
          .enhanced-about-jv-section {
            background: white !important;
          }
          
          .enhanced-about-jv-section::before,
          .enhanced-about-jv-section::after {
            display: none;
          }
          
          .illustration-placeholder {
            border: 1px solid #ccc;
            background: #f9f9f9;
          }
          
          .btn-partnership {
            background: #07A169 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedAboutJVSection;