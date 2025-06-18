import * as React from "react";
import { SVGProps } from "react";

const AnimatedSvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 245 85"
    style={{scale: 1.03}}
    fill="var(--color-background)"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>
      {`
        @keyframes fadeInLeft {
          0%   { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes revealRect {
          0% { stroke-dashoffset: 640; }
          100% { stroke-dashoffset: 0; }
        }
        
        .letter {
          opacity: 0;
          transform: translateX(-30px);
          animation: fadeInLeft 0.5s ease-out forwards;
          font-weight: 600;
        }
        .letter:nth-child(1) { animation-delay: 0s; }
        .letter:nth-child(2) { animation-delay: 0.2s; }
        .letter:nth-child(3) { animation-delay: 0.4s; }
        .letter:nth-child(4) { animation-delay: 0.6s; }
        .letter:nth-child(5) { animation-delay: 0.8s; }
        .letter:nth-child(6) { animation-delay: 1s; }

        .rect {
          stroke-dasharray: 640;
          stroke-dashoffset: 640;
          animation: revealRect 1.2s ease-out forwards;
        }
      `}
    </style>
    <rect
      className="rect"
      x="3"
      y="3"
      width="240"
      height="80"
      stroke="var(--color-button-border)"
      strokeWidth="3"
      fill="var(--color-background)"
    />
    <g
      id="textGroup"
      fill="white"
      fontSize="44px"
      fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      <text className="letter" x="35" y="45">G</text>
      <text className="letter" x="70" y="45">A</text>
      <text className="letter" x="105" y="45">N</text>
      <text className="letter" x="140" y="45">E</text>
      <text className="letter" x="175" y="45">S</text>
      <text className="letter" x="210" y="45">H</text>
    </g>
  </svg>
);

export default AnimatedSvgLogo;
