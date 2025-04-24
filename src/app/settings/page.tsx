"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-header text-3xl font-bold text-center text-sky-800 mt-5">
        Privacy Policy
      </h1>
      <p className="privacy-policy-intro text-lg text-gray-700 mt-4 text-center">
        Welcome to DevClyst's Admin Panel! We take your privacy seriously, but we also
        like to keep things light and fun.
      </p>
      <div className="privacy-policy-content mt-6 px-4">
        <h2 className="text-2xl font-semibold text-sky-600">
          1. What Information Do We Collect?
        </h2>
        <p className="text-gray-600">
          We collect basic information like your name, email, and phone number.
          Don't worry, we won't be sending you a million emails (unless you sign
          up for our newsletter... just kidding, we don’t have one yet).
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          2. Why Do We Collect This Information?
        </h2>
        <p className="text-gray-600">
          We use this information to make our admin panel experience better for
          you! It helps us improve features, send important updates, and ensure
          you're not locked out of your account. We promise to keep things
          minimal and only ask for what we need.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          3. How Do We Use Your Information?
        </h2>
        <p className="text-gray-600">
          We don’t sell or share your information with shady companies. Nope,
          not a chance. The only people who will see your data are the ones
          working hard to make the admin panel awesome for you. It's all about
          improving your experience. If we ever need to contact you for
          something important, rest assured, it'll be for a good reason (like
          bug fixes or product updates, no spam!).
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          4. Cookies – Yummy, but Not the Kind You Eat!
        </h2>
        <p className="text-gray-600">
          Yes, we use cookies (the digital kind, not the snackable ones). These
          help us track your preferences so we can tailor the admin panel
          experience just for you. We promise, no crumbs left behind – your data
          is safe with us!
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          5. Your Rights – You're the Boss!
        </h2>
        <p className="text-gray-600">
          You can ask us to update or delete your information anytime! You’re in
          charge here, and we’ll be happy to accommodate your requests. Just
          drop us a line if you need anything adjusted.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          6. Security – We’ve Got Your Back!
        </h2>
        <p className="text-gray-600">
          We do our best to keep your info safe, like a digital fortress
          (without the dragons). Our security measures are top-notch, but
          remember – we can’t protect you from your own bad password choices.
          Please don’t use “123456” or “password” (we’ve seen it all!).
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          7. Changes to This Policy – We’re Always Improving!
        </h2>
        <p className="text-gray-600">
          We may update this privacy policy from time to time. If we do, we’ll
          make sure to let you know. We won’t surprise you with any big changes,
          and you’ll always be in the loop about how we handle your data.
        </p>

        <h2 className="text-2xl font-semibold text-sky-600 mt-4">
          8. Contact Us – Don’t Be Shy!
        </h2>
        <p className="text-gray-600">
          If you’ve got questions, feedback, or just want to say hi, feel free
          to reach out! We love hearing from our users, and we’re always happy
          to help.
        </p>

        <p className="text-gray-600 mt-4 text-center">
          Thank you for trusting us with your information! Now go ahead and
          enjoy using the admin panel. We’re working hard to make it even
          better.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
