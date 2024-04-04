import { createSvgIcon } from "@mui/material";

export const NotFound = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    enable-background="new 0 0 32 32"
    viewBox="0 0 32 32"
    id="error"
  >
    <circle cx="7.5" cy="5.5" r=".5"></circle>
    <circle cx="5.5" cy="5.5" r=".5"></circle>
    <circle cx="3.5" cy="5.5" r=".5"></circle>
    <path d="M30.5,8h-29C1.224,8,1,7.776,1,7.5S1.224,7,1.5,7h29C30.776,7,31,7.224,31,7.5S30.776,8,30.5,8z"></path>
    <path
      d="M29.5,29h-27C1.673,29,1,28.327,1,27.5v-23C1,3.673,1.673,3,2.5,3h27C30.327,3,31,3.673,31,4.5v23
					C31,28.327,30.327,29,29.5,29z M2.5,4C2.224,4,2,4.225,2,4.5v23C2,27.775,2.224,28,2.5,28h27c0.276,0,0.5-0.225,0.5-0.5v-23
					C30,4.225,29.776,4,29.5,4H2.5z"
    ></path>
    <g>
      <path d="M24.5 24c-.276 0-.5-.224-.5-.5V21h-3.5c-.163 0-.315-.079-.409-.212s-.117-.303-.062-.456l2.5-7C22.6 13.133 22.789 13 23 13h1.5c.276 0 .5.224.5.5V20h.5c.276 0 .5.224.5.5S25.776 21 25.5 21H25v2.5C25 23.776 24.776 24 24.5 24zM21.209 20H24v-6h-.647L21.209 20zM10.5 24c-.276 0-.5-.224-.5-.5V21H6.5c-.163 0-.315-.079-.409-.212s-.117-.303-.062-.456l2.5-7C8.6 13.133 8.789 13 9 13h1.5c.276 0 .5.224.5.5V20h.5c.276 0 .5.224.5.5S11.776 21 11.5 21H11v2.5C11 23.776 10.776 24 10.5 24zM7.209 20H10v-6H9.353L7.209 20zM17.5 24h-3c-.827 0-1.5-.673-1.5-1.5v-8c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v8C19 23.327 18.327 24 17.5 24zM14.5 14c-.276 0-.5.225-.5.5v8c0 .275.224.5.5.5h3c.276 0 .5-.225.5-.5v-8c0-.275-.224-.5-.5-.5H14.5z"></path>
    </g>
  </svg>,
  "NotFound"
);
