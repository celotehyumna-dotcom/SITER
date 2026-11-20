
import { app, auth, db } from "./firebase-config.js";

const hasil = document.getElementById("hasil");

try {
  if (app && auth && db) {
    hasil.textContent =
      "KONEKSI FIREBASE BERHASIL";

    hasil.style.color = "green";

    document.getElementById("project").textContent =
      app.options.projectId;

    console.log("Firebase berhasil dimuat");
  }
} catch (error) {
  hasil.textContent = "Koneksi gagal: " + error.message;
  hasil.style.color = "red";
  console.error(error);
}
