let listHandphone = [
  {
	nama: 'Nokia N-gage',
	harga: 'Rp. 575.000',
	nominal: 575000,
	gambar: "img/Nokia-NGage.jpg"
  },
  {
	nama: 'Nokia N-gage QD',
	harga: 'Rp. 450000',
	nominal: 450000,
	gambar: "img/Nokia-NGage-QD.jpg"
  },
  {
	nama: 'Nokia 3310',
	harga: 'Rp. 250.000',
	nominal: 250000,
	gambar : "img/Nokia_3310.jpg"
  },
  {
	nama: 'Nokia 2610',
	harga: 'Rp. 200.000',
	nominal: 200000,
	gambar: "img/Nokia-2610.jpg"
  },
  {
	nama: 'Nokia 5700',
	harga: 'Rp. 335.000',
	nominal: 335000,
	gambar: "img/Nokia-5700.jpg"
  },
  {
	nama: 'Nokia 7610',
	harga: 'Rp. 350.000',
	nominal: 350000,
	gambar: "img/Nokia-7610.jpg"
  },
  {
	nama: 'Nokia E71',
	harga: 'Rp. 489.000',
	nominal: 489000,
	gambar: "img/Nokia-E71.jpg"
  },
  {
	nama: 'Nokia N95',
	harga: 650000,
	nominal: 575000,
	gambar: "img/Nokia-N95.jpg"
  }
]

let keranjangBelanja = [];

const konten = document.getElementById('content')
console.log(konten);

const keranjang = document.getElementById('keranjang');

generateCard(listHandphone)

function generateCard (data) {
	for (let i = 0; i < data.length; i++) {
		let divItem = document.createElement('div');
		divItem.classList.add('item');
		
		let productImg = document.createElement('img');
		productImg.src = data[i].gambar;
		divItem.appendChild(productImg);
		
		let productName = document.createElement('h2');
		productName.innerHTML = data[i].nama;
		divItem.appendChild(productName);
		
		let productPrice = document.createElement('h4');
		productPrice.innerHTML = data[i].harga;
		divItem.appendChild(productPrice);
		
		let button = document.createElement('button');
		button.addEventListener('click', masukKeranjang);
		button.setAttribute('id_handphone', i)
		button.innerHTML = 'Keranjang'
		divItem.appendChild(button);
			
		konten.appendChild(divItem);
	}
}

function masukKeranjang(event) {
	console.log('Klik keranjang');
	let index = Number(event.target.getAttribute('id_handphone'));
	console.log(index);
	let divItem = document.createElement('div');
	divItem.id = `${index}-keranjang`;
	divItem.classList.add('item');
	let productImg = document.createElement('img');
	productImg.src = listHandphone[index].gambar;
	divItem.appendChild(productImg);
	let productName = document.createElement('h2');
	productName.innerHTML = listHandphone[index].nama;
	divItem.appendChild(productName);
		
	let productPrice = document.createElement('h4');
	productPrice.innerHTML = listHandphone[index].harga;
	divItem.appendChild(productPrice);

	let button = document.createElement('button');
	button.addEventListener('click', deleteCard);
	button.innerHTML = 'Delete'
	divItem.appendChild(button);

	keranjangBelanja.push(listHandphone[index]);
	keranjang.appendChild(divItem);
	console.log(keranjang);
	console.log(keranjangBelanja);
	getTotalPrice(keranjangBelanja);
	keranjangBelanja[keranjangBelanja.length - 1].id = `${index}-keranjang`;
}

getTotalPrice(keranjangBelanja);

function getTotalPrice(arr) {
	let output = 0;
	for (let i = 0; i < arr.length; i++) {
		output += arr[i].nominal;
	}
	console.log(output);
	let total = document.getElementById('total');
	total.innerHTML = `Rp. ${output}`;
}

function deleteCard(event) {
	console.log(event.target.parentNode);
	let parent = event.target.parentNode;
	console.log(parent.id);
	let arrDel = [];
	for (let i = 0; i < keranjangBelanja.length; i++) {
		console.log(keranjangBelanja[i].id, '-----');
		console.log(parent.id);
		console.log(keranjangBelanja[i].id === parent.id);
		if (keranjangBelanja[i].id !== parent.id) {
			arrDel.push(keranjangBelanja[i])
		}
	}
	keranjangBelanja = arrDel;
	getTotalPrice(keranjangBelanja);
	console.log(arrDel);
	parent.remove()
}