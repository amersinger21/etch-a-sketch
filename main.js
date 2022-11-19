const gridArea = document.querySelector(".grid-wrapper");
const gridWidth = document.querySelector("#width-selector");
const widthOutput = document.querySelector("#width-output");
const randButton = document.querySelector("#random");
const normButton = document.querySelector("#normal");
const penColor = document.querySelector(".color-picker");
const clearButton = document.querySelector("#clear");

widthOutput.innerHTML = `Grid Width: ${gridWidth.value}`;

function MakeGrid(width) {
	for (j = 0; j < width; j++) {
		for (i = 0; i < width; i++) {
			let newBox = document.createElement("div");

			newBox.className = "grid-box";
			newBox.style.width = `calc(100% / ${width} )`;
			newBox.style.height = `calc(100% / ${width} )`;

			gridArea.appendChild(newBox);
		}
	}

	const gridBoxes = document.querySelectorAll(".grid-box");

	gridBoxes.forEach((item) => {
		item.addEventListener("mouseenter", () => {
			const randCheck = randButton.getAttribute("data-active");
			const normCheck = normButton.getAttribute("data-active");

			if (randCheck == "true") {
				SetPenRandColor(item);
			} else if (normCheck == "true") {
				SetPenColor(item);
			}
		});
		item.addEventListener("touchstart", () => {
			const randCheck = randButton.getAttribute("data-active");
			const normCheck = normButton.getAttribute("data-active");

			if (randCheck == "true") {
				SetPenRandColor(item);
			} else if (normCheck == "true") {
				SetPenColor(item);
			}
		});
	});
}

function SetPenRandColor(item) {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function SetPenColor(item) {
	item.style.backgroundColor = `${penColor.value}`;
}

MakeGrid(gridWidth.value);

gridWidth.oninput = function () {
	widthOutput.innerHTML = `Grid Width: ${this.value}`;

	while (gridArea.firstChild) {
		gridArea.removeChild(gridArea.lastChild);
	}

	MakeGrid(this.value);
};

randButton.addEventListener("click", () => {
	const active = randButton.getAttribute("data-active");

	if (active == "false") {
		randButton.setAttribute("data-active", "true");
		normButton.setAttribute("data-active", "false");
	}
});

normButton.addEventListener("click", () => {
	const active = normButton.getAttribute("data-active");

	if (active == "false") {
		randButton.setAttribute("data-active", "false");
		normButton.setAttribute("data-active", "true");
	}
});

clearButton.addEventListener("click", () => {
	while (gridArea.firstChild) {
		gridArea.removeChild(gridArea.lastChild);
	}

	MakeGrid(gridWidth.value);
});
