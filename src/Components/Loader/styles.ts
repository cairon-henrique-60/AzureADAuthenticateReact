import styled from "styled-components";

interface LogoLoaderProps {
  width?: string;
  height?: string;
}

export const LogoLoader = styled.div<LogoLoaderProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  svg {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }

  .firstLine {
    animation: outOpacity 1s 2s infinite;
    animation-delay: 0.1s;
  }
  .middleLine {
    animation: outOpacity 1s 3s ease infinite;
    animation-delay: 0.2s;
  }
  .lastLine {
    animation: outOpacity 1s 4s ease infinite;
    animation-delay: 0.3s;
  }

  @keyframes outOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
