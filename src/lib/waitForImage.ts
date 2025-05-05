export async function waitForImageWithPolling(
  imageUrl: string,
  maxRetries = 10,
  interval = 1000
) {
  return new Promise((resolve) => {
    let attempts = 0;
    const checkImage = async () => {
      try {
        const response = await fetch(imageUrl, {
          method: "HEAD",
          cache: "no-cache",
        });
        if (response.ok) {
          resolve(true);
          return;
        }
      } catch (error) {
        console.log(`Menunggu gambar tersedia... percobaan ${attempts + 1}`);
      }
      attempts++;
      if (attempts >= maxRetries) {
        resolve(false);
        return;
      }
      setTimeout(checkImage, interval);
    };
    checkImage();
  });
}
