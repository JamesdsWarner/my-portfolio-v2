import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const NavMenuWrapper = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 580px) {
    flex-direction: row;
  }
`;

export const NavItems = styled.div`
  display: flex;
  gap: 60px;
  margin-top: -20px;
  cursor: pointer;
  @media screen and (min-width: 580px) {
    margin-top: 0;
    gap: 30px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  color: white;
  gap: 8px;
  align-items: center;
`;

export const NavIcon = styled(Icon)`
  font-size: 20px;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const NavItemText = styled.p`
  font-size: 17px;
`;

export const LogoWrapper = styled.div`
  filter: invert(100%);
  height: 150px;
  width: 150px;

  > * {
    max-width: 150px;
  }
`;
