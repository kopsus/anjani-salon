import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Image from "next/image";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/action/session";
import prisma from "@/lib/prisma";

export async function AppSidebar() {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  const user = await prisma.user.findUnique({
    where: {
      id: session?.id as string,
    },
  });

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="w-full h-full">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-32 mx-auto"
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser dataUser={user!} />
      </SidebarFooter>
    </Sidebar>
  );
}
