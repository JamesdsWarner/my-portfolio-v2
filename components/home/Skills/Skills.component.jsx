import ParticlesBackground from '../../shared/ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-stars-config';
import { techStackObjects } from '../../../data/projects';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'react-intersection-observer';
import * as Styled from './Skills.styles';

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Styled.SkillsWrapper inView={inView} ref={ref} id="skills-section">
      <Styled.ParticlesWrapper>
        <ParticlesBackground data={data} id="tsparticles-stars" />
      </Styled.ParticlesWrapper>
      <Styled.TechnicalSkills>Technical Skills</Styled.TechnicalSkills>

      <Styled.SkillsIcons>
        {Object.keys(techStackObjects).map((skill) => {
          return (
            <Styled.SkillWrapper key={uuidv4()}>
              <Styled.SkillIcon
                skill={techStackObjects[skill].alt}
                icon={techStackObjects[skill].src}
                alt={techStackObjects[skill].alt}
                height="100"
                width="100"
              />
              <Styled.SkillName>{techStackObjects[skill].alt}</Styled.SkillName>
            </Styled.SkillWrapper>
          );
        })}
      </Styled.SkillsIcons>
    </Styled.SkillsWrapper>
  );
}
