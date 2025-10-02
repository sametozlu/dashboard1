import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Thermometer } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      <Card className="lg:row-span-2" data-testid="card-system-diagram">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Sistem Diyagramı</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="w-full space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-center space-y-1">
                <div className="text-xs text-muted-foreground">225.4V / 0.00A</div>
                <div className="text-xs text-muted-foreground">224.8V / 0.00A</div>
                <div className="text-xs text-muted-foreground">-V / -A</div>
              </div>
              
              <div className="flex-1 px-8">
                <div className="border-2 border-chart-1 rounded-lg p-3 text-center bg-chart-1/5">
                  <div className="text-sm font-semibold text-chart-1">RECT</div>
                  <div className="text-xs text-muted-foreground mt-1">0.22A</div>
                  <div className="flex justify-between text-xs mt-2">
                    <span>4</span>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-32">
              <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-chart-1 -translate-x-1/2" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs bg-background px-2">
                0.22A
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-primary rounded-lg p-3 text-center bg-primary/5">
                <div className="text-sm font-semibold text-primary">MPPT</div>
                <div className="text-xs text-muted-foreground mt-1">54.4V 0.00A</div>
                <div className="text-xs text-muted-foreground">0.00A</div>
                <div className="flex justify-between text-xs mt-2">
                  <span>0</span>
                  <span>0</span>
                </div>
              </div>

              <div className="border-2 border-chart-5 rounded-lg p-3 text-center bg-chart-5/5">
                <div className="text-sm font-semibold text-chart-5">Load 1:</div>
                <div className="text-xs text-muted-foreground mt-1">0.00A</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card data-testid="card-battery-temp">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Batarya sıcaklığı(--)</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-chart-2" 
                  strokeDasharray="251.2" strokeDashoffset="125.6" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-semibold">44</span>
                <span className="text-xs text-muted-foreground">°C</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-ambient-temp">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">çevre sıcaklığı(--)</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-chart-2" 
                  strokeDasharray="251.2" strokeDashoffset="62.8" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-semibold">80</span>
                <span className="text-xs text-muted-foreground">°C</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-dc-voltage">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">DC Voltajı:54.4V</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-chart-3" 
                  strokeDasharray="251.2" strokeDashoffset="150.7" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-semibold">40</span>
                <span className="text-xs text-muted-foreground">V</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-rectifier-output">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Yeniden tanımlayıcı çıkış:0.22A,0.1%</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-4">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-chart-3" 
                  strokeDasharray="251.2" strokeDashoffset="188.4" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-lg font-semibold">90</span>
                <span className="text-xs text-muted-foreground">A</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card data-testid="card-trend-chart">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Çıkış trent (son 30 gün)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-end justify-between gap-1">
            {[55, 55, 55, 54, 42, 42, 43, 44, 45, 46].map((value, i) => (
              <div key={i} className="flex-1 bg-chart-1 rounded-t" style={{ height: `${value}%` }} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-chart-1 rounded-full" />
              <span>DC Voltaj</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-chart-2 rounded-full" />
              <span>Yük Akımı</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card data-testid="card-energy-consumption">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Enerji tüketimi (son 30 gün)</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-muted" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-chart-3" 
                strokeDasharray="251.2" strokeDashoffset="62.8" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-sm font-semibold">100%</span>
              <span className="text-xs text-muted-foreground">0.07kWh</span>
            </div>
          </div>
          <div className="ml-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-chart-3 rounded-sm" />
              <span>MAINS</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
