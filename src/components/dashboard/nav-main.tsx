"use client";

import { Boxes, Scissors } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
  {
    title: "Product",
    url: "/products",
    icon: Boxes,
  },
  {
    title: "Services",
    url: "/services",
    icon: Scissors,
  },
];

export function NavMain() {
  const pathname = usePathname();
  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(href);

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={`${
                  isActiveLink(item.url)
                    ? "bg-slate-200 hover:bg-slate-300 dark:text-black"
                    : ""
                }`}
                asChild
                tooltip={item.title}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
