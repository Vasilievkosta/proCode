	let arr = [];
	let data = document.querySelector('.in');
	let btn = document.querySelector('.btn');
	let block = document.querySelector('.block');
	
	btn.addEventListener('click', ()=> {
		arr.push(data.value);
		data.value = '';
		render();		
	});
	
	let render = () => {
		block.innerHTML = "";
		let ol = document.createElement('ol');		
		
		arr.forEach((el) => {
			let li = document.createElement('li');
			li.innerHTML = el;
			ol.appendChild(li);
		});
		
		block.appendChild(ol);
	}	