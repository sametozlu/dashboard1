import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { AppSidebar } from "@/components/app-sidebar";
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
  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between p-3 border-b bg-background">
          <SidebarTrigger data-testid="button-sidebar-toggle" />
          <ThemeToggle />
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
