import { 
  LayoutDashboard, 
  Activity, 
  Bell, 
  Settings, 
  Sliders, 
  FileText, 
  Database, 
  Users 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useLocation } from "wouter";
import logoPath from "@assets/Kwc_Netmon_Logo_Netmon_1-300x80_1759385971152.png";

const menuItems = [
  {
    title: "Overview",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Durum",
    url: "/durum",
    icon: Activity,
  },
  {
    title: "Aktif Alarm",
    url: "/aktif-alarm",
    icon: Bell,
  },
  {
    title: "Ayarlar",
    url: "/ayarlar",
    icon: Settings,
  },
  {
    title: "Kontrol",
    url: "/kontrol",
    icon: Sliders,
  },
  {
    title: "Kayıtlar",
    url: "/kayitlar",
    icon: FileText,
  },
  {
    title: "Varlıklar",
    url: "/varliklar",
    icon: Database,
  },
  {
    title: "Kullanıcı Yönetimi",
    url: "/kullanici-yonetimi",
    icon: Users,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <img 
          src={logoPath} 
          alt="Netmon Logo" 
          className="h-10 object-contain"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location === item.url}
                    data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
