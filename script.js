// Script pour gérer l'ajout au panier
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const product = this.closest(".product");
        const productName = product.querySelector(".product-title").textContent;
        const productPrice = product.querySelector(".product-price").textContent;
        
        // Ajouter le produit au panier (exemple)
        console.log(`Produit ajouté au panier : ${productName} - Prix : ${productPrice}`);
      });
    });
  });
  