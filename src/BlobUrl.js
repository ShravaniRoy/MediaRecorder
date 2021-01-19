
const videoFile = ''
var blob = new Blob([videoFile], {type: "mp4/mp3"}),
    url = URL.createObjectURL(blob),
    newFile = new File()

newFile.onload = function() {
    URL.revokeObjectURL(this.src);     // clean-up memory
    document.body.appendChild(this);   // add image to DOM
}

newFile.src = url;   
export default newFile; 