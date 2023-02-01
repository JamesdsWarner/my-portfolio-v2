import styled from 'styled-components';

export const BannerWrapper = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  height: 700px;
`;

export const BannerWrapperText = styled.div`
  text-align: center;
  width: 90%;
  position: absolute;
  top: 190px;
  left: 0;
  right: 0;
  margin: auto;
  @media screen and (min-width: 800px) {
    width: 800px;
  }
`;

export const BannerHeading = styled.h1`
  z-index: 999;
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 900;

  @media screen and (min-width: 360px) {
    font-size: 50px;
  }
  @media screen and (min-width: 800px) {
    font-size: 80px;
  }
`;

export const BannerSubHeading = styled.h2`
  z-index: 999;
  color: white;
  position: relative;
  font-size: 18px;
  font-weight: 300;

  @media screen and (min-width: 360px) {
    font-size: 20px;
  }

  @media screen and (min-width: 800px) {
    font-size: 25px;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  > * {
    width: 90%;

    @media screen and (min-width: 580px) {
      width: 60%;
      max-width: 200px;
    }
  }
`;

export const ParticlesWrapper = styled.div`
  position: relative;
  > * {
    &:first-child {
      position: absolute;
      left: 0;
      right: 0;
      height: 700px;
    }
  }
`;
