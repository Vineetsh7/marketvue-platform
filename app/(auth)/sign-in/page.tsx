'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/forms/InputField';
import FooterLink from '@/components/forms/FooterLink';
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  Mail, 
  Lock, 
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle2
} from "lucide-react";

const SignIn = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    const watchedFields = watch();
    const isFormValid = watchedFields.email && watchedFields.password;

    const onSubmit = async (data: SignInFormData) => {
        try {
            const result = await signInWithEmail(data);
            if(result.success) {
                setIsSuccess(true);
                toast.success('Welcome back!', {
                    description: 'Successfully signed in to your account.'
                });
                
                // Delay navigation for success animation
                setTimeout(() => {
                    router.push('/');
                }, 800);
            }
        } catch (e) {
            console.error(e);
            toast.error('Sign in failed', {
                description: e instanceof Error ? e.message : 'Failed to sign in.'
            });
        }
    }

    return (
        <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="relative">
                {/* Header with icon */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-purple-500/20 animate-float">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="form-title bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                        Welcome back
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Sign in to continue your investment journey
                    </p>
                </div>

                {/* Success overlay */}
                {isSuccess && (
                    <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50 animate-in fade-in duration-300">
                        <div className="text-center animate-in zoom-in duration-500">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg shadow-green-500/50">
                                <CheckCircle2 className="w-10 h-10 text-white animate-check" />
                            </div>
                            <p className="text-white text-xl font-semibold">Welcome back!</p>
                            <p className="text-gray-300 text-sm mt-2">Redirecting to dashboard...</p>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <InputField
                            name="email"
                            label="Email"
                            placeholder="johndoe@mail.com"
                            register={register}
                            error={errors.email}
                            validation={{ 
                                required: 'Email is required', 
                                pattern: {
                                    value: /^\w+@\w+\.\w+$/,
                                    message: 'Invalid email address'
                                }
                            }}
                            icon={<Mail className="w-4 h-4" />}
                        />
                    </div>

                    {/* Password Field with toggle */}
                    <div className="space-y-2">
                        <div className="relative">
                            <InputField
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                                register={register}
                                error={errors.password}
                                validation={{ 
                                    required: 'Password is required', 
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters'
                                    }
                                }}
                                icon={<Lock className="w-4 h-4" />}
                            />
                            
                            {/* Password toggle button */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-[42px] text-gray-500 hover:text-purple-400 transition-colors z-10"
                                tabIndex={-1}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        </div>
                        
                        {/* Forgot Password Link */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => toast.info('Password reset feature coming soon!')}
                                className="text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
                            >
                                Forgot password?
                            </button>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <Button 
                        type="submit" 
                        disabled={isSubmitting || !isFormValid}
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-medium py-6 rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group mt-7"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Signing In...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                Sign In
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        )}
                    </Button>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-gray-950 px-4 text-gray-500 font-medium">
                                New to MarketVue?
                            </span>
                        </div>
                    </div>

                    {/* Footer Link */}
                    <FooterLink 
                        text="Don't have an account?" 
                        linkText="Create an account" 
                        href="/sign-up"
                        className="text-center"
                    />
                </form>

                {/* Additional features showcase */}
                <div className="mt-12 pt-8 border-t border-gray-800/50">
                    <p className="text-xs text-gray-500 text-center mb-4">
                        Trusted by thousands of investors
                    </p>
                    <div className="flex items-center justify-center gap-8">
                        <div className="text-center">
                            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                10K+
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Active Users</p>
                        </div>
                        <div className="w-px h-8 bg-gray-800"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                $2M+
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Assets Tracked</p>
                        </div>
                        <div className="w-px h-8 bg-gray-800"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                24/7
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Market Updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;