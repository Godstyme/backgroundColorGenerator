const bodyBgd = document.querySelector('.mainBody')
const arrayOfColor = ['brown','#000', '#F8A300','#007BBC','#D54F46','#0366D6','#FEFEFE','yellow','gold','grey','chartreuse']
const colorName = document.querySelector('.colorName')
const generateBtn = document.querySelector('.btn').addEventListener('click', () => {
   const randomColor = arrayOfColor[Math.floor(Math.random() * arrayOfColor.length)]
   bodyBgd.style.background = randomColor
   colorName.style.color = 'pink'
   colorName.textContent = randomColor
})