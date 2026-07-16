import React, { useState } from "react";
import { FaTimes, FaEnvelope, FaLock, FaGoogle, FaPlane, FaHotel } from "react-icons/fa";

interface AuthModalProps {
  show: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
  onGoogleLogin: () => void;
}

export default function AuthModal({ show, onClose, onLoginSuccess, onGoogleLogin }: AuthModalProps) {
  const [authStep, setAuthStep] = useState<"login" | "signup" | "forgot" | "onboarding">("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [preferences, setPreferences] = useState({
    budget: "Mid-range",
    style: "Relaxed",
    tripType: "Solo",
  });

  if (!show) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(authEmail);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStep("onboarding");
  };

  const handleOnboardingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(authEmail);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-[800px] w-full flex overflow-hidden relative animate-scale-in shadow-2xl h-[480px]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-slate-400 hover:text-slate-700 bg-white hover:bg-slate-100 p-1.5 rounded-full transition-colors shadow-sm"
        >
          <FaTimes />
        </button>

        {/* Left Side (Image & Features) */}
        <div className="hidden md:block w-[45%] relative">
          <img
            src="https://images.unsplash.com/photo-1518182170546-0766de6b6aad?auto=format&fit=crop&w=800&q=80"
            alt="Travel Landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 p-8 h-full flex flex-col text-white">
            <div className="mb-8">
              <img
                src="/image/ITS-Global-White.png"
                alt="ITS Global Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            
            <h2 className="text-[26px] font-black leading-tight mb-8">Sign up/Login now to</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPlane className="text-2xl text-white" />
                <span className="font-bold text-sm">Lock Flight Prices & Pay Later</span>
              </div>
              <div className="w-full h-[1px] bg-white/20"></div>
              <div className="flex items-center gap-4">
                <FaHotel className="text-2xl text-white" />
                <span className="font-bold text-sm">Book Hotels @ ₹0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-[55%] p-8 flex flex-col bg-white overflow-y-auto no-scrollbar">
          <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
            
            {authStep === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="text-center space-y-1.5 mb-6">
                  <h3 className="text-xl font-black text-slate-900">Sign in to ITS Global</h3>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary pl-9 pr-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] text-slate-500 font-bold uppercase">Password</label>
                      <button
                        type="button"
                        onClick={() => setAuthStep("forgot")}
                        className="text-[10px] text-blue-600 font-bold hover:underline"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary pl-9 pr-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-md shadow-blue-600/20 mt-2"
                >
                  CONTINUE
                </button>

                <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-3 text-slate-400 text-[10px] uppercase font-bold">Or</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <button
                  type="button"
                  onClick={onGoogleLogin}
                  className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-lg text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaGoogle className="text-rose-500 text-base" />
                  <span>Sign in with Google</span>
                </button>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500">Don't have an account? </span>
                  <button
                    type="button"
                    onClick={() => setAuthStep("signup")}
                    className="text-[11px] text-blue-600 font-black hover:underline"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}

            {authStep === "signup" && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="text-center space-y-1.5 mb-6">
                  <h3 className="text-xl font-black text-slate-900">Create your account</h3>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary pl-9 pr-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Password</label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="password"
                        required
                        placeholder="Create password"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary pl-9 pr-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-md shadow-blue-600/20 mt-2"
                >
                  CONTINUE TO PREFERENCES
                </button>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500">Already registered? </span>
                  <button
                    type="button"
                    onClick={() => setAuthStep("login")}
                    className="text-[11px] text-blue-600 font-black hover:underline"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}

            {authStep === "forgot" && (
              <div className="space-y-4">
                <div className="text-center space-y-1.5 mb-6">
                  <h3 className="text-xl font-black text-slate-900">Reset your password</h3>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                  />
                </div>

                <button
                  onClick={() => setAuthStep("login")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-sm transition-all mt-2"
                >
                  SEND RECOVERY LINK
                </button>

                <button
                  onClick={() => setAuthStep("login")}
                  className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-bold pt-2"
                >
                  Back to Sign In
                </button>
              </div>
            )}

            {authStep === "onboarding" && (
              <form onSubmit={handleOnboardingSubmit} className="space-y-4">
                <div className="text-center space-y-1.5 mb-4">
                  <h3 className="text-xl font-black text-slate-900">Personalize Experience</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Trip Style</label>
                    <select
                      value={preferences.style}
                      onChange={(e) => setPreferences({ ...preferences, style: e.target.value })}
                      className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                    >
                      <option value="Relaxed">Relaxed (Wellness, Spa)</option>
                      <option value="Active">Active (Adventure, Sports)</option>
                      <option value="Cultural">Cultural (Sightseeing, History)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Budget Range</label>
                    <select
                      value={preferences.budget}
                      onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                      className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                    >
                      <option value="Economy">Economy</option>
                      <option value="Mid-range">Mid-range</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Trip Group Type</label>
                    <select
                      value={preferences.tripType}
                      onChange={(e) => setPreferences({ ...preferences, tripType: e.target.value })}
                      className="w-full border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2.5 rounded-lg text-sm outline-none transition-all"
                    >
                      <option value="Solo">Solo Traveler</option>
                      <option value="Couple">Couple</option>
                      <option value="Family">Family / Group</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-md shadow-blue-600/20 mt-4"
                >
                  SAVE & GET STARTED
                </button>
              </form>
            )}

          </div>
          
          <div className="mt-auto pt-6 text-center">
            <p className="text-[10px] text-slate-500">
              By proceeding, you agree to ITS Global's{" "}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>,{" "}
              <a href="#" className="text-blue-600 hover:underline">User Agreement</a> and{" "}
              <a href="#" className="text-blue-600 hover:underline">T&Cs</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
