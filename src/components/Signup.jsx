import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import '../../src/Auth.css';

const Signup = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    region: '',
    farmSize: '',
    mainCrop: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { updateUserProfile } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      setErrors({});
      
      try {
        // Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );

        const user = userCredential.user;
        console.log("User created with UID:", user.uid);
        
        // Prepare user data for Firestore
        const userData = {
          firstName: formData.name,
          email: formData.email,
          FarmLocation: formData.region,
          farmSize: parseInt(formData.farmSize),
          primaryCrop: formData.mainCrop, // Changed from array to string if that's what you want
          irrigationSystem: "Traditional",
          experience: "New farmer",
          createdAt: new Date()
        };
        
        console.log("Attempting to store user data:", userData);
        
        // Store user data in Firestore with the user's UID as document ID
        await setDoc(doc(db, "users", user.uid), userData);
        
        console.log("User data successfully stored in Firestore");

        // Update user context
        setUser({ 
          uid: user.uid, 
          email: user.email, 
          name: formData.name,
          region: formData.region,
          farmSize: formData.farmSize,
          mainCrop: formData.mainCrop
        });
        
      } catch (error) {
        console.error("Error signing up:", error);
        
        // Handle specific Firebase errors
        let errorMessage = "An error occurred during signup. Please try again.";
        
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = "This email is already registered. Please use a different email or sign in.";
            break;
          case 'auth/invalid-email':
            errorMessage = "The email address is not valid.";
            break;
          case 'auth/operation-not-allowed':
            errorMessage = "Email/password accounts are not enabled. Please contact support.";
            break;
          case 'auth/weak-password':
            errorMessage = "The password is too weak. Please choose a stronger password.";
            break;
          // Firestore errors
          case 'permission-denied':
            errorMessage = "Permission denied. Please check your Firestore security rules.";
            break;
          default:
            errorMessage = error.message || errorMessage;
        }
        
        setErrors({ firebase: errorMessage });
      }
      
      setIsLoading(false);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.region) {
      errors.region = 'Please select your region';
    }
    if (!formData.farmSize) {
      errors.farmSize = 'Farm size is required';
    } else if (formData.farmSize <= 0) {
      errors.farmSize = 'Farm size must be positive';
    }
    if (!formData.mainCrop) {
      errors.mainCrop = 'Please select a main crop';
    }
    return errors;
  };

  return (
    <div className="auth-container">
      <div className="auth-card signup-card">
        <div className="auth-header">
          <h1>Join AgriAlert SA</h1>
          <p>Create your account to get personalized farming advice</p>
        </div>
        
        {/* Display Firebase errors */}
        {errors.firebase && (
          <div className="error-message firebase-error">
            {errors.firebase}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                placeholder="Create a password"
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className={errors.region ? 'error' : ''}
              >
                <option value="">Select your region</option>
                <option value="Western Cape">Western Cape</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="Free State">Free State</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                <option value="North West">North West</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="Limpopo">Limpopo</option>
              </select>
              {errors.region && <span className="error-text">{errors.region}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="farmSize">Farm Size (hectares)</label>
              <input
                type="number"
                id="farmSize"
                name="farmSize"
                value={formData.farmSize}
                onChange={handleChange}
                className={errors.farmSize ? 'error' : ''}
                placeholder="Farm size"
                min="1"
              />
              {errors.farmSize && <span className="error-text">{errors.farmSize}</span>}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="mainCrop">Main Crop</label>
            <select
              id="mainCrop"
              name="mainCrop"
              value={formData.mainCrop}
              onChange={handleChange}
              className={errors.mainCrop ? 'error' : ''}
            >
              <option value="">Select your main crop</option>
              <option value="Maize">Maize</option>
              <option value="Wheat">Wheat</option>
              <option value="Grapes">Grapes</option>
              <option value="Citrus">Citrus</option>
              <option value="Potatoes">Potatoes</option>
              <option value="Apples">Apples</option>
              <option value="Sugarcane">Sugarcane</option>
              <option value="Sunflowers">Sunflowers</option>
            </select>
            {errors.mainCrop && <span className="error-text">{errors.mainCrop}</span>}
          </div>
          
          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Sign in here</Link></p>
        </div>
        
        <div className="auth-decoration">
          <div className="decoration plant-1">🌱</div>
          <div className="decoration plant-2">🌾</div>
          <div className="decoration plant-3">🍇</div>
          <div className="decoration water-drop">💧</div>
          <div className="decoration sun">☀️</div>
          <div className="decoration tractor">🚜</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;