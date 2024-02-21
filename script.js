////////////////////////////////////
// switching apis***

const onClickFun0 = (i) => {
  switch (i) {
    case "p0":
      p0();
      fChange0();
      break;
    case "p1":
      p1();
      fChange1();
      break;
    case "p2":
      p2();
      fChange2();

    default:
      break;
  }
};
const onClickFun1 = (i) => {
  switch (i) {
    case "p0":
      welcomePageData();
      bChange0();
      break;
    case "p1":
      welcomePageData();
      bChange1();
      break
    case "p2":
      welcomePageData();
      bChange2();

    default:
      break;
  }
};

/////////////////////////////////////
// change bg when click on logo***
let i = 1;
const changeBg = () => {
  if (i < 9) {
    ++i;
    let video = `v${i}.webm`;
    changeVideo(video);
    // console.log(video);
  } else {
    i = 1;
    ++i;
    let video = `v${i}.webm`;
    changeVideo(video);
    // console.log(video);
  }
};
function changeVideo(name) {
  const video = document.getElementById("bg-video");
  const BgVideo = document.getElementById("BgVideo");
  BgVideo.setAttribute("src", `/videos/${name}`);
  video.load();
}
// change bg on load****
const changeBgOnLoad = () => {
  let j = Math.floor(Math.random() * 8) + 2;
  let video = `v${j}.webm`;
  changeVideo(video);
  // console.log(j);
};
function changeVideo(name) {
  const video = document.getElementById("bg-video");
  const BgVideo = document.getElementById("BgVideo");
  BgVideo.setAttribute("src", `/videos/${name}`);
  video.load();
}

/////////////////////////////////////
// preLoader function***
let preLoader = document.getElementById("preLoader");
let preLoaderFun = () => {
  preLoader.style.display = "none";
};
///////////////////////////////////////
