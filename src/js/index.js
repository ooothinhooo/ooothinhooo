document.querySelector("#viewbangdiem").addEventListener("click", () => {
  ViewBangDem();
});

function ViewBangDem() {
  let text;
  let pass = prompt("Nhập pass để tiếp tục:", "");
  if (pass == null || pass == "" || pass != "1234") {
    text = "User cancelled the prompt.";
  } else {
    window.location.href = "/src/html/bangdiem.html";
  }
  console.log(text);
}
