import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("classification");

  const classifications = [
    {
      title: "Платформенные ИНС",
      description: "Используют стабилизированную гироскопическую платформу",
      icon: "Box",
      features: [
        "Высокая точность измерений",
        "Механическая стабилизация",
        "Сложная конструкция",
        "Высокая стоимость"
      ],
      applications: ["Авиация", "Морской транспорт"]
    },
    {
      title: "Бесплатформенные ИНС",
      description: "Датчики жестко закреплены на корпусе объекта",
      icon: "Cpu",
      features: [
        "Компактность",
        "Надежность",
        "Математическая стабилизация",
        "Меньшая стоимость"
      ],
      applications: ["Ракеты", "БПЛА", "Автономные системы"]
    },
    {
      title: "Аналоговые ИНС",
      description: "Используют аналоговые вычислительные устройства",
      icon: "Radio",
      features: [
        "Простота схем",
        "Быстродействие",
        "Ограниченная точность",
        "Устаревшая технология"
      ],
      applications: ["Ранние системы"]
    },
    {
      title: "Цифровые ИНС",
      description: "Обработка данных цифровыми вычислителями",
      icon: "Binary",
      features: [
        "Высокая точность",
        "Гибкость алгоритмов",
        "Возможность коррекции",
        "Современный стандарт"
      ],
      applications: ["Все современные системы"]
    }
  ];

  const applications = [
    {
      title: "Авиация",
      icon: "Plane",
      description: "Системы навигации и управления полетом",
      examples: [
        "Автопилоты самолетов",
        "Системы стабилизации вертолетов",
        "БПЛА различных классов",
        "Системы посадки"
      ],
      requirements: "Высокая точность, надежность, устойчивость к перегрузкам"
    },
    {
      title: "Космонавтика",
      icon: "Rocket",
      description: "Навигация и ориентация космических аппаратов",
      examples: [
        "Системы ориентации спутников",
        "Навигация межпланетных станций",
        "Стыковочные системы",
        "Ракеты-носители"
      ],
      requirements: "Максимальная точность, работа в вакууме, радиационная стойкость"
    },
    {
      title: "Морской транспорт",
      icon: "Ship",
      description: "Навигация судов и подводных аппаратов",
      examples: [
        "Системы курсоуказания",
        "Подводные лодки",
        "Автономные подводные аппараты",
        "Системы стабилизации"
      ],
      requirements: "Долговременная автономность, устойчивость к качке"
    },
    {
      title: "Автономные системы",
      icon: "Bot",
      description: "Робототехника и беспилотные транспортные средства",
      examples: [
        "Беспилотные автомобили",
        "Промышленные роботы",
        "Системы стабилизации камер",
        "Мобильные платформы"
      ],
      requirements: "Компактность, энергоэффективность, невысокая стоимость"
    }
  ];

  const principles = [
    {
      title: "Акселерометры",
      description: "Измеряют линейные ускорения по трем осям координат",
      formula: "a = F/m",
      icon: "Activity"
    },
    {
      title: "Гироскопы",
      description: "Измеряют угловые скорости вращения объекта",
      formula: "ω = dθ/dt",
      icon: "Disc3"
    },
    {
      title: "Интегрирование",
      description: "Получение скорости и координат путем интегрирования ускорений",
      formula: "v = ∫a dt, s = ∫v dt",
      icon: "TrendingUp"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Compass" className="text-primary" size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Инерциальные навигационные системы</h1>
              <p className="text-muted-foreground mt-1">Принципы работы и классификация ИНС</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="Info" className="text-primary" size={24} />
                  Основные принципы работы ИНС
                </CardTitle>
                <CardDescription className="text-base">
                  Инерциальные навигационные системы работают на основе законов классической механики, 
                  измеряя ускорения и угловые скорости для определения положения объекта в пространстве.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {principles.map((principle, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name={principle.icon} className="text-primary" size={20} />
                        <h3 className="font-semibold">{principle.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{principle.description}</p>
                      <div className="bg-card p-3 rounded border border-border">
                        <code className="text-primary font-mono text-sm">{principle.formula}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 h-auto p-1">
            <TabsTrigger value="classification" className="text-base py-3">
              <Icon name="Grid3x3" className="mr-2" size={18} />
              Классификация систем
            </TabsTrigger>
            <TabsTrigger value="applications" className="text-base py-3">
              <Icon name="Target" className="mr-2" size={18} />
              Применение ИНС
            </TabsTrigger>
          </TabsList>

          <TabsContent value="classification" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Классификация ИНС</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Инерциальные системы классифицируются по конструктивным особенностям 
                и способу обработки информации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {classifications.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon name={item.icon} className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="mt-1">{item.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                        Особенности
                      </h4>
                      <ul className="space-y-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="ChevronRight" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                        Применение
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.applications.map((app, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" size={20} />
                  Тенденции развития
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Современное развитие ИНС направлено на миниатюризацию, повышение точности и снижение стоимости. 
                  Бесплатформенные цифровые системы на базе MEMS-датчиков становятся стандартом для большинства применений, 
                  обеспечивая оптимальное соотношение характеристик и цены.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Практическое применение ИНС</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Инерциальные системы используются во всех областях, требующих автономной навигации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon name={app.icon} className="text-primary" size={28} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{app.title}</CardTitle>
                        <CardDescription className="mt-1 text-base">{app.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                        Примеры применения
                      </h4>
                      <ul className="space-y-2">
                        {app.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div className="bg-muted/50 p-3 rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <Icon name="AlertCircle" size={16} className="text-primary" />
                        Требования
                      </h4>
                      <p className="text-sm text-muted-foreground">{app.requirements}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-primary" size={20} />
                  Перспективы развития
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Развитие технологий ИНС идет по пути интеграции с другими навигационными системами (GPS/ГЛОНАСС), 
                  искусственным интеллектом и машинным обучением для коррекции ошибок и повышения автономности.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-card rounded-lg border border-border">
                    <Icon name="Sparkles" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="text-2xl font-bold text-primary mb-1">MEMS</div>
                    <div className="text-xs text-muted-foreground">Микроэлектромеханические системы</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border border-border">
                    <Icon name="Brain" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="text-2xl font-bold text-primary mb-1">AI/ML</div>
                    <div className="text-xs text-muted-foreground">Интеллектуальная коррекция</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border border-border">
                    <Icon name="Satellite" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="text-2xl font-bold text-primary mb-1">Hybrid</div>
                    <div className="text-xs text-muted-foreground">Комплексирование систем</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-20 py-8 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Compass" size={20} className="text-primary" />
            <span className="font-semibold">Инерциальные навигационные системы</span>
          </div>
          <p className="text-sm">Академический обзор технологий и применений</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
