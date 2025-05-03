"use server";

import { FormLoginSchema } from "../schemas/login";
import { responServerAction } from "./responseServerAction";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = process.env.JWT_SECRET!;

export async function login(values: FormLoginSchema) {
  const { username, password } = values;

  // cek apakah terdapat data yang dikirim
  if (!values) {
    return responServerAction({
      statusError: true,
      messageError: "Username dan password harus diisi",
    });
  }

  try {
    // cek untuk mencari username
    const user = await prisma.user.findUnique({
      where: { username },
    });

    // jika username tidak ditemukan di semua tabel
    if (!user) {
      return responServerAction({
        statusError: true,
        statusSuccess: false,
        messageError: "Username tidak ditemukan",
      });
    }

    // validate hash password
    const isPasswordValid = await bcrypt.compare(password, user.password!);

    // cek password
    if (!isPasswordValid) {
      return responServerAction({
        statusError: true,
        messageError: "Username atau password salah",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    (await cookies()).set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // ✅ aman untuk dev
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return responServerAction({
      statusSuccess: true,
      messageSuccess: "Login berhasil",
      data: { id: user.id, username: user.username },
    });
  } catch (error) {
    return responServerAction({
      statusError: true,
      messageError: "Terjadi kesalahan",
    });
  }
}
