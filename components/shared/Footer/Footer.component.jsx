import * as Styled from './Footer.styles';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-shapes-config';
import Image from 'next/image';
import icons from '../../../data/icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <Styled.FooterWrapper>
      <Styled.ParticlesWrapper>
        <ParticlesBackground data={data} id="tsparticles-shapes2" />
      </Styled.ParticlesWrapper>
      <Styled.LogoWrapper>
        <Image src="/images/JW-logo.png" height="150" width="150" alt="Logo image" />
      </Styled.LogoWrapper>
      <Styled.IconsWrapper>
        <Styled.EmailAnchor href="mailto: jamesdswarner@gmail.com">
          <Styled.IconWrapper>
            <Styled.SvgIcon icon={icons['email']} />
            <Styled.IconText>Email</Styled.IconText>
          </Styled.IconWrapper>
        </Styled.EmailAnchor>

        <Link target="_blank" href="/assets/JW-CV.pdf" locale={false}>
          <Styled.IconWrapper>
            <Styled.SvgIcon icon={icons['downloadCv']} />
            <Styled.IconText>CV</Styled.IconText>
          </Styled.IconWrapper>
        </Link>

        <Link target="_blank" href="https://github.com/JamesdsWarner">
          <Styled.IconWrapper>
            <Styled.SvgIcon icon={icons['github']} />
            <Styled.IconText>Github</Styled.IconText>
          </Styled.IconWrapper>
        </Link>
      </Styled.IconsWrapper>
    </Styled.FooterWrapper>
  );
}
