import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

export default function AktifAlarmPage() {
  const alarms = [
    { 
      id: 1,
      type: "critical", 
      title: "Router-05 Bağlantı Hatası", 
      description: "Cihaz ağa erişemiyor",
      time: "5 dakika önce",
      device: "Router-05"
    },
    { 
      id: 2,
      type: "warning", 
      title: "Yüksek CPU Kullanımı", 
      description: "Server-Main CPU %85 kullanımda",
      time: "15 dakika önce",
      device: "Server-Main"
    },
    { 
      id: 3,
      type: "info", 
      title: "Yedekleme Tamamlandı", 
      description: "Haftalık yedekleme başarılı",
      time: "2 saat önce",
      device: "Backup-Server"
    },
  ];

  const getAlarmIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-chart-3" />;
      case "info":
        return <Info className="w-5 h-5 text-chart-5" />;
      default:
        return null;
    }
  };

  const getAlarmBadge = (type: string) => {
    switch (type) {
      case "critical":
        return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Kritik</Badge>;
      case "warning":
        return <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/20">Uyarı</Badge>;
      case "info":
        return <Badge variant="outline" className="bg-chart-5/10 text-chart-5 border-chart-5/20">Bilgi</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="heading-aktif-alarm">Aktif Alarm</h1>
          <p className="text-muted-foreground mt-1">Aktif alarm ve bildirimler</p>
        </div>
        <Button variant="outline" data-testid="button-clear-all">
          Tümünü Temizle
        </Button>
      </div>

      <div className="space-y-4">
        {alarms.map((alarm) => (
          <Card key={alarm.id} data-testid={`alarm-${alarm.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  {getAlarmIcon(alarm.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <CardTitle className="text-lg">{alarm.title}</CardTitle>
                      {getAlarmBadge(alarm.type)}
                    </div>
                    <CardDescription className="mt-1">{alarm.description}</CardDescription>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => console.log(`Resolving alarm ${alarm.id}`)}
                  data-testid={`button-resolve-${alarm.id}`}
                >
                  Çöz
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Cihaz: {alarm.device}</span>
                <span>•</span>
                <span>{alarm.time}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
