import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { TrendingUp, Shield, Zap, ArrowRight, Quote } from "lucide-react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect("/");

  return (
    <main className="auth-layout relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 -z-20" />
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      {/* Left Section - Form */}
      <section className="auth-left-section scrollbar-hide-default relative">
        {/* Logo */}
        <Link href="/" className="auth-logo group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/assets/icons/logo.svg"
                alt="MarketVue logo"
                width={140}
                height={32}
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-blue-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </Link>

        {/* Form Content */}
        <div className="pb-6 lg:pb-8 flex-1 animate-slide-in">{children}</div>

        {/* Features strip at bottom */}
        <div className="hidden lg:flex items-center justify-center gap-8 pb-8 pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-purple-400" />
            </div>
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <span>Real-time Alerts</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <span>AI-Powered Insights</span>
          </div>
        </div>
      </section>

      {/* Right Section - Testimonial & Preview */}
     
      <section className="auth-right-section relative overflow-hidden">
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Content wrapper */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Testimonial Card */}
          <div className="lg:mt-8 lg:mb-12 animate-fade-in">
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl opacity-50" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 lg:p-8 shadow-2xl">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 rotate-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote text */}
                <blockquote className="auth-blockquote relative">
                 
                </blockquote>

                {/* Author info */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                      ER
                    </div>
                    <div>
                      <cite className="auth-testimonial-author block text-white font-semibold not-italic">
                        John Doe
                      </cite>
                      <p className="text-sm text-gray-400 mt-0.5">
                        Angel Investor
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="animate-scale-in"
                        style={{ animationDelay: `${star * 0.1}s` }}
                      >
                        <Image
                          src="/assets/icons/star.svg"
                          alt="Star"
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">
                    Verified Investor
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="flex-1 relative min-h-0">
            <div className="absolute inset-0 flex items-end justify-center">
              {/* Image container with glow */}
              <div className="relative w-full max-w-5xl">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent blur-3xl -bottom-20" />

                {/* Dashboard image */}
                <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-gray-700/50 shadow-2xl shadow-purple-500/10">
                  <Image
                    src="/assets/images/dashboard.jpg"
                    alt="Dashboard Preview"
                    width={1440}
                    height={1150}
                    className="auth-dashboard-preview w-full h-auto animate-slide-up"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent pointer-events-none" />

                  {/* Floating stats cards */}
                  <div className="absolute top-8 left-8 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 shadow-2xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Portfolio Value</p>
                        <p className="text-lg font-bold text-white">+12.5%</p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute top-8 right-8 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 shadow-2xl animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Active Alerts</p>
                        <p className="text-lg font-bold text-white">8 New</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
      </section>
    </main>
  );
};

export default Layout;
