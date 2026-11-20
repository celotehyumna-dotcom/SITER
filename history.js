import { db, auth } from "./firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

/*
 * PUSAT PENCATATAN HISTORY SITER
 * Panggil hanya setelah operasi utama Firestore berhasil.
 */

export async function catatHistory(data = {}) {
    const user = auth.currentUser;

    if (!user) {
        throw new Error("Pengguna belum login. History tidak dicatat.");
    }

    const email = user.email || "";
    const payload = {
        tanggal: new Date().toISOString(),
        createdAt: serverTimestamp(),
        jenis: String(data.jenis || "LAINNYA").trim().toUpperCase(),
        nik: String(data.nik || "-").trim(),
        nama: String(data.nama || "-").trim(),
        keterangan: String(data.keterangan || "-").trim(),
        petugas: email || "Pengguna SITER",
        emailPetugas: email,
        uidPetugas: user.uid,
        halaman: String(data.halaman || window.location.pathname),
        detail: data.detail == null ? null : data.detail
    };

    try {
        const hasil = await addDoc(collection(db, "history_karyawan"), payload);
        return hasil.id;
    } catch (error) {
        console.error("Gagal mencatat history SITER:", error);
        throw error;
    }
}
