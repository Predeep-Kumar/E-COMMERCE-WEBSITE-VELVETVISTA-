$(document).ready(function () {
    // Load products from XML file using AJAX
    $.ajax({
        type: 'GET',
        url: 'products.xml',
        dataType: 'xml',
        success: function (xml) {
            // Parse XML and display products on the page
            $(xml).find('product').each(function () {
                const product = $(this);
                const name = product.find('name').text();
                const price = product.find('price').text();
                const imageUrl = product.find('image').text();

                const productCard = $(`<div class="product-card">
                                         <img class="product-image" src="${imageUrl}" alt="${name}">
                                         <div class="label">
                                         <h3>${name}</h3>
                                         <p>Price: $${price}</p>
                                         </div>
                                         <BR>
                                         <button onclick="openProductModal('${name}', ${price}, '${imageUrl}')">VIEW</button>
                                     </div>`);

                $('#products').append(productCard);
            });
        },
        error: function (error) {
            console.error('Error loading products:', error);
        }
    });
});

function openProductModal(name, price, imageUrl) {
    const modalContent = `
        <span class="close" onclick="closeProductModal()">&times;</span>
        <img class="modal-product-image" src="${imageUrl}" alt="${name}">
        <h2>${name}</h2>
        <p>Price: $${price}</p>
        <h3 styles="text-decoration:underline">DESCRIPTION</h3>
        THIS IS A ${name}<br>
        <button onclick="addToCart('${name}')">Add to Cart</button>
    `;

    $('#modal-content').html(modalContent);
    $('#product-modal').show();
}

function closeProductModal() {
    $('#product-modal').hide();
}

function addToCart(productName) {

    alert(`${productName} ADDED TO CARD. CHECK OUT MORE....`);
}




function openMenu(){
    document.getElementById("menu").style.left='0';
}
function closeMenu(){
    document.getElementById("menu").style.left='-280px'
}