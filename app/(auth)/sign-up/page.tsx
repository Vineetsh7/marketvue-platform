"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signUpWithEmail } from "@/lib/actions/auth.actions";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Globe,
  TrendingUp,
  Shield,
  Building,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const SignUp = () => {
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const watchedFields = watch();
  const isStep1Complete =
    watchedFields.fullName && watchedFields.email && watchedFields.password;
  const isStep2Complete = watchedFields.country;

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);
      if (result.success) router.push("/");
    } catch (e) {
      console.error(e);
      toast.error("Sign up failed", {
        description:
          e instanceof Error ? e.message : "Failed to create an account.",
      });
    }
  };

  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative">
        {/* Header with icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="form-title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Create Account & Tailor Your Experience
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Join thousands of investors growing their wealth
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[0, 1, 2].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step <= formStep
                  ? "w-12 bg-gradient-to-r from-purple-500 to-blue-600"
                  : "w-8 bg-gray-700"
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Step 1: Personal Information */}
          <div
            className={`space-y-5 transition-all duration-500 ${
              formStep === 0 ? "opacity-100" : "hidden opacity-0"
            }`}
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-purple-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Personal Information
              </p>
              <p className="text-xs text-gray-500">Let&apos;s get to know you</p>
            </div>

            <InputField
              name="fullName"
              label="Full Name"
              placeholder="John Doe"
              register={register}
              error={errors.fullName}
              validation={{ required: "Full name is required", minLength: 2 }}
              icon={<User className="w-4 h-4" />}
            />

            <InputField
              name="email"
              label="Email"
              placeholder="johndoe@mail.com"
              register={register}
              error={errors.email}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^\w+@\w+\.\w+$/,
                  message: "Invalid email address",
                },
              }}
              icon={<Mail className="w-4 h-4" />}
            />

            <InputField
              name="password"
              label="Password"
              placeholder="Enter a strong password"
              type="password"
              register={register}
              error={errors.password}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              }}
              icon={<Lock className="w-4 h-4" />}
            />

            <Button
              type="button"
              onClick={() => isStep1Complete && setFormStep(1)}
              disabled={!isStep1Complete}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium py-6 rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              Continue
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Step 2: Location */}
          <div
            className={`space-y-5 transition-all duration-500 ${
              formStep === 1 ? "opacity-100" : "hidden opacity-0"
            }`}
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-purple-400 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Location
              </p>
              <p className="text-xs text-gray-500">
                Helps us show market data relevant to you
              </p>
            </div>

            <CountrySelectField
              name="country"
              label="Country"
              control={control}
              error={errors.country}
              required
            />

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setFormStep(0)}
                variant="outline"
                className="flex-1 py-6 rounded-xl border-gray-700 hover:border-gray-600 transition-colors"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={() => isStep2Complete && setFormStep(2)}
                disabled={!isStep2Complete}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium py-6 rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 disabled:opacity-50 group"
              >
                Continue
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Step 3: Investment Preferences */}
          <div
            className={`space-y-5 transition-all duration-500 ${
              formStep === 2 ? "opacity-100" : "hidden opacity-0"
            }`}
          >
            <div className="space-y-1">
              <p className="text-sm font-medium text-purple-400 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Investment Preferences
              </p>
              <p className="text-xs text-gray-500">
                Customize your investment experience
              </p>
            </div>

            <SelectField
              name="investmentGoals"
              label="Investment Goals"
              placeholder="Select your investment goal"
              options={INVESTMENT_GOALS}
              control={control}
              error={errors.investmentGoals}
              required
              icon={<TrendingUp className="w-4 h-4" />}
            />

            <SelectField
              name="riskTolerance"
              label="Risk Tolerance"
              placeholder="Select your risk level"
              options={RISK_TOLERANCE_OPTIONS}
              control={control}
              error={errors.riskTolerance}
              required
              icon={<Shield className="w-4 h-4" />}
            />

            <SelectField
              name="preferredIndustry"
              label="Preferred Industry"
              placeholder="Select your preferred industry"
              options={PREFERRED_INDUSTRIES}
              control={control}
              error={errors.preferredIndustry}
              required
              icon={<Building className="w-4 h-4" />}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setFormStep(1)}
                variant="outline"
                className="flex-1 py-6 rounded-xl border-gray-700 hover:border-gray-600 transition-colors"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium py-6 rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </span>
                ) : (
                  "Begin Your Investment Lifecycle"
                )}
              </Button>
            </div>
          </div>
        </form>

        <FooterLink
          text="Already have an account?"
          linkText="Sign in"
          href="/sign-in"
          className="mt-8"
        />
      </div>
    </div>
  );
};

export default SignUp;
