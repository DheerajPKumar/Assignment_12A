var products = [
    {   id: 1, 
        name: "Laptop", 
        price: 999.99, 
        category: "Electronics", 
        image: "https://via.placeholder.com/250x200?text=Laptop" 
    },
    {   id: 2, 
        name: "Smartphone", 
        price: 699.99, 
        category: "Electronics", 
        image: "https://via.placeholder.com/250x200?text=Smartphone" 
    },
    {   id: 3, 
        name: "Headphones", 
        price: 199.99, 
        category: "Electronics", 
        image: "https://via.placeholder.com/250x200?text=Headphones" 
    },
    {   id: 4, 
        name: "Running Shoes", 
        price: 89.99, 
        category: "Sports", 
        image: "https://via.placeholder.com/250x200?text=Running+Shoes" 
    },
    {   id: 5, 
        name: "Yoga Mat", 
        price: 29.99, 
        category: "Sports", 
        image: "https://via.placeholder.com/250x200?text=Yoga+Mat" 
    },
    {   id: 6, 
        name: "Coffee Maker", 
        price: 79.99, 
        category: "Home", 
        image: "https://via.placeholder.com/250x200?text=Coffee+Maker" 
    },
    {   id: 7, 
        name: "Blender", 
        price: 49.99, 
        category: "Home", 
        image: "https://via.placeholder.com/250x200?text=Blender" 
    },
    {   id: 8, 
        name: "Novel", 
        price: 14.99, 
        category: "Books", 
        image: "https://via.placeholder.com/250x200?text=Novel" 
    },
    {   id: 9, 
        name: "Novel", 
        price: 14.99, 
        category: "Blogs", 
        image: "https://via.placeholder.com/250x200?text=Novel" 
    }
]

const cardContainer = document.querySelector('.cardContainer__cards');
const btnContainer = document.querySelector('.cardContainer__navigation');

let categoryArr= [];

products.forEach(product => {
    categoryArr.push(product.category);
});

categoryArr = [...new Set(categoryArr)];
console.log(categoryArr)

function createButtons(){
    categoryArr.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.id = category;
        button.classList.add('cardContainer__navigation-btn');
        btnContainer.appendChild(button);

        document.getElementById(category).addEventListener('click', function(){
            create(category);
        });
    });
}

createButtons();

function create(category){
    cardContainer.innerHTML = '';

    let productsFilter = [];

    if(category === 'All'){
        productsFilter = products;
    }
    else{
        productsFilter = products.filter(product => product.category === category);
    }

    productsFilter.forEach(product => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const desc = document.createElement('p');
        const price = document.createElement('p');
        const tag = document.createElement('p');

        img.src = product.image;
        desc.textContent = product.name;
        price.textContent = '$' + product.price;
        tag.textContent = product.category;

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
    });

    document.getElementById('All').addEventListener('click', function(){
        create('All')
    });
}

create('All');

