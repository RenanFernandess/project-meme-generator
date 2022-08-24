const textInput = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');

function addText() {
  textInput.addEventListener('input', () => {
    memeText.innerText = textInput.value;
  });
}

function addImg() {
  memeInsert.addEventListener('change', () => {
    const img = memeInsert.files;
    image.src = URL.createObjectURL(img[0]);
  });
}

function removeClass() {
  let clas = memeContainer.classList;
  if (clas.length >= 3) {
    clas.remove(clas[3]);
  }
}

function borderAdd() {
  const buttons = document.querySelectorAll('#buttons button');
  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', () => {
      const border = buttons[index].classList[1];
      removeClass();
      memeContainer.classList.add(border);
    });
  }
}

function imgAdd() {
  const imgs = document.querySelectorAll('#examples img');
  for (let index = 0; index < imgs.length; index += 1) {
    imgs[index].addEventListener('click', () => {
      image.src = imgs[index].src;
    });
  }
}

// config

// function textInputConfig() {
//   textInput.maxLength = '60';
// }

// chama functions config
// textInputConfig();

// chama functions
addText();
addImg();
imgAdd();
borderAdd();
