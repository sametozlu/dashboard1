import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function KayitlarPage() {
  const logs = [
    { id: 1, timestamp: "2024-10-02 14:35:22", level: "info", message: "Sistem başlatıldı", source: "System" },
    { id: 2, timestamp: "2024-10-02 14:36:15", level: "success", message: "Router-01 bağlantı kurdu", source: "Router-01" },
    { id: 3, timestamp: "2024-10-02 14:40:03", level: "warning", message: "Yüksek CPU kullanımı tespit edildi", source: "Server-Main" },
    { id: 4, timestamp: "2024-10-02 14:42:18", level: "error", message: "Router-05 bağlantı hatası", source: "Router-05" },
    { id: 5, timestamp: "2024-10-02 14:45:30", level: "info", message: "Yedekleme başlatıldı", source: "Backup" },
    { id: 6, timestamp: "2024-10-02 14:50:12", level: "success", message: "Yedekleme tamamlandı", source: "Backup" },
  ];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "error":
        return <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">Hata</Badge>;
      case "warning":
        return <Badge variant="outline" className="bg-chart-3/10 text-chart-3 border-chart-3/20">Uyarı</Badge>;
      case "success":
        return <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">Başarılı</Badge>;
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
          <h1 className="text-3xl font-semibold" data-testid="heading-kayitlar">Kayıtlar</h1>
          <p className="text-muted-foreground mt-1">Sistem kayıtlarını görüntüleyin</p>
        </div>
        <Button variant="outline" data-testid="button-export-logs">
          <Download className="w-4 h-4 mr-2" />
          Dışa Aktar
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kayıt Ara</CardTitle>
          <CardDescription>Kayıtlarda arama yapın</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Kayıtlarda ara..."
                className="pl-10"
                data-testid="input-search-logs"
              />
            </div>
            <Button data-testid="button-search">Ara</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Son Kayıtlar</CardTitle>
          <CardDescription>En son sistem kayıtları</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {logs.map((log) => (
              <div 
                key={log.id} 
                className="flex items-start gap-3 p-3 border rounded-lg hover-elevate"
                data-testid={`log-${log.id}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    {getLevelBadge(log.level)}
                    <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                  </div>
                  <p className="text-sm">{log.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">Kaynak: {log.source}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
