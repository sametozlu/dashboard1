import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export default function DurumPage() {
  const devices = [
    { name: "Router-01", status: "online", ip: "192.168.1.1", uptime: "45 gün" },
    { name: "Switch-03", status: "online", ip: "192.168.1.10", uptime: "32 gün" },
    { name: "Server-Main", status: "warning", ip: "192.168.1.100", uptime: "12 gün" },
    { name: "Firewall-02", status: "online", ip: "192.168.1.5", uptime: "89 gün" },
    { name: "Router-05", status: "offline", ip: "192.168.1.20", uptime: "0 gün" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "online":
        return <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
          <CheckCircle className="w-3 h-3 mr-1" />
          Çevrimiçi
        </Badge>;
      case "offline":
        return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
          <XCircle className="w-3 h-3 mr-1" />
          Çevrimdışı
        </Badge>;
      case "warning":
        return <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/20">
          <AlertTriangle className="w-3 h-3 mr-1" />
          Uyarı
        </Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold" data-testid="heading-durum">Durum</h1>
        <p className="text-muted-foreground mt-1">Cihaz durum bilgileri</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cihaz Durumları</CardTitle>
          <CardDescription>Tüm cihazların anlık durum bilgileri</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {devices.map((device, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 border rounded-lg hover-elevate"
                data-testid={`device-${i}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">{device.name}</h3>
                    {getStatusBadge(device.status)}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>IP: {device.ip}</span>
                    <span>•</span>
                    <span>Çalışma süresi: {device.uptime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
