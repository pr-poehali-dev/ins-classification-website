import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface Exhibit {
  id: number;
  title: string;
  year: string;
  category: string;
  icon: string;
  description: string;
  details: string;
  specifications: string[];
  application: string;
}

const Index = () => {
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const exhibits: Exhibit[] = [
    {
      id: 1,
      title: "Гироскоп Фуко",
      year: "1852",
      category: "historic",
      icon: "Disc3",
      description: "Первый механический гироскоп, продемонстрировавший принцип сохранения углового момента",
      details: "Леон Фуко создал первый лабораторный гироскоп для демонстрации вращения Земли. Устройство состояло из быстро вращающегося ротора, закрепленного в кардановом подвесе, что позволяло ему сохранять ориентацию в пространстве независимо от движения основания.",
      specifications: [
        "Механический роторный гироскоп",
        "Карданов подвес на 3 оси",
        "Демонстрация вращения Земли",
        "Основа современных ИНС"
      ],
      application: "Научные демонстрации, астрономия"
    },
    {
      id: 2,
      title: "Гирокомпас Сперри",
      year: "1908",
      category: "historic",
      icon: "Compass",
      description: "Первая практическая навигационная система на основе гироскопа",
      details: "Элмер Сперри разработал гирокомпас, который использовал гироскоп для определения истинного севера. В отличие от магнитного компаса, гирокомпас не подвержен влиянию магнитных полей и более точен на высоких широтах.",
      specifications: [
        "Точность ±0.5°",
        "Независимость от магнитных полей",
        "Время готовности 3-4 часа",
        "Вес около 50 кг"
      ],
      application: "Морская навигация, артиллерия"
    },
    {
      id: 3,
      title: "Платформенная ИНС V-2",
      year: "1944",
      category: "platform",
      icon: "Rocket",
      description: "Первая боевая инерциальная система наведения ракеты",
      details: "Немецкая ракета Фау-2 использовала гиростабилизированную платформу с интегрирующими гироскопами и акселерометрами. Система управления разрабатывалась под руководством Вернера фон Брауна и стала прототипом для всех последующих ракетных систем.",
      specifications: [
        "2 гироскопа + 2 акселерометра",
        "Аналоговая вычислительная система",
        "Точность ±4 км на 300 км дистанции",
        "Автономное управление"
      ],
      application: "Баллистические ракеты"
    },
    {
      id: 4,
      title: "ИНС Apollo",
      year: "1969",
      category: "platform",
      icon: "Orbit",
      description: "Инерциальная система космического корабля Apollo",
      details: "Система состояла из стабилизированной платформы с тремя гироскопами и акселерометрами. Компьютер Apollo Guidance Computer обрабатывал данные и управлял траекторией полета к Луне и обратно с исключительной точностью.",
      specifications: [
        "Платформенная ИНС на 3 оси",
        "Точность позиционирования ±300 м",
        "Интеграция с радионавигацией",
        "Цифровая обработка данных"
      ],
      application: "Космическая навигация"
    },
    {
      id: 5,
      title: "Кольцевой лазерный гироскоп",
      year: "1963",
      category: "optical",
      icon: "Zap",
      description: "Оптический гироскоп без движущихся частей",
      details: "Принцип работы основан на эффекте Саньяка: два лазерных луча, распространяющиеся в противоположных направлениях по замкнутому контуру, имеют разную частоту при вращении системы. Это позволяет измерять угловую скорость с высочайшей точностью.",
      specifications: [
        "Отсутствие механических частей",
        "Дрейф менее 0.001°/час",
        "Мгновенная готовность",
        "Высокая надежность"
      ],
      application: "Авиация, ракеты, космос"
    },
    {
      id: 6,
      title: "Волоконно-оптический гироскоп",
      year: "1976",
      category: "optical",
      icon: "Cable",
      description: "Компактный оптический гироскоп на волоконной оптике",
      details: "Свет проходит через катушку оптоволокна длиной до нескольких километров. При вращении возникает разность фаз встречных световых потоков, пропорциональная угловой скорости. Технология позволила создать компактные и недорогие гироскопы.",
      specifications: [
        "Длина волокна 100-5000 м",
        "Дрейф 0.01-10°/час",
        "Компактность и легкость",
        "Устойчивость к вибрациям"
      ],
      application: "БПЛА, автомобили, роботы"
    },
    {
      id: 7,
      title: "MEMS-гироскоп",
      year: "1990-е",
      category: "modern",
      icon: "Cpu",
      description: "Микроэлектромеханический гироскоп на кремниевом чипе",
      details: "Изготавливается по технологии микроэлектроники. Вибрирующие микромеханические структуры размером в микроны изменяют свое поведение при вращении благодаря силе Кориолиса. Революция в доступности инерциальных систем.",
      specifications: [
        "Размер 1-5 мм",
        "Дрейф 10-100°/час",
        "Массовое производство",
        "Стоимость $1-10"
      ],
      application: "Смартфоны, дроны, IoT"
    },
    {
      id: 8,
      title: "Квантовый гироскоп",
      year: "2020-е",
      category: "modern",
      icon: "Atom",
      description: "Гироскоп на основе квантовых эффектов атомов",
      details: "Использует квантовую интерференцию атомов в ловушке. Атомы охлаждаются до температур близких к абсолютному нулю и ведут себя как волны. При вращении возникает разность фаз атомных волн, что позволяет измерять вращение с беспрецедентной точностью.",
      specifications: [
        "Теоретический дрейф <0.0001°/час",
        "Требует криогенного охлаждения",
        "Экспериментальная стадия",
        "Сверхвысокая точность"
      ],
      application: "Фундаментальная наука, GPS-free навигация"
    }
  ];

  const timeline = [
    { year: "1852", event: "Гироскоп Фуко", icon: "Disc3" },
    { year: "1908", event: "Гирокомпас Сперри", icon: "Compass" },
    { year: "1944", event: "ИНС Фау-2", icon: "Rocket" },
    { year: "1960-е", event: "Платформенные ИНС", icon: "Box" },
    { year: "1963", event: "Лазерные гироскопы", icon: "Zap" },
    { year: "1976", event: "Волоконная оптика", icon: "Cable" },
    { year: "1990-е", event: "MEMS технологии", icon: "Cpu" },
    { year: "2020-е", event: "Квантовые системы", icon: "Atom" }
  ];

  const categories = [
    { id: "all", label: "Все экспонаты", icon: "LayoutGrid" },
    { id: "historic", label: "Исторические", icon: "Library" },
    { id: "platform", label: "Платформенные", icon: "Box" },
    { id: "optical", label: "Оптические", icon: "Lightbulb" },
    { id: "modern", label: "Современные", icon: "Sparkles" }
  ];

  const filteredExhibits = filterCategory === "all" 
    ? exhibits 
    : exhibits.filter(e => e.category === filterCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Icon name="Building2" className="text-accent" size={40} />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Музей ИНС</h1>
                <p className="text-muted-foreground mt-1 text-lg">История инерциальной навигации от Фуко до наших дней</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-accent/5 to-background py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="outline" className="mb-4 text-accent border-accent/50">
              <Icon name="History" className="mr-2" size={14} />
              170+ лет развития технологий
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Временная шкала эволюции</h2>
            <p className="text-muted-foreground mb-8">
              От механических гироскопов XIX века до квантовых систем XXI века
            </p>
            
            <div className="relative py-8">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative animate-fade-in bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background" />
                    <div className="flex flex-col items-center gap-2 pt-2">
                      <Icon name={item.icon} className="text-accent" size={28} />
                      <div className="font-bold text-sm text-accent">{item.year}</div>
                      <div className="text-xs text-center text-muted-foreground">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 transition-all duration-300 animate-fade-in hover:shadow-md ${
                filterCategory === cat.id
                  ? 'bg-accent text-accent-foreground border-accent shadow-md'
                  : 'bg-card border-border hover:border-accent/50'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Icon name={cat.icon} size={18} />
              <span className="font-medium">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredExhibits.map((exhibit, index) => (
            <Card
              key={exhibit.id}
              className="cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 hover:-translate-y-2 animate-fade-in group"
              onClick={() => setSelectedExhibit(exhibit)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Icon name={exhibit.icon} className="text-accent" size={32} />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {exhibit.year}
                    </Badge>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {exhibit.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exhibit.description}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="max-w-5xl mx-auto mt-20 mb-16 animate-fade-in">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Принципы работы</h2>
            <p className="text-muted-foreground text-lg">
              Физические основы инерциальной навигации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Activity" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Измерение ускорений</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Акселерометры измеряют линейные ускорения по трем осям
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <code className="text-accent font-mono text-sm">a = F/m</code>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Disc3" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Угловая скорость</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Гироскопы определяют скорость вращения объекта
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <code className="text-accent font-mono text-sm">ω = dθ/dt</code>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Интегрирование</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Получение скорости и координат через интегрирование
                </p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <code className="text-accent font-mono text-sm">v = ∫a dt</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Building2" className="text-accent" size={24} />
              <div>
                <div className="font-bold">Музей инерциальных навигационных систем</div>
                <div className="text-sm text-muted-foreground">Научно-образовательная экспозиция</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} />
                <span>8 экспонатов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>1852-2024</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedExhibit} onOpenChange={() => setSelectedExhibit(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedExhibit && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Icon name={selectedExhibit.icon} className="text-accent" size={36} />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">
                      {selectedExhibit.year}
                    </Badge>
                    <DialogTitle className="text-2xl mb-2">{selectedExhibit.title}</DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedExhibit.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <Separator className="my-4" />

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="FileText" size={18} className="text-accent" />
                    Описание
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedExhibit.details}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="Settings" size={18} className="text-accent" />
                    Технические характеристики
                  </h4>
                  <ul className="space-y-2">
                    {selectedExhibit.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="ChevronRight" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="Target" size={18} className="text-accent" />
                    Применение
                  </h4>
                  <p className="text-muted-foreground text-sm bg-accent/5 p-3 rounded-lg border border-accent/20">
                    {selectedExhibit.application}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
