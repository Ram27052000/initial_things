"use client";
import Image from "next/image";
import { useState } from "react";

export default function Welcome() {
    const [showGif, setShowGif] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-bold hover:bg-red-700 transition duration-300"
                onClick={() => setShowGif(true)}
            >
                Let&apos;s Go SIUU
            </button>
            {showGif && (
                <Image
                    src="/ronaldo.jpg"
                    alt="Cristiano Ronaldo SIUU"
                    width={100}
                    height={100}
                    className="mt-4"
                />
            )}
        </div>
    );
}