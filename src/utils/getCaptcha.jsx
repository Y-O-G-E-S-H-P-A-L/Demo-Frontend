const getCaptcha = () => {
  let capArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  let cap = "";
  for (let i = 0; i < 6; i++) {
    let rnum = Math.round(Math.random() * 100);
    cap = cap + capArray.charAt(Math.abs(rnum - 37));
  }
  document.getElementById("captcha-box").innerHTML = cap;
};

export default getCaptcha;
