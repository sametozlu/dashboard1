import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function OverviewPage() {
  const stats = [
    {
      title: "Toplam Cihaz",
      value: "124",
      description: "Aktif cihazlar",
      icon: Activity,
      trend: "+12% geçen haftaya göre"
    },
    {
      title: "Aktif Alarmlar",
      value: "3",
      description: "Dikkat gerekiyor",
      icon: AlertCircle,
      trend: "-2 son 24 saat"
    },
    {
      title: "Sistem Durumu",
      value: "98.5%",
      description: "Çalışma süresi",
      icon: CheckCircle,
      trend: "Son 30 gün"
    },
    {
      title: "Ortalama Yanıt",
      value: "45ms",
      description: "Ağ gecikmesi",
      icon: Clock,
      trend: "Normal seviyede"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold" data-testid="heading-overview">Overview</h1>
        <p className="text-muted-foreground mt-1">Sistem durumuna genel bakış</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} data-testid={`card-stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold" data-testid={`value-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Son Aktiviteler</CardTitle>
            <CardDescription>Son sistem olayları</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "2 dakika önce", event: "Yeni cihaz eklendi: Router-05" },
                { time: "15 dakika önce", event: "Alarm çözüldü: Bağlantı hatası" },
                { time: "1 saat önce", event: "Sistem güncellemesi tamamlandı" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" data-testid={`activity-${i}`}>
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <div className="flex-1">
                    <p className="text-foreground">{activity.event}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ağ Trafiği</CardTitle>
            <CardDescription>Son 24 saat</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Gelen Trafik</span>
                <span className="text-sm font-medium">2.4 GB</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }} />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-muted-foreground">Giden Trafik</span>
                <span className="text-sm font-medium">1.8 GB</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-chart-2 h-2 rounded-full" style={{ width: "45%" }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
