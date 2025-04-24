"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [invalidEmailError, setInvalidEmailError] = useState(false);
  const [invalidCredentialsError, setInvalidCredentialsError] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Using AuthContext to manage login state
  const { login } = useAuth();
  const router = useRouter();

  const checkStrength = (password: string) => {
    if (password.length < 6) return "Weak";
    else if (password.length <= 9) return "Medium";
    else if (password.length > 9 && /\W|\d/.test(password)) return "Strong";
    return "Medium";
  };

  const checker = () => {
    let hasError = false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (email !== "" && !emailPattern.test(email)) {
      setInvalidEmailError(true);
      hasError = true;
    } else {
      setInvalidEmailError(false);
    }

    // Email required validation
    if (email === "") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    // Password required validation
    if (password === "") {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (!hasError) {
      setIsLoading(true);
      setInvalidCredentialsError(false);

      setTimeout(() => {
        setIsLoading(false);

        // Attempt login with stored credentials in localStorage
        const success = login(email, password);
        if (success) {
          setSubmitSuccess(true);
          setTimeout(() => setSubmitSuccess(false), 3000);
          // Redirect to dashboard on successful login
          router.push("/dashboard");
        } else {
          setInvalidCredentialsError(true);
        }

        // Clear fields after attempt
        setEmail("");
        setPassword("");
        setPasswordStrength("");
        setEmailTouched(false);
        setPasswordTouched(false);
      }, 1500);
    }
  };

  return (
    <div className="space-y-6 text-black">
      {/* Email Input */}
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {emailTouched && email === "" && (
          <p className="text-red-500 text-sm mt-1">Email is required</p>
        )}
        {invalidEmailError && (
          <p className="text-red-500 text-sm mt-1">Invalid email address</p>
        )}
      </div>

      {/* Password Input */}
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            const value = e.target.value;
            setPassword(value);
            setPasswordStrength(checkStrength(value));
          }}
          onBlur={() => setPasswordTouched(true)}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {passwordTouched && password === "" && (
          <p className="text-red-500 text-sm mt-1">Password is required</p>
        )}
        {passwordStrength && (
          <p
            className={`text-sm mt-1 ${
              passwordStrength === "Weak"
                ? "text-red-500"
                : passwordStrength === "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {passwordStrength} Password
          </p>
        )}
      </div>

      {/* Error for Invalid Credentials */}
      {invalidCredentialsError && (
        <p className="text-red-600 text-sm text-center font-medium">
          Invalid email or password
        </p>
      )}

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={checker}
          className="bg-blue-600 w-full text-white px-6 py-3 rounded-xs hover:bg-blue-700 transition-all flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Login"
          )}
        </button>
      </div>

      {/* Success Feedback */}
      {submitSuccess && (
        <div className="text-green-600 text-center font-medium transition-opacity duration-500">
          Logged in successfully!
        </div>
      )}
    </div>
  );
};
