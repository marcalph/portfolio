import React from 'react';
import styled from 'styled-components';
import hero from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const IntroStyles = styled.div`
  .bounce {
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  .intro {
    height: 100vh;
    min-height: 1000px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .intro__intro {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .intro__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .intro__image {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--light);
  }
  .intro__info {
    margin-top: -18rem;
  }
  .intro__social,
  .intro__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .intro__social {
    left: 50px;
  }
  .intro__scrollDown {
    right: 50px;
  }
  .intro__social_indicator,
  .intro__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .intro__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .intro__social_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .intro {
      min-height: 750px;
    }
    .intro__intro {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .intro__name {
        height: 4.5rem;
      }
    }
    .intro__img {
      height: 300px;
    }
    .intro__info {
      margin-top: 3rem;
    }
    .intro__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .intro__social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .intro__social_text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .intro__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function Intro() {
  return (
    <IntroStyles>
      <div className="intro">
        <div className="container">
          <h1 className="intro__intro">
            <span>Hello this is</span>
            <span className="intro__name">me</span>
          </h1>
          <div className="intro__image">
            <img src={hero} alt="" />
          </div>
          <div className="intro__info">
            <Ptext>This is my mini bio for front page. dwedew.</Ptext>
            <Button btnLink="/projects" btnText="Works" />
          </div>
          <div className="intro__social">
            <div className="intro__social_indicator">
              <p>follow</p>
              <img
                src={SocialMediaArrow}
                alt="social media arrow"
                className="bounce"
              />
            </div>
            <div className="intro__social_text">
              <ul>
                <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TW
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="intro__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </IntroStyles>
  );
}
