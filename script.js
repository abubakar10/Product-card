const product = {
  title: 'Custom Fit Polo Bear',
  brand: 'POLO RALPH',
  description: 'This is a custom fit polo bear',
  discount: 10, 
  images: ['./img 1.jpg', './img2.jpg', './img3.jpg'],
  sizes: [
    { size: 'S', price: 10 },
    { size: 'M', price: 20 },
    { size: 'L', price: 30 },
    { size: 'XL', price: 40 },
    { size: 'XXL', price: 50 }
  ]
};

// Function to calculate the discounted price
function calculateDiscountedPrice(price, discount) {
  return price - (price * (discount / 100));
}

document.getElementById('title').textContent = product.title + ' Oxford Shirt';
document.getElementById('brand').textContent = product.brand;
document.getElementById('description').textContent = product.description;

const defaultSize = product.sizes[1]; // Medium size
const originalPrice = defaultSize.price;
const discountedPrice = calculateDiscountedPrice(originalPrice, product.discount);

document.getElementById('discount-price').textContent = `$${discountedPrice.toFixed(2)} (${product.discount}% off)`;
document.getElementById('original-price').textContent = `$${originalPrice.toFixed(2)}`;
document.getElementById('original-price').style.textDecoration = 'line-through';

// Image handling
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.src = product.images[index];
  thumbnail.addEventListener('click', () => {
    mainImage.src = product.images[index];
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
  });
});

// Handle size options dynamically
const sizeOptionsContainer = document.getElementById('size-options');

product.sizes.forEach((sizeObj, index) => {
  const button = document.createElement('button');
  button.textContent = sizeObj.size;

  // Make the Medium size button active by default
  if (index === 1) { // 1 refers to the Medium size
    button.classList.add('active');
  }

  button.onclick = function () {
    const newOriginalPrice = sizeObj.price;
    const newDiscountedPrice = calculateDiscountedPrice(newOriginalPrice, product.discount);
    
    document.getElementById('discount-price').textContent = `$${newDiscountedPrice.toFixed(2)} (${product.discount}% off)`;
    document.getElementById('original-price').textContent = `$${newOriginalPrice.toFixed(2)}`;
    document.getElementById('original-price').style.textDecoration = 'line-through';
    
    // Remove active class from all buttons
    const buttons = sizeOptionsContainer.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    
    // Add active class to the clicked button
    this.classList.add('active');
  };

  sizeOptionsContainer.appendChild(button);
});

document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    document.getElementById('main-image').src = product.images[index];
  });
});
