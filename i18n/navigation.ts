import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
//
// Navigation is broken, for now using the next/link
// https://github.com/amannn/next-intl/issues/1271#issuecomment-2331863819
//
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
