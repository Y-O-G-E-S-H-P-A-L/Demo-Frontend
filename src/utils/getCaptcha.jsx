const getCaptcha = () => {
  let capArray = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cap = "";
  for (let i = 0; i < 6; i++) {
    let rnum = Math.round(Math.random() * 100);
    cap = cap + capArray.charAt(Math.abs(rnum - 37));
  }
  document.getElementById("captcha-box").innerText = cap;
};

export default getCaptcha;
