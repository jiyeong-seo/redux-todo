// 글로벌 스타일 만들기 위한 createGlobalStyle 불러오기
import { createGlobalStyle } from "styled-components";
// 스타일 초기화를 위한 reset 불러오기
import reset from "styled-reset";

// 글로벌 스타일 만들기, reset 사용해서 스타일 초기화하기
const GlobalStyles = createGlobalStyle`
    ${reset}
    /* Reset CSS */
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    textarea,
    input {
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        letter-spacing: 0.05rem;
        color: #514f4f;
        font-size: 16px;
    }

    button:focus,
    button:active,
    textarea:focus,
    textarea:active,
    input:focus,
    input:active {
        box-shadow: none;
        outline: none;
    }

    ul,
    ol,
    li {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    }
`;

export default GlobalStyles;
