import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Power, RotateCw, Pause, Play } from "lucide-react";
import { useState } from "react";

export default function KontrolPage() {
  const [servicesStatus, setServicesStatus] = useState({
    monitoring: true,
    backup: true,
    alerts: false,
  });

  const toggleService = (service: keyof typeof servicesStatus) => {
    setServicesStatus(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
    console.log(`Toggling ${service}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold" data-testid="heading-kontrol">Kontrol</h1>
        <p className="text-muted-foreground mt-1">Sistem servislerini kontrol edin</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>İzleme Servisi</CardTitle>
            <CardDescription>Cihaz izleme servisi durumu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${servicesStatus.monitoring ? 'bg-chart-2' : 'bg-muted'}`} />
                <span className="text-sm font-medium">
                  {servicesStatus.monitoring ? 'Aktif' : 'Durduruldu'}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleService('monitoring')}
                data-testid="button-toggle-monitoring"
              >
                {servicesStatus.monitoring ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {servicesStatus.monitoring ? 'Durdur' : 'Başlat'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Yedekleme Servisi</CardTitle>
            <CardDescription>Otomatik yedekleme servisi durumu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${servicesStatus.backup ? 'bg-chart-2' : 'bg-muted'}`} />
                <span className="text-sm font-medium">
                  {servicesStatus.backup ? 'Aktif' : 'Durduruldu'}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleService('backup')}
                data-testid="button-toggle-backup"
              >
                {servicesStatus.backup ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {servicesStatus.backup ? 'Durdur' : 'Başlat'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alarm Servisi</CardTitle>
            <CardDescription>Alarm bildirim servisi durumu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${servicesStatus.alerts ? 'bg-chart-2' : 'bg-muted'}`} />
                <span className="text-sm font-medium">
                  {servicesStatus.alerts ? 'Aktif' : 'Durduruldu'}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleService('alerts')}
                data-testid="button-toggle-alerts"
              >
                {servicesStatus.alerts ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {servicesStatus.alerts ? 'Durdur' : 'Başlat'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sistem Yönetimi</CardTitle>
            <CardDescription>Sistem işlemleri</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => console.log("Restarting system")}
              data-testid="button-restart-system"
            >
              <RotateCw className="w-4 h-4 mr-2" />
              Sistemi Yeniden Başlat
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => console.log("Shutting down")}
              data-testid="button-shutdown"
            >
              <Power className="w-4 h-4 mr-2" />
              Sistemi Kapat
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
