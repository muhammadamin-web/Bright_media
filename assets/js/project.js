const productImages = {
    product1: [
      "assets/images/ark/1.png",
      "assets/images/ark/2.png",
      "assets/images/ark/3.png",
      "assets/images/ark/4.png",
      "assets/images/ark/5.png",
      
    ],
    product2: [
      "assets/images/boyota/1.png",
      "assets/images/boyota/2.png",
      "assets/images/boyota/3.png",
      "assets/images/boyota/4.png",
      "assets/images/boyota/5.png",
    ],
    product3: [
      "assets/images/grand/1.png",
      "assets/images/grand/2.png",
      "assets/images/grand/3.png",
      "assets/images/grand/4.png",
      "assets/images/grand/5.png",
    ],
    product4: [
      "assets/images/lalaku/1.png",
      "assets/images/lalaku/2.png",
      "assets/images/lalaku/3.png",
      "assets/images/lalaku/4.png",
      "assets/images/lalaku/5.png",
    ],
    product5: [
      "assets/images/matraslar.uz/1.png",
      "assets/images/matraslar.uz/2.png",
      "assets/images/matraslar.uz/3.png",
      "assets/images/matraslar.uz/4.png",
      "assets/images/matraslar.uz/5.png",
    ],
    product6: [
      "assets/images/mustahkam/1.png",
      "assets/images/mustahkam/2.png",
      "assets/images/mustahkam/3.png",
      "assets/images/mustahkam/4.png",
      "assets/images/mustahkam/5.png",
    ],
    product7: [
      "assets/images/o'zbegim/1.png",
      "assets/images/o'zbegim/2.png",
      "assets/images/o'zbegim/3.png",
      "assets/images/o'zbegim/4.png",
      "assets/images/o'zbegim/5.png",
    ],
    product8: [
      "assets/images/urban/1.png",
      "assets/images/urban/2.png",
      "assets/images/urban/3.png",
      "assets/images/urban/4.png",
      "assets/images/urban/5.png",
    ],
    product9: [
      "assets/images/virtus/1.png",
      "assets/images/virtus/2.png",
      "assets/images/virtus/3.png",
      "assets/images/virtus/4.png",
      "assets/images/virtus/5.png",
    ],
    product10: [
      "assets/images/zamin/1.png",
      "assets/images/zamin/2.png",
      "assets/images/zamin/3.png",
      "assets/images/zamin/4.png",
      "assets/images/zamin/5.png",
    ],
  };
  
  function openModal(product, title) {
    const mainImage = productImages[product][0];
    const thumbnailContainer = document.getElementById("thumbnailContainer");
  
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalImage").src = mainImage;
    thumbnailContainer.innerHTML = "";
  
    productImages[product].forEach((image) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = image;
      thumbnail.className = "thumbnail";
      thumbnail.onclick = (event) => {
        event.stopPropagation();
        document.getElementById("modalImage").src = image;
      };
  
      thumbnailContainer.appendChild(thumbnail);
    });
  
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  