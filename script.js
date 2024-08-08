var products = [
    { id: 1, 
        name: "Laptop", 
        price: 999.99, 
        category: "Electronics", 
        image: "https://via.placeholder.com/250x200?text=Laptop" 
    },
    { id: 2, 
        name: "Smartphone", 
        price: 699.99, 
        category: "Electronics", 
        image: "https://via.placeholder.com/250x200?text=Smartphone" 
    },
    { id: 3, 
        name: "Headphones", 
        price: 199.99, 
        category: "Electronics", 
        image: "https://via.placeholder.com/250x200?text=Headphones" 
    },
    { id: 4, 
        name: "Running Shoes", 
        price: 89.99, 
        category: "Sports", 
        image: "https://via.placeholder.com/250x200?text=Running+Shoes" 
    },
    { id: 5, 
        name: "Yoga Mat", 
        price: 29.99, 
        category: "Sports", 
        image: "https://via.placeholder.com/250x200?text=Yoga+Mat" 
    },
    { id: 6, 
        name: "Coffee Maker", 
        price: 79.99, 
        category: "Home", 
        image: "https://via.placeholder.com/250x200?text=Coffee+Maker" 
    },
    { id: 7, 
        name: "Blender", 
        price: 49.99, 
        category: "Home", 
        image: "https://via.placeholder.com/250x200?text=Blender" 
    },
    { id: 8, 
        name: "Novel", 
        price: 14.99, 
        category: "Books", 
        image: "https://via.placeholder.com/250x200?text=Novel" 
    }
]

const cardContainer = document.querySelector('.cardContainer__cards');

for(var i=0; i<products.length; i++){
    const card = document.createElement('div');
    const img = document.createElement('img');
    const desc = document.createElement('p');
    const price = document.createElement('p');
    const tag = document.createElement('p');

    img.src = products[i].image;
    desc.textContent = products[i].name;
    price.textContent = '$' + products[i].price.toFixed(2);
    tag.textContent = products[i].category;
    img.classList.add('img');
    desc.classList.add('desc');
    price.classList.add('price');
    tag.classList.add('tag');
    card.classList.add('card');
    card.appendChild(img);
    card.appendChild(desc);
    card.appendChild(price);
    card.appendChild(tag);
    cardContainer.appendChild(card);
}
