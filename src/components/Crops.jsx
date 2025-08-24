import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useUser } from '../contexts/UserContext';
import '../../src/Crops.css';

const Crops = () => {
  const { crops: allCrops } = useData();
  const { userProfile, updateUserProfile } = useUser();
  const [selectedCrop, setSelectedCrop] = useState(null);

  // Use user's region instead of currentRegion from DataContext
  const userRegion = userProfile?.FarmLocation || userProfile?.region;

  const handleCropSelect = (crop) => {
    setSelectedCrop(crop);
  };

  const addCropToFarm = () => {
    if (selectedCrop) {
      // Check if the crop is already in the user's crops array
      const userCrops = userProfile.crops || [];
      if (!userCrops.includes(selectedCrop.name)) {
        const updatedCrops = [...userCrops, selectedCrop.name];
        updateUserProfile({ crops: updatedCrops });
      }
    }
  };

  // Filter crops by user's region
  const regionalCrops = allCrops.filter(crop => 
    crop.regions.includes(userRegion)
  );

  return (
    <div className="crops-page">
      <div className="page-header">
        <h1>Crop Management</h1>
        <p>Information for crops in {userRegion}</p>
      </div>

      <div className="crops-content">
        <div className="crops-list">
          <h2>Recommended Crops for {userRegion}</h2>
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

                {(!userProfile.crops || !userProfile.crops.includes(selectedCrop.name)) && (
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
          {userProfile?.primaryCrop || (userProfile?.crops && userProfile.crops.length > 0) ? (
            <div className="my-crops-list">
              {userProfile.primaryCrop && (
                <div className="my-crop-item">
                  <h3>{userProfile.primaryCrop}</h3>
                  <p>Primary Crop</p>
                  <p>Status: Healthy</p>
                </div>
              )}
              {userProfile.crops && userProfile.crops.map((cropName, index) => {
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