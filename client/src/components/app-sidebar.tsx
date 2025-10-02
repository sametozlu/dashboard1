import { 
  LayoutDashboard, 
  Activity, 
  Bell, 
  Settings, 
  Sliders, 
  FileText, 
  Database, 
  Users,
  Wrench,
  ChevronDown
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useLocation } from "wouter";
import logoPath from "@assets/Kwc_Netmon_Logo_Netmon_1-300x80_1759385971152.png";

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <img 
          src={logoPath} 
          alt="Netmon Logo" 
          className="h-10 object-contain"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location === "/"}
                  data-testid="nav-overview"
                >
                  <a href="/">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Overview</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton data-testid="nav-durum">
                      <Activity className="w-4 h-4" />
                      <span>Durum</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/giris"}>
                          <a href="/durum/giris" data-testid="nav-durum-giris">Giriş</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/yuk"}>
                          <a href="/durum/yuk" data-testid="nav-durum-yuk">Yük</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/aku"}>
                          <a href="/durum/aku" data-testid="nav-durum-aku">akü</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/guc-modulu"}>
                          <a href="/durum/guc-modulu" data-testid="nav-durum-guc-modulu">Güç Modülü</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/iklimlendirme"}>
                          <a href="/durum/iklimlendirme" data-testid="nav-durum-iklimlendirme">İklimlendirme</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/dcdu"}>
                          <a href="/durum/dcdu" data-testid="nav-durum-dcdu">DCDU</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/durum/ai-di-do"}>
                          <a href="/durum/ai-di-do" data-testid="nav-durum-ai-di-do">AI_DI_DO</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location === "/aktif-alarm"}
                  data-testid="nav-aktif-alarm"
                >
                  <a href="/aktif-alarm">
                    <Bell className="w-4 h-4" />
                    <span>Aktif Alarm</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton data-testid="nav-ayarlar">
                      <Settings className="w-4 h-4" />
                      <span>Ayarlar</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <Collapsible className="group/nested">
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="nav-ayarlar-sistem-parametresi">
                              Sistem parametresi
                              <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/yerel"}>
                                  <a href="/ayarlar/sistem-parametresi/yerel">yerel</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/eco"}>
                                  <a href="/ayarlar/sistem-parametresi/eco">ECO</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/tepe-tirasla"}>
                                  <a href="/ayarlar/sistem-parametresi/tepe-tirasla">Tepe Tıraşlama</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/yuk-kaydirma"}>
                                  <a href="/ayarlar/sistem-parametresi/yuk-kaydirma">Yük kaydırma</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/kismi-sarj"}>
                                  <a href="/ayarlar/sistem-parametresi/kismi-sarj">Kısmi şarj</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/local"}>
                                  <a href="/ayarlar/sistem-parametresi/local">Local</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/sistem-parametresi/bms-sifresi"}>
                                  <a href="/ayarlar/sistem-parametresi/bms-sifresi">BMS Şifresi</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>

                      <Collapsible className="group/nested">
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="nav-ayarlar-aku">
                              Akü
                              <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/aku/aku-sarji"}>
                                  <a href="/ayarlar/aku/aku-sarji">akü şarjı</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/aku/aku-testi"}>
                                  <a href="/ayarlar/aku/aku-testi">akü testi</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/aku/sicaklik"}>
                                  <a href="/ayarlar/aku/sicaklik">sıcaklık</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/aku/lvd"}>
                                  <a href="/ayarlar/aku/lvd">LVD</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>

                      <Collapsible className="group/nested">
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="nav-ayarlar-cihazlar">
                              Cihazlar
                              <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/cihazlar/guc-modulu"}>
                                  <a href="/ayarlar/cihazlar/guc-modulu">güç modülü</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/cihazlar/jenerator"}>
                                  <a href="/ayarlar/cihazlar/jenerator">jeneratör</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/cihazlar/yakit-tanki"}>
                                  <a href="/ayarlar/cihazlar/yakit-tanki">yakıt tankı</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/cihazlar/dcdu"}>
                                  <a href="/ayarlar/cihazlar/dcdu">DCDU</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>

                      <Collapsible className="group/nested">
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="nav-ayarlar-alarm">
                              Alarm
                              <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/alarm/alarm-konfigurasyonu"}>
                                  <a href="/ayarlar/alarm/alarm-konfigurasyonu">Alarm Konfigürasyonu</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/alarm/esikler"}>
                                  <a href="/ayarlar/alarm/esikler">Eşikler</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>

                      <Collapsible className="group/nested">
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="nav-ayarlar-ao-di-do">
                              AO/DI/DO
                              <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/ao-di-do/analog-konfigurasyonu"}>
                                  <a href="/ayarlar/ao-di-do/analog-konfigurasyonu">Analog konfigürasyonu</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/ao-di-do/dijital-giris"}>
                                  <a href="/ayarlar/ao-di-do/dijital-giris">dijital giriş konfigürasyonu</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/ao-di-do/dijital-cikis"}>
                                  <a href="/ayarlar/ao-di-do/dijital-cikis">dijital çıkış konfigürasyonu</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>

                      <Collapsible className="group/nested">
                        <SidebarMenuSubItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuSubButton data-testid="nav-ayarlar-kuzey-iletisimi">
                              Kuzey İletişimi
                              <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/nested:rotate-180" />
                            </SidebarMenuSubButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/kuzey-iletisimi/ag"}>
                                  <a href="/ayarlar/kuzey-iletisimi/ag">ağ</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/kuzey-iletisimi/snmp"}>
                                  <a href="/ayarlar/kuzey-iletisimi/snmp">snmp</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild isActive={location === "/ayarlar/kuzey-iletisimi/rs485"}>
                                  <a href="/ayarlar/kuzey-iletisimi/rs485">RS485</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuSubItem>
                      </Collapsible>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/ayarlar/guney-iletisimi"}>
                          <a href="/ayarlar/guney-iletisimi" data-testid="nav-ayarlar-guney-iletisimi">Güney İletişimi</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/ayarlar/baslangic-sihirbazi"}>
                          <a href="/ayarlar/baslangic-sihirbazi" data-testid="nav-ayarlar-baslangic-sihirbazi">Başlangıç Sihirbazı</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location === "/kontrol"}
                  data-testid="nav-kontrol"
                >
                  <a href="/kontrol">
                    <Sliders className="w-4 h-4" />
                    <span>Kontrol</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton data-testid="nav-kayitlar">
                      <FileText className="w-4 h-4" />
                      <span>Kayıtlar</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/sistemin-gecmis-verileri"}>
                          <a href="/kayitlar/sistemin-gecmis-verileri">Sistemin geçmiş verileri</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/guc-modulleri"}>
                          <a href="/kayitlar/guc-modulleri">Güç Modülleri</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/alarm-gecmisi"}>
                          <a href="/kayitlar/alarm-gecmisi">Alarm geçmişi</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/enerji"}>
                          <a href="/kayitlar/enerji">Enerji</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/calisma-suresi"}>
                          <a href="/kayitlar/calisma-suresi">Çalışma Süresi</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/olay-gunlugu"}>
                          <a href="/kayitlar/olay-gunlugu">Olay günlüğü</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/sarj-gunlugu"}>
                          <a href="/kayitlar/sarj-gunlugu">Şarj Günlüğü</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/aku-testi"}>
                          <a href="/kayitlar/aku-testi">Akü Testi</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/jen-kaydi"}>
                          <a href="/kayitlar/jen-kaydi">Jen Kaydı</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/kayitlar/maks-min-kaydi"}>
                          <a href="/kayitlar/maks-min-kaydi">Maks&Min Kaydı</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location === "/varliklar"}
                  data-testid="nav-varliklar"
                >
                  <a href="/varliklar">
                    <Database className="w-4 h-4" />
                    <span>Varlıklar</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={location === "/kullanici-yonetimi"}
                  data-testid="nav-kullanici-yonetimi"
                >
                  <a href="/kullanici-yonetimi">
                    <Users className="w-4 h-4" />
                    <span>Kullanıcı Yönetimi</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton data-testid="nav-bakim">
                      <Wrench className="w-4 h-4" />
                      <span>Bakım</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/bakim/indir-yukle"}>
                          <a href="/bakim/indir-yukle">İndir/Yükle</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/bakim/kontrolcu-yazilimi"}>
                          <a href="/bakim/kontrolcu-yazilimi">Kontrolcü yazılımı</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/bakim/diger-parametreler"}>
                          <a href="/bakim/diger-parametreler">Diğer parametreler</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/bakim/diger-kontrol"}>
                          <a href="/bakim/diger-kontrol">Diğer kontrol</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/bakim/kalibrasyon"}>
                          <a href="/bakim/kalibrasyon">Kalibrasyon</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={location === "/bakim/sont-konfigurasyonu"}>
                          <a href="/bakim/sont-konfigurasyonu">şönt konfigürasyonu</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
