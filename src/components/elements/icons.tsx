import { FaChevronDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgFormatSlash } from "react-icons/cg";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { MdMonitor } from "react-icons/md";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";
import { SlDrawer } from "react-icons/sl";
// Import other icons as needed

interface proptype {
  customstyles?: string;
}
export const ChevronDownIcon: React.FC<proptype> = ({ customstyles }) => (
  <FaChevronDown className={customstyles} />
);

export const FaGithubIcon: React.FC<proptype> = ({ customstyles }) => (
  <FaGithub className={customstyles} />
);

export const FaXTwitterIcon: React.FC<proptype> = ({ customstyles }) => (
  <FaXTwitter className={customstyles} />
);

export const FaDiscordIcon: React.FC<proptype> = ({ customstyles }) => (
  <FaDiscord className={customstyles} />
);

export const FaMagnifyingGlassIcon: React.FC<proptype> = ({ customstyles }) => (
  <FaMagnifyingGlass className={customstyles} />
);

export const CgFormatSlashIcon: React.FC<proptype> = ({ customstyles }) => (
  <CgFormatSlash className={customstyles} />
);

export const FaAppleIcon: React.FC<proptype> = ({ customstyles }) => (
  <FaApple className={customstyles} />
);

export const IoLogoGooglePlaystoreIcon: React.FC<proptype> = ({ customstyles }) => (
  <IoLogoGooglePlaystore className={customstyles} />
);

export const IoMdCheckmarkIcon: React.FC<proptype> = ({ customstyles }) => (
  <IoMdCheckmark className={customstyles} />
);

export const MdMonitorIcon: React.FC<proptype> = ({ customstyles }) => (
  <MdMonitor className={customstyles} />
);

export const CgArrowsExchangeAltVIcon: React.FC<proptype> = ({ customstyles }) => (
  <CgArrowsExchangeAltV className={customstyles} />
);

export const CiWarningIcon: React.FC<proptype> = ({ customstyles }) => (
  <CiWarning className={customstyles} />
);

export const ClDrawerIcon: React.FC<proptype> = ({ customstyles }) => (
  <SlDrawer className={customstyles} />
);

export const cryptoicons = [
  {
    name: "Etherium",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 10 16"
      >
        <path fill="currentColor" d="m5 1l-.09.31v8.88l.09.09l4-2.44z" />
        <path
          fill="currentColor"
          d="M5 1L1 7.84l4 2.44zm0 10.62l-.05.06v3.17L5 15l4-5.81l-4 2.44Z"
        />
        <path
          fill="currentColor"
          d="M5 15v-3.38L1 9.18l4 5.81Zm0-4.72l4-2.44l-4-1.87zM1 7.84l4 2.44V5.97z"
        />
      </svg>
    ),
  },
  {
    name: "Arbitrum",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.04"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 25"
      >
        <path
          fill="currentColor"
          d="m13.149 13.766l-.75 2.045a.24.24 0 0 0 0 .18l1.286 3.522l1.495-.857l-1.791-4.89a.129.129 0 0 0-.24 0m1.5-3.445a.128.128 0 0 0-.24 0l-.75 2.044a.24.24 0 0 0 0 .18l2.113 5.768l1.491-.857l-2.614-7.14z"
        />
        <path
          fill="currentColor"
          d="M12 5.74q.057 0 .107.03l5.786 3.363a.21.21 0 0 1 .107.185v6.544a.21.21 0 0 1-.107.184l-5.786 3.377a.22.22 0 0 1-.214 0l-5.786-3.37A.21.21 0 0 1 6 15.865V9.318c0-.078.043-.146.107-.185l5.786-3.364A.2.2 0 0 1 12 5.735zm0-.862c-.201 0-.407.055-.587.158L5.73 8.306a1.17 1.17 0 0 0-.587 1.012v6.544c0 .416.223.806.587 1.016l5.683 3.27a1.17 1.17 0 0 0 1.174 0l5.683-3.27a1.16 1.16 0 0 0 .587-1.016V9.318c0-.416-.223-.806-.587-1.012l-5.683-3.27A1.2 1.2 0 0 0 12 4.878"
        />
        <path
          fill="currentColor"
          d="m8.242 18.322l.522-1.427l1.05.87l-.98.9z"
        />
        <path
          fill="currentColor"
          d="M11.525 8.735H10.08a.26.26 0 0 0-.24.175l-3.085 8.542l1.487.87l3.403-9.407a.13.13 0 0 0-.016-.122a.13.13 0 0 0-.109-.058zm2.52 0h-1.44a.26.26 0 0 0-.24.171l-3.532 9.746l1.492.87l3.84-10.61a.13.13 0 0 0-.12-.177"
        />
      </svg>
    ),
  },
  {
    name: "opitmium",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.04"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 25"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M4.731 16.245q.885.633 2.273.633q1.677 0 2.68-.758q1.002-.768 1.41-2.318q.245-.95.42-1.957q.057-.36.058-.6q0-.79-.408-1.356a2.43 2.43 0 0 0-1.119-.86q-.711-.294-1.608-.294q-3.297 0-4.09 3.11q-.28 1.143-.431 1.957a4 4 0 0 0-.059.61q0 1.188.874 1.833m4.207-2.51c-.223.865-.838 1.43-1.771 1.43c-.923 0-1.238-.625-1.072-1.43q.21-1.097.42-1.856c.24-.935.806-1.43 1.77-1.43c.92 0 1.22.616 1.061 1.43q-.14.793-.408 1.855m3.531 3.062q.069.08.193.08h1.542a.34.34 0 0 0 .215-.08a.33.33 0 0 0 .125-.21l.487-2.28h1.568c.99 0 1.764-.48 2.331-.907q.862-.64 1.145-1.978a2.8 2.8 0 0 0 .068-.605q0-1.011-.77-1.547q-.76-.535-2.018-.535H14.34a.34.34 0 0 0-.216.082a.34.34 0 0 0-.124.21l-1.565 7.56a.28.28 0 0 0 .034.21m5.51-5.398c-.142.623-.685 1.193-1.323 1.193h-1.303l.449-2.143h1.36c.463 0 .85.092.85.601q0 .15-.033.35"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "polygon",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m15.88 14.86l3.794-2.165a.64.64 0 0 0 .326-.558v-4.33a.64.64 0 0 0-.326-.556L15.88 5.086a.66.66 0 0 0-.65 0L11.432 7.25a.64.64 0 0 0-.325.557v7.737l-2.662 1.517l-2.661-1.517v-3.036l2.661-1.517l1.755 1.001V9.958l-1.43-.816a.66.66 0 0 0-.65 0l-3.796 2.165a.64.64 0 0 0-.325.557v4.33c0 .229.124.442.325.557l3.796 2.165c.2.114.45.114.65 0l3.796-2.165a.64.64 0 0 0 .325-.557V8.455l.048-.026l2.613-1.49l2.661 1.516v3.036l-2.661 1.517l-1.753-.999v2.037l1.427.814a.66.66 0 0 0 .651 0z"
        />
      </svg>
    ),
  },
  {
    name: "base",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.986 20C16.412 20 20 16.418 20 12s-3.588-8-8.014-8A8.01 8.01 0 0 0 4 11.328h10.593v1.345H4C4.342 16.776 7.787 20 11.986 20"
        />
      </svg>
    ),
  },
  {
    name: "bnbchain",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M14.866 19.345a1 1 0 0 1-.366 1.366l-1.25.722a2.5 2.5 0 0 1-2.5 0L9.5 20.71a1 1 0 0 1 1-1.732l1.25.722a.5.5 0 0 0 .5 0l1.25-.722a1 1 0 0 1 1.366.366Zm4.928-8.226a1 1 0 0 1 1 1v3.515a2.5 2.5 0 0 1-1.25 2.165L16.5 19.557a1 1 0 1 1-1-1.733l3.044-1.757a.5.5 0 0 0 .25-.433v-3.515a1 1 0 0 1 1-1m-15.588 0a1 1 0 0 1 1 1v3.515a.5.5 0 0 0 .25.433L8.5 17.824a1 1 0 0 1-1 1.732L4.456 17.8a2.5 2.5 0 0 1-1.25-2.165V12.12a1 1 0 0 1 1-1Zm11.419-3.654l.119.057l1.513.858a1 1 0 0 1 .5.758l.006.12l-.013 1.74a1 1 0 0 1-.402.793l-.098.065l-2.75 1.588v3.176a1 1 0 0 1-.396.797l-.098.066l-1.5.88a1 1 0 0 1-.892.06l-.12-.06l-1.5-.88a1 1 0 0 1-.487-.746L9.5 16.62v-3.177l-2.75-1.587a1 1 0 0 1-.492-.742l-.008-.117l-.013-1.74a1 1 0 0 1 .406-.811l.1-.066l1.514-.858a1 1 0 0 1 .875-.055l.118.059L12 9.113l2.75-1.587a1 1 0 0 1 .875-.061m2.004 5.805v1.403a1 1 0 0 1-.5.866l-1.215.701a.3.3 0 0 1-.45-.26v-1.403a1 1 0 0 1 .5-.866l1.215-.701a.3.3 0 0 1 .45.26m-10.87-.287l.062.027l1.215.701a1 1 0 0 1 .493.749l.007.117v1.403a.3.3 0 0 1-.389.287l-.061-.027l-1.215-.701a1 1 0 0 1-.493-.748l-.007-.118V13.27a.3.3 0 0 1 .326-.3l.063.013Zm11.49-7.53l1.295.748a2.5 2.5 0 0 1 1.25 2.165v1.443a1 1 0 1 1-2 0V8.366a.5.5 0 0 0-.25-.433l-1.295-.748a1 1 0 0 1 1-1.732m-11.177.392a1 1 0 0 1-.366 1.366l-1.25.722a.5.5 0 0 0-.25.433v1.443a1 1 0 1 1-2 0V8.366A2.5 2.5 0 0 1 4.456 6.2l1.25-.722a1 1 0 0 1 1.366.366ZM12.5 5.79l1.215.701a.3.3 0 0 1 0 .52L12.5 7.71a1 1 0 0 1-1 0l-1.215-.701a.3.3 0 0 1 0-.52L11.5 5.79a1 1 0 0 1 1 0m.75-3.222l3.044 1.757a1 1 0 1 1-1 1.733L12.25 4.299a.5.5 0 0 0-.5 0L8.706 6.056a1 1 0 1 1-1-1.732l3.044-1.757a2.5 2.5 0 0 1 2.5 0Z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "avalanche",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.04"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 25"
      >
        <path
          fill="currentColor"
          d="M8.584 17.306H6.28c-.485 0-.725 0-.87-.09a.57.57 0 0 1-.266-.454c-.009-.17.111-.377.351-.793l5.692-9.89c.244-.42.368-.63.523-.708a.58.58 0 0 1 .531 0c.154.077.274.287.514.707l1.175 2.014l.004.01c.193.284.346.594.454.92c.065.257.065.536 0 .797q-.162.497-.454.93l-2.991 5.212l-.009.017c-.153.311-.35.6-.583.857a1.8 1.8 0 0 1-.707.407c-.244.064-.514.064-1.059.064m5.825 0h3.3c.493 0 .737 0 .883-.094a.57.57 0 0 0 .265-.454c.009-.167-.107-.364-.338-.755l-.026-.042l-1.654-2.786l-.017-.034c-.232-.386-.352-.583-.502-.66a.57.57 0 0 0-.527 0c-.154.077-.274.283-.514.694l-1.655 2.79v.01c-.244.41-.364.616-.355.783a.58.58 0 0 0 .265.458c.142.09.386.09.875.09"
        />
      </svg>
    ),
  },
  {
    name: "celo",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 6h12v4.286h-2.074a4.286 4.286 0 1 0 0 3.428H18V18H6z"
        />
      </svg>
    ),
  },
  {
    name: "blast",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="w-[20px] h-[20px] bg-transparent"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m16.607 11.905l2.523-1.257l.87-2.67l-1.74-1.265H6.679L4 8.702h13.615l-.724 2.239h-5.46l-.525 1.636h5.46l-1.533 4.71l2.558-1.265l.913-2.825l-1.714-1.257z"
        />
        <path
          fill="currentColor"
          d="m7.85 15.264l1.575-4.909l-1.748-1.309l-2.626 8.241h9.782l.655-2.023z"
        />
      </svg>
    ),
  },
];
