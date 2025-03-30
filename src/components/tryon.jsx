import { useLocation } from "react-router-dom";
import { useState } from "react";

const TryOnPage = () => {
  const location = useLocation();
  const { selectedDress } = location.state || {}; // Extract passed dress

  const [userDetails, setUserDetails] = useState({
    height: "",
    weight: "",
    bodyType: "",
    uploadedImage: null,
  });

  const [tryOnImage, setTryOnImage] = useState(selectedDress.imageUrl || ""); // Default image

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserDetails({ ...userDetails, uploadedImage: URL.createObjectURL(file) });
    }
  };

  const handleTryOn = async () => {
    if (!userDetails.uploadedImage) {
      alert("Please upload your image before trying on.");
      return;
    }

    setTryOnImage(userDetails.uploadedImage); // Simulated API response (replace with backend)
  };

  return (
    <div className="tryon-container">
      {/* Left Section: User Inputs */}
      <div className="input-section">
        <h2>Customize Your Try-On</h2>
        <label>Height (cm):</label>
        <input type="number" name="height" value={userDetails.height} onChange={handleChange} />

        <label>Weight (kg):</label>
        <input type="number" name="weight" value={userDetails.weight} onChange={handleChange} />

        <label>Body Type:</label>
        <select name="bodyType" value={userDetails.bodyType} onChange={handleChange}>
          <option value="">Select</option>
          <option value="slim">Slim</option>
          <option value="average">Average</option>
          <option value="curvy">Curvy</option>
        </select>

        <label>Upload Your Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <button onClick={handleTryOn}>Try It On</button>
      </div>

      {/* Right Section: Display Try-On Image */}
      <div className="result-section">
        <div className="image-preview">
          {selectedDress && <h3>{selectedDress.name}</h3>}
          <img src={tryOnImage} alt="Try-On Result" />
        </div>
      </div>
    </div>
  );
};

const handleTryOn = async () => {
  if (!userDetails.uploadedImage) {
      alert("Please upload your image before trying on.");
      return;
  }

  const formData = new FormData();
  formData.append('image', userDetails.uploadedImage);
  formData.append('height', userDetails.height);
  formData.append('weight', userDetails.weight);
  formData.append('bodyType', userDetails.bodyType);

  try {
      const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
      });

      const data = await response.json();
      if (data.imageUrl) {
          setTryOnImage(`http://localhost:5000${data.imageUrl}`);
      } else {
          alert("Failed to process image.");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Server error.");
  }
};


export default TryOnPage;
