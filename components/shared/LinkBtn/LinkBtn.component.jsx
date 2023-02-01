import * as Styled from './LinkBtn.styles';
import icons from '../../../data/icons';
import { handleClickScroll } from '../../../helpers/handleClickScroll';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  baseReverse: 'base-reverse',
  baseLarge: 'base-large',
  reverseLarge: 'reverse-large',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Styled.BaseButton,
    [BUTTON_TYPE_CLASSES.baseReverse]: Styled.BaseReverseButton,
    [BUTTON_TYPE_CLASSES.baseLarge]: Styled.BaseLargeButton,
    [BUTTON_TYPE_CLASSES.reverseLarge]: Styled.ReverseLargeButton,
  }[buttonType]);

export default function LinkBtn({ buttonType, title, ariaLabel, icon, scroll }) {
  const CustomButton = getButton(buttonType);

  const handleOnClickScroll = (event) => {
    if (scroll) {
      handleClickScroll(event);
    }
  };

  return (
    <CustomButton
      onClick={(event) => handleOnClickScroll(event)}
      aria-label={ariaLabel}
      title={title}
    >
      <Styled.ButtonSpan>
        {title}
        <Styled.SvgIcon icon={icons[icon]} title={title} />
      </Styled.ButtonSpan>
    </CustomButton>
  );
}
