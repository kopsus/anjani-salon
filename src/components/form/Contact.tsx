"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"; // pastikan sesuai path komponenmu

const FormContact = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const noWa = "6287724002299"; // Ganti dengan nomor tujuanmu
    const text = `Halo, saya ingin menghubungi Anda.%0A%0A*Nama:* ${nama}%0A*Email:* ${email}%0A*Pesan:* ${pesan}`;
    const url = `https://wa.me/${noWa}?text=${text}`;

    window.open(url, "_blank");

    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8">
        <div className="flex flex-col gap-[10px]">
          <label className="text-sm">Nama Lengkap</label>
          <Input
            type="text"
            placeholder="Nama lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="text-sm">Email</label>
          <Input
            type="email"
            placeholder="Example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] h-full">
        <label className="text-sm">Pesan Anda</label>
        <textarea
          className="px-4 py-2 outline-primary border border-primary rounded h-44 lg:h-full"
          placeholder="Masukan Pesan Anda"
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="py-2 rounded-full text-white bg-primary hover:bg-primary/90 transition cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default FormContact;
