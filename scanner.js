// Access the camera and display it in the video element
const video = document.getElementById('scanner');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (error) {
      console.error("Error accessing the camera: ", error);
    });
} else {
  console.error("getUserMedia not supported on this browser.");
}
