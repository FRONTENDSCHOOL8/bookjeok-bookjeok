import {
  ImageForm,
  MainButton,
  NomalTitle,
  TextForm,
  Textarea,
} from '@/components/Atoms';
import useCreateClubStore from '@/store/useCreateClubStore';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

export const CreateClub3 = () => {
  const { clubInfo, setImage, removeImage, addTitle, addDetail } =
    useCreateClubStore((state) => ({
      clubInfo: state.clubInfo,
      setImage: state.setImage,
      removeImage: state.removeImage,
      addTitle: state.addTitle,
      addDetail: state.addDetail,
    }));

  const handleInputImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files !== null) {
      setImage(files[0]);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeImage();
  };

  const handleTitle = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    addTitle(target.value);
  };

  const handleDetail = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    addDetail(target.value);
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex min-h-svh flex-col justify-between">
        <form>
          <NomalTitle backLink subText="3 of 4">
            모임 만들기
          </NomalTitle>
          <div className="flex flex-col gap-6 px-4">
            <h2 className="py-4 text-h-2-semibold">모임을 소개해주세요.</h2>
            <ImageForm
              onChange={handleInputImage}
              onClick={handleRemoveImage}
              src={clubInfo.img}
              alt={clubInfo.alt}
              id="img"
            />
            <div className="flex flex-col gap-2">
              <TextForm
                id="clubTitle"
                name="clubTitle"
                required
                placeholder="제목을 입력해 주세요. (필수)"
                hiddenLabel
                onChange={handleTitle}
              >
                모임제목
              </TextForm>
              <span className="px-2 text-b-2-regular text-bjgray-500">
                예시 : 돈의 속성 같이 읽기
              </span>
            </div>
            <Textarea
              id="clubDetail"
              name="clubDetail"
              required
              maxLength={500}
              length={clubInfo['detail'] ? clubInfo['detail'].length : 0}
              placeholder="내용을 입력해 주세요. (필수)"
              label="모임 상세내용"
              onChange={handleDetail}
            />
          </div>
        </form>
        <div className="px-4">
          <MainButton
            color="custom"
            className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium ${!clubInfo.title || !clubInfo.detail || !clubInfo.img ? 'pointer-events-none bg-bjgray-300 text-bjgray-500' : 'bg-bjyellow-400 text-bjblack'}`}
            to="/createClub4"
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
};
