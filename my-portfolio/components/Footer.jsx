import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-rose-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Adepitan Yewande Helen
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Crafting thoughtful, high-performance web experiences with a focus on clarity,
               usability, and impact.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="#project"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Bigmehelen"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yewande-adepitan-63607930b"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Adepitan Yewande Helen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer