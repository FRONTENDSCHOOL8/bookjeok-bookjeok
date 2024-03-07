import { string, bool, func, oneOfType, array } from 'prop-types';
import { MainButton, Svg } from '@/components/Atoms';

function ButtonModalForManageMent({
  className,
  open = false,
  svgId,
  title,
  children,
  primaryButtonText,
  primaryButtonPath,
  secondaryButtonText,
  secondaryButtonPath,
  closeButton = false,
  onClickCancel,
  primaryAs,
  secondaryAs,
  primaryOnClick,
  secondaryOnClick,
  ...rest
}) {
  const modalStyle = {
    className: 'relative z-10',
  };

  return (
    <dialog
      className={`${modalStyle.className} ${className}`}
      open={open}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-text"
      {...rest}
    >
      <div className="fixed inset-0 bg-bjblack bg-opacity-70 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <div className="flex min-h-full items-center justify-center p-8 text-center">
          <div className="relative w-full max-w-[400px] transform overflow-hidden rounded-5xl bg-white text-center shadow-xl transition-all">
            <div
              role="document"
              tabIndex="-1"
              className="w-full flex-col gap-y-2 rounded-5xl p-4 pb-6 text-center"
            >
              {svgId && (
                <Svg
                  id={svgId}
                  width={60}
                  height={60}
                  color="#FFD60A"
                  className="m-auto my-5"
                />
              )}
              <div className="flex flex-col gap-y-2 break-keep p-4">
                {title && (
                  <h3
                    id="modal-title"
                    className="text-h-2-semibold text-bjblack"
                  >
                    {title}
                  </h3>
                )}
                {children && (
                  <p
                    id="modal-text"
                    className="text-b-1-regular text-bjgray-500"
                  >
                    {children}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-y-2">
                {primaryButtonText && (
                  <MainButton
                    as={primaryAs}
                    onClick={primaryOnClick}
                    to={primaryButtonPath}
                    color="primary"
                  >
                    {primaryButtonText}
                  </MainButton>
                )}
                {secondaryButtonText && (
                  <MainButton
                    as={secondaryAs}
                    onClick={secondaryOnClick}
                    to={secondaryButtonPath}
                    color="secondary"
                  >
                    {secondaryButtonText}
                  </MainButton>
                )}
              </div>
              {closeButton && (
                <button
                  className="absolute right-4 top-4 h-6 w-6"
                  title="닫기"
                  aria-label="닫기"
                  onClick={onClickCancel}
                >
                  <Svg
                    id="close"
                    width={24}
                    height={24}
                    color="#212121"
                    className="absolute right-0 top-0"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ButtonModalForManageMent;

ButtonModalForManageMent.propTypes = {
  className: string,
  open: bool,
  svgId: string,
  title: string,
  children: oneOfType([string, array]),
  primaryButton: string,
  primaryButtonText: string,
  primaryButtonPath: string,
  secondaryButton: string,
  secondaryButtonText: string,
  secondaryButtonPath: string,
  closeButton: bool,
  onClickCancel: func,
  primaryAs: string,
  secondaryAs: string,
  primaryOnClick: func,
  secondaryOnClick: func,
};
