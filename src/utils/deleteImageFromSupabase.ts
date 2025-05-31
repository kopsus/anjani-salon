import supabase from "@/lib/supabase/init";

export const deleteImageFromSupabase = async (imageUrl: string) => {
  try {
    const url = new URL(imageUrl);
    const pathInBucket = decodeURIComponent(
      url.pathname.split("/storage/v1/object/public/anjani/")[1]
    );

    if (!pathInBucket) throw new Error("Path gambar tidak ditemukan dalam URL");

    const { error } = await supabase.storage
      .from("anjani")
      .remove([pathInBucket]);
    if (error) throw error;

    return true;
  } catch (error) {
    console.error("Gagal menghapus file dari Supabase:", error);
    return false;
  }
};
