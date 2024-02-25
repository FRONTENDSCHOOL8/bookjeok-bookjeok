import {
  Badge,
  CheckboxForm,
  MainButton,
  ModalButton,
  OutlineButton,
  RadioForm,
  RoundImage,
  SmallButton,
} from './components/Atoms';

export default function AtomMaking() {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm p-5">
        <details open>
          <summary>Badge</summary>
          <div className="pb-5">
            <Badge>뱃지</Badge>
          </div>
        </details>

        <details open>
          <summary>Buttons</summary>
          <div className="pb-5">
            <h3 className="text-h-3-regular py-2">MainButton</h3>
            <div className="flex flex-col gap-2">
              <MainButton type="button" className="large_primary">
                버튼
              </MainButton>
              <MainButton type="button" className="large_secondary">
                버튼
              </MainButton>
              <MainButton disabled type="button">
                버튼
              </MainButton>
            </div>
            <h3 className="text-h-3-regular py-2">ModalButton</h3>
            <div className="flex flex-col gap-2">
              <ModalButton type="button" className="large_primary">
                버튼
              </ModalButton>
              <ModalButton type="button" className="large_secondary">
                버튼
              </ModalButton>
              <ModalButton disabled type="button">
                버튼
              </ModalButton>
            </div>
            <h3 className="text-h-3-regular py-2">OutlineButton</h3>
            <div className="flex flex-col gap-2">
              <OutlineButton type="button">버튼</OutlineButton>
              <OutlineButton disabled type="button">
                버튼
              </OutlineButton>
            </div>
            <h3 className="text-h-3-regular py-2">SmallButton</h3>
            <div className="flex flex-row gap-2">
              <SmallButton type="button">버튼</SmallButton>
              <SmallButton disabled type="button">
                버튼
              </SmallButton>
            </div>
          </div>
        </details>

        <details open>
          <summary>Inputs</summary>
          <div className="pb-5">
            <h3 className="text-h-3-regular py-2">CheckboxForm</h3>
            <div className="flex flex-col gap-2">
              <div className="inline-flex justify-evenly gap-4">
                <CheckboxForm name="name1" value="value" checked>
                  체크박스 1
                </CheckboxForm>
                <CheckboxForm name="name1" value="value">
                  체크박스 2
                </CheckboxForm>
              </div>
              <div className="flex flex-col gap-10">
                <CheckboxForm name="name2" value="value" checked>
                  체크박스 1
                </CheckboxForm>
                <CheckboxForm name="name2" value="value">
                  체크박스 2
                </CheckboxForm>
              </div>
            </div>
            <h3 className="text-h-3-regular py-2">RadioForm</h3>
            <div className="flex flex-col gap-2">
              <div
                className="inline-flex justify-evenly gap-4"
                data-label="라디오 버튼(인풋)"
              >
                <RadioForm name="name1" value="value" checked>
                  라디오 1
                </RadioForm>
                <RadioForm name="name1" value="value">
                  라디오 2
                </RadioForm>
              </div>
              <div
                className="flex flex-col gap-10"
                data-label="라디오 버튼(인풋)"
              >
                <RadioForm name="name2" value="value" checked>
                  라디오 1
                </RadioForm>
                <RadioForm name="name2" value="value">
                  라디오 2
                </RadioForm>
              </div>
            </div>
          </div>
        </details>

        <details open>
          <summary>RoundImage</summary>
          <div className="pb-5 ">
            <div className="flex flex-row gap-2">
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                className="sm"
              ></RoundImage>
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                className="md"
              ></RoundImage>
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                className="lg"
              ></RoundImage>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
