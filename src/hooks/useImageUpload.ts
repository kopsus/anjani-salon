import { useState } from "react";
import supabase from "@/lib/supabase/init";
import { toast } from "react-toastify";

export function useImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const uploadToSupabase = async (bucket: string) => {
    if (!selectedFile) return null;

    const ext = selectedFile.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;
    const filePath = `${bucket}/${fileName}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, selectedFile, { upsert: true });

    if (error) {
      toast.error("Gagal upload gambar");
      return null;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  };

  const resetImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  return {
    selectedFile,
    previewUrl,
    setPreviewUrl, // ← pastikan ini diexport
    handleFileSelect,
    uploadToSupabase,
    resetImage,
  };
}
