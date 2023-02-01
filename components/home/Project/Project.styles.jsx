import styled from 'styled-components';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;

  opacity: ${(props) => (props.inView ? 1 : 0)};
  margin-top: ${(props) => (props.inView ? '60px' : '160px')};
  transition: all 0.5s ease;
  @media screen and (min-width: 850px) {
    flex-direction: ${(props) => (props.oddOrEven === 'even' ? 'row' : 'row-reverse')};
  }
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  align-self: center;
  transition: 0.2s ease;
  cursor: pointer;

  @media screen and (min-width: 850px) {
    width: 65%;
  }

  @media screen and (min-width: 1065px) {
    width: auto;
  }

  &:hover {
    scale: 1.06;
    transition: 0.8s ease;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 850px) {
    width: 40%;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  align-self: center;
  font-weight: 800;
`;

export const ProjectTechStackWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: center;
  font-weight: 900;
  border-top: 1.5px solid rgb(153, 153, 161, 0.4);
  border-bottom: 1.5px solid rgb(153, 153, 161, 0.4);
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ProjectTechStackImage = styled(Icon)``;

export const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 30px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
