import {
  Badge,
  CheckboxForm,
  MainButton,
  ModalButton,
  OutlineButton,
  RadioForm,
  RoundImage,
  SmallButton,
  TextForm,
  Textarea,
} from './components/Atoms';
import Svg from './components/Atoms/Svg/Svg';

export default function AtomMaking() {
  return (
    <>
      <div className="container mx-auto max-w-screen-sm p-5">
        {/* <pre>
          ├─Accordion
          <br />
          ├─Badge
          <br />
          ├─Buttons
          <br />
          │ ├─MainButton
          <br />
          │ ├─ModalButton
          <br />
          │ ├─OutlineButton
          <br />
          │ └─SmallButton
          <br />
          ├─Inputs
          <br />
          │ ├─CheckboxForm
          <br />
          │ ├─ImageForm
          <br />
          │ ├─RadioForm
          <br />
          │ ├─Textarea
          <br />
          │ ├─TextForm
          <br />
          │ └─ThinTextForm
          <br />
          ├─MessageBubble
          <br />
          ├─RoundImage
          <br />
          ├─Svg
          <br />
          └─Title
          <br />
          │ ├─NomalTitle
          <br />
          │ └─StepTitle
          <br />
        </pre> */}

        <details open>
          <summary>Accordion</summary>
          <div className="pb-5"></div>
        </details>

        <details open>
          <summary>Badge</summary>
          <div className="pb-5">
            <Badge>뱃지</Badge>
          </div>
        </details>

        <details open>
          <summary>Buttons</summary>
          <div className="pb-5">
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              MainButton
            </h3>
            <div className="flex flex-col gap-2">
              <MainButton type="button">버튼</MainButton>
              <MainButton type="button" color="secondary">
                버튼
              </MainButton>
              <MainButton disabled type="button">
                버튼
              </MainButton>
            </div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              ModalButton
            </h3>
            <div className="flex flex-col gap-2">
              <ModalButton type="button">버튼</ModalButton>
              <ModalButton type="button" color="secondary">
                버튼
              </ModalButton>
              <ModalButton disabled type="button">
                버튼
              </ModalButton>
            </div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              OutlineButton
            </h3>
            <div className="flex flex-col gap-2">
              <OutlineButton type="button">버튼</OutlineButton>
              <OutlineButton disabled type="button">
                버튼
              </OutlineButton>
            </div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              SmallButton
            </h3>
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
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              CheckboxForm
            </h3>
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
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              ImageForm
            </h3>
            <div className="flex flex-col gap-2"></div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              RadioForm
            </h3>
            <div className="flex flex-col gap-2">
              <div className="inline-flex justify-evenly gap-4">
                <RadioForm name="name1" value="value" checked>
                  라디오 1
                </RadioForm>
                <RadioForm name="name1" value="value">
                  라디오 2
                </RadioForm>
              </div>
              <div className="flex flex-col gap-10">
                <RadioForm name="name2" value="value" checked>
                  라디오 1
                </RadioForm>
                <RadioForm name="name2" value="value">
                  라디오 2
                </RadioForm>
              </div>
              <div className="flex flex-row gap-4 items-center px-4 h-[64px] rounded-5xl bg-bjgray-100 border-[1px] border-bjgray-100 focus-within:border-bjgray-500">
                <div className="flex flex-col flex-grow">
                  <div>
                    <span className="text-b-2-regular text-bjgray-500">
                      성별
                    </span>
                  </div>
                  <div className="inline-flex justify-evenly gap-4">
                    <RadioForm name="gender" value="value">
                      남자
                    </RadioForm>
                    <RadioForm name="gender" value="value">
                      여자
                    </RadioForm>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              Textarea
            </h3>
            <div className="flex flex-col gap-10">
              <Textarea
                label="label"
                id="textarea1"
                placeholder="내용을 입력해 주세요.(최소 10자 이상)"
                length="200"
              />
              <Textarea label="label" id="textarea2" disabled length="200" />
            </div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              TextForm
            </h3>
            <div className="flex flex-col gap-2">
              <TextForm
                type="email"
                placeholder="email@email.com"
                description="description"
              >
                이메일
              </TextForm>
              <TextForm
                type="password"
                placeholder=""
                description="description"
              >
                비밀번호
              </TextForm>
              <TextForm
                type="password"
                placeholder=""
                description="동일한 비밀번호를 입력해주세요."
              >
                비밀번호 확인
              </TextForm>
              <TextForm
                type="text"
                placeholder="김멋사"
                description="description"
              >
                닉네임
              </TextForm>
              <TextForm
                type="text"
                placeholder="010-1234-1234"
                description="description"
              >
                휴대폰
              </TextForm>
              <TextForm
                type="text"
                placeholder="1995-12-03"
                description="description"
              >
                생년월일
              </TextForm>
              <TextForm
                type="text"
                hiddenLabel
                placeholder="제목을 입력해 주세요"
                description="예시 : 카라마조프 가의 형제들은 재밌다"
              >
                제목
              </TextForm>
              <TextForm
                svgIcon
                svgId="pin"
                type="text"
                hiddenLabel
                placeholder="장소를 입력해주세요. (필수)"
                description="description"
              >
                장소
              </TextForm>
              <TextForm
                type="text"
                hiddenLabel
                value="모임에 참석하기 전에 책을 읽어오셔야 돼요 !"
                readOnly
                description="description"
              >
                질문 내용
              </TextForm>
              <TextForm
                type="text"
                value="disabled"
                description="description"
                disabled
              >
                Label
              </TextForm>
            </div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              ThinTextForm
            </h3>
            <div className="flex flex-col gap-2"></div>
          </div>
        </details>

        <details open>
          <summary>MessageBubble</summary>
          <div className="pb-5"></div>
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

        <details open>
          <summary>Svg</summary>
          <div className="pb-5">
            <div className="flex flex-wrap">
              <Svg id="add" />
              <Svg id="alert" />
              <Svg id="apple" />
              <Svg id="arrow-down" />
              <Svg id="arrow-left-down" />
              <Svg id="arrow-left-up" />
              <Svg id="arrow-left" />
              <Svg id="arrow-right-down" />
              <Svg id="arrow-right-up" />
              <Svg id="arrow-right" />
              <Svg id="arrow-up" />
              <Svg id="bag" />
              <Svg id="bell" />
              <Svg id="book" />
              <Svg id="burger" />
              <Svg id="calendar" />
              <Svg id="calendar2" />
              <Svg id="camera" />
              <Svg id="caps" />
              <Svg id="car" />
              <Svg id="card" />
              <Svg id="cart" />
              <Svg id="chat" />
              <Svg id="checkmark" />
              <Svg id="chevron-down" />
              <Svg id="chevron-left" />
              <Svg id="chevron-right" />
              <Svg id="chevron-up" />
              <Svg id="clear" />
              <Svg id="clock" />
              <Svg id="close" />
              <Svg id="direction-horizontal" />
              <Svg id="direction-vertical" />
              <Svg id="erase" />
              <Svg id="eye-closed" />
              <Svg id="eye" />
              <Svg id="filter" />
              <Svg id="heart-filled" />
              <Svg id="heart" />
              <Svg id="info" />
              <Svg id="location" />
              <Svg id="lock" />
              <Svg id="logo" />
              <Svg id="logout" />
              <Svg id="memo" />
              <Svg id="micro" />
              <Svg id="minus" />
              <Svg id="more" />
              <Svg id="pin" />
              <Svg id="plus" />
              <Svg id="reload" />
              <Svg id="sale" />
              <Svg id="search" />
              <Svg id="send" />
              <Svg id="settings" />
              <Svg id="share" />
              <Svg id="star-filled" />
              <Svg id="star" />
              <Svg id="subsctract" />
              <Svg id="trash" />
              <Svg id="unlock" />
              <Svg id="user" />
            </div>
          </div>
        </details>

        <details open>
          <summary>Title</summary>
          <div className="pb-5">
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              NomalTitle
            </h3>
            <div className="flex flex-col gap-2"></div>
            <h3 className="text-h-3-regular py-2 border-b-[1px] border-bjgray-400 my-4">
              StepTitle
            </h3>
            <div className="flex flex-col gap-2"></div>
          </div>
        </details>
      </div>
    </>
  );
}
