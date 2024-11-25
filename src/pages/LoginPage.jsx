import React from "react";

function LoginPage() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white">
            <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 text-center">
                <img
                    src="/LogoCollabro.png"
                    alt="Collabro Graphic"
                    className="w-[250px] md:w-[375px] mx-auto"
                />
                <h2 className="text-xl md:text-2xl font-bold font-figtree text-green-600 mt-4 md:mt-6">
                    Find Your Perfect CollaBro-lators Today.
                </h2>
            </div>

            <div className="md:w-1/2 flex justify-center items-center px-4 py-8 md:p-0">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-300 p-6 sm:p-8 md:p-12">
                    <h1 className="text-2xl md:text-3xl font-bold font-figtree text-green-600 text-center mb-6 md:mb-8">
                        Hey, Welcome Back
                    </h1>
                    
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium font-figtree text-gray-900">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="block w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium font-figtree text-gray-900">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="block w-full mt-1 p-2 md:p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 text-sm"
                                required
                            />
                            <a href="/forgot-password" className="text-sm text-green-600 hover:text-green-700 mt-2 block text-right font-figtree">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-figtree font-medium py-2 md:py-2.5 rounded-xl shadow-md transition-colors duration-200"
                        >
                            Log In
                        </button>

                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500 text-sm font-figtree md:text-base">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 font-medium font-figtree py-2 md:py-2.5 rounded-xl shadow-sm"
                        >
                            <img
                                src="/GoogleIcon.png"
                                alt="Google Icon"
                                className="w-4 md:w-5"
                            />
                            Continue with Google
                        </button>
                    </form>

                    <p className="text-sm text-center font-figtree text-gray-600 mt-6 md:mt-8">
                        Don't have an account?  
                        <a href="/signup" className="text-green-600 font-medium font-figtree hover:text-green-700 font-figtree">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;