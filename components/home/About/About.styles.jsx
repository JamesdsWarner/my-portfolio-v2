import styled from 'styled-components';
import Image from 'next/image';

export const AboutWrapper = styled.div`
  text-align: center;
  padding: auto;
  padding-bottom: 180px;
  background-color: #f9f9f9;
  width: 100%;
  > * {
    :first-child {
      position: absolute;
      height: 130px;
      width: 100%;
      fill: #f9f9f9;
      margin-top: -130px;
      left: 0;
      z-index: 0;
    }
  }
`;

export const AboutImageWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  margin-top: -120px;
  z-index: 999;
  position: absolute;
  right: 0;
  left: 0;
`;

export const AboutImage = styled(Image)``;

export const AboutTextWrapper = styled.div`
  color: black;
  position: relative;
  z-index: 999;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  text-align: center;
  margin: auto;
`;

export const AboutHeader = styled.h2`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 40px;
`;

export const AboutText = styled.p`
  font-size: 20px;
  text-align: left;
  margin-bottom: 60px;
`;

export const AboutButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    width: 90%;

    @media screen and (min-width: 467px) {
      width: 60%;
      max-width: 200px;
    }
  }
`;

export const EmailAnchor = styled.a``;
