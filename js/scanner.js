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
      readers: ["ean_reader"], // only EAN-13 barcodes
    },
  };

  Quagga.init(quaggaConf, (err) => {
    if (err) {
      return console.log(err);
    }
    Quagga.start();
  });

  Quagga.onDetected((result) => {
    const barcode = result.codeResult.code; // idk save for future reference
    console.log("Barcode detected:", barcode);
    Quagga.stop();
    window.location.href = "../pages/product.html";
  });
};

document.addEventListener("DOMContentLoaded", startScanner);
