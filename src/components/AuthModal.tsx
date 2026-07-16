import React, { useState } from "react";
import { FaTimes, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

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
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 border border-slate-100 relative animate-scale-in shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 rounded-full"
        >
          <FaTimes />
        </button>

        {authStep === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">Sign in to ITS Travels</h3>
              <p className="text-xs text-slate-500">Access saved trips, bookings, and recent itineraries.</p>
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
                    className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500 font-bold uppercase">Password</label>
                  <button
                    type="button"
                    onClick={() => setAuthStep("forgot")}
                    className="text-[10px] text-primary font-bold hover:underline"
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
                    className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-primary/10"
            >
              Sign In
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-3 text-slate-400 text-[10px] uppercase font-bold">Or</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <button
              type="button"
              onClick={onGoogleLogin}
              className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
            >
              <FaGoogle className="text-slate-500" />
              <span>Sign in with Google</span>
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-500">Don't have an account? </span>
              <button
                type="button"
                onClick={() => setAuthStep("signup")}
                className="text-[11px] text-primary font-black hover:underline"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        {authStep === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="text-center space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">Create your account</h3>
              <p className="text-xs text-slate-500">Register in seconds and personalize your dashboard preferences.</p>
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
                    className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
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
                    className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-primary/10"
            >
              Continue to Preferences
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] text-slate-500">Already registered? </span>
              <button
                type="button"
                onClick={() => setAuthStep("login")}
                className="text-[11px] text-primary font-black hover:underline"
              >
                Sign In
              </button>
            </div>
          </form>
        )}

        {authStep === "forgot" && (
          <div className="space-y-4">
            <div className="text-center space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">Reset your password</h3>
              <p className="text-xs text-slate-500">Enter your email and we'll send a password recovery link.</p>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full glass-input px-3 py-2 rounded-xl text-xs"
              />
            </div>

            <button
              onClick={() => setAuthStep("login")}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all"
            >
              Send Recovery Link
            </button>

            <button
              onClick={() => setAuthStep("login")}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-bold"
            >
              Back to Sign In
            </button>
          </div>
        )}

        {authStep === "onboarding" && (
          <form onSubmit={handleOnboardingSubmit} className="space-y-4">
            <div className="text-center space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">Personalize Experience</h3>
              <p className="text-xs text-slate-500">Provide preferences to customize your travel package guides.</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase">Trip Style</label>
                <select
                  value={preferences.style}
                  onChange={(e) => setPreferences({ ...preferences, style: e.target.value })}
                  className="w-full glass-input px-3 py-2 rounded-xl"
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
                  className="w-full glass-input px-3 py-2 rounded-xl"
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
                  className="w-full glass-input px-3 py-2 rounded-xl"
                >
                  <option value="Solo">Solo Traveler</option>
                  <option value="Couple">Couple</option>
                  <option value="Family">Family / Group</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-primary/10"
            >
              Save & Get Started
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
