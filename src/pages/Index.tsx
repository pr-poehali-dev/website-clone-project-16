import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/90345cbd-d76d-40e2-8d3b-836c496e2899.jpg';
const GIFT_IMG = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/90345cbd-d76d-40e2-8d3b-836c496e2899.jpg';
const PROG_IMG_1 = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/90345cbd-d76d-40e2-8d3b-836c496e2899.jpg';
const PROG_IMG_2 = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/90345cbd-d76d-40e2-8d3b-836c496e2899.jpg';
const PROG_IMG_3 = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/90345cbd-d76d-40e2-8d3b-836c496e2899.jpg';

const scrollToForm = () => {
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
};

const TimerDigit = ({ value }: { value: string }) => (
  <div className="w-12 h-16 md:w-14 md:h-20 bg-eco-cream rounded-xl flex items-center justify-center text-3xl md:text-4xl font-extrabold text-eco-green-dark border border-eco-yellow/30">
    {value}
  </div>
);

const ifCards = [
  { strong: 'Устали от рутины', text: 'и хочется внести в жизнь разнообразия', boldFirst: true },
  { strong: 'наедине с собой', text: 'Хотите провести время', boldFirst: false, prefix: 'Хотите провести время' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-eco-green-dark overflow-x-hidden">
      {/* HERO */}
      <section className="container py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <p className="font-bold tracking-widest text-eco-green text-sm md:text-base mb-4">
              БЕСПЛАТНЫЙ КУРС
            </p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              <span className="text-eco-yellow">С НУЛЯ ДО ПЕРВОГО ИЗДЕЛИЯ</span>
              <span className="block font-hand text-eco-green text-5xl md:text-7xl -mt-1">из бумаги</span>
            </h1>

            <div className="mt-6 border-2 border-eco-green rounded-2xl px-6 py-4 inline-block">
              <p className="font-bold text-eco-green-dark text-sm md:text-lg leading-snug">
                ПОШАГОВЫЙ РАЗБОР ОТ СКРУТКИ ПЕРВОЙ ЛОЗЫ<br className="hidden md:block" /> ДО ПЛЕТЕНИЯ ПЕРВОГО ИЗДЕЛИЯ
              </p>
            </div>

            <div className="mt-7">
              <p className="font-bold text-lg mb-3">Зарегистрируйтесь и получите:</p>
              <ul className="space-y-2 text-base md:text-lg">
                <li className="flex gap-2"><span className="text-eco-green">•</span> 4 подробных онлайн-урока по плетению из бумажной лозы</li>
                <li className="flex gap-2"><span className="text-eco-green">•</span> 30 дней доступа к курсу</li>
                <li className="flex gap-2"><span className="text-eco-green">•</span> Уроки придут вам в личные сообщения</li>
              </ul>
            </div>

            <button onClick={scrollToForm} className="mt-7 bg-eco-red hover:bg-eco-red/90 transition text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg w-full md:w-auto">
              ПОЛУЧИТЬ УРОКИ
            </button>

            <div className="mt-8">
              <p className="font-bold tracking-wider text-eco-green text-sm mb-3">БОНУСЫ СГОРЯТ ЧЕРЕЗ:</p>
              <div className="flex gap-2">
                <TimerDigit value="0" />
                <TimerDigit value="0" />
                <TimerDigit value="0" />
                <TimerDigit value="0" />
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img src={HERO_IMG} alt="Изделия из бумажной лозы" className="rounded-3xl w-full object-cover shadow-xl" />
          </div>
        </div>
      </section>

      {/* GIFTS */}
      <section className="container pb-12 md:pb-20">
        <div className="border-2 border-eco-green rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-bold text-eco-green text-lg md:text-xl mb-3">Подарки при регистрации:</p>
            <p className="text-eco-green text-base md:text-lg">«Памятка новичка по работе с лозой»</p>
            <p className="text-eco-green text-base md:text-lg">«Подборка готовых решений из лозы»</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={GIFT_IMG} alt="Подарки" className="rounded-2xl w-48 md:w-64 object-cover" />
          </div>
        </div>
      </section>

      {/* COURSE FOR YOU */}
      <section className="container pb-12 md:pb-20">
        <h2 className="text-3xl md:text-5xl font-black text-center text-eco-green mb-10">
          КУРС ДЛЯ ВАС <span className="text-eco-yellow">ЕСЛИ:</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            <><b>Устали от рутины</b> и хочется внести в жизнь разнообразия</>,
            <>Хотите провести время <b>наедине с собой</b></>,
            <>Хотите <b>сделать стильные изделия</b> для своего дома</>,
            <>Ищете хобби, которое поможет <b>отдохнуть от повседневной суеты</b></>,
            <>Любите рукоделие и хочется <b>освоить новое ремесло</b></>,
            <>Хотите найти дело, которое будет приносить <b>стабильный доход</b></>,
            <>Никогда не плели, но <b>хотите научиться</b></>,
          ].map((t, i) => (
            <div key={i} className="bg-eco-cream rounded-2xl p-6 flex items-center justify-center text-center text-eco-green-dark min-h-[140px]">
              <p className="text-base md:text-lg leading-snug">{t}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={scrollToForm} className="bg-eco-green hover:bg-eco-green-dark transition text-white font-bold text-lg px-16 py-4 rounded-xl shadow-lg">
            ХОЧУ НА КУРС
          </button>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="container pb-12 md:pb-20">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-2">
          <span className="text-eco-yellow">ПРОГРАММА</span> <span className="text-eco-green">КУРСА</span>
        </h2>
        <p className="text-center text-eco-green text-xl md:text-2xl font-bold mb-10">Вас ждет 4 урока, на которых вы:</p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative h-[420px] hidden md:block">
            <img src={PROG_IMG_1} className="absolute top-0 left-12 w-40 h-40 rounded-full object-cover shadow-lg" alt="" />
            <img src={PROG_IMG_2} className="absolute top-10 right-0 w-64 h-64 rounded-full object-cover shadow-lg" alt="" />
            <img src={PROG_IMG_3} className="absolute bottom-0 left-0 w-72 h-72 rounded-full object-cover shadow-lg" alt="" />
          </div>
          <div className="md:hidden grid grid-cols-3 gap-3">
            <img src={PROG_IMG_1} className="rounded-2xl object-cover aspect-square" alt="" />
            <img src={PROG_IMG_2} className="rounded-2xl object-cover aspect-square" alt="" />
            <img src={PROG_IMG_3} className="rounded-2xl object-cover aspect-square" alt="" />
          </div>

          <div>
            <p className="font-bold text-eco-green-dark mb-5">СПЛЕТЕТЕ ПЕРВОЕ ИЗДЕЛИЕ УЖЕ ЧЕРЕЗ ТРИ ДНЯ</p>
            <ul className="space-y-4">
              {[
                'Узнаете как из простой бумаги изготавливать бумажную лозу',
                'Узнаете, какие изделия можно плести и насколько они прочные',
                'Какие материалы необходимы для плетения и сколько это стоит',
                'Скрутите свои первые бумажные трубочки и поймете, как это просто',
              ].map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-md bg-eco-green flex items-center justify-center text-white">
                    <Icon name="Check" size={16} />
                  </span>
                  <span className="text-base md:text-lg">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-eco-cream rounded-2xl p-5 text-eco-green-dark text-base md:text-lg">
              Получив базовые знания в плетении, вы изготовите свое первое изделие из бумажной лозы и поймете насколько всё просто
            </div>
            <button onClick={scrollToForm} className="mt-6 bg-eco-green hover:bg-eco-green-dark transition text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg w-full md:w-auto">
              ПОЛУЧИТЬ УРОКИ
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container pb-16 md:pb-24">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          <span className="text-eco-green">КАК ПРОХОДИТ</span> <span className="text-eco-yellow">ОБУЧЕНИЕ?</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: 'ШАГ 1', text: 'При регистрации вы выбираете удобный для вас мессенджер (Вконтакте или Телеграм)' },
            { step: 'ШАГ 2', text: 'После завершения регистрации в выбранный мессенджер придет приветственное сообщение. Иногда может быть задержка до 5 минут, не переживайте' },
            { step: 'ШАГ 3', text: 'После приветственного сообщения туда же вам будут приходить уроки и все инструкции, внимательно читайте все письма' },
            { step: 'ШАГ 4', text: 'Вы скрутите свою первую лозу и изготовите первое изделие' },
          ].map((s, i) => (
            <div key={i} className={`${i % 2 === 1 ? 'md:mt-12' : ''}`}>
              <div className="w-20 h-20 rounded-full bg-eco-cream flex items-center justify-center font-extrabold text-eco-green-dark mb-4">
                {s.step}
              </div>
              <p className="text-base md:text-lg leading-snug">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM PLACEHOLDER (footer) */}
      <section id="form" className="bg-eco-green-dark py-16 md:py-24">
        <div className="container text-center text-eco-cream">
          <h2 className="text-2xl md:text-4xl font-black mb-4">Форма регистрации</h2>
          <p className="text-eco-cream/80">Здесь будет форма — вставлю код, который вы пришлёте.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
