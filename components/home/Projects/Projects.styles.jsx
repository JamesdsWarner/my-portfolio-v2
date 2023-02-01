import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #f9f9f9;
  color: #fff;
  padding: 20px;
  z-index: 999;
  color: black;
  justify-content: center;
  padding-bottom: 108px;

  > * {
    :first-child {
      position: absolute;
      height: 130px;
      width: 100%;
      fill: #f9f9f9;
      margin-top: -150px;
      left: 0;
    }

    :last-child {
      fill: #f9f9f9;
      transform: rotate(180deg);
      position: absolute;
      margin-top: 108px;
      left: 0;
      height: 40px;
    }
  }
`;

export const ProjectsText = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-weight: 900;
`;
