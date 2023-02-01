import LinkBtn from '../../shared/LinkBtn/LinkBtn.component';
import Link from 'next/link';
import * as Styled from './Project.styles';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'react-intersection-observer';

export default function Project({ project, flexNo }) {
  const [oddOrEven, setOddOrEven] = useState('');

  const checkOddOrEven = (number) => {
    if (number % 2 === 0) {
      setOddOrEven('even');
    } else {
      setOddOrEven('false');
    }
  };

  useEffect(() => {
    checkOddOrEven(flexNo);
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Styled.ProjectWrapper inView={inView} ref={ref} oddOrEven={oddOrEven}>
      <Styled.ProjectImage
        height="600"
        width="600"
        src={project.imgSrc.src}
        alt={project.imgSrc.alt}
      />
      <Styled.ProjectInfoWrapper oddOrEven={oddOrEven}>
        <Styled.ProjectTitle>{project.projectTitle}</Styled.ProjectTitle>
        <Styled.ProjectTechStackWrapper>
          {project.techStackArr.map((techStack) => {
            return (
              <Styled.ProjectTechStackImage
                width={30}
                height={30}
                icon={techStack.src}
                alt={techStack.alt}
                key={uuidv4()}
              />
            );
          })}
        </Styled.ProjectTechStackWrapper>

        <Styled.ProjectDescription oddOrEven={oddOrEven}>
          {project.projectDescription}
        </Styled.ProjectDescription>
        <Styled.BtnWrapper>
          <Link target="_blank" href={project.projectUrl}>
            <LinkBtn buttonType="base" title="Live" ariaLabel="Open in new tab" icon="openNewTab" />
          </Link>
          <Link target="_blank" href={project.projectCode}>
            <LinkBtn
              buttonType="base-reverse"
              title="Code"
              ariaLabel="Open in new tab"
              icon="github"
            />
          </Link>
        </Styled.BtnWrapper>
      </Styled.ProjectInfoWrapper>
    </Styled.ProjectWrapper>
  );
}
