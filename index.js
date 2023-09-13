const url = "http://localhost:4000/audio";
const audio = document.getElementById('audio');

fetch(url, {
  method: "GET"
}).then(res => res.text())
.then(data => {
  audio.src = `data:audio/mpeg;base64,${data}`;
  console.log(data);
})
.catch(err => {
  throw new Error(err);
})