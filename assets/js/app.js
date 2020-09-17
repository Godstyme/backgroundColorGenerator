const bodyBgd = document.querySelector('.mainBody')
// const arrayOfColor = ['brown','#000', '#F8A300','#007BBC','#D54F46','navy','#0366D6','#FEFEFE','yellow','gold','grey','chartreuse']
const colorName = document.querySelector('.colorName')
const generateBtn = document.querySelector('.btn').addEventListener('click', () => {
  //  const randomColor = arrayOfColor[Math.floor(Math.random() * arrayOfColor.length)]
  const red = Math.floor(Math.random() * 256) + 0
  const green = Math.floor(Math.random() * 256) + 0
  const blue = Math.floor(Math.random() * 256) + 0
  bodyBgd.style.background = `rgb(${red},${green},${blue})`
  colorName.textContent = `rgb(${red},${green},${blue})`
})