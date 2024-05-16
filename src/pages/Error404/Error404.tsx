import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom';

function Error404() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('404 error')}</title>
      </Helmet>
      <main className="flex min-h-svh flex-col items-center bg-white pb-5 pt-[56px]">
        <h1 className="flex-grow text-h-1-light text-bjblack">북적북적</h1>
        <div className="flex flex-grow flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={120}
            height={120}
            viewBox="0 0 120 120"
            fill="none"
          >
            <path
              d="M77.8122 33.7009C77.5575 32.7339 77.5578 32.7338 77.5581 32.7338L77.5557 32.7344L77.5312 32.7404C77.5074 32.7461 77.469 32.7551 77.4173 32.7662C77.3137 32.7886 77.1569 32.8198 76.956 32.8521C76.5533 32.9168 75.9793 32.9847 75.3061 32.9953C73.947 33.0166 72.2573 32.8032 70.75 31.933C69.2427 31.0628 68.2131 29.7061 67.552 28.5185C67.2246 27.9302 66.9964 27.3991 66.8511 27.018C66.7786 26.8279 66.7272 26.6765 66.6948 26.5756C66.6786 26.5252 66.6672 26.4875 66.6602 26.464L66.6532 26.4397L66.6525 26.4374C66.6526 26.4377 66.6526 26.438 65.6878 26.7009C64.723 26.9639 64.7233 26.965 64.7234 26.9653L64.7239 26.9671L64.7252 26.9719L64.7292 26.9859L64.7423 27.0312C64.7535 27.0689 64.7695 27.1215 64.7906 27.1873C64.8329 27.319 64.896 27.5043 64.9823 27.7307C65.1546 28.1825 65.4217 28.8034 65.8045 29.4912C66.5641 30.8558 67.8156 32.5482 69.75 33.665C71.6844 34.7819 73.7758 35.0195 75.3374 34.995C76.1245 34.9827 76.7957 34.9035 77.2732 34.8268C77.5124 34.7884 77.7044 34.7503 77.8396 34.7211C77.9072 34.7065 77.9607 34.6941 77.999 34.6849L78.0448 34.6736L78.0589 34.6701L78.0636 34.6688L78.0662 34.6681C78.0665 34.6681 78.0669 34.668 77.8122 33.7009Z"
              fill="#212121"
            />
            <path
              d="M56.4472 52.1056C56.1263 51.9451 55.7439 51.9689 55.4453 52.1679L52.4453 54.1679L53.5547 55.832L56.0719 54.1539L59.5528 55.8944C59.8343 56.0352 60.1657 56.0352 60.4472 55.8944L63.9282 54.1539L66.4453 55.832L67.5547 54.1679L64.5547 52.1679C64.2561 51.9689 63.8738 51.9451 63.5528 52.1056L60 53.882L56.4472 52.1056Z"
              fill="#212121"
            />
            <path
              d="M53.3475 26.4374C53.3475 26.4377 53.3474 26.438 54.3122 26.7009C55.277 26.9639 55.2769 26.9642 55.2768 26.9646L55.2761 26.9671L55.2748 26.9719L55.2709 26.9859L55.2577 27.0312C55.2466 27.0689 55.2306 27.1215 55.2094 27.1873C55.1671 27.319 55.104 27.5043 55.0177 27.7307C54.8454 28.1825 54.5784 28.8034 54.1955 29.4912C53.4359 30.8558 52.1844 32.5482 50.25 33.665C48.3156 34.7819 46.2242 35.0195 44.6626 34.995C43.8755 34.9827 43.2043 34.9035 42.7268 34.8268C42.4876 34.7884 42.2956 34.7504 42.1605 34.7211C42.0928 34.7065 42.0393 34.6941 42.001 34.6849L41.9552 34.6736L41.9412 34.6701L41.9364 34.6688L41.9346 34.6684C41.9343 34.6683 41.9332 34.668 42.1878 33.7009C42.4425 32.7339 42.4422 32.7338 42.4419 32.7338L42.4443 32.7344L42.4689 32.7404C42.4927 32.7461 42.531 32.7551 42.5828 32.7662C42.6864 32.7886 42.8432 32.8198 43.044 32.8521C43.4467 32.9168 44.0208 32.9847 44.694 32.9953C46.053 33.0166 47.7427 32.8032 49.25 31.933C50.7573 31.0628 51.7869 29.7061 52.448 28.5185C52.7755 27.9302 53.0037 27.3991 53.149 27.018C53.2215 26.8279 53.2728 26.6765 53.3053 26.5756C53.3214 26.5252 53.3329 26.4875 53.3398 26.464L53.3469 26.4397L53.3475 26.4374Z"
              fill="#212121"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54 41.5C54 43.433 52.6569 45 51 45C49.3432 45 48 43.433 48 41.5C48 39.567 49.3432 38 51 38C52.6569 38 54 39.567 54 41.5ZM52 41C52 41.5523 51.5523 42 51 42C50.4477 42 50 41.5523 50 41C50 40.4477 50.4477 40 51 40C51.5523 40 52 40.4477 52 41Z"
              fill="#212121"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69 45C70.6569 45 72 43.433 72 41.5C72 39.567 70.6569 38 69 38C67.3432 38 66 39.567 66 41.5C66 43.433 67.3432 45 69 45ZM69 42C68.4477 42 68 41.5523 68 41C68 40.4477 68.4477 40 69 40C69.5523 40 70 40.4477 70 41C70 41.5523 69.5523 42 69 42Z"
              fill="#212121"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M83.4158 64.8107C88.7416 59.0955 92 51.4283 92 43C92 25.3269 77.6731 11 60 11C42.3269 11 28 25.3269 28 43C28 51.5604 31.3614 59.3357 36.8362 65.0781C36.7517 64.9894 36.6677 64.9003 36.5842 64.8107C20.7698 73.2081 10 89.8463 10 109H14C14 90.8898 24.4656 75.224 39.6788 67.7206C39.6787 67.7206 39.6788 67.7206 39.6788 67.7206C45.2053 72.2689 52.2837 75 60 75C67.732 75 74.8235 72.2577 80.355 67.6928C80.3437 67.702 80.3325 67.7113 80.3212 67.7206C95.5344 75.224 106 90.8898 106 109H110C110 89.8463 99.2301 73.2081 83.4158 64.8107ZM60 71C75.464 71 88 58.464 88 43C88 27.536 75.464 15 60 15C44.536 15 32 27.536 32 43C32 58.464 44.536 71 60 71Z"
              fill="#212121"
            />
          </svg>

          <h1 className="text-h-2-semibold ">404 Not found</h1>
          <span className="text-b-1-regular  text-bjgray-500">
            페이지를 찾을 수 없습니다.
          </span>
        </div>
        <Link
          className="mx-4 h-[64px] w-[90%] rounded-5xl bg-bjyellow-400 text-center text-b-1-medium leading-[64px] text-black"
          to="/"
        >
          홈으로
        </Link>
      </main>
    </>
  );
}

export default Error404;
