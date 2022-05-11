import React from 'react';
import styled from 'styled-components';
import hero from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeadingStyles = styled.div`
  .heading {
    height: 100vh;
    min-height: 1000px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .heading__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .heading__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .heading__image {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .heading__info {
    margin-top: -18rem;
  }
  .heading__social,
  .heading__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .heading__social {
    left: 50px;
  }
  .heading__scrollDown {
    right: 50px;
  }
  .heading__social_indicator,
  .heading_scrollDown {
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
  .heading__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .heading__social_text {
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
    .heading {
      min-height: 750px;
    }
    .heading__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .heading__name {
        height: 4.5rem;
      }
    }
    .heading__img {
      height: 300px;
    }
    .heading__info {
      margin-top: 3rem;
    }
    .heading__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .heading__social_indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
    }
  }
`;

export default function Heading() {
  return (
    <HeadingStyles>
      <div className="heading">
        <div className="container">
          <h1 className="heading__heading">
            <span>Hello this is</span>
            <span className="heading__name">me</span>
          </h1>
          <div className="heading__image">
            <img src={hero} alt="" />
          </div>
          <div className="heading__info">
            <Ptext>This is my mini bio for front page. dwedew.</Ptext>
            <Button btnLink="/projects" btnText="Works" />
          </div>
          <div className="heading__social">
            <div className="heading__social_indicator">
              <p>follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="heading__social_text">
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
          <div className="heading__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeadingStyles>
  );
}
