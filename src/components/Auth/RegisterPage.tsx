"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [strengthMessage, setStrengthMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const evaluateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 2) {
      setPasswordStrength("Weak");
      setStrengthMessage("Too easy to guess. Add more variety!");
    } else if (score <= 4) {
      setPasswordStrength("Moderate");
      setStrengthMessage("Looking better! Try adding symbols 🔐");
    } else {
      setPasswordStrength("Strong");
      setStrengthMessage("Nice! Your password is strong 💪");
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "Weak":
        return "text-red-500";
      case "Moderate":
        return "text-yellow-500";
      case "Strong":
        return "text-green-600";
      default:
        return "text-gray-500";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage("");

    let hasError = false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      setEmailError("Invalid email format.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!name || name.trim().length < 3) {
      setNameError("Name must be at least 3 characters.");
      hasError = true;
    } else {
      setNameError("");
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError("Phone must be a 10-digit number.");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    // Check if user already exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = storedUsers.some((user: any) => user.email === email);

    if (userExists) {
      setFeedbackMessage("User with this email already exists.");
      setIsSubmitting(false);
      return;
    }

    // Create a new user object
    const newUser = { email, name, phone, password };

    // Save new user to localStorage
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setName("");
      setPhone("");
      setPassword("");
      setPasswordStrength("");
      setStrengthMessage("");
      setFeedbackMessage("Congrats! You just registered....");
    }, 1500);
  };

  const inputClass =
    "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all";

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-xl mx-auto border border-gray-300 text-black">
      <h1 className="text-3xl font-semibold text-center text-sky-700 mb-6">
        Register
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            className={inputClass}
          />
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone..."
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError("");
            }}
            className={inputClass}
          />
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className={inputClass}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
              evaluateStrength(e.target.value);
            }}
            className={inputClass}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        {/* Password Strength */}
        {password && (
          <div className="text-sm mt-1">
            <span className={`font-semibold ${getStrengthColor()}`}>
              {passwordStrength}
            </span>{" "}
            <span className="text-gray-600">{strengthMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>

        {/* Feedback */}
        {feedbackMessage && (
          <p className="text-green-600 font-medium text-center mt-2">
            {feedbackMessage}
          </p>
        )}
      </form>
    </div>
  );
}
