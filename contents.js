////////////////////////////////////
//get lements
let mainHeading = document.getElementById("mainHeading");
let subHeading = document.getElementById("subHeading");
let paragraph = document.getElementById("paragraph");

let p0g = document.getElementById("p0");
let p1g = document.getElementById("p1");
let p2g = document.getElementById("p2");

////////////////////////////////////
// Welcome page load ***
//welcome page 1
const welcomePageData = () => {
  mainHeading.innerHTML = "Welcome.";
  subHeading.innerText = "About";
  paragraph.innerText =
    "GM, I'm Manindra. I enjoy building dynamic, creative products from start to finish. Focused on developing intuitive experiences that constantly grow and improve based on user metrics. Always shipping.";
};

// projects Loads ***
//project page 1
const p0 = () => {
  mainHeading.innerText = "First Project";
  subHeading.innerText = "About Project";
  paragraph.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic suscipit animi pariatur provident rerum quo, ex inventore culpa expedita debitis voluptate officiis, maxime minus ullam, consequatur earum quisquam reprehenderit natus commodi!";
};
const fChange0 = () => {
  const Find = document.getElementById("p0");
  Find.setAttribute("onclick", `onClickFun1("p0")`);
  Find.innerText="Go Back"
  p2g.innerText="Third Project"
  p1g.innerText="Second Project"
};

const bChange0 = () => {
  const Find = document.getElementById("p0");
  Find.setAttribute("onclick", `onClickFun0("p0")`);
  Find.innerText="First Project"
  p2g.innerText="Third Project"
  p1g.innerText="Second Project"
};
//project page 2
const p1 = () => {
  mainHeading.innerHTML = "Second Project";
  subHeading.innerText = "About Project";
  paragraph.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
};
const fChange1 = () => {
    const Find = document.getElementById("p1");
    Find.setAttribute("onclick", `onClickFun1("p1")`);
    Find.innerText="Go Back"
    p0g.innerText="First Project"
    p2g.innerText="Third Project"
  };
  
  const bChange1 = () => {
    const Find = document.getElementById("p1");
    Find.setAttribute("onclick", `onClickFun0("p1")`);
    Find.innerText="Second Project"
    p0g.innerText="First Project"
    p2g.innerText="Third Project"
  };
//project page 3
const p2 = () => {
  mainHeading.innerHTML = "Third Project";
  subHeading.innerText = "About Project";
  paragraph.innerText =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
};
const fChange2 = () => {
    const Find = document.getElementById("p2");
    Find.setAttribute("onclick", `onClickFun1("p2")`);
    Find.innerText="Go Back"
    p0g.innerText="First Project"
    p1g.innerText="Second Project"
  };
  
  const bChange2 = () => {
    const Find = document.getElementById("p2");
    Find.setAttribute("onclick", `onClickFun0("p2")`);
    Find.innerText="Third Project"
    p0g.innerText="First Project"
    p1g.innerText="Second Project"
  };

//////////////////////////////////////////////////////////////////////////////