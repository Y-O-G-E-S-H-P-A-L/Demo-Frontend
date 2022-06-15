const verifyCaptcha = () => {
  const rCap = document.getElementById("captcha-box").innerText;
  const iCap = document.getElementById("captcha").value;
  if (iCap === rCap) {
    return true;
  } else {
    return false;
  }
};
export default verifyCaptcha;
