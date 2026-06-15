import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/bea59474-33cc-42c6-8148-bdef0d3b952d/files/2f1683b3-b101-492c-b313-fb0afbeeac09.jpg';

const nav = [
  { id: 'about', label: 'О центре' },
  { id: 'programs', label: 'Программы' },
  { id: 'team', label: 'Команда' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'contacts', label: 'Контакты' },
];

const features = [
  { icon: 'HeartHandshake', title: 'Без осуждения', text: 'Принимаем каждого с уважением и заботой, без ярлыков и стыда.' },
  { icon: 'ShieldCheck', title: 'Анонимно', text: 'Полная конфиденциальность на всех этапах восстановления.' },
  { icon: 'Users', title: 'Опытная команда', text: 'Психологи, психотерапевты и консультанты с многолетней практикой.' },
  { icon: 'Leaf', title: 'Природа и покой', text: 'Загородный центр в тишине Новосибирской области.' },
];

const programs = [
  {
    name: 'Консультация',
    price: 'Бесплатно',
    period: '',
    desc: 'Первичная беседа с психологом, оценка ситуации и подбор маршрута.',
    items: ['Анонимная встреча', 'Диагностика состояния', 'План помощи'],
    featured: false,
  },
  {
    name: 'Реабилитация',
    price: '45 000 ₽',
    period: '/ месяц',
    desc: 'Стационарная программа восстановления с проживанием и полным сопровождением.',
    items: ['Проживание и питание', 'Индивидуальные сессии', 'Групповая терапия', 'Работа с телом'],
    featured: true,
  },
  {
    name: 'Ресоциализация',
    price: '28 000 ₽',
    period: '/ месяц',
    desc: 'Возвращение к самостоятельной жизни и закрепление результата.',
    items: ['Адаптация к социуму', 'Поддержка трудоустройства', 'Сопровождение семьи'],
    featured: false,
  },
];

const team = [
  { name: 'Евгений Викторович', role: 'Директор. Клинический психолог', exp: 'Стаж 8 лет', photo: 'https://cdn.poehali.dev/projects/bea59474-33cc-42c6-8148-bdef0d3b952d/bucket/25d915a7-4f73-4dd0-9444-a661a6e03677.jpeg' },
  { name: 'Елена Морозова', role: 'Клинический психолог', exp: '12 лет практики', photo: '' },
  { name: 'Дмитрий Ким', role: 'Психотерапевт', exp: '10 лет практики', photo: '' },
  { name: 'Ольга Лебедева', role: 'Семейный консультант', exp: '8 лет практики', photo: '' },
];

const gallery = ['Mountain', 'TreePine', 'Sunrise', 'Home', 'BookOpen', 'Coffee'];

const Index = () => {
  const [menu, setMenu] = useState(false);
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length < 6) return;
    setSent(true);
  };

  const scrollTo = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground">
              <Icon name="Sprout" size={18} />
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight">Один Шаг</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <a href="tel:+73831234567" className="hidden md:inline-flex">
            <Button size="sm" className="rounded-full">Получить помощь</Button>
          </a>
          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            <Icon name={menu ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menu && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-muted-foreground">
                {n.label}
              </button>
            ))}
            <Button className="rounded-full w-full" onClick={() => scrollTo('contacts')}>Получить помощь</Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="animate-fade-up text-primary font-medium tracking-widest uppercase text-sm mb-6" style={{ animationDelay: '0.1s' }}>
              Новосибирская область
            </p>
            <h1 className="animate-fade-up font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6" style={{ animationDelay: '0.2s' }}>
              Возвращение
              <br />к трезвой жизни
            </h1>
            <p className="animate-fade-up text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed" style={{ animationDelay: '0.35s' }}>
              Реабилитационный центр для людей с зависимостью. Помогаем пройти путь
              восстановления бережно, профессионально и анонимно.
            </p>
            <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.5s' }}>
              <Button size="lg" className="rounded-full text-base px-8" onClick={() => scrollTo('contacts')}>
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-background/50" onClick={() => scrollTo('programs')}>
                Посмотреть цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">О центре</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Место, где начинается выздоровление</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Мы создали пространство тишины и поддержки вдали от городской суеты.
              Здесь человек может остановиться, восстановить силы и шаг за шагом вернуть себе жизнь.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-8 hover:bg-secondary/50 transition-colors">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-primary mb-5">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="font-display text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS / PRICING */}
      <section id="programs" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Программы и цены</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Прозрачно. Без скрытых платежей</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Вы всегда знаете, за что платите. Точную стоимость подтверждаем после бесплатной консультации.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.name}
                className={`rounded-xl p-8 flex flex-col border transition-all hover:-translate-y-1 ${
                  p.featured
                    ? 'bg-primary text-primary-foreground border-primary shadow-xl'
                    : 'bg-background border-border'
                }`}
              >
                <h3 className="font-display text-3xl font-semibold mb-1">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display text-4xl font-semibold">{p.price}</span>
                  <span className={p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}>{p.period}</span>
                </div>
                <p className={`mb-6 leading-relaxed ${p.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {p.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={18} className={p.featured ? 'text-primary-foreground mt-0.5' : 'text-primary mt-0.5'} />
                      <span className={p.featured ? 'text-primary-foreground/90' : ''}>{i}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={p.featured ? 'secondary' : 'outline'}
                  className="rounded-full w-full"
                  onClick={() => scrollTo('contacts')}
                >
                  Записаться
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Команда</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Те, кто рядом на каждом шаге</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="group">
                <div className="aspect-[3/4] rounded-xl bg-accent grid place-items-center mb-4 overflow-hidden">
                  {t.photo
                    ? <img src={t.photo} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    : <Icon name="User" size={64} className="text-primary/40 group-hover:scale-110 transition-transform" />
                  }
                </div>
                <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                <p className="text-primary text-sm">{t.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Галерея</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Атмосфера центра</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div
                key={g}
                className={`rounded-xl bg-accent grid place-items-center ${i % 5 === 0 ? 'aspect-square md:aspect-[4/5]' : 'aspect-square'}`}
              >
                <Icon name={g} size={48} className="text-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Контакты</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">Сделайте первый шаг</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Позвоните в любое время — линия работает круглосуточно. Консультация бесплатная и анонимная.
              </p>
              <div className="space-y-6">
                <a href="tel:+73831234567" className="flex items-center gap-4 group">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-primary"><Icon name="Phone" size={20} /></span>
                  <div>
                    <p className="text-sm text-muted-foreground">Круглосуточно</p>
                    <p className="font-display text-2xl font-semibold group-hover:text-primary transition-colors">+7 (383) 123-45-67</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-primary"><Icon name="MapPin" size={20} /></span>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="font-medium">Новосибирская область, загородный центр</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-accent text-primary"><Icon name="Mail" size={20} /></span>
                  <div>
                    <p className="text-sm text-muted-foreground">Почта</p>
                    <p className="font-medium">help@noviyput.ru</p>
                  </div>
                </div>
              </div>
            </div>
            {sent ? (
              <div className="bg-secondary/50 rounded-2xl p-8 border border-border text-center flex flex-col items-center justify-center min-h-[280px]">
                <span className="grid place-items-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-5">
                  <Icon name="Check" size={30} />
                </span>
                <h3 className="font-display text-3xl font-semibold mb-3">Спасибо!</h3>
                <p className="text-muted-foreground max-w-xs">Мы перезвоним вам в ближайшее время. Всё анонимно и конфиденциально.</p>
              </div>
            ) : (
              <form className="bg-secondary/50 rounded-2xl p-8 border border-border space-y-5" onSubmit={submit}>
                <h3 className="font-display text-2xl font-semibold">Оставьте номер</h3>
                <p className="text-muted-foreground text-sm">Перезвоним и бесплатно проконсультируем — без лишних вопросов.</p>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+7 (___) ___-__-__"
                />
                <Button type="submit" className="rounded-full w-full" size="lg">Жду звонка</Button>
                <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь на обработку данных. Гарантируем анонимность.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Sprout" size={16} className="text-primary" />
            <span className="font-display text-lg font-semibold text-foreground">Один Шаг</span>
          </div>
          <p>© 2026 Реабилитационный центр «Один Шаг». Новосибирская область.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;