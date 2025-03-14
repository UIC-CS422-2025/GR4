const startScanner = () => {
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: window.innerWidth * 0.8,
          height: window.innerWidth * 0.8,
          facingMode: "environment", // use rear camera
        },
      },
      decoder: {
        readers: ["ean_reader"], // only EAN-13 barcodes
      },
    },
    (err) => {
      if (err) {
        console.error("Quagga initialization failed: ", err);
        return;
      }
      Quagga.start();
    }
  );

  Quagga.onDetected((result) => {
    const barcode = result.codeResult.code; // idk save for future reference
    Quagga.stop();
    window.location.href = "../pages/product.html";
  });
};

document.addEventListener("DOMContentLoaded", startScanner);
