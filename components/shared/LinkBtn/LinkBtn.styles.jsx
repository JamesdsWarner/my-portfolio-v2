import styled from 'styled-components';
import { Icon } from '@iconify/react';

const mainColor = '#0066ff';
const hoverColor = '#0046ff';

export const BaseButton = styled.div`
  background-position: center;
  background-color: ${mainColor};
  padding: 12px 20px;
  border-radius: 3px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  font-weight: 400;
  border: 2px solid ${mainColor};

  &:hover {
    background-color: ${hoverColor};
    border: 2px solid ${hoverColor};
  }

  > * {
    fill: white;
  }
`;

export const BaseReverseButton = styled(BaseButton)`
  color: ${mainColor};
  background-color: transparent;

  > * {
    fill: ${mainColor};
  }

  &:hover {
    border: 2px solid ${mainColor};
    background-color: ${mainColor};
    color: white;
    > * {
      fill: white;
    }
  }
`;

export const BaseLargeButton = styled(BaseButton)`
  padding: 16px 22px;
`;

export const ReverseLargeButton = styled(BaseReverseButton)`
  padding: 16px 22px;
`;

export const ButtonSpan = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

export const SvgIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;
