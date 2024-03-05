import { RoundImage, SmallButton, TextForm } from '@/components/Atoms';
import { string, func } from 'prop-types';
function AccordionChildren1({ photo, nickname, answer, onClick }) {
  return (
    <div>
      <dl className="flex flex-col">
        <dt className="flex h-[64px] flex-row items-center">
          <div className="flex flex-grow flex-row items-center gap-4">
            <RoundImage
              src={photo ? { photo } : '/public/defaultProfile.webp'}
              alt=""
              size="md"
            ></RoundImage>
            <p>{nickname}</p>
          </div>
          <div>
            <SmallButton as="button" onClick={onClick} type="button">
              수락
            </SmallButton>
          </div>
        </dt>
        <dd className="py-2">
          <TextForm type="text" hiddenLabel value={answer} readOnly></TextForm>
        </dd>
      </dl>
    </div>
  );
}

export default AccordionChildren1;
AccordionChildren1.propTypes = {
  photo: string,
  nickname: string,
  answer: string,
  onClick: func,
};
