import Image from 'next/image';
import * as Styled from './NavMenu.styles';
import icons from '../../../data/icons';
import { handleClickScroll } from '../../../helpers/handleClickScroll';

export default function NavMenu() {
  return (
    <Styled.NavMenuWrapper>
      <Styled.LogoWrapper>
        <Image src="/images/JW-logo.png" height="150" width="150" alt="Logo image" />
      </Styled.LogoWrapper>
      <Styled.NavItems>
        <Styled.NavItem onClick={(event) => handleClickScroll(event)}>
          <Styled.NavIcon icon={icons['code']} /> <Styled.NavItemText>Projects</Styled.NavItemText>
        </Styled.NavItem>

        <Styled.NavItem onClick={(event) => handleClickScroll(event)}>
          <Styled.NavIcon icon={icons['headCog']} /> <Styled.NavItemText>Skills</Styled.NavItemText>
        </Styled.NavItem>

        <Styled.NavItem onClick={(event) => handleClickScroll(event)}>
          <Styled.NavIcon icon={icons['email']} />{' '}
          <Styled.NavItemText>Contact Me</Styled.NavItemText>
        </Styled.NavItem>
      </Styled.NavItems>
    </Styled.NavMenuWrapper>
  );
}
