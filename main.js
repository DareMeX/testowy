
/*

<div class="product-item on-sale">
                <img src="./imagine/huawei-1.jpg" alt="" />
                <p class="product-name">Huawei p20 </p>
                <p class="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus ab sit mollitia est! Toam, maiores? Quae hic sed voluptates iure</p>
                <div class="product-price">
                    <span class="price">2999,99 zł</span>
                    <span class="price-sale"> 2750 zł</span>
                </div>
                <button class="product-add-to-basket-btn">Dodaj do koszyka</button>
                <p class="product-item-sale-info">Promocja</p>
            </div>

            */


 const currentProducts = products;

const productSection = document.querySelector(".products");
 
const renderProducts = (items) => {

    for(let i = 0; i < items.length; i++){
    
        const newProduct = document.createElement ("div");
    newProduct.className = "product-item";
}
 };

 document.onload = renderProcucts(currentProducts);

