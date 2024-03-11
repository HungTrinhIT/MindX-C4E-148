// OBJECT (Đối tượng)

// Product
// title, quantity, price, sizes

const product = {
  title: 'Quần kaki',
  quantity: 100,
  price: 200000,
  sizes: ['X', 'M', 'XL', '2XL', '3XL'],
  image: {
    src: 'https://image.jpg',
    width: 200,
    height: 300,
  },
  color: 'red',
};

// DUYỆT OBJECT
// console.log('Thông tin về title là:', product.title);
// console.log('Thông tin về quantity là:', product['quantity']);
// console.log('Thông tin về price là:', product['price']);
// console.log('Thông tin về sizes là:', product.sizes);
// console.log('Thông tin về image là:', product.image);

const productThumbnailUrl = product.image.src;
const productSizes = product.sizes;
console.log('productSizes:', productSizes);
console.log('Link hinh:', productThumbnailUrl);

// for...in, for...of
for (let objectKey in product) {
  // Dynamic key
  const objectValue = product[objectKey];
  console.log('Thông tin về', objectKey, 'là:', objectValue);
}

// console.log('Thông tin sản phẩm:', product);

// Kiểm tra 1 cái key có tồn tại trong 1 object hay không

if (product.hasOwnProperty('color')) {
  console.log('Sản phẩm này có thuộc tính color');
} else {
  console.log('Sản phẩm này KHÔNG CÓ thuộc tính color');
}

// THAM CHIẾU TRONG OBJECT
// alice, bob, john.doe
const studentAlice = {
  name: 'Alice',
  age: 20,
};

const studentBob = studentAlice;

console.log('\n\nAlice info:', studentAlice);
console.log('Bob info:', studentBob);

studentBob.name = 'Bob';

console.log('\n\nAlice info:', studentAlice);
console.log('Bob info:', studentBob);
