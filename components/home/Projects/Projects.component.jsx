import * as Styled from './Projects.styles';
import Project from '../Project/Project.component';
import { projects } from '../../../data/projects.js';
import { v4 as uuidv4 } from 'uuid';
import SlantDivider from '../../shared/Dividers/SlantDivider';
import CurveDivider from '../../shared/Dividers/CurveDivider';

export default function Projects() {
  return (
    <Styled.ProjectsWrapper id="projects-section">
      <SlantDivider />
      <Styled.ProjectsText>My Projects</Styled.ProjectsText>
      {projects.map((project, i) => {
        return <Project project={project} key={uuidv4()} flexNo={i} />;
      })}
      <CurveDivider />
    </Styled.ProjectsWrapper>
  );
}
