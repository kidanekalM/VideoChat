
import  'https://unpkg.com/webcam-easy@1.0.5/dist/webcam-easy.min.js'
const WebCamElement = document.getElementById('video')
const webCam = new WebCam(WebCamElement,"user")
webCam.start();