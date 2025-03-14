const startScanner = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
      const quaggaConf = {
        inputStream: {
          type: "LiveStream",
          stream: stream,
          constraints: {
            width: window.innerWidth * 0.8,
            height: window.innerWidth * 0.8,
            facingMode: "environment", // rear camera
            aspectRatio: { min: 1, max: 2 },
          },
        },
        decoder: {
          readers: ["ean_reader"], // only EAN-13 barcodes
        },
      };

      Quagga.init(quaggaConf, (err) => {
        if (err) {
          return console.log("Quagga initialization failed:", err);
        }
        Quagga.start();
      });

      Quagga.onDetected((result) => {
        const barcode = result.codeResult.code;
        console.log("Barcode detected:", barcode);
        Quagga.stop();
        window.location.href = "../pages/product.html";
      });
    })
    .catch((err) => {
      console.log("Camera access denied:", err);
      alert("Please allow camera access to scan barcodes.");
    });
};

document.addEventListener("DOMContentLoaded", startScanner);
