import {
  Accordion,
  Badge,
  CheckboxForm,
  ImageForm,
  MainButton,
  MessageBubble,
  NomalTitle,
  OutlineButton,
  RadioForm,
  RoundImage,
  SmallButton,
  TextForm,
  Textarea,
  ThinTextForm,
} from './components/Atoms';
import Svg from './components/Atoms/Svg/Svg';
import { DobbleButtonModal } from './components/Molecules';

export default function AtomMaking() {
  return (
    <>
      <DobbleButtonModal
        // open
        svgId="logo"
        title="북적북적"
        closeButton
        primaryButtonText="확인"
        primaryButtonPath="/"
        secondaryButtonText="취소"
        secondaryButtonPath="/"
      >
        북적북적
      </DobbleButtonModal>

      <div className="p-5">
        <details open>
          <summary>Accordion</summary>
          <div className="pb-5">
            <Accordion
              smallText="신청 후 24시간이 지나면 자동으로 대기가 취소돼요."
              open
              src="/src/assets/avatar.svg"
              nickname="닉네임"
              text="내용"
            >
              참여 대기 멤버 <span className="text-bjred-400">2</span>명 참여
            </Accordion>
            <Accordion
              src="/src/assets/avatar.svg"
              nickname="닉네임"
              text="내용"
            >
              확정 멤버 4명 중 <span className="text-bjgray-500">0</span>명
            </Accordion>
          </div>
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
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              MainButton
            </h3>
            <div className="flex flex-col gap-2">
              <MainButton as="a">링크</MainButton>
              <MainButton as="button" type="button">
                버튼
              </MainButton>
              <MainButton as="button" type="button" color="secondary">
                버튼
              </MainButton>
              <MainButton as="button" type="button" disabled>
                버튼
              </MainButton>
              <div className="flex gap-x-[15px]">
                <MainButton
                  as="button"
                  type="button"
                  color="secondary"
                  size="sm"
                  svgId="direction-vertical"
                >
                  정렬
                </MainButton>
                <MainButton
                  as="button"
                  type="button"
                  color="secondary"
                  size="sm"
                  svgId="filter"
                >
                  필터
                </MainButton>
              </div>
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              OutlineButton
            </h3>
            <div className="flex flex-col gap-2">
              <OutlineButton as="a">링크</OutlineButton>
              <OutlineButton as="button" type="button">
                버튼
              </OutlineButton>
              <OutlineButton as="button" type="button" disabled>
                버튼
              </OutlineButton>
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              SmallButton
            </h3>
            <div className="flex flex-row gap-2">
              <SmallButton as="button" type="button">
                버튼
              </SmallButton>
              <SmallButton as="button" type="button" disabled>
                버튼
              </SmallButton>
            </div>
          </div>
        </details>

        <details open>
          <summary>Inputs</summary>
          <div className="pb-5">
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              CheckboxForm
            </h3>
            <div className="flex flex-col gap-2">
              <div className="inline-flex justify-evenly gap-4">
                <CheckboxForm
                  id="id1"
                  name="name1"
                  value="value"
                  defaultChecked
                >
                  체크박스 1
                </CheckboxForm>
                <CheckboxForm id="id2" name="name1" value="value">
                  체크박스 2
                </CheckboxForm>
              </div>
              <div className="flex flex-col gap-10">
                <CheckboxForm
                  id="id3"
                  name="name2"
                  value="value"
                  defaultChecked
                >
                  체크박스 1
                </CheckboxForm>
                <CheckboxForm id="id4" name="name2" value="value">
                  체크박스 2
                </CheckboxForm>
              </div>
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              ImageForm
            </h3>
            <div className="flex flex-col gap-2">
              <ImageForm src="" alt="" />
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              RadioForm
            </h3>
            <div className="flex flex-col gap-2">
              <div className="inline-flex justify-evenly gap-4">
                <RadioForm name="name3" value="value1">
                  라디오 1
                </RadioForm>
                <RadioForm name="name3" value="value2">
                  라디오 2
                </RadioForm>
              </div>
              <div className="flex flex-col gap-10">
                <RadioForm name="name4" value="value3">
                  라디오 1
                </RadioForm>
                <RadioForm name="name4" value="value4">
                  라디오 2
                </RadioForm>
              </div>
              <div className="flex h-[64px] flex-row items-center gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 focus-within:border-bjgray-500">
                <fieldset className="flex flex-grow flex-col">
                  <legend className="text-b-2-regular text-bjgray-500">
                    성별
                  </legend>
                  <div className="inline-flex justify-evenly gap-4">
                    <RadioForm type="radio" value="male" name="gender">
                      남자
                    </RadioForm>
                    <RadioForm type="radio" value="female" name="gender">
                      여자
                    </RadioForm>
                  </div>
                </fieldset>
              </div>
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
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
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              TextForm
            </h3>
            <div className="flex flex-col gap-4">
              <TextForm
                type="email"
                placeholder="email@email.com"
                description="description"
              >
                이메일
              </TextForm>
              <TextForm type="password" description="description">
                비밀번호
              </TextForm>
              <TextForm
                type="password"
                description="동일한 비밀번호를 입력해주세요."
                error
              >
                비밀번호 확인
              </TextForm>
              <TextForm type="text" placeholder="김멋사">
                닉네임
              </TextForm>
              <TextForm type="text" placeholder="010-1234-1234">
                휴대폰
              </TextForm>
              <TextForm type="text" placeholder="1995-12-03">
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
                svgId="pin"
                type="text"
                hiddenLabel
                placeholder="장소를 입력해주세요. (필수)"
              >
                장소
              </TextForm>
              <TextForm
                type="text"
                hiddenLabel
                value="모임에 참석하기 전에 책을 읽어오셔야 돼요 !"
                readOnly
              >
                질문 내용
              </TextForm>
              <TextForm type="text" value="disabled" disabled>
                Label
              </TextForm>
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              ThinTextForm
            </h3>
            <div className="flex flex-col gap-2">
              <ThinTextForm type="search" searchIcon>
                검색
              </ThinTextForm>
              <ThinTextForm type="search" backLink>
                검색
              </ThinTextForm>
              <ThinTextForm
                type="text"
                placeholder="메세지를 입력하세요."
                sendButton
              >
                채팅 메세지
              </ThinTextForm>
            </div>
          </div>
        </details>

        <details open>
          <summary>MessageBubble</summary>
          <div className="pb-5">
            <MessageBubble
              src="/src/assets/avatar.svg"
              alt="작성자"
              nickname="작성자"
              time="오후 2:00"
            >
              모임에 참석하기 전에 책을 읽어오셔야 돼요 !
            </MessageBubble>
            <MessageBubble
              align="right"
              src="/src/assets/avatar.svg"
              alt="작성자"
              nickname="작성자"
              time="오후 2:00"
            >
              내용
            </MessageBubble>
          </div>
        </details>

        <details open>
          <summary>RoundImage</summary>
          <div className="pb-5">
            <div className="flex flex-row gap-2">
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                size="sm"
              ></RoundImage>
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                size="md"
              ></RoundImage>
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                size="lg"
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
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              NomalTitle
            </h3>
            <div className="flex flex-col gap-2">
              <NomalTitle backLink path="/" resetButton>
                페이지 제목
              </NomalTitle>
            </div>
            <h3 className="text-h-3-regular my-4 border-b-[1px] border-bjgray-400 py-2">
              StepTitle
            </h3>
            <div className="flex flex-col gap-2">
              <NomalTitle backLink subText="1 of 3">
                페이지 제목
              </NomalTitle>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
