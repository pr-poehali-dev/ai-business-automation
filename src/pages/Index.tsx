import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Дарья Карась</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#cases"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Кейсы
              </a>
              <a
                href="#reviews"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Оставить заявку
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Цифровые сотрудники
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  для вашего бизнеса
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Автоматизирую рутину, чтобы вы занимались ростом, а не
                таблицами.
                <br />
                Всё на Python + ChatGPT: быстро, эффективно, красиво.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4"
              >
                <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
                Получить бесплатную консультацию
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/4515b8fa-b697-46fc-8a06-fadd7c3676bc.jpg"
                  alt="AI Digital Assistant"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Что я могу сделать для вас
            </h2>
            <p className="text-gray-400 text-lg">
              Каждый проект — как костюм по фигуре. Всё под вас.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Автоматизация процессов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Чат-боты, табличка, воронки — всё что превращает хаос в
                  систему
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Внедрение ИИ в рутину
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Аналитика, обработка запросов, ответы клиентам — пусть ИИ
                  работает за вас
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Puzzle" className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Индивидуальные решения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Цифровые решения под ваш бизнес — никаких шаблонов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Как это работает на практике
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800/90 to-purple-900/30 border-purple-500/20">
              <CardHeader>
                <Badge className="bg-purple-600/20 text-purple-300 w-fit">
                  Автоматизация
                </Badge>
                <CardTitle className="text-white">Обработка заявок</CardTitle>
                <CardDescription className="text-gray-400">
                  Заменил менеджера на ИИ-помощника
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  Система автоматически обрабатывает входящие заявки,
                  классифицирует их и отправляет нужному отделу
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <Icon name="TrendingUp" className="h-4 w-4 mr-1" />
                  +300% скорость обработки
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/90 to-blue-900/30 border-blue-500/20">
              <CardHeader>
                <Badge className="bg-blue-600/20 text-blue-300 w-fit">
                  ИИ-консультант
                </Badge>
                <CardTitle className="text-white">Умный помощник</CardTitle>
                <CardDescription className="text-gray-400">
                  24/7 консультации клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  Чат-бот отвечает на 80% вопросов клиентов, записывает на
                  консультации и собирает обратную связь
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <Icon name="Clock" className="h-4 w-4 mr-1" />
                  Работает круглосуточно
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/90 to-purple-900/30 border-purple-500/20">
              <CardHeader>
                <Badge className="bg-purple-600/20 text-purple-300 w-fit">
                  Аналитика
                </Badge>
                <CardTitle className="text-white">Сбор данных</CardTitle>
                <CardDescription className="text-gray-400">
                  Автоматические отчёты из таблиц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">
                  Система собирает данные из разных источников и создаёт
                  понятные отчёты для руководства
                </p>
                <div className="flex items-center text-green-400 text-sm">
                  <Icon name="BarChart" className="h-4 w-4 mr-1" />
                  Экономия 10 часов в неделю
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Отзывы клиентов
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">А</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-semibold">Алексей Морозов</p>
                    <p className="text-gray-400 text-sm">Интернет-магазин</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Дарья автоматизировала обработку заказов. Теперь не нужно
                  вручную переносить данные — всё работает само!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">М</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-semibold">Мария Петрова</p>
                    <p className="text-gray-400 text-sm">Консалтинг</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Чат-бот на сайте принимает заявки даже ночью. Конверсия
                  выросла на 40%!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">И</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-semibold">Иван Сидоров</p>
                    <p className="text-gray-400 text-sm">Стартап</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Аналитика теперь формируется автоматически. Экономим 10 часов
                  в неделю на отчётах."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Готова обсудить ваш проект
            </h2>
            <p className="text-gray-400 mb-8">
              Расскажите о своих задачах, и я предложу решение
            </p>

            <Card className="bg-slate-800/80 border-purple-500/20">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-slate-900/50 border-purple-500/30 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="WhatsApp или Telegram"
                      className="bg-slate-900/50 border-purple-500/30 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите кратко вашу задачу"
                      className="bg-slate-900/50 border-purple-500/30 text-white placeholder-gray-400 min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-3">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Дарья Карась</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-500/20 text-center">
            <p className="text-gray-400">
              © 2025 Дарья Карась. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
