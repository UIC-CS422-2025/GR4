const startScanner = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => {
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
            alert(
              "Failed to initialize scanner. Please check camera permissions."
            );
            return;
          }
          Quagga.start();
        }
      );
    })
    .catch((err) => {
      console.error("Camera access denied:", err);
      alert("Please allow camera access to scan barcodes.");
    });

  Quagga.onDetected((result) => {
    const barcode = result.codeResult.code; // idk save for future reference
    console.log("Barcode detected:", barcode);
    Quagga.stop();
    window.location.href = "../pages/product.html";
  });
};

document.addEventListener("DOMContentLoaded", startScanner);
