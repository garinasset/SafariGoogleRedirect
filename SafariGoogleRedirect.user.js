// ==UserScript==
// @name            Safari · Google 重定向
// @namespace       https://github.com/garinasset/SafariGoogleRedirect
// @version         1.1.0
//
// @description     SafariGoogleRedirect（Safari · Google 重定向）解决当 iPhone 地区设置为中国大陆, Safari Google 搜索会跳 google.com.hk 中间层的问题，大大提升 Safari 用户体验。iPhone 地区现在可放心设置为中国大陆, 不用改地区了。
//
// @author          garinasset
// @license         MIT
//
// @homepageURL     https://github.com/garinasset/SafariGoogleRedirect
// @supportURL      https://github.com/garinasset/SafariGoogleRedirect/issues
//
// @match           http://www.google.cn/search*
// @match           https://www.google.cn/search*
//
// @run-at          document-start
//
// @updateURL       https://raw.githubusercontent.com/garinasset/SafariGoogleRedirect/main/SafariGoogleRedirect.user.js
// @downloadURL     https://raw.githubusercontent.com/garinasset/SafariGoogleRedirect/main/SafariGoogleRedirect.user.js
// ==/UserScript==


(function() {
    const url = new URL(location.href);
    const q = url.searchParams.get('q');
    if (!q) return;

    // 构造最小 URL
    const cleanUrl = new URL('https://www.google.com/search');
    cleanUrl.searchParams.set('q', q);

    // 检测用户主题模式
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const background = isDark ? '#181818' : '#fff';
    const loaderBorder = isDark ? '#555' : '#f3f3f3';
    const loaderTop = isDark ? '#1a73e8' : '#4285f4';

    // 显示临时中间层页面（Logo + loading）并自适应主题
    document.documentElement.innerHTML = `
    <style>
      html, body { height: 100%; margin: 0; display: flex; justify-content: center; align-items: center; background: ${background}; font-family: Arial, sans-serif; }
      .container { text-align: center; }
      .logo { margin-bottom: 20px; }
      .loader {
        border: 4px solid ${loaderBorder}; 
        border-top: 4px solid ${loaderTop}; 
        border-radius: 50%; 
        width: 40px; 
        height: 40px; 
        animation: spin 1s linear infinite;
        margin: 0 auto;
      }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
    <div class="container">
      <img class="logo" src="https://www.google.cn/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png" width="150" height="54" alt="Google">
      <div class="loader"></div>
    </div>
    `;

    // 延迟 0ms 跳转到最小 URL
    setTimeout(() => { location.replace(cleanUrl.toString()); }, 0);
})();
