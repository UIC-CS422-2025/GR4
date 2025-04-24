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

const fetchBarcode = async (barcode) => {
  const prevHTML = document.body.innerHTML;
  document.body.innerHTML = "<img src='../images/loading.gif' />";

  try {
    console.log("Fetching barcode:", barcode);

    const response = await fetch(`https://06062022.xyz/barcode/${barcode}`);
    console.log("Response received:", response);

    const data = await response.json();
    console.log("Parsed JSON:", data);

    if (!response.ok || data["product_name"] === "N/A") {
      throw new Error("Product not found");
    }

    localStorage.setItem("productData", JSON.stringify(data));
    window.location.href = "../pages/product.html";
  } catch (error) {
    console.error("Error fetching product info:", error);
    document.body.innerHTML = prevHTML;
    alert(error);
    Quagga.init(quaggaConf, (err) => {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
    });
  }
};

const handleBarcodeSubmit = async (event) => {
  event.preventDefault();
  const input = document.querySelector(".barcode-input");
  const cleanedValue = input.value.replace(/\s+/g, ""); // strip all spaces

  if (/^\d+$/.test(cleanedValue)) {
    console.log(`Barcode submitted: ${cleanedValue}`);
    await fetchBarcode(cleanedValue);
  }

  input.value = "";
};

const startScanner = () => {
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

    await fetchBarcode(barcode);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  startScanner();

  const form = document.querySelector(".barcode-form");
  if (form) {
    form.addEventListener("submit", handleBarcodeSubmit);
  }

  // Always show dietary preference
  const header = document.querySelector(".header");
  header.querySelector("h1").textContent = `Preference: ${
    localStorage.getItem("preference")
  }`;

  const cameraPerms = await navigator.permissions.query({ name: "camera" });
  const scannerLabel = document.querySelector(".scanner-label");
  const scannerLabelOriginalText = scannerLabel.textContent;

  if (cameraPerms.state !== "granted") {
    scannerLabel.textContent = "Please grant camera permissions";
  }

  cameraPerms.addEventListener("change", () => {
    if (cameraPerms.state === "granted") {
      scannerLabel.textContent = scannerLabelOriginalText;
    }
  });
});
