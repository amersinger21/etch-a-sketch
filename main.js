const gridArea = document.querySelector(".grid-wrapper");
const gridWidth = document.querySelector("#width-selector");
const widthOutput = document.querySelector("#width-output");

widthOutput.innerHTML = gridWidth.value;

gridWidth.oninput = function () {
	widthOutput.innerHTML = this.value;
	for (i = 0; i < this.value; i++) {
		let newBox = document.createElement("div");

		newBox.className = "grid-box";
		newBox.style.width = `calc(100% / ${this.value} )`;
		newBox.style.height = `calc(100% / ${this.value} )`;

		gridArea.appendChild(newBox);
	}
};
