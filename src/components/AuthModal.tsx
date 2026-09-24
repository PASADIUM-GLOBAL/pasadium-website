import React, { useState } from 'react';
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Phone,
  Gift,
  ShieldCheck,
  Check,
  ChevronDown,
  Wallet,
} from 'lucide-react';
import { PasadiumLogo } from './PasadiumLogo.tsx';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'register';
  onClose: () => void;
  onSuccess: (userData: { name: string; email: string; type: string }) => void;
}

const COUNTRY_CODES = [
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+256', country: 'Uganda', flag: '🇺🇬' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode = 'login',
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [accountType, setAccountType] = useState<'Individual' | 'Business'>('Individual');
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [emailOrUser, setEmailOrUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const [fullName, setFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrUser.trim() || !loginPassword.trim()) {
      setMessage('Please enter both your email/username and password.');
      return;
    }
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        name: emailOrUser.includes('@') ? emailOrUser.split('@')[0] : emailOrUser,
        email: emailOrUser.includes('@') ? emailOrUser : `${emailOrUser}@pasadium.tech`,
        type: 'Individual',
      });
      onClose();
    }, 900);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !registerEmail.trim() || !registerPassword.trim()) {
      setMessage('Full name, email and password are required.');
      return;
    }
    if (!agreeTerms) {
      setMessage('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        name: fullName,
        email: registerEmail,
        type: accountType,
      });
      onClose();
    }, 1100);
  };

  const handleWalletConnect = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        name: 'Web3 Sovereign Node',
        email: '0x71C...49b2',
        type: 'Web3 Verified',
      });
      onClose();
    }, 800);
  };

  const handleSocialConnect = (provider: 'Google' | 'Apple') => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        name: `${provider} Operator`,
        email: `operator@${provider.toLowerCase()}.com`,
        type: 'Individual',
      });
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-[460px] bg-[#070b10] border border-neutral-800/90 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-neutral-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800/80 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <PasadiumLogo size="md" variant="vertical" showText={true} showSubtitle={true} />
        </div>

        {/* Error / Status Message */}
        {message && (
          <div className="mb-4 p-3 rounded-lg bg-red-950/40 border border-red-800/50 text-red-300 text-xs text-center">
            {message}
          </div>
        )}

        {mode === 'login' ? (
          /* =========================================================================
             WELCOME BACK (SIGN IN)
             ========================================================================= */
          <div className="space-y-5 animate-fadeIn">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold text-white font-display">Welcome Back</h2>
              <p className="text-xs text-neutral-400">Sign in to your account to continue</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs font-sans">
              {/* Email / Username */}
              <div className="space-y-1.5">
                <label className="text-neutral-300 font-medium text-[11px] block">
                  Email or Username
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="text"
                    value={emailOrUser}
                    onChange={e => setEmailOrUser(e.target.value)}
                    placeholder="Enter your email or username"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-neutral-300 font-medium text-[11px] block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-[11px] pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-neutral-400 hover:text-neutral-300">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-cyan-500 focus:ring-0"
                  />
                  <span>Remember me</span>
                </label>

                <a
                  href="#forgot"
                  onClick={e => {
                    e.preventDefault();
                    setMessage('Password reset instructions sent to your terminal email.');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] hover:opacity-95 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all text-sm disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Log In'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-3">
              <div className="border-t border-neutral-800/80 w-full" />
              <span className="bg-[#070b10] px-3 text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                or
              </span>
              <div className="border-t border-neutral-800/80 w-full" />
            </div>

            {/* Social & Web3 Buttons */}
            <div className="space-y-2 text-xs">
              <button
                type="button"
                onClick={() => handleSocialConnect('Google')}
                className="w-full py-2.5 px-4 rounded-lg bg-[#0c1017] hover:bg-[#121824] border border-neutral-800/80 text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialConnect('Apple')}
                className="w-full py-2.5 px-4 rounded-lg bg-[#0c1017] hover:bg-[#121824] border border-neutral-800/80 text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.66-.8 1.11-1.92.99-3.04-.96.04-2.13.64-2.82 1.44-.6.69-1.13 1.83-1 2.94 1.07.08 2.17-.54 2.83-1.34" />
                </svg>
                <span>Continue with Apple</span>
              </button>

              <button
                type="button"
                onClick={handleWalletConnect}
                className="w-full py-2.5 px-4 rounded-lg bg-[#0c1017] hover:bg-[#121824] border border-neutral-800/80 text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <Wallet className="w-4 h-4 text-cyan-400" />
                <span>Continue with Wallet</span>
              </button>
            </div>

            {/* Toggle to Register */}
            <div className="text-center text-xs text-neutral-400 pt-2">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setMessage(null);
                }}
                className="text-cyan-400 hover:underline font-semibold"
              >
                Sign up
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================================
             CREATE YOUR ACCOUNT (REGISTRATION)
             ========================================================================= */
          <div className="space-y-4 animate-fadeIn">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold text-white font-display">Create Your Account</h2>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                Join PASADIUM and be part of a global ecosystem of opportunities.
              </p>
            </div>

            {/* Individual / Business Toggle Pill */}
            <div className="p-1 rounded-lg bg-[#0c1017] border border-neutral-800/80 flex items-center">
              <button
                type="button"
                onClick={() => setAccountType('Individual')}
                className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  accountType === 'Individual'
                    ? 'bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Individual
              </button>
              <button
                type="button"
                onClick={() => setAccountType('Business')}
                className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  accountType === 'Business'
                    ? 'bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-white shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Business
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs font-sans">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-neutral-300 font-medium text-[11px] block">Full Name</label>
                <div className="relative flex items-center">
                  <User className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-neutral-300 font-medium text-[11px] block">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="email"
                    value={registerEmail}
                    onChange={e => setRegisterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                </div>
              </div>

              {/* Phone Number with Kenyan +254 Default Dropdown */}
              <div className="space-y-1">
                <label className="text-neutral-300 font-medium text-[11px] block">
                  Phone Number
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                      className="h-10 px-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 text-white flex items-center gap-1.5 text-xs hover:border-neutral-700 whitespace-nowrap"
                    >
                      <span>{selectedCountry.flag}</span>
                      <span className="font-mono">{selectedCountry.code}</span>
                      <ChevronDown className="w-3 h-3 text-neutral-400" />
                    </button>

                    {countryDropdownOpen && (
                      <div className="absolute top-11 left-0 z-50 w-44 rounded-lg bg-[#0c1017] border border-neutral-800 shadow-xl py-1 max-h-48 overflow-y-auto">
                        {COUNTRY_CODES.map(c => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setCountryDropdownOpen(false);
                            }}
                            className="w-full px-3 py-1.5 text-left text-xs text-neutral-300 hover:bg-neutral-800/80 hover:text-white flex items-center justify-between"
                          >
                            <span>
                              {c.flag} {c.country}
                            </span>
                            <span className="font-mono text-[11px] text-neutral-400">{c.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="flex-1 px-3.5 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-neutral-300 font-medium text-[11px] block">Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={registerPassword}
                    onChange={e => setRegisterPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Referral Code */}
              <div className="space-y-1">
                <label className="text-neutral-300 font-medium text-[11px] block">
                  Referral Code (Optional)
                </label>
                <div className="relative flex items-center">
                  <Gift className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                  <input
                    type="text"
                    value={referralCode}
                    onChange={e => setReferralCode(e.target.value)}
                    placeholder="Enter referral code"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-[#0e131b] border border-neutral-800/90 focus:border-cyan-500/80 text-white placeholder-neutral-600 outline-hidden transition-all text-xs"
                  />
                </div>
              </div>

              {/* Agree Terms Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer select-none text-[11px] text-neutral-400 hover:text-neutral-300">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-cyan-500 focus:ring-0"
                  />
                  <span>
                    I agree to the{' '}
                    <span className="text-cyan-400 hover:underline">Terms of Service</span> and{' '}
                    <span className="text-cyan-400 hover:underline">Privacy Policy</span>
                  </span>
                </label>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] hover:opacity-95 shadow-lg shadow-cyan-500/20 active:scale-[0.99] transition-all text-sm disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            {/* Social Options */}
            <div className="relative flex items-center justify-center my-2">
              <div className="border-t border-neutral-800/80 w-full" />
              <span className="bg-[#070b10] px-3 text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                or
              </span>
              <div className="border-t border-neutral-800/80 w-full" />
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleSocialConnect('Google')}
                className="py-2 px-2 rounded-lg bg-[#0c1017] hover:bg-[#121824] border border-neutral-800 flex items-center justify-center text-neutral-300"
                title="Google"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleSocialConnect('Apple')}
                className="py-2 px-2 rounded-lg bg-[#0c1017] hover:bg-[#121824] border border-neutral-800 flex items-center justify-center text-neutral-300"
                title="Apple"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.66-.8 1.11-1.92.99-3.04-.96.04-2.13.64-2.82 1.44-.6.69-1.13 1.83-1 2.94 1.07.08 2.17-.54 2.83-1.34" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleWalletConnect}
                className="py-2 px-2 rounded-lg bg-[#0c1017] hover:bg-[#121824] border border-neutral-800 flex items-center justify-center text-cyan-400"
                title="Web3 Wallet"
              >
                <Wallet className="w-4 h-4" />
              </button>
            </div>

            {/* Toggle to Login */}
            <div className="text-center text-xs text-neutral-400 pt-2">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setMessage(null);
                }}
                className="text-cyan-400 hover:underline font-semibold"
              >
                Log in
              </button>
            </div>
          </div>
        )}

        {/* Security & Verification note */}
        <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-center gap-2 text-[11px] text-neutral-400 font-mono">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Encrypted Gateway · PASADIUM Sovereign Node</span>
        </div>
      </div>
    </div>
  );
};
