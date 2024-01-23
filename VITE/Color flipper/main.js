import './style.css'

const COLOR_PALETTE = {
  '#28262c': 'Raisin Black',
  '#998fc7': 'Blue Bell',
  '#d4c2fc': 'Lavender Blue',
  '#f9f5ff': 'Magnolia',
  '#14248a': 'Resolution Blue'
};



const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });

};

const addEventListenerColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("#change", (event) => {
    const newColor = event.target.value;
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
  });

};

addOptionsToColorPicker();
addEventListenerColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
  colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText: "-";