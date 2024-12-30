// Fungsi untuk memperbarui harga
function updateTotalPrice(planId) {
  var pricePerMonth;
  if (planId === 1) pricePerMonth = 20; // Harga plan 1 (Silver)
  if (planId === 2) pricePerMonth = 30; // Harga plan 2 (Gold)
  if (planId === 3) pricePerMonth = 50; // Harga plan 3 (Platinum)

  var quantity = document
    .getElementById("quantity-" + planId)
    .innerText.replace(" Month", "");
  var totalPrice = pricePerMonth * parseInt(quantity);

  // Terapkan diskon 20% jika quantity >= 12
  if (quantity >= 12) {
    totalPrice = totalPrice * 0.8; // Diskon 20%
  }

  // Format harga untuk menghapus ".00" jika harga adalah angka bulat
  var formattedPrice = totalPrice.toFixed(2);
  if (formattedPrice.endsWith(".00")) {
    formattedPrice = formattedPrice.slice(0, -3); // Hapus ".00" jika ada
  }

  document.getElementById("unit-price-" + planId).innerText =
    "$" + formattedPrice + " USD"; // Update harga total di unit-price
}

// Fungsi untuk increment
function increment(planId) {
  var quantity = document.getElementById("quantity-" + planId);
  quantity.innerText =
    parseInt(quantity.innerText.replace(" Month", "")) + 1 + " Month";
  updateTotalPrice(planId); // Update harga total setelah increment
}

// Fungsi untuk decrement
function decrement(planId) {
  var quantity = document.getElementById("quantity-" + planId);
  if (parseInt(quantity.innerText.replace(" Month", "")) > 12) {
    quantity.innerText =
      parseInt(quantity.innerText.replace(" Month", "")) - 1 + " Month";
    updateTotalPrice(planId); // Update harga total setelah decrement
  }
}

// Update harga total saat pertama kali dimuat
updateTotalPrice(1);
updateTotalPrice(2);
updateTotalPrice(3);

// Fungsi untuk menambah jumlah bulan
function incrementMonth(planId) {
  let quantity = document.getElementById(`quantityMonth-${planId}`);
  quantity.innerText = parseInt(quantity.innerText) + 1 + " Month";
  calculateTotal(planId); // Update total harga setelah penambahan bulan
}

// Fungsi untuk mengurangi jumlah bulan
function decrementMonth(planId) {
  let quantity = document.getElementById(`quantityMonth-${planId}`);
  if (parseInt(quantity.innerText) > 1) {
    quantity.innerText = parseInt(quantity.innerText) - 1 + " Month";
    calculateTotal(planId); // Update total harga setelah pengurangan bulan
  }
}

// Fungsi untuk menghitung total biaya
function calculateTotal(planId) {
  let quantity = parseInt(
    document
      .getElementById(`quantityMonth-${planId}`)
      .innerText.replace(" Month", "")
  );
  let unitPrice;

  // Menentukan harga per bulan berdasarkan paket
  switch (planId) {
    case 1:
      unitPrice = 20; // Harga untuk Silver
      break;
    case 2:
      unitPrice = 30; // Harga untuk Gold
      break;
    case 3:
      unitPrice = 50; // Harga untuk Platinum
      break;
    default:
      unitPrice = 20;
  }

  // Mengecek apakah jumlah bulan >= 12, jika iya, beri diskon 20%
  let totalPrice = unitPrice * quantity;
  if (quantity >= 12) {
    totalPrice = totalPrice * 0.8; // Diskon 20%
  }

  // Format harga total dengan memeriksa apakah harga adalah angka bulat
  let formattedPrice = totalPrice.toFixed(2);
  if (formattedPrice.endsWith(".00")) {
    formattedPrice = formattedPrice.slice(0, -3); // Hapus ".00" jika ada
  }

  // Menampilkan total harga dengan diskon jika ada
  document.getElementById(
    `unit-Month-${planId}`
  ).innerText = `$${formattedPrice} USD`;
}
