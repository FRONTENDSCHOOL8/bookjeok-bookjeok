import {
  MainButton,
  ModalButton,
  OutlineButton,
  SmallButton,
} from './components/Atoms';
import Svg from './components/Atoms/Svg/Svg';

export default function AtomMaking() {
  return (
    <>
      <MainButton type="button" className="large_primary">
        버튼
      </MainButton>
      <MainButton type="button" className="large_secondary">
        버튼
      </MainButton>
      <MainButton disabled type="button">
        버튼
      </MainButton>
      <ModalButton type="button" className="large_primary">
        버튼
      </ModalButton>
      <ModalButton type="button" className="large_secondary">
        버튼
      </ModalButton>
      <ModalButton disabled type="button">
        버튼
      </ModalButton>
      <OutlineButton type="button">버튼</OutlineButton>
      <OutlineButton disabled type="button">
        버튼
      </OutlineButton>
      <SmallButton type="button">버튼</SmallButton>
      <SmallButton disabled type="button">
        버튼
      </SmallButton>
      <Svg id="logo" />
      <Svg width="40" height="40" id="logo" />
    </>
  );
}
