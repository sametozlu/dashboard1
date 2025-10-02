import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Server, Router, Shield } from "lucide-react";

export default function VarliklarPage() {
  const assets = [
    { id: 1, name: "Main Server", type: "server", location: "Veri Merkezi A", status: "active", ip: "192.168.1.100" },
    { id: 2, name: "Router-01", type: "router", location: "Bina 1", status: "active", ip: "192.168.1.1" },
    { id: 3, name: "Router-05", type: "router", location: "Bina 2", status: "inactive", ip: "192.168.1.20" },
    { id: 4, name: "Firewall-Main", type: "firewall", location: "Veri Merkezi A", status: "active", ip: "192.168.1.5" },
    { id: 5, name: "Switch-03", type: "router", location: "Bina 1", status: "active", ip: "192.168.1.10" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "server":
        return <Server className="w-4 h-4" />;
      case "router":
        return <Router className="w-4 h-4" />;
      case "firewall":
        return <Shield className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const labels: Record<string, string> = {
      server: "Sunucu",
      router: "Router",
      firewall: "Firewall"
    };
    return <Badge variant="outline">{labels[type] || type}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="heading-varliklar">Varlıklar</h1>
          <p className="text-muted-foreground mt-1">Tüm ağ varlıklarını yönetin</p>
        </div>
        <Button data-testid="button-add-asset">
          <Plus className="w-4 h-4 mr-2" />
          Yeni Varlık Ekle
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assets.map((asset) => (
          <Card key={asset.id} data-testid={`asset-${asset.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {getTypeIcon(asset.type)}
                  <CardTitle className="text-lg">{asset.name}</CardTitle>
                </div>
                <div className={`w-2 h-2 rounded-full ${asset.status === 'active' ? 'bg-chart-2' : 'bg-muted'}`} />
              </div>
              <CardDescription>{asset.location}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                {getTypeBadge(asset.type)}
                <Badge variant={asset.status === 'active' ? 'outline' : 'secondary'}>
                  {asset.status === 'active' ? 'Aktif' : 'Pasif'}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                IP: {asset.ip}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => console.log(`Viewing details for ${asset.name}`)}
                data-testid={`button-view-${asset.id}`}
              >
                Detayları Görüntüle
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
