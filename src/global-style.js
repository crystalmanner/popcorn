/** @format */

import {createGlobalStyle} from 'styled-components/macro';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  min-height: 100vh;
  position: relative;
  background-color: #fefefe;
  color: #fff;
}

a:visited,
a:hover,
a:active,
a:link {
  color: #fff;
  text-decoration: none;
}

.typedjs {
  padding: 20px 40px;
  font-size: 92px;
  font-weight: 500;
  font-family: 'Teko';
  position: absolute;
  top: 50%;
  left: 10%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  /*color: #fff;*/
  background: -webkit-linear-gradient(#fafad2, #ff9900);
  -webkit-text-fill-color: transparent;
}

.typed-cursor {
  opacity: 1;
  -webkit-animation: typedjsBlink 0.7s infinite;
  animation: typedjsBlink 0.7s infinite;
}

@keyframes typedjsBlink {
  50% {
    opacity: 0;
  }
}

@-webkit-keyframes typedjsBlink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.blink_me {
  -webkit-animation: blinker 1s linear infinite;
  animation: blinker 1s linear infinite;
}

@-webkit-keyframes blinker {
  50% {
    opacity: 0.2;
  }
}

@keyframes blinker {
  50% {
    opacity: 0.2;
  }
}

.bounce {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.bounce2 {
  -webkit-animation: bouncee 2s infinite;
  animation: bouncee 2s infinite;
}

@keyframes bouncee {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  40% {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }

  60% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
}

@-webkit-keyframes bouncee {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  40% {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }

  60% {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
  }
}

.banner_text_primary {
  font-size: 5.5em !important;
  margin-top:0.25em !important;
}
.banner_text_secondary {
  font-size: 4.2em !important;
  margin-top:1em !important;
}

@media only screen and (max-width: 767px){
  .banner_text_primary {
    font-size:3em !important;
  margin-top:0.25em !important;
}

.banner_text_secondary {
  font-size: 2.5em !important;
  margin-top: 0.5em !important;
}
}

`;
