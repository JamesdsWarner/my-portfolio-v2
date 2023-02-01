import ParticlesBackground from '../../shared/ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-stars-config';
import { techStackObjects } from '../../../data/projects';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import * as Styled from './Skills.styles';

export default function Skills() {
  const [particlesHeight, setParticlesHeight] = useState();

  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 850) {
      setParticlesHeight('1200px');
    } else {
      setParticlesHeight('700px');
    }
  }, [size.width]);

  return (
    <Styled.SkillsWrapper width={size.width} id="skills-section">
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
