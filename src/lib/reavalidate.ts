import { revalidatePath } from "next/cache";

export const revalidateProduct = () => {
  const pathsToRevalidate = ["/products", "/product", "/"];
  pathsToRevalidate.forEach((path) => revalidatePath(path));
};

export const revalidateService = () => {
  const pathsToRevalidate = ["/services", "/service", "/"];
  pathsToRevalidate.forEach((path) => revalidatePath(path));
};
