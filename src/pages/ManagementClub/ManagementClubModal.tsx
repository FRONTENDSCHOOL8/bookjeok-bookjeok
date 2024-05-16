import { ButtonModalForManageMent } from '@/components/Molecules';

interface Tmodal {
  open: boolean;
  title?: string;
  onClickCancel:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  primaryOnClick?:
    | ((
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => void | Promise<void>)
    | undefined;
  secondaryOnClick?:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  primaryButtonPath?: string | undefined;
}

export const ApproveUserModal = ({
  title,
  open,
  onClickCancel,
  primaryOnClick,
  secondaryOnClick,
}: Tmodal) => {
  return (
    <ButtonModalForManageMent
      title={`${title}님의 신청을 승인하시겠습니까?`}
      closeButton
      // primaryAs="button"
      // secondaryAs="button"
      open={open}
      onClickCancel={onClickCancel}
      primaryOnClick={primaryOnClick}
      primaryButtonText="승인"
      secondaryOnClick={secondaryOnClick}
      secondaryButtonText="취소"
    >
      신청을 승인하면 모임 채팅방에 초대됩니다.
    </ButtonModalForManageMent>
  );
};
export const CancelUserModal = ({
  title,
  open,
  onClickCancel,
  primaryOnClick,
  secondaryOnClick,
}: Tmodal) => {
  return (
    <ButtonModalForManageMent
      title={`${title}님의 승인을 취소하시겠습니까?`}
      closeButton
      open={open}
      onClickCancel={onClickCancel}
      primaryButtonText="취소"
      primaryOnClick={primaryOnClick}
      secondaryOnClick={secondaryOnClick}
      secondaryButtonText="닫기"
    >
      특별한 사유없이 승인을 취소하면
      <br />
      불이익이 있을 수 있습니다.
    </ButtonModalForManageMent>
  );
};
export const FailModal = ({
  open,
  onClickCancel,
  primaryButtonPath,
}: Tmodal) => {
  return (
    <ButtonModalForManageMent
      open={open}
      onClickCancel={onClickCancel}
      title="더이상 승인할 수 없어요!"
      closeButton
      primaryButtonText="채팅방으로 이동하기"
      primaryButtonPath={`/chatRoom/${primaryButtonPath}`}
    >
      이미 승인가능한 인원이 모두 찼어요.
    </ButtonModalForManageMent>
  );
};
export const CompleteModal = ({
  open,
  onClickCancel,
  primaryButtonPath,
}: Tmodal) => {
  return (
    <ButtonModalForManageMent
      open={open}
      onClickCancel={onClickCancel}
      closeButton
      title="축하합니다!"
      primaryButtonText="채팅방으로 이동하기"
      primaryButtonPath={`/chatRoom/${primaryButtonPath}`}
    >
      모든 모임인원이 찼어요!
      <br />
      채팅방에서 참여자들에게 모임안내를 해주세요.
    </ButtonModalForManageMent>
  );
};
export const DeleteModal = ({
  open,
  onClickCancel,
  primaryOnClick,
  secondaryOnClick,
}: Tmodal) => {
  return (
    <ButtonModalForManageMent
      title={'모임을 삭제하시겠습니까??'}
      open={open}
      closeButton
      onClickCancel={onClickCancel}
      primaryButtonText="삭제"
      primaryOnClick={primaryOnClick}
      secondaryOnClick={secondaryOnClick}
      secondaryButtonText="닫기"
    >
      특별한 사유없이 모임을 삭제하면
      <br />
      불이익이 있을 수 있습니다.
    </ButtonModalForManageMent>
  );
};
export const CompleteDeleteModal = ({ open }: { open: boolean }) => {
  return (
    <ButtonModalForManageMent
      open={open}
      title="모임이 삭제되었습니다."
      primaryButtonText="홈으로 이동하기"
      primaryButtonPath={'/main/club'}
    >
      모임 채팅방은 자동으로 삭제됩니다.
    </ButtonModalForManageMent>
  );
};
