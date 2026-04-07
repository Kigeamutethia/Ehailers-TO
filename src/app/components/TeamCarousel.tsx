import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

export function TeamCarousel({ teamMembers }: TeamCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rtl: false,
    cssEase: 'ease-in-out',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  };

  return (
    <div className="team-carousel-wrapper">
      <style>{`
        .team-carousel-wrapper {
          position: relative;
          padding: 0 20px;
        }
        
        .team-carousel-wrapper .slick-slide {
          padding: 0 12px;
          height: inherit;
        }
        
        .team-carousel-wrapper .slick-slide > div {
          height: 100%;
        }
        
        .team-carousel-wrapper .slick-list {
          margin: 0 -12px;
        }
        
        .team-carousel-wrapper .slick-dots {
          bottom: -40px;
        }
        
        .team-carousel-wrapper .slick-dots li button:before {
          font-size: 10px;
          color: var(--navy-blue);
          opacity: 0.4;
        }
        
        .team-carousel-wrapper .slick-dots li.slick-active button:before {
          color: var(--red-cta);
          opacity: 1;
        }
        
        .team-carousel-wrapper .slick-prev,
        .team-carousel-wrapper .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        
        .team-carousel-wrapper .slick-prev {
          left: -10px;
        }
        
        .team-carousel-wrapper .slick-next {
          right: -10px;
        }
        
        .team-carousel-wrapper .slick-prev:before,
        .team-carousel-wrapper .slick-next:before {
          font-size: 40px;
          color: var(--navy-blue);
          opacity: 0.7;
        }
        
        .team-carousel-wrapper .slick-prev:hover:before,
        .team-carousel-wrapper .slick-next:hover:before {
          opacity: 1;
          color: var(--red-cta);
        }
        
        .team-member-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .team-member-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-4px);
        }
        
        .team-member-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }
        
        .team-member-info {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 120px;
        }
        
        .team-member-name {
          color: var(--navy-blue);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 8px;
          text-align: center;
        }
        
        .team-member-role {
          color: var(--red-cta);
          font-size: 0.875rem;
          line-height: 1.4;
          text-align: center;
        }
      `}</style>
      
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className="team-member-card">
              <div style={{ position: 'relative' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                  loading="lazy"
                />
                <div 
                  style={{ 
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)'
                  }}
                ></div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}