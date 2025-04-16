
const container = document.querySelector('#container');
const text = document.querySelector('#text');
const themeDark = document.querySelector('#themeDark');
const themeRed = document.querySelector('#themeRed');
const themeGreen = document.querySelector('#themeGreen');
const themeReset = document.querySelector('#themeReset');


function changeTheme(bgColor, textColor, fontFamily) {
    container.style.backgroundColor = bgColor;
    text.style.color = textColor;
    text.style.fontFamily = fontFamily;
}


themeDark.addEventListener('click', () => changeTheme('black', 'white', 'Courier New'));
themeRed.addEventListener('click', () => changeTheme('red', 'yellow', 'Georgia'));
themeGreen.addEventListener('click', () => changeTheme('green', 'white', 'Verdana'));
themeReset.addEventListener('click', () => changeTheme('white', 'black', 'Arial'));
