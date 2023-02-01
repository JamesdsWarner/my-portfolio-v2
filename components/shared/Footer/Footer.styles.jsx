import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const FooterWrapper = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20%;

  @media screen and (max-width: 410px) {
    flex-direction: column;
    gap: 0;
    height: 200px;
    justify-content: center;
  }
`;

export const LogoWrapper = styled.div`
  filter: invert(100%);
  height: 150px;
  width: 150px;
  @media screen and (max-width: 410px) {
    margin-top: -50px;
  }

  > * {
    max-width: 150px;
  }
`;

export const IconsWrapper = styled.div`
  z-index: 999;
  display: flex;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const IconText = styled.p`
  color: white;
  font-weight: 700;
`;

export const SvgIcon = styled(Icon)`
  color: white;
  width: 40px;
  height: 40px;
`;

export const ParticlesWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 100%;
  position: absolute;
  @media screen and (max-width: 410px) {
    height: 200px;
  }

  > * {
    &:first-child {
      position: absolute;
      left: 0;
      right: 0;
      height: 150px;
      @media screen and (max-width: 410px) {
        height: 200px;
      }
    }
  }
`;

export const EmailAnchor = styled.a``;
