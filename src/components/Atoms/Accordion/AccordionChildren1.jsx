import { RoundImage, SmallButton, TextForm } from '@/components/Atoms';
import { string, func, bool } from 'prop-types';
function AccordionChildren1({ confirm, src, nickname, answer, onClick }) {
  return (
    <div>
      <dl className="flex flex-col">
        <dt className="flex h-[64px] flex-row items-center">
          <div className="flex flex-grow flex-row items-center gap-4">
            <RoundImage src={src} alt="" size="md"></RoundImage>
            <p>{nickname}</p>
          </div>
          {confirm ? (
            ''
          ) : (
            <div>
              <SmallButton as="button" onClick={onClick} type="button">
                수락
              </SmallButton>
            </div>
          )}
        </dt>
        {confirm ? (
          ''
        ) : (
          <dd className="py-2">
            <TextForm
              type="text"
              hiddenLabel
              value={answer}
              readOnly
            ></TextForm>
          </dd>
        )}
      </dl>
    </div>
  );
}

export default AccordionChildren1;
AccordionChildren1.propTypes = {
  src: string,
  confirm: bool,
  photo: string,
  nickname: string,
  answer: string,
  onClick: func,
};
