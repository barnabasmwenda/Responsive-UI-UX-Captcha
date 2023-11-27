(() => {
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  const inputField = document.getElementById("txtCaptcha");
  let captchaValue = "";

  const generateCaptcha = () => {
    let value = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      value += charSet.charAt(randomIndex);
    }
    captchaValue = value;
  };

  const setCaptcha = () => {
    let html = captchaValue
      .split("")
      .map((char) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);
        return `
        <span 
          style="
            transform: rotate(${rotate}deg);
            font-family: ${fonts[font]}; 
            font-wight: 600;
            font-size: 24px;
          ">
          ${char}
        </span>
      `;
      })
      .join("");

    document.getElementById("captchaContent").innerHTML = html;
  };

  const initCaptcha = () => {
    generateCaptcha();
    setCaptcha();
  };

  const validateCaptcha = () => {
    let inputCaptchaValue = inputField.value;
    if (inputCaptchaValue === captchaValue) {
      alert("Captcha validation successful");
    } else {
      alert("Captcha validation failed");
    }
  };

  document
    .getElementById("btnRefreshCaptcha")
    .addEventListener("click", initCaptcha);

  document
    .getElementById("btnSubmitCaptcha")
    .addEventListener("click", () => validateCaptcha());

  inputField.addEventListener("keydown", () => {
    if (event.key === "Enter") {
      validateCaptcha();
    }
  });

  initCaptcha();
})();
