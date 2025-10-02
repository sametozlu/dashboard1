import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, MoreVertical } from "lucide-react";

export default function KullaniciYonetimiPage() {
  const users = [
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@netmon.com", role: "admin", status: "active" },
    { id: 2, name: "Ayşe Demir", email: "ayse@netmon.com", role: "operator", status: "active" },
    { id: 3, name: "Mehmet Kaya", email: "mehmet@netmon.com", role: "viewer", status: "active" },
    { id: 4, name: "Fatma Şahin", email: "fatma@netmon.com", role: "operator", status: "inactive" },
  ];

  const getRoleBadge = (role: string) => {
    const roles: Record<string, { label: string; variant: string }> = {
      admin: { label: "Yönetici", variant: "default" },
      operator: { label: "Operatör", variant: "secondary" },
      viewer: { label: "Görüntüleyici", variant: "outline" }
    };
    const roleInfo = roles[role] || { label: role, variant: "outline" };
    return <Badge variant={roleInfo.variant as any}>{roleInfo.label}</Badge>;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="heading-kullanici-yonetimi">Kullanıcı Yönetimi</h1>
          <p className="text-muted-foreground mt-1">Sistem kullanıcılarını yönetin</p>
        </div>
        <Button data-testid="button-add-user">
          <Plus className="w-4 h-4 mr-2" />
          Yeni Kullanıcı Ekle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kullanıcı Listesi</CardTitle>
          <CardDescription>Tüm sistem kullanıcıları</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center justify-between p-4 border rounded-lg hover-elevate"
                data-testid={`user-${user.id}`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <Avatar>
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-medium">{user.name}</h3>
                      {getRoleBadge(user.role)}
                      {user.status === 'inactive' && (
                        <Badge variant="secondary">Pasif</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => console.log(`Managing user ${user.id}`)}
                  data-testid={`button-manage-${user.id}`}
                >
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
