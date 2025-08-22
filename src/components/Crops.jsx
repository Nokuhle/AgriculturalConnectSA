// components/Crops.js
import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useUser } from '../contexts/UserContext';
import '../../src/Crops.css';

const Crops = () => {
  const { crops: allCrops, currentRegion } = useData();
  const { userProfile, updateUserProfile } = useUser();
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
  };

  const addCropToFarm = () => {
    if (selectedCrop && !userProfile.crops.includes(selectedCrop.name)) {
      const updatedCrops = [...userProfile.crops, selectedCrop.name];
      updateUserProfile({ crops: updatedCrops });
    }
  };

  const regionalCrops = allCrops.filter(crop => 
    crop.regions.includes(currentRegion)
  );

  return (
    <div className="crops-page">
      <div className="page-header">
        <h1>Crop Management</h1>
        <p>Information for crops in {currentRegion}</p>
      </div>

      <div className="crops-content">
        <div className="crops-list">
          <h2>Recommended Crops for {currentRegion}</h2>
          <div className="crop-cards">
            {regionalCrops.map(crop => (
              <div 
                key={crop.id} 
                className={`crop-card ${selectedCrop?.id === crop.id ? 'selected' : ''}`}
                onClick={() => handleCropSelect(crop)}
              >
                <h3>{crop.name}</h3>
                <p>Water Needs: {crop.waterNeeds}</p>
                <p>Season: {crop.season}</p>
                <p>Growth Period: {crop.growthPeriod}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="crop-details">
          {selectedCrop ? (
            <>
              <h2>{selectedCrop.name} Details</h2>
              <div className="details-card">
                <h3>Growing Tips</h3>
                <ul>
                  {selectedCrop.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>

                <h3>Common Pests</h3>
                <div className="pests-list">
                  {selectedCrop.pests.map((pest, index) => (
                    <span key={index} className="pest-tag">{pest}</span>
                  ))}
                </div>

                <h3>Common Diseases</h3>
                <div className="diseases-list">
                  {selectedCrop.diseases.map((disease, index) => (
                    <span key={index} className="disease-tag">{disease}</span>
                  ))}
                </div>

                {!userProfile.crops.includes(selectedCrop.name) && (
                  <button className="btn-primary add-crop-btn" onClick={addCropToFarm}>
                    Add to My Crops
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="select-crop-prompt">
              <p>Select a crop to view details and management recommendations</p>
            </div>
          )}
        </div>

        <div className="my-crops">
          <h2>My Crops</h2>
          {userProfile.crops && userProfile.crops.length > 0 ? (
            <div className="my-crops-list">
              {userProfile.crops.map((cropName, index) => {
                const crop = allCrops.find(c => c.name === cropName);
                return crop ? (
                  <div key={index} className="my-crop-item">
                    <h3>{crop.name}</h3>
                    <p>Status: Healthy</p>
                    <p>Next action: {crop.season === 'Summer' ? 'Monitor water needs' : 'Prepare for planting'}</p>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <p>You haven't added any crops to your farm yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Crops;