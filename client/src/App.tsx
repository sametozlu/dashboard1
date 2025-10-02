import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, LogOut, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import LoginPage from "@/pages/login";
import OverviewPage from "@/pages/overview";
import DurumPage from "@/pages/durum";
import AktifAlarmPage from "@/pages/aktif-alarm";
import AyarlarPage from "@/pages/ayarlar";
import KontrolPage from "@/pages/kontrol";
import KayitlarPage from "@/pages/kayitlar";
import VarliklarPage from "@/pages/varliklar";
import KullaniciYonetimiPage from "@/pages/kullanici-yonetimi";
import NotFound from "@/pages/not-found";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  const [activeAlarms, setActiveAlarms] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlarms(prev => Math.floor(Math.random() * 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    setLocation("/login");
  };

  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between gap-4 p-3 border-b bg-background">
          <SidebarTrigger data-testid="button-sidebar-toggle" />
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setLocation("/aktif-alarm")}
              data-testid="button-notifications"
            >
              <Bell className="h-5 w-5" />
              {activeAlarms > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {activeAlarms}
                </Badge>
              )}
            </Button>

            <ThemeToggle />

            <div className="flex items-center gap-2 pl-3 border-l">
              <Avatar className="h-8 w-8">
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium" data-testid="text-username">admin</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function Router() {
  const [location] = useLocation();
  
  if (location === "/login") {
    return <LoginPage />;
  }

  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={OverviewPage} />
        <Route path="/durum" component={DurumPage} />
        <Route path="/aktif-alarm" component={AktifAlarmPage} />
        <Route path="/ayarlar" component={AyarlarPage} />
        <Route path="/kontrol" component={KontrolPage} />
        <Route path="/kayitlar" component={KayitlarPage} />
        <Route path="/varliklar" component={VarliklarPage} />
        <Route path="/kullanici-yonetimi" component={KullaniciYonetimiPage} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="netmon-ui-theme">
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <Router />
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
