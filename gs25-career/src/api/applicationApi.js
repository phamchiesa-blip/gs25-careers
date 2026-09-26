const API_URL = "http://localhost:5000/api/applications";

/**
 * Gửi đơn ứng tuyển lên backend
 * @param {Object} applicationData - Dữ liệu ứng viên
 */
export const submitApplication = async (applicationData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicationData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Gửi đơn ứng tuyển thất bại");
  }

  return data;
};

/**
 * Helper chuyển File sang Base64 để gửi kèm đơn ứng tuyển
 * @param {File} file
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return resolve(null);
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve({
        name: file.name,
        type: file.type,
        size: file.size,
        content: reader.result.split(",")[1],
      });
    };
    reader.onerror = (error) => reject(error);
  });
};
