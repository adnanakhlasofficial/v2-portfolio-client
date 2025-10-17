export async function uploadImage(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', process.env.NEXT_PUBLIC_PRESET_NAME as string);
  formData.append('cloud_name', process.env.NEXT_PUBLIC_CLOUD_NAME as string);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );
    const data = await res.json();
    console.log(data);
    return data.secure_url.replace('/upload/', '/upload/f_auto,q_auto/');
  } catch {
    return null;
  }
}
