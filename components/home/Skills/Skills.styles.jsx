import styled from 'styled-components';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export const SkillsWrapper = styled.div`
  /* height: ${(props) => (props.height <= 850 ? '1200px' : '700px')}; */
  display: flex;
  flex-direction: column;
  height: 2550px;

  @media screen and (min-width: 240px) {
    height: 1600px;
  }

  @media screen and (min-width: 290px) {
    height: 1400px;
  }

  @media screen and (min-width: 380px) {
    height: 1200px;
  }

  @media screen and (min-width: 430px) {
    height: 1030px;
  }

  @media screen and (min-width: 570px) {
    height: 840px;
  }

  @media screen and (min-width: 850px) {
    height: 650px;
  }
`;

export const ParticlesWrapper = styled.div`
  > * {
    &:first-child {
      position: absolute;
      left: 0;
      right: 0;
      height: 2550px;

      @media screen and (min-width: 240px) {
        height: 1600px;
      }

      @media screen and (min-width: 290px) {
        height: 1400px;
      }

      @media screen and (min-width: 380px) {
        height: 1200px;
      }

      @media screen and (min-width: 430px) {
        height: 1030px;
      }

      @media screen and (min-width: 570px) {
        height: 840px;
      }

      @media screen and (min-width: 850px) {
        height: 650px;
      }
    }
  }
`;

export const SkillIcon = styled(Icon)`
  height: 100px;
  width: 100px;
`;

export const SkillWrapper = styled.div`
  height: 150px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.18);
  }
`;

export const SkillName = styled.p``;

export const SkillsIcons = styled.div`
  z-index: 999;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 900px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  align-items: center;
  justify-content: center;
`;

export const TechnicalSkills = styled.h3`
  z-index: 999;
  text-align: center;
  color: white;
  margin-top: 90px;
  font-weight: 800;
`;
