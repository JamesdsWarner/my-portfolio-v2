import * as Styled from './Banner.styles';
import ParticlesBackground from '../../shared/ParticlesBackground/ParticlesBackground.component';
import LinkBtn from '../../shared/LinkBtn/LinkBtn.component';
import data from '../../../data/particlesjs-shapes-config';
import Link from 'next/link';

export default function Banner() {
  return (
    <Styled.BannerWrapper>
      <Styled.ParticlesWrapper>
        <ParticlesBackground data={data} id="tsparticles-shapes" />
      </Styled.ParticlesWrapper>
      <Styled.BannerWrapperText>
        <Styled.BannerHeading>Hi. I'm James.</Styled.BannerHeading>
        <Styled.BannerSubHeading>
          I'm currently training to be a frontend developer. I have experience developing projects
          with React.js and Node.js.
        </Styled.BannerSubHeading>
        <Styled.ButtonsWrapper>
          <LinkBtn buttonType="base-large" title="Projects" icon="code" scroll />
          <Link target="_blank" href="https://github.com/JamesdsWarner">
            <LinkBtn
              buttonType="reverse-large"
              title="Code"
              ariaLabel="Open in new tab"
              icon="github"
            />
          </Link>
        </Styled.ButtonsWrapper>
      </Styled.BannerWrapperText>
    </Styled.BannerWrapper>
  );
}
