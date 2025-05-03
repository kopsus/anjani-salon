/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Produk` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Produk_title_key` ON `Produk`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `Service_title_key` ON `Service`(`title`);
