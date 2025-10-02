import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function AyarlarPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold" data-testid="heading-ayarlar">Ayarlar</h1>
        <p className="text-muted-foreground mt-1">Sistem ayarlarını yönetin</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bildirim Ayarları</CardTitle>
            <CardDescription>Alarm ve bildirim tercihlerinizi yapılandırın</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">E-posta Bildirimleri</Label>
                <p className="text-sm text-muted-foreground">
                  Alarmlar için e-posta bildirimi alın
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
                data-testid="switch-email-notifications"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="sms-notifications">SMS Bildirimleri</Label>
                <p className="text-sm text-muted-foreground">
                  Kritik alarmlar için SMS bildirimi alın
                </p>
              </div>
              <Switch
                id="sms-notifications"
                checked={smsNotifications}
                onCheckedChange={setSmsNotifications}
                data-testid="switch-sms-notifications"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-backup">Otomatik Yedekleme</Label>
                <p className="text-sm text-muted-foreground">
                  Günlük otomatik yedekleme yapın
                </p>
              </div>
              <Switch
                id="auto-backup"
                checked={autoBackup}
                onCheckedChange={setAutoBackup}
                data-testid="switch-auto-backup"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Genel Ayarlar</CardTitle>
            <CardDescription>Sistem genel ayarlarını düzenleyin</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="refresh-interval">Yenileme Sıklığı (saniye)</Label>
              <Input
                id="refresh-interval"
                type="number"
                defaultValue="30"
                data-testid="input-refresh-interval"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="retention-days">Veri Saklama Süresi (gün)</Label>
              <Input
                id="retention-days"
                type="number"
                defaultValue="90"
                data-testid="input-retention-days"
              />
            </div>

            <Button 
              className="mt-4"
              onClick={() => console.log("Settings saved")}
              data-testid="button-save-settings"
            >
              Ayarları Kaydet
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
