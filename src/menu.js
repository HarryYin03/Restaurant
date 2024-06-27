function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Salsiccia",
            "Italian sausage, mozzarella, tomato sauce, basil",   
        )
    )
    menu.appendChild(
        createMenuItem(
            "Gambari",
            "Shrimp, mozzarella, tomato sauce, garlic",
        )
    )
    menu.appendChild(
        createMenuItem(
            "Pepe",
            "Pepperoni, mozzarella, tomato sauce, basil",
        )
    )
    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Anchovies, olives, capers, mozzarella, tomato sauce",
        )
    )
    menu.appendChild(
        createMenuItem(
            "Colorato",
            "Bell peppers, mushrooms, mozzarella, tomato sauce",
        )
    )
    menu.appendChild(
        createMenuItem(
            "Pomodoro",
            "Tomato sauce, mozzarella, basil",
        )
    )
    menu.appendChild(
        createMenuItem(
            "Crema",
            "Cream, mozzarella, gorgonzola, walnuts, honey",
        )
    )
    menu.appendChild(
        createMenuItem(
            "Carne",
            "Pepperoni, sausage, bacon, mozzarella, tomato sauce",
        )
    )
    return menu;
}

function createMenuItem(name, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.src = `images/pizzas/${name.toLowerCase()}.png`;
    foodImage.alt = `${name} pizza`;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(foodImage);

    return menuItem;
}

function loadMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;