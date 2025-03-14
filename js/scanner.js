const startScanner = () => {
  const quaggaConf = {
    inputStream: {
      type: "LiveStream",
      constraints: {
        width: window.innerWidth * 0.8,
        height: window.innerWidth * 0.8,
        facingMode: "environment", // use rear camera
        aspectRatio: { min: 1, max: 2 },
      },
    },
    decoder: {
      readers: ["ean_reader", "upc_reader"], // only EAN and UPC barcode types
    },
  };

  Quagga.init(quaggaConf, (err) => {
    if (err) {
      return console.log(err);
    }
    Quagga.start();
  });

  Quagga.onDetected(async (result) => {
    const barcode = result.codeResult.code;
    console.log("Barcode detected:", barcode);

    Quagga.stop();

    try {
      const response = await fetch(`https://06062022.xyz/barcode/${barcode}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Product not found");
      }

      localStorage.setItem("productData", JSON.stringify(data));

      window.location.href = "../pages/product.html";
    } catch (error) {
      console.error("Error fetching product info:", error);
      alert("Product not found");
    }
  });
};

document.addEventListener("DOMContentLoaded", startScanner);
