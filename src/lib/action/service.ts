"use server";

import { revalidatePath } from "next/cache";
import { ServiceSchema } from "../schemas/service";
import prisma from "../prisma";
import { responServerAction } from "./responseServerAction";
import { uploadImage } from "./uploadImage";
import path from "path";
import fs from "fs";

export const createService = async (data: ServiceSchema, image?: FormData) => {
  try {
    const existingService = await prisma.service.findUnique({
      where: {
        title: data.title,
      },
    });

    if (existingService) {
      return responServerAction({
        statusError: true,
        messageError: `Layanan dengan nama ${existingService.title} sudah ada`,
        data: null,
      });
    }

    let imagePath = null;

    if (image) {
      const result = await uploadImage(image);
      if (result.error.status) {
        return responServerAction({
          statusError: true,
          messageError: result.error.message,
        });
      }
      imagePath = result.data;
    }

    const service = await prisma.service.create({
      data: {
        title: data.title,
        image: imagePath,
      },
    });

    revalidatePath("/services");
    return responServerAction({
      statusSuccess: true,
      messageSuccess: "Berhasil membuat layanan",
      data: service,
    });
  } catch (error) {
    console.error(error);
    return responServerAction({
      statusError: true,
      messageError: "Gagal membuat layanan",
    });
  }
};

export const updateService = async (
  id: string,
  data: ServiceSchema,
  image?: FormData
) => {
  try {
    // Cek apakah ada layanan lain dengan nama yang sama, kecuali layanan yang sedang diupdate
    const existingService = await prisma.service.findUnique({
      where: {
        title: data.title,
        NOT: { id },
      },
    });

    if (existingService) {
      return responServerAction({
        statusError: true,
        messageError: `Layanan dengan nama ${existingService.title} sudah ada`,
        data: null,
      });
    }

    // Ambil data layanan lama
    const oldService = await prisma.service.findUnique({
      where: { id },
    });

    if (!oldService) {
      return responServerAction({
        statusError: true,
        messageError: "Layanan tidak ditemukan",
      });
    }

    let imagePath = oldService.image;

    if (image) {
      const imageFile = image.get("image");
      if (imageFile && imageFile instanceof File) {
        const result = await uploadImage(image);
        if (result.error.status) {
          return responServerAction({
            statusError: true,
            messageError: result.error.message,
          });
        }

        // Hapus gambar lama jika ada
        if (oldService.image) {
          const oldImagePath = path.join(
            process.cwd(),
            "public/uploads",
            oldService.image
          );
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }

        imagePath = result.data;
      }
    }

    await prisma.service.update({
      where: { id },
      data: {
        title: data.title,
        image: imagePath,
      },
    });

    revalidatePath("/services");
    return responServerAction({
      statusSuccess: true,
      messageSuccess: "Berhasil mengubah data layanan",
    });
  } catch (err) {
    console.log(err);
    return responServerAction({
      statusError: true,
      messageError: "Gagal mengubah data layanan",
    });
  }
};

export const deleteService = async (id: string) => {
  try {
    // Ambil data layanan sebelum dihapus
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      return responServerAction({
        statusError: true,
        messageError: "Layanan tidak ditemukan",
      });
    }

    // Hapus layanan dari database
    await prisma.service.delete({
      where: { id },
    });

    // Hapus gambar dari folder `public/uploads` jika ada
    if (service.image) {
      const imagePath = path.join(
        process.cwd(),
        "public/uploads",
        service.image
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    revalidatePath("/services");
    return responServerAction({
      statusSuccess: true,
      messageSuccess: "Berhasil menghapus layanan",
    });
  } catch (error) {
    console.error(error);
    return responServerAction({
      statusError: true,
      messageError: "Gagal menghapus layanan",
    });
  }
};
