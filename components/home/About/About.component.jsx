import * as Styled from './About.styles';
import SlantDivider from '../../shared/Dividers/SlantDivider';
import LinkBtn from '../../shared/LinkBtn/LinkBtn.component';
import Link from 'next/link';

export default function About() {
  return (
    <Styled.AboutWrapper id="about-section">
      <SlantDivider />
      <Styled.AboutImageWrapper>
        <Styled.AboutImage
          width="200"
          height="200"
          src="/images/about-image.png"
          alt="Picture of James"
        />
      </Styled.AboutImageWrapper>
      <Styled.AboutTextWrapper>
        <Styled.AboutHeader>Hi, I'm James</Styled.AboutHeader>
        <Styled.AboutText>
          I'm a highly driven, front-end developer that thrives in creative environments. <br />
          <br />I am in search of a place to start my programming journey and grow into a
          well-rounded developer!
        </Styled.AboutText>
      </Styled.AboutTextWrapper>
      <Styled.AboutButtons>
        <Styled.EmailAnchor href="mailto: jamesdswarner@gmail.com">
          <LinkBtn
            buttonType="base-large"
            title="Contact Me"
            ariaLabel="Open in new tab"
            icon="email"
          />
        </Styled.EmailAnchor>
        <Link target="_blank" href="/assets/JW-CV.pdf" locale={false}>
          <LinkBtn
            buttonType="reverse-large"
            title="View CV"
            ariaLabel="Open in new tab"
            icon="downloadCv"
          />
        </Link>
        <Link target="_blank" href="https://github.com/JamesdsWarner">
          <LinkBtn
            buttonType="base-large"
            title="Github"
            ariaLabel="Open in new tab"
            icon="github"
          />
        </Link>
      </Styled.AboutButtons>
    </Styled.AboutWrapper>
  );
}
