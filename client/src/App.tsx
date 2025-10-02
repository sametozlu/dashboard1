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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmCounts, setAlarmCounts] = useState({
    major: 2,
    minor: 3,
    hazir: 1,
    total: 6
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlarmCounts({
        major: Math.floor(Math.random() * 5),
        minor: Math.floor(Math.random() * 5),
        hazir: Math.floor(Math.random() * 3),
        total: Math.floor(Math.random() * 10)
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between gap-4 px-4 py-2 border-b bg-background">
          <div className="flex items-center gap-4">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg" data-testid="text-site-name">Site Name</span>
              <span className="text-sm text-muted-foreground" data-testid="text-datetime">
                {formatDateTime(currentTime)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className="bg-destructive/10 text-destructive border-destructive/20 gap-1 cursor-pointer hover-elevate"
              onClick={() => setLocation("/aktif-alarm")}
              data-testid="badge-major"
            >
              <AlertCircle className="w-3 h-3" />
              Major
              <span className="ml-1 font-semibold">{alarmCounts.major}</span>
            </Badge>
            
            <Badge 
              variant="outline" 
              className="bg-chart-3/10 text-chart-3 border-chart-3/20 gap-1 cursor-pointer hover-elevate"
              onClick={() => setLocation("/aktif-alarm")}
              data-testid="badge-minor"
            >
              <AlertCircle className="w-3 h-3" />
              Minor
              <span className="ml-1 font-semibold">{alarmCounts.minor}</span>
            </Badge>
            
            <Badge 
              variant="outline" 
              className="bg-chart-1/10 text-chart-1 border-chart-1/20 gap-1 cursor-pointer hover-elevate"
              onClick={() => setLocation("/aktif-alarm")}
              data-testid="badge-hazir"
            >
              <AlertCircle className="w-3 h-3" />
              Hazır
              <span className="ml-1 font-semibold">{alarmCounts.hazir}</span>
            </Badge>
            
            <Badge 
              variant="outline" 
              className="bg-destructive/10 text-destructive border-destructive/20 gap-1 cursor-pointer hover-elevate"
              onClick={() => setLocation("/aktif-alarm")}
              data-testid="badge-total"
            >
              <AlertCircle className="w-3 h-3" />
              Tüm alarm
              <span className="ml-1 font-semibold">{alarmCounts.total}</span>
            </Badge>

            <div className="h-6 w-px bg-border mx-2" />

            <span className="text-sm font-medium" data-testid="text-language">Turkish</span>

            <ThemeToggle />

            <div className="flex items-center gap-2 pl-2 border-l">
              <Avatar className="h-8 w-8">
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium" data-testid="text-username">admin</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
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
