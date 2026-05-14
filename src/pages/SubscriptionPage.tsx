import Icon from '@/components/ui/icon';

interface SubscriptionPageProps {
  onNavigate: (page: string) => void;
}

const plans = [
  {
    id: 'free',
    name: 'Бесплатно',
    price: '0',
    period: '',
    desc: 'Попробовать без риска',
    features: ['5 запросов в сутки', 'Все 4 инструмента', 'Telegram-бот', 'Базовые источники'],
    locked: ['Безлимит', 'Скачивание файлов', 'GPT-4o'],
    cta: 'Текущий план',
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Про',
    price: '299',
    period: '/ мес',
    desc: 'Для активной учёбы',
    features: [
      'Безлимитные запросы',
      'Приоритетная обработка',
      'Скачивание в .docx / .pptx',
      'Реальные научные источники',
      'История запросов',
    ],
    locked: ['GPT-4o модель', 'Антиплагиат'],
    cta: 'Подключить',
    highlight: true,
  },
  {
    id: 'max',
    name: 'Макс',
    price: '599',
    period: '/ мес',
    desc: 'Для серьёзных результатов',
    features: [
      'Всё из тарифа Про',
      'GPT-4o модель',
      'Антиплагиат-проверка',
      'Персональный ассистент',
      'Приоритетная поддержка',
    ],
    locked: [],
    cta: 'Подключить',
    highlight: false,
  },
];

const SubscriptionPage = ({ onNavigate }: SubscriptionPageProps) => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header */}
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Тарифы</span>
          <h1 className="text-5xl font-black mt-3 mb-4">Честные цены</h1>
          <p className="text-muted-foreground text-lg">
            Начни бесплатно — переходи на Про, когда нужно больше
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'border-primary bg-primary/5 glow-primary'
                  : 'border-border bg-card'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full">
                    ⚡ Популярный
                  </span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-border">
                <span className="text-5xl font-black">
                  {plan.price === '0' ? 'Free' : `₽${plan.price}`}
                </span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <ul className="space-y-3 flex-1 mb-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Icon name="Check" size={10} className="text-accent" />
                    </div>
                    {f}
                  </li>
                ))}
                {plan.locked.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground/40">
                    <div className="w-4 h-4 rounded-full bg-border flex items-center justify-center shrink-0">
                      <Icon name="Lock" size={9} className="text-muted-foreground/40" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="h-6" />

              <button
                onClick={() => plan.id !== 'free' && onNavigate('register')}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all ${
                  plan.highlight
                    ? 'bg-primary text-white hover:bg-primary/90 glow-primary'
                    : plan.id === 'free'
                    ? 'border border-border text-muted-foreground cursor-default'
                    : 'border border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="Shield" size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm">Безопасная оплата</div>
                <div className="text-xs text-muted-foreground">SSL шифрование · Данные не хранятся</div>
              </div>
            </div>
            <div className="flex gap-3">
              {['Visa', 'MC', 'МИР', 'SBP'].map(p => (
                <div key={p} className="bg-secondary border border-border px-3 py-2 rounded-lg text-xs font-semibold text-muted-foreground">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-black text-center mb-8">Частые вопросы о тарифах</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'Можно ли отменить подписку?', a: 'Да, в любой момент. Доступ сохранится до конца периода.' },
              { q: 'Есть ли пробный период?', a: 'Бесплатный план — это и есть пробный, без ограничений по времени.' },
              { q: 'Возможна оплата по счёту?', a: 'Да, для юрлиц и ИП — напишите нам в поддержку.' },
              { q: 'Возможен возврат?', a: 'Да, в течение 7 дней при первой оплате, если не использовали Pro-функции.' },
            ].map(item => (
              <div key={item.q} className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-sm mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
