import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
       
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Your Home Away from Home!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with fellow travelers and make memories that last a lifetime.
          Book your stay, share stories, and experience community living.
        </p>
      </div>

     
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">
          Sign up with
        </h2>
        <div className="flex flex-col space-y-4">
          
          <button className="flex items-center justify-center w-full px-4 py-3 text-white bg-red-600 rounded-lg hover:bg-red-500">
            <FaGoogle className="mr-3" /> Sign up with Google
          </button>
 
          
          <button className="flex items-center justify-center w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500">
            <FaFacebookF className="mr-3" /> Sign up with Facebook
          </button>

           
          <button className="flex items-center justify-center w-full px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-800">
            <FaApple className="mr-3" /> Sign up with Apple
          </button>

          
          <button className="flex items-center justify-center w-full px-4 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300">
            ✉️ Sign up with Email
          </button>
        </div>
      </div>

       
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          By signing up, you agree to our{" "}
          <a
            href="/terms-of-service"
            className="text-blue-500 hover:underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            className="text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
