document.addEventListener('DOMContentLoaded', () => {
 const products = [
     {
         id: 1,
         title: "Modern Laptop Pro",
         price: 1299.99,
         image: "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-64..v1734989633.jpg"
     },
     {
         id: 2,
         title: "Smartphone Galaxy",
         price: 799.50,
         image: "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UF1000,1000_QL80_.jpg"
     },
     {
         id: 3,
         title: "Wireless Headphones",
         price: 149.00,
         image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/2/l/s/-original-imah2nhzmmtzthfx.jpeg?q=90&crop=false"
     },
     {
         id: 4,
         title: "Classic Novel Set",
         price: 45.99,
         image: "https://m.media-amazon.com/images/I/91idkSi21TL._AC_UF1000,1000_QL80_.jpg"
     },
     {
         id: 5,
         title: "Gaming Mouse",
         price: 55.75,
         image: "https://images-cdn.ubuy.co.in/64e403e7ceed0e7b7f35c788-razer-deathadder-essential-wired-optical.jpg"
     },
     {
         id: 6,
         title: "4K Monitor Ultra",
         price: 399.00,
         image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/4kmonitors-2048px-9794.jpg"
     },
     {
         id: 7,
         title: "Mechanical Keyboard",
         price: 110.00,
         image: "https://m.media-amazon.com/images/I/61P7MvyRbUL._AC_UF1000,1000_QL80_.jpg"
     },
     {
         id: 8,
         title: "Smart Watch Fit",
         price: 199.99,
         image: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch-ultra-l705-sm-l705fdaains-542169127?$684_547_PNG$"
     },
     {
         id: 9,
         title: "Espresso Machine",
         price: 249.50,
         image: "https://assets.epicurious.com/photos/62741684ef40ea9d3866a0be/16:9/w_4991,h_2807,c_limit/breville-bambino-espresso-maker_HERO_050422_8449_VOG_Badge_final.jpg"
     },
     {
         id: 10,
         title: "Yoga Mat Premium",
         price: 35.00,
         image: "https://sppartos.com/cdn/shop/files/31VX-aIlgWL.jpg?v=1702469142"
     }
     
 ];

 
 const catalogContainer = document.getElementById('product-catalog');


 if (!catalogContainer) {
     console.error("Product catalog container not found!");
     return; 
 }

 products.forEach(product => {
     
     const card = document.createElement('div');
     card.classList.add('product-card');
     card.setAttribute('data-product-id', product.id); 

     const img = document.createElement('img');
     img.src = product.image;
     img.alt = product.title; 


     const title = document.createElement('h3');
     title.textContent = product.title;

     const price = document.createElement('p');
     price.classList.add('price');
     
     price.textContent = `$${product.price.toFixed(2)}`;


     const button = document.createElement('button');
     button.textContent = 'Add to Cart';

     button.addEventListener('click', () => {
         
         alert(`${product.title} added to cart!`);
     });

     card.appendChild(img);
     card.appendChild(title);
     card.appendChild(price);
     card.appendChild(button);

     
     catalogContainer.appendChild(card);
 });
}); 