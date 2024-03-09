import { string } from 'prop-types';

function Loading({ children = '로딩중', className, ...restProps }) {
  const classNames =
    `flex flex-col h-svh justify-center items-center ${className}`.trim();
  return (
    <figure
      role="alert"
      aria-live="polite"
      className={classNames}
      {...restProps}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: 'auto',
            background: '#fff',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(83,50)">
            <g transform="rotate(0)">
              <circle cx={0} cy={0} r={5} fill="#fee440" fillOpacity={1}>
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9893617021276596s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9893617021276596s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(82.92630699456404,52.20415691358901)">
            <g transform="rotate(3.829787234042553)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9893617021276596"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9787234042553191s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9787234042553191s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(82.70555710910774,54.398469527334704)">
            <g transform="rotate(7.659574468085106)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9787234042553191"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9680851063829787s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9680851063829787s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(82.33873626620738,56.57313750842659)">
            <g transform="rotate(11.48936170212766)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9680851063829787"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9574468085106383s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9574468085106383s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(81.82748277679443,58.718448261752435)">
            <g transform="rotate(15.319148936170212)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9574468085106383"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9468085106382979s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9468085106382979s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(81.17408002306132,60.82482030870578)">
            <g transform="rotate(19.148936170212764)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9468085106382979"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9361702127659575s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9361702127659575s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(80.38144626032215,62.882846080395325)">
            <g transform="rotate(22.97872340425532)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9361702127659575"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.925531914893617s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.925531914893617s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(79.45312158337609,64.88333393413136)">
            <g transform="rotate(26.80851063829787)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.925531914893617"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9148936170212766s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9148936170212766s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(78.3932521155846,66.81734920553328)">
            <g transform="rotate(30.638297872340424)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9148936170212766"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.9042553191489362s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.9042553191489362s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(77.20657149127808,68.67625411290965)">
            <g transform="rotate(34.46808510638298)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.9042553191489362"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8936170212765957s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8936170212765957s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(75.89837971419581,70.45174633568809)">
            <g transform="rotate(38.29787234042553)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8936170212765957"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8829787234042553s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8829787234042553s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(74.4745194863826,72.13589609459437)">
            <g transform="rotate(42.12765957446809)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8829787234042553"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8723404255319149s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8723404255319149s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(72.9413501132632,73.72118156797167)">
            <g transform="rotate(45.95744680851064)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8723404255319149"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8617021276595744s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8617021276595744s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(71.30571910144047,75.20052248606196)">
            <g transform="rotate(49.787234042553195)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8617021276595744"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.851063829787234s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.851063829787234s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(69.57493157606872,76.56731175320957)">
            <g transform="rotate(53.61702127659574)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.851063829787234"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8404255319148937s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8404255319148937s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(67.7567176543913,77.8154449567543)">
            <g transform="rotate(57.4468085106383)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8404255319148937"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8297872340425532s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8297872340425532s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(65.85919792116057,78.93934763082015)">
            <g transform="rotate(61.27659574468085)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8297872340425532"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8191489361702128s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8191489361702128s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(63.89084716013505,79.93400015323324)">
            <g transform="rotate(65.1063829787234)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8191489361702128"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.8085106382978723s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.8085106382978723s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(61.86045650363792,80.79496016437288)">
            <g transform="rotate(68.93617021276596)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.8085106382978723"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7978723404255319s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7978723404255319s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(59.777094169225926,81.51838240782811)">
            <g transform="rotate(72.7659574468085)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7978723404255319"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7872340425531915s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7872340425531915s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(57.65006495882844,82.10103590424623)">
            <g transform="rotate(76.59574468085106)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7872340425531915"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.776595744680851s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.776595744680851s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(55.48886870124329,82.54031838167094)">
            <g transform="rotate(80.42553191489363)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.776595744680851"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7659574468085106s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7659574468085106s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(53.30315782359525,82.83426789792063)">
            <g transform="rotate(84.25531914893618)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7659574468085106"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7553191489361702s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7553191489361702s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(51.10269424125326,82.9815716030984)">
            <g transform="rotate(88.08510638297872)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7553191489361702"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7446808510638298s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7446808510638298s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(48.89730575874674,82.9815716030984)">
            <g transform="rotate(91.91489361702128)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7446808510638298"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7340425531914894s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7340425531914894s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(46.69684217640476,82.83426789792063)">
            <g transform="rotate(95.74468085106383)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7340425531914894"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.723404255319149s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.723404255319149s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(44.51113129875671,82.54031838167094)">
            <g transform="rotate(99.57446808510639)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.723404255319149"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7127659574468085s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7127659574468085s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(42.34993504117158,82.10103590424623)">
            <g transform="rotate(103.40425531914894)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7127659574468085"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.7021276595744681s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.7021276595744681s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(40.22290583077408,81.51838240782811)">
            <g transform="rotate(107.23404255319149)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.7021276595744681"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6914893617021277s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6914893617021277s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(38.13954349636207,80.79496016437288)">
            <g transform="rotate(111.06382978723404)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6914893617021277"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6808510638297872s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6808510638297872s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(36.10915283986495,79.93400015323324)">
            <g transform="rotate(114.8936170212766)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6808510638297872"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6702127659574468s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6702127659574468s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(34.140802078839435,78.93934763082017)">
            <g transform="rotate(118.72340425531915)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6702127659574468"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6595744680851063s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6595744680851063s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(32.243282345608705,77.8154449567543)">
            <g transform="rotate(122.5531914893617)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6595744680851063"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.648936170212766s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.648936170212766s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(30.42506842393128,76.56731175320958)">
            <g transform="rotate(126.38297872340426)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.648936170212766"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6382978723404256s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6382978723404256s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(28.69428089855952,75.20052248606196)">
            <g transform="rotate(130.2127659574468)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6382978723404256"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6276595744680851s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6276595744680851s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(27.058649886736806,73.72118156797167)">
            <g transform="rotate(134.04255319148936)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6276595744680851"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6170212765957447s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6170212765957447s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(25.5254805136174,72.13589609459437)">
            <g transform="rotate(137.87234042553192)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6170212765957447"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.6063829787234043s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.6063829787234043s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(24.101620285804188,70.45174633568809)">
            <g transform="rotate(141.70212765957447)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.6063829787234043"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5957446808510638s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5957446808510638s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(22.793428508721917,68.67625411290965)">
            <g transform="rotate(145.531914893617)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5957446808510638"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5851063829787234s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5851063829787234s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(21.60674788441541,66.81734920553329)">
            <g transform="rotate(149.36170212765958)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5851063829787234"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.574468085106383s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.574468085106383s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(20.546878416623922,64.88333393413137)">
            <g transform="rotate(153.1914893617021)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.574468085106383"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5638297872340425s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5638297872340425s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(19.618553739677854,62.88284608039534)">
            <g transform="rotate(157.02127659574467)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5638297872340425"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5531914893617021s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5531914893617021s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(18.825919976938675,60.824820308705775)">
            <g transform="rotate(160.85106382978725)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5531914893617021"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5425531914893617s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5425531914893617s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(18.172517223205578,58.71844826175244)">
            <g transform="rotate(164.68085106382978)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5425531914893617"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5319148936170213s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5319148936170213s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17.661263733792637,56.5731375084266)">
            <g transform="rotate(168.51063829787236)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5319148936170213"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5212765957446809s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5212765957446809s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17.294442890892256,54.39846952733471)">
            <g transform="rotate(172.3404255319149)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5212765957446809"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5106382978723404s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5106382978723404s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17.07369300543595,52.20415691358902)">
            <g transform="rotate(176.17021276595744)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.5106382978723404"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.5s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17,49.99999999999999)">
            <g transform="rotate(180.00000000000003)">
              <circle cx={0} cy={0} r={5} fill="#fee440" fillOpacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.48936170212765956s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.48936170212765956s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17.07369300543595,47.79584308641099)">
            <g transform="rotate(183.82978723404256)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.48936170212765956"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.4787234042553192s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.4787234042553192s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17.294442890892256,45.60153047266532)">
            <g transform="rotate(187.65957446808508)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.4787234042553192"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.46808510638297873s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.46808510638297873s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(17.66126373379263,43.42686249157341)">
            <g transform="rotate(191.48936170212767)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.46808510638297873"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.4574468085106383s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.4574468085106383s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(18.172517223205574,41.281551738247565)">
            <g transform="rotate(195.31914893617022)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.4574468085106383"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.44680851063829785s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.44680851063829785s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(18.82591997693868,39.17517969129422)">
            <g transform="rotate(199.14893617021278)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.44680851063829785"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.43617021276595747s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.43617021276595747s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(19.61855373967785,37.11715391960467)">
            <g transform="rotate(202.9787234042553)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.43617021276595747"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.425531914893617s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.425531914893617s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(20.546878416623912,35.11666606586865)">
            <g transform="rotate(206.8085106382979)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.425531914893617"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.4148936170212766s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.4148936170212766s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(21.6067478844154,33.182650794466724)">
            <g transform="rotate(210.63829787234044)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.4148936170212766"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.40425531914893614s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.40425531914893614s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(22.793428508721902,31.323745887090368)">
            <g transform="rotate(214.46808510638297)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.40425531914893614"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.39361702127659576s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.39361702127659576s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(24.101620285804184,29.54825366431193)">
            <g transform="rotate(218.29787234042553)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.39361702127659576"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.3829787234042553s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.3829787234042553s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(25.525480513617403,27.86410390540562)">
            <g transform="rotate(222.12765957446808)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.3829787234042553"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.3723404255319149s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.3723404255319149s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(27.058649886736802,26.278818432028338)">
            <g transform="rotate(225.9574468085106)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.3723404255319149"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.3617021276595745s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.3617021276595745s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(28.694280898559516,24.799477513938047)">
            <g transform="rotate(229.7872340425532)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.3617021276595745"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.35106382978723405s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.35106382978723405s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(30.425068423931286,23.43268824679042)">
            <g transform="rotate(233.61702127659578)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.35106382978723405"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.3404255319148936s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.3404255319148936s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(32.2432823456087,22.184555043245698)">
            <g transform="rotate(237.4468085106383)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.3404255319148936"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.32978723404255317s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.32978723404255317s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(34.14080207883944,21.060652369179838)">
            <g transform="rotate(241.27659574468086)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.32978723404255317"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.3191489361702128s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.3191489361702128s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(36.10915283986494,20.065999846766758)">
            <g transform="rotate(245.1063829787234)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.3191489361702128"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.30851063829787234s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.30851063829787234s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(38.13954349636206,19.20503983562712)">
            <g transform="rotate(248.93617021276592)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.30851063829787234"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.2978723404255319s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.2978723404255319s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(40.222905830774074,18.48161759217189)">
            <g transform="rotate(252.76595744680853)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.2978723404255319"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.2872340425531915s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.2872340425531915s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(42.34993504117155,17.898964095753776)">
            <g transform="rotate(256.59574468085106)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.2872340425531915"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.2765957446808511s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.2765957446808511s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(44.51113129875671,17.459681618329057)">
            <g transform="rotate(260.4255319148936)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.2765957446808511"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.26595744680851063s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.26595744680851063s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(46.69684217640474,17.165732102079367)">
            <g transform="rotate(264.25531914893617)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.26595744680851063"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.2553191489361702s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.2553191489361702s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(48.89730575874674,17.018428396901598)">
            <g transform="rotate(268.0851063829787)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.2553191489361702"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.24468085106382978s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.24468085106382978s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(51.102694241253246,17.018428396901598)">
            <g transform="rotate(271.9148936170213)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.24468085106382978"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.23404255319148937s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.23404255319148937s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(53.30315782359525,17.165732102079367)">
            <g transform="rotate(275.74468085106383)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.23404255319148937"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.22340425531914893s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.22340425531914893s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(55.48886870124328,17.459681618329057)">
            <g transform="rotate(279.5744680851064)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.22340425531914893"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.2127659574468085s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.2127659574468085s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(57.65006495882844,17.898964095753776)">
            <g transform="rotate(283.40425531914894)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.2127659574468085"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.20212765957446807s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.20212765957446807s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(59.77709416922591,18.481617592171887)">
            <g transform="rotate(287.2340425531915)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.20212765957446807"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.19148936170212766s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.19148936170212766s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(61.860456503637906,19.205039835627105)">
            <g transform="rotate(291.063829787234)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.19148936170212766"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.18085106382978725s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.18085106382978725s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(63.890847160135046,20.065999846766754)">
            <g transform="rotate(294.89361702127655)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.18085106382978725"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.1702127659574468s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.1702127659574468s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(65.85919792116054,21.06065236917983)">
            <g transform="rotate(298.72340425531917)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.1702127659574468"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.1595744680851064s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.1595744680851064s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(67.7567176543913,22.184555043245695)">
            <g transform="rotate(302.5531914893617)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.1595744680851064"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.14893617021276595s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.14893617021276595s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(69.5749315760687,23.432688246790413)">
            <g transform="rotate(306.3829787234042)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.14893617021276595"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.13829787234042554s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.13829787234042554s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(71.30571910144047,24.79947751393804)">
            <g transform="rotate(310.21276595744683)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.13829787234042554"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.1276595744680851s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.1276595744680851s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(72.94135011326318,26.27881843202832)">
            <g transform="rotate(314.04255319148933)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.1276595744680851"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.11702127659574468s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.11702127659574468s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(74.4745194863826,27.864103905405624)">
            <g transform="rotate(317.87234042553195)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.11702127659574468"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.10638297872340426s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.10638297872340426s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(75.89837971419581,29.54825366431193)">
            <g transform="rotate(321.7021276595745)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.10638297872340426"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.09574468085106383s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.09574468085106383s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(77.20657149127808,31.323745887090357)">
            <g transform="rotate(325.53191489361706)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.09574468085106383"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.0851063829787234s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.0851063829787234s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(78.39325211558459,33.18265079446671)">
            <g transform="rotate(329.36170212765956)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.0851063829787234"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.07446808510638298s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.07446808510638298s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(79.45312158337606,35.116666065868614)">
            <g transform="rotate(333.19148936170205)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.07446808510638298"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.06382978723404255s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.06382978723404255s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(80.38144626032215,37.11715391960466)">
            <g transform="rotate(337.0212765957447)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.06382978723404255"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.05319148936170213s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.05319148936170213s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(81.17408002306132,39.17517969129422)">
            <g transform="rotate(340.8510638297873)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.05319148936170213"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.0425531914893617s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.0425531914893617s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(81.82748277679443,41.28155173824755)">
            <g transform="rotate(344.6808510638298)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.0425531914893617"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.031914893617021274s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.031914893617021274s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(82.33873626620738,43.42686249157342)">
            <g transform="rotate(348.5106382978724)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.031914893617021274"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.02127659574468085s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.02127659574468085s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(82.70555710910774,45.60153047266529)">
            <g transform="rotate(352.3404255319149)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.02127659574468085"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.010638297872340425s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="-0.010638297872340425s"
                />
              </circle>
            </g>
          </g>
          <g transform="translate(82.92630699456404,47.79584308641097)">
            <g transform="rotate(356.17021276595744)">
              <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fee440"
                fillOpacity="0.010638297872340425"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="0s"
                  values="1 1.34;1 1"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  keyTimes="0;1"
                  dur="1s"
                  repeatCount="indefinite"
                  values="1;0"
                  begin="0s"
                />
              </circle>
            </g>
          </g>
        </svg>
      </div>

      <figcaption className=" text-xs text-slate-500/80">{children}</figcaption>
    </figure>
  );
}

export default Loading;

Loading.propTypes = {
  children: string,
  className: string,
};
