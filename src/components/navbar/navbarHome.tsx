import Link from "next/link";
import PopupAlert from "../common/popup";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="md:px-20  py-3 bg-white drop-shadow-md px-5">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link href={"/"}>
            <svg
              className="md:w-28 w-20 h-auto"
              viewBox="0 0 709 166"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2286_1143)">
                <path
                  d="M483.207 62.9106V52.2858H502.371C502.403 52.6941 502.446 53.0486 502.446 53.3924C502.446 79.2614 502.542 105.13 502.36 130.989C502.296 140.561 499.152 149.176 492.179 156.009C486.811 161.262 480.277 164.26 472.909 165.345C463.915 166.666 455.039 166.118 446.516 162.756C436.838 158.942 430.037 152.367 427.502 141.925C427.192 140.625 427.01 139.304 426.764 137.918C427.181 137.864 427.481 137.8 427.78 137.8C433.437 137.8 439.095 137.778 444.752 137.821C445.19 137.821 445.907 138.165 446.035 138.53C447.896 143.504 451.66 146.416 456.44 148.005C461.135 149.563 466.011 149.714 470.77 148.263C478.138 146.018 482.191 140.754 482.854 133.202C483.303 128.067 482.94 122.856 482.94 117.635C482.758 117.839 482.501 118.108 482.266 118.387C475.401 126.541 466.61 130.151 456.055 129.581C441.009 128.776 428.251 117.753 424.743 101.413C422.615 91.5083 422.861 81.6248 426.871 72.1925C432.047 59.9993 441.158 52.6081 454.43 51.19C464.471 50.1158 473.497 52.7263 480.78 60.1389C481.55 60.9232 482.234 61.7933 483.207 62.9213V62.9106ZM463.07 112.715C470.353 112.736 476.801 109.041 480.277 102.617C483.592 96.5145 483.87 89.9828 482.362 83.3437C480.459 74.9534 473.112 68.5721 464.888 67.9598C455.938 67.2937 448.216 71.9884 444.837 80.2927C442.805 85.2774 442.698 90.4555 443.597 95.7088C445.276 105.463 453.51 112.672 463.06 112.704L463.07 112.715Z"
                  fill="#212121"
                />
                <path
                  d="M42.3694 53.2097C54.1648 53.2097 65.971 53.2097 77.7664 53.2097C85.3164 53.2097 90.4281 58.13 90.4816 65.693C90.5671 76.0277 90.5564 86.3625 90.4816 96.6972C90.4388 102.993 86.7173 107.666 80.9319 108.901C79.9801 109.105 78.9856 109.137 78.0124 109.137C54.2825 109.148 30.5525 109.137 6.8119 109.17C5.73181 109.17 5.26128 108.837 4.89768 107.827C0.737725 96.3641 -0.748738 84.5254 0.352742 72.3751C0.908828 66.2624 2.22419 60.3001 4.13841 54.4559C4.44853 53.489 4.87629 53.1775 5.90292 53.1775C18.062 53.2205 30.2103 53.199 42.3694 53.199V53.2097Z"
                  fill="#212121"
                />
                <path
                  d="M250.442 129.409C222.456 129.259 201.56 108.063 201.464 80.0778C201.367 53.1023 222.264 30.8429 250.849 31.0255C279.583 31.1974 299.848 54.0154 299.378 81.1736C298.907 108.428 277.733 129.56 250.442 129.42V129.409ZM250.731 112.167C251.33 112.135 252.089 112.113 252.838 112.06C263.906 111.308 271.916 105.936 276.482 95.784C280.3 87.3186 280.546 78.4664 278.257 69.5605C276.429 62.4272 272.6 56.5723 266.28 52.6081C260.388 48.9233 253.896 47.8705 247.074 48.558C235.759 49.6968 227.91 55.5517 223.654 66.155C221.023 72.7082 220.724 79.5514 221.643 86.4699C222.403 92.1959 224.445 97.4384 228.038 102.004C233.792 109.299 241.577 112.103 250.72 112.167H250.731Z"
                  fill="#212121"
                />
                <path
                  d="M689.708 62.2984V26.7285H709V128.314H689.772V117.485C688.232 119.172 686.97 120.772 685.484 122.126C679.046 128.013 671.293 130.033 662.791 129.581C646.932 128.754 634.014 116.733 631.041 99.6301C629.351 89.9185 629.907 80.3895 633.907 71.2365C639.863 57.6252 653.445 49.5465 668.138 51.1365C676.426 52.0389 683.58 55.4444 689.077 61.9654C689.184 62.0943 689.334 62.2017 689.473 62.3092C689.494 62.3306 689.548 62.3092 689.719 62.2877L689.708 62.2984ZM689.836 90.3912C689.847 86.3626 689.227 82.4629 687.366 78.8425C680.907 66.2303 664.256 64.0495 654.995 74.6098C651.562 78.5203 650.023 83.2149 649.809 88.3715C649.563 94.1298 650.514 99.5764 653.937 104.389C661.069 114.412 675.143 115.616 683.762 106.903C688.275 102.337 689.793 96.6329 689.836 90.3912Z"
                  fill="#212121"
                />
                <path
                  d="M132.028 53.2097C139.193 53.2097 146.368 53.2312 153.533 53.1882C154.464 53.1882 154.827 53.489 155.105 54.3485C158.517 64.608 159.832 75.1253 159.062 85.922C158.527 93.4206 156.923 100.661 154.432 107.73C154.047 108.815 153.523 109.191 152.336 109.191C138.882 109.137 125.44 109.03 111.987 109.213C104.32 109.309 98.9833 103.422 99.1223 96.2352C99.3148 86.1691 99.1651 76.1029 99.1651 66.0261C99.1651 58.2589 104.213 53.2205 111.966 53.2205C118.649 53.2205 125.323 53.2205 132.006 53.2205L132.028 53.2097Z"
                  fill="#212121"
                />
                <path
                  d="M8.19136 44.3898C9.81684 41.6181 11.1643 39.0506 12.747 36.6549C24.8205 18.3274 41.5031 6.64985 62.859 1.81552C71.6601 -0.182668 80.5682 -0.461984 89.5191 0.644539C89.8827 0.687511 90.4601 1.2354 90.4601 1.55769C90.4601 12.2469 90.5991 22.9469 90.3104 33.6254C90.15 39.7166 84.7709 44.3791 78.6219 44.3898C66.5163 44.4113 54.4 44.3898 42.2945 44.3898C31.5256 44.3898 20.7461 44.3898 9.97725 44.3898H8.18066H8.19136Z"
                  fill="#212121"
                />
                <path
                  d="M9.75287 117.936H11.3035C33.4721 117.936 55.6407 117.936 77.82 117.936C85.2844 117.936 90.4069 122.846 90.4817 130.333C90.5887 139.637 90.5031 148.94 90.5245 158.254C90.5245 159.082 90.2999 159.436 89.423 159.533C66.2492 162.014 45.6632 155.88 27.8043 140.797C20.5752 134.695 14.747 127.411 10.1379 119.129C9.98814 118.86 9.83842 118.581 9.71009 118.301C9.67801 118.237 9.72079 118.129 9.75287 117.936Z"
                  fill="#212121"
                />
                <path
                  d="M355.104 68.0567H341.908V128.303H322.531V68.0782H313.933V52.243H322.605C322.605 49.7292 322.509 47.3765 322.627 45.0345C322.819 41.1134 323.696 37.3426 325.514 33.8296C327.856 29.3176 331.492 26.2129 336.133 24.2899C341.919 21.8942 347.993 21.3786 354.27 21.5397V37.6756C352.72 37.8045 351.169 37.8475 349.65 38.0838C344.924 38.8144 342.871 40.8233 342.175 45.6146C341.865 47.7095 341.929 49.8689 341.812 52.1678H355.115V68.0459L355.104 68.0567Z"
                  fill="#212121"
                />
                <path
                  d="M367.937 68.0243V52.1784H376.514C376.514 50.5992 376.514 49.1812 376.514 47.7631C376.514 43.3907 377.155 39.1258 378.93 35.0864C381.379 29.5216 385.636 25.9549 391.228 23.8815C396.693 21.8511 402.382 21.4106 408.253 21.5503V37.6862C406.724 37.8151 405.173 37.8688 403.655 38.1052C398.821 38.8464 396.608 41.1347 396.116 46.0227C395.923 47.9994 396.084 50.0191 396.084 52.157H409.066V68.0028H395.955V128.292H376.514V126.649C376.514 107.676 376.503 88.6937 376.546 69.7217C376.546 68.4218 376.31 67.8954 374.888 67.9813C372.632 68.121 370.354 68.0135 367.948 68.0135L367.937 68.0243Z"
                  fill="#212121"
                />
                <path
                  d="M547.179 128.314H528.133V52.2645H547.147V63.3942C552.868 55.3477 560.493 51.2117 570.406 51.1042C570.438 51.6092 570.481 52.0389 570.481 52.4686C570.481 58.2913 570.449 64.1032 570.513 69.9259C570.524 71.1613 570.107 71.3654 568.984 71.3977C565.786 71.4944 562.546 71.4299 559.423 71.9885C552.258 73.2777 548.526 77.4352 547.596 84.7297C547.329 86.8568 547.189 89.0054 547.189 91.1539C547.147 102.928 547.168 114.692 547.168 126.466V128.314H547.179Z"
                  fill="#212121"
                />
                <path
                  d="M609.257 128.324H590.254V52.2859H609.257V128.324Z"
                  fill="#212121"
                />
                <path
                  d="M150.978 44.3899C150.218 44.3899 149.78 44.3899 149.342 44.3899C136.744 44.3899 124.147 44.261 111.549 44.4436C105.197 44.5296 99.1227 39.4697 99.1761 31.9711C99.251 22.6677 99.1975 13.3643 99.1975 4.05016V2.44946C111.143 5.50046 121.698 10.9901 131.023 18.8754C139.353 25.9228 145.952 34.3668 150.988 44.3899H150.978Z"
                  fill="#212121"
                />
                <path
                  d="M99.1865 157.739V155.203C99.1865 146.974 99.1865 138.734 99.1865 130.505C99.1865 123.103 104.341 117.936 111.709 117.936C123.868 117.936 136.027 117.936 148.176 117.936H149.908C138.38 138.358 121.644 151.518 99.1865 157.739Z"
                  fill="#212121"
                />
                <path
                  d="M588.169 31.3586C588.147 25.3747 593.559 20.1107 600.745 20.6156C607.29 21.0776 612.091 26.2986 611.685 32.5618C611.268 38.9753 605.782 43.6163 599.141 43.1543C592.34 42.6816 587.752 37.7399 588.169 31.3586Z"
                  fill="#212121"
                />
              </g>
              <defs>
                <clipPath id="clip0_2286_1143">
                  <rect width="709" height="166" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <Link
          href={"tel:+919035061837"}
          //   onClick={() => setShowAlert(true)}
          className="px-4 rounded-full flex gap-1 py-1 md:text-base text-sm items-center justify-center cursor-pointer"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8472 15.3554L16.4306 13.3764L16.4184 13.3707C16.1892 13.2727 15.939 13.2333 15.6907 13.2562C15.4424 13.2792 15.2037 13.3636 14.9963 13.502C14.9718 13.5181 14.9484 13.5357 14.9259 13.5545L12.6441 15.4998C11.1984 14.7976 9.70595 13.3164 9.00376 11.8895L10.9519 9.57293C10.9706 9.5495 10.9884 9.52606 11.0053 9.50075C11.1407 9.29384 11.2229 9.05667 11.2445 8.81035C11.2661 8.56402 11.2264 8.31618 11.1291 8.08887V8.07762L9.14438 3.65356C9.0157 3.35662 8.79444 3.10926 8.51362 2.94841C8.2328 2.78756 7.9075 2.72184 7.58626 2.76106C6.31592 2.92822 5.14986 3.55209 4.30588 4.51615C3.4619 5.48021 2.99771 6.71852 3.00001 7.99981C3.00001 15.4436 9.05626 21.4998 16.5 21.4998C17.7813 21.5021 19.0196 21.0379 19.9837 20.1939C20.9477 19.35 21.5716 18.1839 21.7388 16.9136C21.7781 16.5924 21.7125 16.2672 21.5518 15.9864C21.3911 15.7056 21.144 15.4843 20.8472 15.3554ZM16.5 19.9998C13.3185 19.9963 10.2682 18.7309 8.01856 16.4813C5.76888 14.2316 4.50348 11.1813 4.50001 7.99981C4.49648 7.08433 4.82631 6.19887 5.42789 5.50878C6.02947 4.8187 6.86167 4.37118 7.76907 4.24981C7.7687 4.25355 7.7687 4.25732 7.76907 4.26106L9.73782 8.66731L7.80001 10.9867C7.78034 11.0093 7.76247 11.0335 7.74657 11.0589C7.60549 11.2754 7.52273 11.5246 7.5063 11.7825C7.48988 12.0404 7.54035 12.2981 7.65282 12.5307C8.5022 14.2679 10.2525 16.0051 12.0084 16.8536C12.2428 16.965 12.502 17.0137 12.7608 16.995C13.0196 16.9762 13.2692 16.8907 13.485 16.7467C13.5091 16.7305 13.5322 16.7129 13.5544 16.6942L15.8334 14.7498L20.2397 16.7232C20.2397 16.7232 20.2472 16.7232 20.25 16.7232C20.1301 17.6319 19.6833 18.4658 18.9931 19.0689C18.3028 19.6719 17.4166 20.0029 16.5 19.9998Z"
              fill="#212121"
            />
          </svg>
          <span className="font-medium">(+91) 9035061837</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
