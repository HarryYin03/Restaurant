function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const chefImage = document.createElement('img');
    chefImage.src = "images/chef.png";
    chefImage.alt = "BaBa";


    home.appendChild(createParagraph("Welcome to BaBa's Pizza!"));
    home.appendChild(createParagraph("Made with love by BaBa"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("Order online or visit us!"));

    return home;
}

function createParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;