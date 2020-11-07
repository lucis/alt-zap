import React, { FC } from 'react'

type Props = { width: string }
const BugIcon: FC<Props> = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={width}
      className="mr2"
    >
      <g fill="#333">
        <path d="M59.826 499.161l-28.631-9.091 26.796-84.389 77.491-30.43 10.981 27.962-64.172 25.198zM119.726 242.272L57.991 218.03l-26.796-84.389 28.631-9.092 22.465 70.75 48.415 19.012zM21.485 365.75L0 344.755l59.099-60.474h66.117v30.039H71.745z" />
      </g>
      <g fill="#1a1a1a">
        <path d="M452.174 499.161l-22.465-70.75-64.171-25.198 10.98-27.962 77.492 30.43 26.795 84.389zM392.274 242.272l-10.98-27.961 48.416-19.012 22.464-70.75 28.632 9.092-26.796 84.389zM490.515 365.75l-50.26-51.43h-53.47v-30.039h66.116L512 344.755z" />
      </g>
      <path
        d="M232.424 82.304h-30.04V60.363c0-9.641-7.843-17.484-17.484-17.484v-30.04c26.205 0 47.524 21.319 47.524 47.524v21.941z"
        fill="#333"
      />
      <path
        d="M309.617 82.304h-30.04V60.363c0-26.205 21.319-47.524 47.524-47.524v30.04c-9.641 0-17.484 7.843-17.484 17.484v21.941z"
        fill="#1a1a1a"
      />
      <path
        d="M256 470.049c-76.853 0-139.156-62.302-139.156-139.155V191.739h278.311v139.156c.001 76.853-62.302 139.154-139.155 139.154z"
        fill="#b81500"
      />
      <path
        d="M256 470.049V191.738h139.155v139.156c.001 76.854-62.302 139.155-139.155 139.155z"
        fill="#800800"
      />
      <path
        d="M256 60.495c-54.267 0-98.26 43.992-98.26 98.26v54.615h196.521v-54.615c0-54.267-43.993-98.26-98.261-98.26z"
        fill="#4d4d4d"
      />
      <path
        d="M256 60.495V213.37h98.261v-54.615c0-54.267-43.993-98.26-98.261-98.26z"
        fill="#333"
      />
      <path fill="#b91600" d="M395.156 191.739H116.845L256 304.585z" />
      <path fill="#800800" d="M395.156 191.739H256v112.846z" />
    </svg>
  )
}

export default BugIcon
