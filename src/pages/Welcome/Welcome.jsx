import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { OutlineButton } from '@/components/Atoms';
function Welcome() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('가입 완료 ! ')}</title>
      </Helmet>

      <div className="box-border flex h-screen flex-grow flex-col items-center justify-center gap-3 bg-bjyellow-300 px-4">
        <div className="justify-centere flex flex-grow flex-col items-center justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M83.4158 64.8107C88.7416 59.0955 92 51.4283 92 43C92 25.3269 77.6731 11 60 11C42.3269 11 28 25.3269 28 43C28 51.5604 31.3614 59.3357 36.8362 65.0781C36.7517 64.9894 36.6677 64.9003 36.5842 64.8107C20.7698 73.2081 10 89.8463 10 109H14C14 90.8898 24.4656 75.224 39.6788 67.7206C39.6787 67.7206 39.6787 67.7205 39.6787 67.7205C45.2053 72.2689 52.2837 75 60 75C67.732 75 74.8235 72.2577 80.355 67.6928C80.3437 67.702 80.3325 67.7113 80.3212 67.7206C95.5344 75.224 106 90.8898 106 109H110C110 89.8463 99.2301 73.2081 83.4158 64.8107ZM60 71C75.464 71 88 58.464 88 43C88 27.536 75.464 15 60 15C44.536 15 32 27.536 32 43C32 58.464 44.536 71 60 71ZM43.4903 34.2648C43.4904 34.2646 43.4906 34.2643 42.6267 33.7606C41.7628 33.2569 41.763 33.2566 41.7632 33.2563L41.7645 33.254L41.767 33.2498L41.7744 33.2373L41.7989 33.1969C41.8194 33.1634 41.8485 33.1167 41.886 33.0586C41.9609 32.9423 42.0698 32.7797 42.2118 32.5834C42.4951 32.1915 42.9137 31.6609 43.4616 31.0956C44.5485 29.9741 46.1954 28.6633 48.3529 28.0852C50.5105 27.5071 52.5921 27.8188 54.0942 28.2467C54.8513 28.4623 55.4791 28.7125 55.9204 28.9101C56.1415 29.0092 56.3171 29.0956 56.4402 29.1588C56.5017 29.1904 56.5502 29.2163 56.5848 29.2351L56.6261 29.2578L56.6387 29.2649L56.643 29.2673L56.6447 29.2682C56.645 29.2684 56.646 29.269 56.1497 30.1371C55.6534 31.0053 55.6537 31.0055 55.6539 31.0056L55.6518 31.0044L55.6296 30.9922C55.6081 30.9805 55.5734 30.962 55.5263 30.9378C55.432 30.8894 55.2886 30.8186 55.103 30.7355C54.7307 30.5688 54.1938 30.3546 53.5463 30.1701C52.2391 29.7978 50.5517 29.5666 48.8706 30.017C47.1894 30.4675 45.8437 31.5114 44.8978 32.4875C44.4292 32.971 44.0714 33.4249 43.8323 33.7554C43.7131 33.9202 43.6243 34.0532 43.5669 34.1423C43.5382 34.1868 43.5174 34.2202 43.5046 34.2411L43.4915 34.2628L43.4903 34.2648ZM63.8502 35.1371C64.3465 36.0053 64.3462 36.0055 64.346 36.0056L64.3481 36.0044L64.3703 35.9922C64.3918 35.9805 64.4265 35.962 64.4736 35.9378C64.5679 35.8894 64.7113 35.8186 64.8969 35.7355C65.2692 35.5688 65.8061 35.3546 66.4536 35.1701C67.7608 34.7978 69.4482 34.5666 71.1293 35.017C72.8105 35.4675 74.1562 36.5114 75.1021 37.4875C75.5707 37.971 75.9285 38.4249 76.1676 38.7554C76.2868 38.9202 76.3756 39.0532 76.433 39.1423C76.4617 39.1868 76.4825 39.2202 76.4953 39.2411L76.5084 39.2628L76.5096 39.2648C76.5095 39.2646 76.5093 39.2643 77.3732 38.7606C78.2371 38.2569 78.2365 38.2559 78.2363 38.2556L78.2354 38.254L78.2329 38.2498L78.2255 38.2373L78.201 38.1969C78.1805 38.1634 78.1514 38.1167 78.1139 38.0586C78.039 37.9423 77.9301 37.7797 77.7881 37.5834C77.5048 37.1915 77.0862 36.6609 76.5383 36.0956C75.4514 34.9741 73.8045 33.6633 71.647 33.0852C69.4894 32.5071 67.4078 32.8188 65.9057 33.2466C65.1486 33.4623 64.5208 33.7125 64.0795 33.9101C63.8584 34.0092 63.6828 34.0956 63.5597 34.1588C63.4982 34.1904 63.4497 34.2163 63.4151 34.2351L63.3738 34.2578L63.3612 34.2649L63.3569 34.2673L63.3545 34.2686C63.3542 34.2688 63.354 34.269 63.8502 35.1371ZM54 41C54 43.2091 52.6568 45 51 45C49.3431 45 48 43.2091 48 41C48 38.7909 49.3431 37 51 37C52.6568 37 54 38.7909 54 41ZM50 40C50 40.5523 50.4477 41 51 41C51.5522 41 52 40.5523 52 40C52 39.4477 51.5522 39 51 39C50.4477 39 50 39.4477 50 40ZM72 42H66V40H72V42ZM70.1598 51.7365C70.1597 51.7367 70.1596 51.737 71.1244 52C72.0892 52.263 72.0891 52.2633 72.089 52.2636L72.0883 52.2662L72.087 52.2709L72.0831 52.2849L72.0699 52.3302C72.0588 52.3679 72.0428 52.4205 72.0216 52.4864C71.9793 52.6181 71.9162 52.8033 71.8299 53.0297C71.6576 53.4815 71.3906 54.1024 71.0077 54.7902C70.2481 56.1549 68.9966 57.8473 67.0622 58.9641C65.1278 60.0809 63.0364 60.3186 61.4748 60.2941C60.6877 60.2817 60.0165 60.2025 59.5391 60.1258C59.2998 60.0874 59.1079 60.0494 58.9727 60.0202C58.905 60.0056 58.8515 59.9932 58.8133 59.984L58.7674 59.9727L58.7534 59.9691L58.7486 59.9679L58.7468 59.9674C58.7465 59.9673 58.7454 59.967 59 59C59.2547 58.033 59.2544 58.0329 59.2541 58.0328L59.2565 58.0334L59.2811 58.0394C59.3049 58.0452 59.3432 58.0541 59.395 58.0653C59.4986 58.0877 59.6554 58.1189 59.8562 58.1512C60.2589 58.2158 60.833 58.2837 61.5062 58.2943C62.8652 58.3156 64.5549 58.1023 66.0622 57.232C67.5695 56.3618 68.5991 55.0051 69.2602 53.8175C69.5877 53.2292 69.8159 52.6981 69.9612 52.3171C70.0337 52.127 70.085 51.9756 70.1175 51.8747C70.1255 51.8497 70.1323 51.8278 70.1381 51.8093C70.1439 51.7904 70.1485 51.7749 70.152 51.7631L70.1591 51.7388L70.1598 51.7365Z"
              fill="#212121"
            />
          </svg>
          <p className="text-h-2-semibold">환영합니다 </p>
          <span>이제 북적북적에서 </span>
          <span>책을 모여서 읽어봐요!</span>
        </div>
        <Link
          className="mb-14 h-[64px] w-[90%] rounded-5xl border-black text-center text-b-1-medium leading-[64px] text-black"
          to="/login"
        >
          <OutlineButton>홈으로 돌아가기</OutlineButton>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
