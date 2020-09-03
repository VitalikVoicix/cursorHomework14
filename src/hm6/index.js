const button9 = document.querySelector("#btn1");
const wrapper = document.querySelector(".wrapper")




function generateBlocks () {
	let i = 1
	while(i<=25) {
		const square = document.createElement('div')
		square.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`
		square.classList.add('square')
		wrapper.append(square)
		i++
    }
    button9.hidden=true;
}

export{generateBlocks}
