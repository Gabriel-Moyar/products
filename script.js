const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

for (let i = 0; i < storeItems.length; i++) {
  let item = storeItems[i];
  let p = `<p>`;
  if (item.inStock) {
    p += `
      <span class="price">$${item.price}</span>  
      <span style="width: 50px;"></span>  <!-- Add horizontal space -->
      <span class="name">${item.name}</span>       
      <span style="width: 100px;"></span> <!-- Add horizontal space -->
      <span class="details">${item.details}</span>
    `;
    $(p).addClass('inStock product');
    $(p).appendTo('#content');
  } else {  
      $(p).addClass('notInStock');
      $(p).css('display', 'none'); 
    }
  }
  
  $('#button').on('click', () => {
    $('body').toggleClass('darkMode');
  });

