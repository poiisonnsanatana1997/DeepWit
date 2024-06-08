"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

interface DirectionAwareHoverDemoProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}

export default function DirectionAwareHoverDemo({ imageUrl, title, subtitle }: DirectionAwareHoverDemoProps) {
    return (
        <div className="h-[30rem] relative  flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-bold text-xl">{title}</p>
                <p className="font-normal text-sm">{subtitle}</p>
            </DirectionAwareHover>
        </div>
    );
}
