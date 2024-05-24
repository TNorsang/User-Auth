/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rQyV0wAhBxR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export function LandingPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-gray-100 dark:bg-gray-800 md:py-32">
        <div className="mx-auto px-4 md:px-6">
          <div className="flex-col text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Norsang is Testing Sign In and Sign Up with Next.js
            </h1>

            <div className="mt-8 space-x-4">
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="/signIn"
              >
                Sign In
              </Link>
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="/signUp"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
