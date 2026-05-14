import Icon from '@/components/ui/icon';

interface SubscriptionPageProps {
  onNavigate: (page: string) => void;
}

const plans = [
  {
    id: 'free',
    name: 'Базовый',
    price: '0',
    period: 'бесплатно',
    description: 'Для знакомства с платформой',
    features: [
      '20 задач открытого доступа',
      'Базовая статистика',
      'Форум сообщества',
      'Ограниченный прогресс',
    ],
    disabled: ['Все курсы', 'Персональная аналитика', 'Приоритетная поддержка'],
    color: 'border-border',
    badge: null,
    cta: 'Текущий план',
  },
  {
    id: 'pro',
    name: 'Профессионал',
    price: '1 490',
    period: 'в месяц',
    description: 'Для серьёзного обучения',
    features: [
      'Все 340+ задач',
      'Полная аналитика прогресса',
      'Рейтинг и достижения',
      'Приоритетная поддержка',
      'Скачивание материалов',
    ],
    disabled: [],
    color: 'border-primary',
    badge: 'Популярный',
    cta: 'Подключить',
  },
  {
    id: 'team',
    name: 'Команда',
    price: '3 990',
    period: 'в месяц / команда',
    description: 'Для корпоративного обучения',
    features: [
      'До 10 пользователей',
      'Корпоративная аналитика',
      'Управление командой',
      'API интеграция',
      'Персональный менеджер',
    ],
    disabled: [],
    color: 'border-border',
    badge: null,
    cta: 'Оставить заявку',
  },
];

const SubscriptionPage = ({ onNavigate }: SubscriptionPageProps) => {
  return (
    <div className="min-h-screen bg-background pt-16 font-body">
      {/* Header */}
      <div className="bg-primary py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-medium">Тарифы</span>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-white mt-3 mb-4">
            Выберите план
          </h1>
          <p className="text-primary-foreground/60 text-lg">
            Прозрачные цены без скрытых платежей. Отмена подписки в любой момент.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white border-2 ${plan.color} p-7 flex flex-col`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-accent text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-primary">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-primary">
                    {plan.price !== '0' ? `₽${plan.price}` : '0 ₽'}
                  </span>
                  <span className="text-muted-foreground text-sm">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Icon name="Check" size={15} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.disabled.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground/50">
                    <Icon name="Minus" size={15} className="mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => plan.id !== 'free' && onNavigate('register')}
                className={`w-full py-3 text-sm font-medium transition-colors ${
                  plan.id === 'pro'
                    ? 'bg-primary text-white hover:bg-primary/90'
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

        {/* Payment info */}
        <div className="mt-12 bg-secondary/50 border border-border p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-lg font-semibold text-primary mb-1">
                Безопасная оплата
              </h4>
              <p className="text-sm text-muted-foreground">
                Платежи обрабатываются через защищённый шлюз. Данные карты не хранятся на наших серверах.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {['Visa', 'MasterCard', 'МИР', 'SBP'].map((p) => (
                <div
                  key={p}
                  className="bg-white border border-border px-3 py-2 text-xs font-medium text-muted-foreground"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-primary mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: 'Можно ли отменить подписку?',
                a: 'Да, в любой момент из личного кабинета. Доступ сохраняется до конца оплаченного периода.',
              },
              {
                q: 'Есть ли пробный период?',
                a: 'Базовый план бесплатный без ограничения по времени. 20 задач доступны сразу.',
              },
              {
                q: 'Как оплатить корпоративный план?',
                a: 'Принимаем оплату по счёту с НДС. Свяжитесь с нами для оформления договора.',
              },
              {
                q: 'Возможен ли возврат?',
                a: 'Да, в течение 7 дней с момента оплаты при отсутствии использования материалов.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-border p-5">
                <h4 className="font-medium text-foreground text-sm mb-2">{item.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
