import { RoundImage, SmallButton, TextBox } from '@/components/Atoms';
import { bool, func, string } from 'prop-types';
function AccordionChildren1({ confirmed, src, nickname, answer, onClick }) {
  return (
    <div>
      <dl className="flex flex-col">
        <dt className="flex h-[64px] flex-row items-center">
          <div className="flex flex-grow flex-row items-center gap-4">
            <RoundImage src={src} alt="" size="md"></RoundImage>
            <p>{nickname}</p>
          </div>
          {confirmed ? (
            <div>
              <SmallButton as="button" onClick={onClick} type="button">
                취소
              </SmallButton>
            </div>
          ) : (
            <div>
              <SmallButton as="button" onClick={onClick} type="button">
                승인
              </SmallButton>
            </div>
          )}
        </dt>
        {confirmed ? (
          ''
        ) : (
          <dd className="py-2">
            <TextBox>{answer}</TextBox>
          </dd>
        )}
      </dl>
    </div>
  );
}

export default AccordionChildren1;
AccordionChildren1.propTypes = {
  src: string,
  confirmed: bool,
  photo: string,
  nickname: string,
  answer: string,
  onClick: func,
};
