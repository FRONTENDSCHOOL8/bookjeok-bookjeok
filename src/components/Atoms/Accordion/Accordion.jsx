import SmallButton from '../Buttons/SmallButton/SmallButton';
import TextForm from '../Inputs/TextForm/TextForm';
import RoundImage from '../RoundImage/RoundImage';
import Svg from '../Svg/Svg';

function Accordion() {
  return (
    <>
      <details className="group/item" open>
        <summary className="flex h-[64px] flex-row items-center">
          <div className="flex flex-1 flex-col">
            <p className="text-h-2-semibold text-bjblack">
              참여 대기 멤버 <span className="text-bjred-400">2</span>명
            </p>
            <span className="text-b-2-regular text-bjgray-500">
              신청 후 24시간이 지나면 자동으로 대기가 취소돼요.
            </span>
          </div>
          <div className="block group-open/item:hidden">
            <Svg id="chevron-down" />
          </div>
          <div className="hidden group-open/item:block">
            <Svg id="chevron-up" />
          </div>
        </summary>
        <div>
          <dl className="flex flex-col gap-2">
            <dt className="flex h-[64px] flex-row items-center">
              <div className="flex flex-grow flex-row items-center gap-4">
                <RoundImage
                  src="/src/assets/avatar.svg"
                  alt="alt"
                  size="md"
                ></RoundImage>
                <p>이름</p>
              </div>
              <div>
                <SmallButton as="button" type="button">
                  수락
                </SmallButton>
              </div>
            </dt>
            <dd className="py-2">
              <TextForm
                type="text"
                hiddenLabel
                value="질문 내용입니다."
                readOnly
              >
                질문 내용
              </TextForm>
            </dd>
          </dl>
        </div>
      </details>
      <details className="group/item">
        <summary className="flex h-[64px] flex-row items-center">
          <div className="flex flex-1 flex-col">
            <p className="text-h-2-semibold text-bjblack">
              참여 확정 멤버 4명 중 <span className="text-bjgray-500">0</span>명
            </p>
            <span className="text-b-2-regular text-bjgray-500"></span>
          </div>
          <div className="block group-open/item:hidden">
            <Svg id="chevron-down" />
          </div>
          <div className="hidden group-open/item:block">
            <Svg id="chevron-up" />
          </div>
        </summary>
        <div>
          <dl className="flex flex-col gap-2">
            <dt className="flex h-[64px] flex-row items-center">
              <div className="flex flex-grow flex-row items-center gap-4">
                <RoundImage
                  src="/src/assets/avatar.svg"
                  alt="alt"
                  size="md"
                ></RoundImage>
                <p>이름</p>
              </div>
              <div>
                <SmallButton as="button" type="button">
                  수락
                </SmallButton>
              </div>
            </dt>
            <dd className="py-2">
              <TextForm
                type="text"
                hiddenLabel
                value="질문 내용입니다."
                readOnly
              >
                질문 내용
              </TextForm>
            </dd>
          </dl>
        </div>
      </details>
    </>
  );
}

export default Accordion;
