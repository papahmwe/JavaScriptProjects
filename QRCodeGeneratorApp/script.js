// QR Code API: https://goqr.me/api/

const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
