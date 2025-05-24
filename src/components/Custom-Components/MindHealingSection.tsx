'use client';
import React, { useState, useEffect } from 'react';

interface FloatingElement {
    id: number;
    left: number;
    animationDelay: number;
    size: number;
}

interface Program {
    icon: string;
    title: string;
    description: string;
    gradient: string;
    shadowColor: string;
}

const MindHealingSection: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

    useEffect(() => {
        // Create floating elements for background animation
        const elements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 20,
            size: 20 + Math.random() * 40,
        }));
        setFloatingElements(elements);
    }, []);

    const programs: Program[] = [
        {
            icon: "🧠",
            title: "Mind Power & Motivation Sessions",
            description: "Unlock your mental potential with powerful techniques to boost concentration, memory, and motivation for peak performance.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            shadowColor: "rgba(102, 126, 234, 0.3)"
        },
        {
            icon: "🧘‍♀️",
            title: "Stress Management & Healing Workshops",
            description: "Learn proven techniques to manage exam stress, anxiety, and pressure through mindfulness and healing practices.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            shadowColor: "rgba(240, 147, 251, 0.3)"
        },
        {
            icon: "🎯",
            title: "Focus & Goal-Setting Bootcamps",
            description: "Master the art of laser-sharp focus and strategic goal-setting to achieve your academic dreams efficiently.",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            shadowColor: "rgba(79, 172, 254, 0.3)"
        },
        {
            icon: "📚",
            title: "Productive Study Habits Training",
            description: "Develop effective study routines, time management skills, and smart revision techniques to maximize learning outcomes.",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            shadowColor: "rgba(67, 233, 123, 0.3)"
        },
        {
            icon: "🏆",
            title: "Talks by Topper Alumni & Psychologists",
            description: "Get inspired by success stories and expert insights from toppers and mental health professionals.",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            shadowColor: "rgba(67, 233, 123, 0.3)"
        },
        {
            icon: "💚",
            title: "1-on-1 Healing Guidance for Burnout & Fatigue",
            description: "Personalized support to overcome burnout, mental fatigue, and restore your passion for learning.",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            shadowColor: "rgba(250, 112, 154, 0.3)"
        }
    ];

    const handleCardHover = (index: number): void => {
        setHoveredCard(index);
    };

    const handleCardLeave = (): void => {
        setHoveredCard(null);
    };

    return (
        <section className="mind-healing-section py-5">
            {/* Floating Background Elements */}
            <div className="floating-elements">
                {floatingElements.map((element) => (
                    <div
                        key={element.id}
                        className="floating-element"
                        style={{
                            left: `${element.left}%`,
                            animationDelay: `${element.animationDelay}s`,
                            width: `${element.size}px`,
                            height: `${element.size}px`,
                        }}
                    />
                ))}
            </div>

            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-lg-11">
                        {/* Header */}
                        <div className="text-center mb-5">
                            <div className="section-badge mb-3">
                                <span className="badge-text">🌟 Holistic Support</span>
                            </div>
                            <h2 className="section-title my-lg-5">
                                Mind Boosting & <span className="healing-gradient">Healing Programs</span>
                            </h2>
                            <p className="section-subtitle">
                                We understand that exam preparation is not just academic — it&apos;s emotional, mental, and deeply personal.
                                That&apos;s why we offer comprehensive support for your mind, body, and soul.
                            </p>
                        </div>

                        {/* Programs Grid */}
                        <div className="programs-container">
                            <div className="row g-4">
                                {programs.map((program, index) => (
                                    <div key={index} className="col-lg-6 col-xl-4 mb-4">
                                        <div
                                            className={`program-card h-100 ${hoveredCard === index ? 'hovered' : ''}`}
                                            onMouseEnter={() => handleCardHover(index)}
                                            onMouseLeave={handleCardLeave}
                                        >
                                            <div className="card-inner h-100 d-flex flex-column">
                                                <div className="program-icon text-center">
                                                    <span className="icon-emoji">{program.icon}</span>
                                                    <div
                                                        className="icon-glow"
                                                        style={{ background: program.gradient }}
                                                    ></div>
                                                </div>
                                                <div className="program-content flex-grow-1 text-center">
                                                    <h3 className="program-title">{program.title}</h3>
                                                    <p className="program-description">{program.description}</p>
                                                    {/* <div className="program-action mt-auto">
                            <button 
                              className="btn learn-more-btn"
                              style={{ 
                                background: program.gradient,
                                boxShadow: `0 4px 15px ${program.shadowColor}`
                              }}
                              type="button"
                            >
                              Learn More
                            </button>
                          </div> */}
                                                </div>
                                                <div
                                                    className="card-gradient-overlay"
                                                    style={{ background: program.gradient }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="healing-cta text-center mt-5">
                            <div className="cta-content">
                                <h3 className="cta-title">Ready to Transform Your Mind?</h3>
                                <p className="cta-subtitle">
                                    Join thousands of students who have discovered the power of mental wellness in their academic journey.
                                </p>
                                <div className="cta-stats d-flex justify-content-center flex-wrap">
                                    <div className="stat-item">
                                        <div className="stat-number">10,000+</div>
                                        <div className="stat-label">Students Healed</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">95%</div>
                                        <div className="stat-label">Stress Reduction</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number">24/7</div>
                                        <div className="stat-label">Support Available</div>
                                    </div>
                                </div>
                                <button className="btn primary-cta-btn" type="button">
                                    Start Your Healing Journey
                                    <span className="btn-arrow ms-2">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .mind-healing-section {
          background: aquablue;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .section-badge {
          display: inline-block;
          margin-bottom: 1rem;
        }

        .badge-text {
          background: #C1F7A8;
          color: black;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 1.4rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .section-title {
          font-size: 4.5rem;
          font-weight: 800;
          color: #242424;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
          line-height: 1.2;
        }

        .healing-gradient {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.8rem;
          color: #242424;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .programs-container {
          margin-top: 5rem;
        }

        .program-card {
          height: 100%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .program-card.hovered {
          transform: translateY(-15px) scale(1.02);
        }

        .card-inner {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 25px;
          padding: 3rem 2.5rem;
          height: 100%;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }

        .program-card:hover .card-inner {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .card-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .program-card:hover .card-gradient-overlay {
          opacity: 1;
          height: 100%;
          opacity: 0.05;
        }

        .program-icon {
          position: relative;
          margin-bottom: 2rem;
        }

        .icon-emoji {
          font-size: 4rem;
          position: relative;
          z-index: 2;
          display: inline-block;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }


        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
        }

        .program-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .program-description {
          font-size: 1.4rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .learn-more-btn {
          background: linear-gradient(135deg, #07A169 0%, #059862 100%);
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 50px;
          font-size: 1.3rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .learn-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          color: white;
        }

        .learn-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .learn-more-btn:hover::before {
          left: 100%;
        }

        .healing-cta {
          margin-top: 6rem;
        }

        .cta-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 4rem 3rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 700;
          color: #242424;
          margin-bottom: 1rem;
        }

        .cta-subtitle {
          font-size: 1.6rem;
          color: #242424;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-stats {
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .stat-item {
          text-align: center;
          margin: 0 1.5rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: #2DB59C;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .stat-label {
          font-size: 1.4rem;
          color: #242424;
          font-weight: 500;
        }

        .primary-cta-btn {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          color: #333;
          border: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.6rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 8px 32px rgba(67, 233, 123, 0.3);
        }

        .primary-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(67, 233, 123, 0.4);
          color: #333;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .primary-cta-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-title {
            font-size: 3rem;
          }

          .section-subtitle {
            font-size: 1.4rem;
          }

          .card-inner {
            padding: 2rem 1.5rem;
          }

          .program-title {
            font-size: 1.6rem;
          }

          .program-description {
            font-size: 1.2rem;
          }

          .cta-content {
            padding: 2.5rem 2rem;
          }

          .cta-title {
            font-size: 2.2rem;
          }

          .cta-stats {
            gap: 2rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-item {
            margin: 0 1rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2.2rem;
          }

          .section-subtitle {
            font-size: 1.2rem;
          }

          .programs-container {
            margin-top: 3rem;
          }

          .card-inner {
            padding: 1.5rem;
          }

          .program-title {
            font-size: 1.4rem;
          }

          .program-description {
            font-size: 1.1rem;
          }

          .cta-content {
            padding: 2rem 1.5rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-subtitle {
            font-size: 1.3rem;
          }

          .cta-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .stat-item {
            margin: 0;
          }

          .primary-cta-btn {
            padding: 15px 30px;
            font-size: 1.4rem;
          }
        }
      `}</style>
        </section>
    );
};

export default MindHealingSection;