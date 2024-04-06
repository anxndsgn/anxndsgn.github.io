"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IDEProjectData } from "@/Data/IDEProjectData";

export default function IDE() {
  const router = useRouter();

  useEffect(() => {
    if (IDEProjectData.length > 0) {
      router.push(`/ide/${IDEProjectData[0].id}`);
    }
  }, []);

  return <div></div>;
}
