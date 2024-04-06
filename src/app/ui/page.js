"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UIProjectData } from "@/Data/UIProjectData";
export default function IDE() {
  const router = useRouter();

  useEffect(() => {
    if (UIProjectData.length > 0) {
      router.push(`/ui/${UIProjectData[0].id}`);
    }
  }, []);

  return <div></div>;
}
