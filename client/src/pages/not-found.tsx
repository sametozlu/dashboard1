import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Sayfa Bulunamadı</h2>
        <p className="text-muted-foreground mb-6">
          Aradığınız sayfa mevcut değil.
        </p>
        <Button onClick={() => setLocation("/")} data-testid="button-go-home">
          Ana Sayfaya Dön
        </Button>
      </div>
    </div>
  );
}
