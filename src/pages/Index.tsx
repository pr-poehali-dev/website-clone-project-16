import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const IMG_HERO = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/90345cbd-d76d-40e2-8d3b-836c496e2899.jpg';
const IMG_HEARTS = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/77cfa586-bde6-4e24-8df5-23f75f88efac.jpg';
const IMG_GIFT = 'https://cdn.poehali.dev/projects/db6af359-6876-4ac9-8d16-d1dce02a757a/files/77cfa586-bde6-4e24-8df5-23f75f88efac.jpg';

const scrollToForm = () => {
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
};

function useTimer() {
  const getSecondsLeft = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 0);
    return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
  };
  const [secs, setSecs] = useState(getSecondsLeft);
  useEffect(() => {
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return { h, m, s };
}

const TimerDigit = ({ value }: { value: string }) => (
  <div className="w-11 h-14 md:w-14 md:h-[72px] bg-[#F5EDD9] rounded-xl border border-[#E8D9B8] flex items-center justify-center text-2xl md:text-4xl font-black text-[#1F5B4E]">
    {value}
  </div>
);

const TimerColon = () => (
  <span className="text-2xl md:text-3xl font-black text-[#1F5B4E] pb-1">:</span>
);

const IF_CARDS = [
  <><b>Устали от рутины</b> и хочется внести в жизнь разнообразия</>,
  <>Хотите провести время <b>наедине с собой</b></>,
  <>Хотите <b>сделать стильные изделия</b> для своего дома</>,
  <>Ищете хобби, которое поможет <b>отдохнуть от повседневной суеты</b></>,
  <>Любите рукоделие и хочется <b>освоить новое ремесло</b></>,
  <>Хотите найти дело, которое будет приносить <b>стабильный доход</b></>,
  <>Никогда не плели, но <b>хотите научиться</b></>,
];

const CHECKLIST = [
  'Узнаете как из простой бумаги изготавливать бумажную лозу',
  'Узнаете, какие изделия можно плести и насколько они прочные',
  'Какие материалы необходимы для плетения и сколько это стоит',
  'Скрутите свои первые бумажные трубочки и поймете, как это просто',
];

const STEPS = [
  { n: 'ШАГ 1', text: 'При регистрации вы выбираете удобный для вас мессенджер (Вконтакте или Телеграм)' },
  { n: 'ШАГ 2', text: 'После завершения регистрации в выбранный мессенджер придет приветственное сообщение. Иногда может быть задержка до 5 минут, не переживайте' },
  { n: 'ШАГ 3', text: 'После приветственного сообщения туда же вам будут приходить уроки и все инструкции, внимательно читайте все письма, чтобы не упустить важную информацию' },
  { n: 'ШАГ 4', text: <span>Вы скрутите свою первую лозу и изготовите первое изделие. <b>Поздравляю!</b></span> },
];

export default function Index() {
  const { h, m, s } = useTimer();

  return (
    <div className="min-h-screen bg-white font-sans text-[#1F5B4E] overflow-x-hidden pb-10 md:pb-0">

      {/* ===== HERO (мобиль) ===== */}
      <section className="md:hidden max-w-[1200px] mx-auto px-4 pt-8 pb-6">
        <p className="font-bold tracking-widest text-[#1F5B4E] text-sm text-center mb-3">БЕСПЛАТНЫЙ КУРС</p>
        <h1 className="text-4xl font-black leading-[1.1] text-center">
          <span className="text-[#F2C12E]">С НУЛЯ ДО ПЕРВОГО ИЗДЕЛИЯ</span>
          <span className="block font-hand text-[#1F5B4E] text-5xl -mt-1 text-center">из бумаги</span>
        </h1>
        <div className="mt-5 border-2 border-[#1F5B4E] rounded-2xl px-5 py-4">
          <p className="font-bold text-[#1F5B4E] text-sm leading-snug">
            ПОШАГОВЫЙ РАЗБОР ОТ СКРУТКИ ПЕРВОЙ ЛОЗЫ ДО ПЛЕТЕНИЯ ПЕРВОГО ИЗДЕЛИЯ
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold text-base mb-3">Зарегистрируйтесь и получите:</p>
          <ul className="space-y-1.5 text-sm">
            {['4 подробных онлайн-урока по плетению из бумажной лозы','30 дней доступа к курсу','Уроки придут вам в личные сообщения'].map((t, i) => (
              <li key={i} className="flex gap-2 items-start"><span className="shrink-0 mt-0.5">•</span><span>{t}</span></li>
            ))}
          </ul>
        </div>
        <button onClick={scrollToForm} className="mt-6 w-full bg-[#D9211E] hover:bg-[#b81a18] transition-colors text-white font-bold text-lg py-4 px-8 rounded-xl shadow-md">
          ПОЛУЧИТЬ УРОКИ
        </button>
        <div className="mt-7">
          <p className="font-bold tracking-widest text-[#1F5B4E] text-xs text-center mb-3">БОНУСЫ СГОРЯТ ЧЕРЕЗ:</p>
          <div className="flex items-center gap-1 justify-center">
            <TimerDigit value={h[0]} /><TimerDigit value={h[1]} /><TimerColon />
            <TimerDigit value={m[0]} /><TimerDigit value={m[1]} /><TimerColon />
            <TimerDigit value={s[0]} /><TimerDigit value={s[1]} />
          </div>
        </div>
        <div className="mt-6">
          <img src={IMG_HERO} alt="Изделия из бумажной лозы" className="rounded-3xl w-full object-cover shadow-lg" />
        </div>
        <div className="mt-6 border-2 border-[#1F5B4E] rounded-2xl p-5 flex gap-4 items-center">
          <div className="flex-1">
            <p className="font-bold text-[#1F5B4E] text-sm mb-1">Подарки при регистрации:</p>
            <p className="text-xs text-[#1F5B4E]">«Памятка новичка по работе с лозой»</p>
            <p className="text-xs text-[#1F5B4E]">«Подборка готовых решений из лозы»</p>
          </div>
          <img src={IMG_GIFT} alt="Подарки" className="w-20 h-20 rounded-xl object-cover shrink-0" />
        </div>
      </section>

      {/* ===== HERO (ПК) ===== */}
      <section className="hidden md:block pt-10 pb-0">
        <div className="max-w-[1200px] mx-auto px-8">
          <p className="font-bold tracking-widest text-[#1F5B4E] text-[1.1rem] mb-2">БЕСПЛАТНЫЙ КУРС</p>

          {/* Заголовок + «из бумаги» */}
          <div className="w-full">
            <h1
              className="text-[#F2C12E] font-black leading-none tracking-tight whitespace-nowrap text-left"
              style={{ fontSize: 'min(4.6vw, 3.8rem)' }}
            >
              С НУЛЯ ДО ПЕРВОГО ИЗДЕЛИЯ
            </h1>
            {/* «из бумаги» — правее центра, наезжает на фото */}
            <div className="flex justify-end -mt-2 relative z-10">
              <span
                className="font-hand text-[#1F5B4E]"
                style={{ fontSize: 'min(5.7vw, 4.8rem)', display: 'inline-block', transform: 'rotate(-25deg)', transformOrigin: 'right center' }}
              >
                из бумаги
              </span>
            </div>
          </div>

          {/* Основной контент + фото в grid */}
          <div className="grid grid-cols-2 gap-10 mt-10 pb-10 items-end">
            {/* Левая колонка — контент */}
            <div className="flex flex-col">
              <div className="border-2 border-[#1F5B4E] rounded-2xl px-5 py-4 inline-block self-start">
                <p className="font-bold text-[#1F5B4E] text-sm leading-snug">
                  ПОШАГОВЫЙ РАЗБОР ОТ СКРУТКИ ПЕРВОЙ ЛОЗЫ<br />ДО ПЛЕТЕНИЯ ПЕРВОГО ИЗДЕЛИЯ
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold text-base mb-3">Зарегистрируйтесь и получите:</p>
                <ul className="space-y-1.5 text-base">
                  {['4 подробных онлайн-урока по плетению из бумажной лозы','30 дней доступа к курсу','Уроки придут вам в личные сообщения'].map((t, i) => (
                    <li key={i} className="flex gap-2 items-start"><span className="shrink-0 mt-0.5">•</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
              <button onClick={scrollToForm} className="mt-6 self-start bg-[#D9211E] hover:bg-[#b81a18] transition-colors text-white font-bold text-lg py-4 px-10 rounded-xl shadow-md">
                ПОЛУЧИТЬ УРОКИ
              </button>
              <div className="mt-7">
                <p className="font-bold tracking-widest text-[#1F5B4E] text-sm mb-3">БОНУСЫ СГОРЯТ ЧЕРЕЗ:</p>
                <div className="flex items-center gap-1">
                  <TimerDigit value={h[0]} /><TimerDigit value={h[1]} /><TimerColon />
                  <TimerDigit value={m[0]} /><TimerDigit value={m[1]} /><TimerColon />
                  <TimerDigit value={s[0]} /><TimerDigit value={s[1]} />
                  {/* Стрелка к блоку подарков */}
                  <svg className="ml-6 mb-1" width="80" height="64" viewBox="0 0 80 64" fill="none">
                    <path d="M 8 4 Q 16 4 26 18 Q 44 46 62 60" stroke="#1F5B4E" strokeWidth="2" strokeDasharray="5 4" fill="none"/>
                    <polygon points="55,62 65,62 60,53" fill="#1F5B4E"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Правая колонка — фото выровнено по нижнему краю таймера */}
            <div className="flex items-end">
              <img
                src={IMG_HERO}
                alt="Изделия из бумажной лозы"
                className="w-full object-cover object-top rounded-3xl shadow-xl"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ПК: блок подарков (после стрелки) */}
      <section className="hidden md:block max-w-[1200px] mx-auto px-8 pb-10">
        <div className="border-2 border-[#1F5B4E] rounded-3xl p-8 grid grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-bold text-[#1F5B4E] text-lg mb-3">Подарки при регистрации:</p>
            <p className="text-base text-[#1F5B4E]">«Памятка новичка по работе с лозой»</p>
            <p className="text-base text-[#1F5B4E]">«Подборка готовых решений из лозы»</p>
          </div>
          <div className="flex justify-end">
            <img src={IMG_GIFT} alt="Подарки" className="rounded-2xl w-64 object-cover shadow" />
          </div>
        </div>
      </section>

      {/* ===== КУРС ДЛЯ ВАС ЕСЛИ ===== */}
      <section className="max-w-[1200px] mx-auto px-4 pb-12 md:pb-20">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8">
          <span className="text-[#1F5B4E]">КУРС ДЛЯ ВАС </span>
          <span className="text-[#F2C12E]">ЕСЛИ:</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {IF_CARDS.map((t, i) => (
            <div key={i} className="bg-[#F7EFE2] rounded-2xl p-6 flex items-center justify-center text-center text-[#1F5B4E] min-h-[130px]">
              <p className="text-sm md:text-base leading-snug">{t}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToForm}
            className="bg-[#1F5B4E] hover:bg-[#173F37] transition-colors text-white font-bold text-lg px-16 py-4 rounded-xl shadow-md w-full md:w-auto"
          >
            ХОЧУ НА КУРС
          </button>
        </div>
      </section>

      {/* ===== ПРОГРАММА КУРСА ===== */}
      <section className="max-w-[1200px] mx-auto px-4 pb-12 md:pb-20">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-1">
          <span className="text-[#F2C12E]">ПРОГРАММА</span>{' '}
          <span className="text-[#1F5B4E]">КУРСА</span>
        </h2>
        <p className="text-center font-bold text-[#1F5B4E] text-base md:text-xl mb-8">
          Вас ждет 4 урока, на которых вы:
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Мобиль: два круга */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <img src={IMG_HERO} className="rounded-full aspect-square object-cover w-full shadow-md" alt="" />
            <img src={IMG_HEARTS} className="rounded-full aspect-square object-cover w-full shadow-md mt-10" alt="" />
            <img src={IMG_HERO} className="rounded-full aspect-square object-cover w-2/3 mx-auto shadow-md col-span-2" alt="" />
          </div>

          {/* ПК: три позиционированных круга */}
          <div className="relative h-[400px] hidden md:block">
            <img src={IMG_HERO} className="absolute top-0 left-10 w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white" alt="" />
            <img src={IMG_HEARTS} className="absolute top-8 right-0 w-60 h-60 rounded-full object-cover shadow-lg border-4 border-white" alt="" />
            <img src={IMG_HERO} className="absolute bottom-0 left-0 w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white" alt="" />
          </div>

          <div>
            <p className="font-bold text-[#1F5B4E] text-sm md:text-base mb-5 uppercase tracking-wide">
              Сплетете первое изделие уже через три дня
            </p>
            <ul className="space-y-4">
              {CHECKLIST.map((t, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-md bg-[#1F5B4E] flex items-center justify-center text-white mt-0.5">
                    <Icon name="Check" size={14} />
                  </span>
                  <span className="text-sm md:text-base text-[#1F5B4E] leading-snug">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-[#F7EFE2] rounded-2xl p-5 text-[#1F5B4E] text-sm md:text-base leading-relaxed">
              Получив базовые знания в плетении, вы изготовите свое первое изделие из бумажной лозы и поймете насколько всё просто
            </div>

            <button
              onClick={scrollToForm}
              className="mt-6 bg-[#1F5B4E] hover:bg-[#173F37] transition-colors text-white font-bold text-lg py-4 rounded-xl shadow-md w-full"
            >
              ПОЛУЧИТЬ УРОКИ
            </button>
          </div>
        </div>
      </section>

      {/* ===== КАК ПРОХОДИТ ОБУЧЕНИЕ ===== */}
      <section className="max-w-[1200px] mx-auto px-4 pb-12 md:pb-20">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-10">
          <span className="text-[#1F5B4E]">КАК ПРОХОДИТ </span>
          <span className="text-[#F2C12E]">ОБУЧЕНИЕ?</span>
        </h2>

        {/* ПК: горизонтально со смещением */}
        <div className="hidden md:grid grid-cols-4 gap-8 items-start">
          {STEPS.map((step, i) => (
            <div key={i} className={i % 2 === 1 ? 'mt-14' : ''}>
              <div className="w-20 h-20 rounded-full bg-[#F7EFE2] flex items-center justify-center font-extrabold text-[#1F5B4E] text-sm mb-4 border border-[#E8D9B8]">
                {step.n}
              </div>
              <p className="text-sm md:text-base text-[#1F5B4E] leading-snug">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Мобиль: вертикально с пунктирными стрелками */}
        <div className="md:hidden">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center w-16 shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#F7EFE2] border border-[#E8D9B8] flex items-center justify-center font-extrabold text-[#1F5B4E] text-xs shrink-0">
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <svg width="20" height="72" viewBox="0 0 20 72" fill="none" className="mt-1">
                    <path d="M10 0 C4 18 16 36 10 54 L10 66" stroke="#1F5B4E" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
                    <polygon points="5,62 10,72 15,62" fill="#1F5B4E"/>
                  </svg>
                )}
              </div>
              <div className="pt-3 pb-6">
                <p className="text-sm text-[#1F5B4E] leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={scrollToForm}
            className="bg-[#1F5B4E] hover:bg-[#173F37] transition-colors text-white font-bold text-lg px-16 py-4 rounded-xl shadow-md w-full md:w-auto"
          >
            ХОЧУ НА КУРС
          </button>
        </div>
      </section>

      {/* ===== ФОРМА ===== */}
      <section id="form" className="bg-white pt-4 pb-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-center text-[#1F5B4E] font-bold tracking-widest text-xs md:text-sm mb-1">
            ЗАРЕГИСТРИРОВАТЬСЯ НА БЕСПЛАТНЫЙ КУРС
          </p>
          <h2 className="text-center text-3xl md:text-5xl font-black mb-8">
            <span className="text-[#1F5B4E]">С НУЛЯ </span>
            <span className="text-[#F2C12E]">ДО ПЕРВОГО ИЗДЕЛИЯ</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Фото слева — только ПК */}
            <div className="hidden md:block">
              <img
                src={IMG_HEARTS}
                alt="Изделия из бумажной лозы"
                className="rounded-3xl w-full object-cover shadow-lg"
                style={{ maxHeight: 520 }}
              />
            </div>

            {/* Форма */}
            <div className="bg-[#F7EFE2] rounded-3xl p-6 md:p-8">
              <p className="text-center text-[#1F5B4E] text-sm mb-5">Внимательно проверьте данные при вводе!</p>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  className="w-full bg-white rounded-xl border border-[#C8B99A] px-4 py-3.5 text-[#1F5B4E] text-sm outline-none focus:border-[#1F5B4E] transition placeholder:text-[#A09070]"
                />
                <input
                  type="email"
                  placeholder="Введите ваш эл. адрес"
                  className="w-full bg-white rounded-xl border border-[#C8B99A] px-4 py-3.5 text-[#1F5B4E] text-sm outline-none focus:border-[#1F5B4E] transition placeholder:text-[#A09070]"
                />
                <input
                  type="tel"
                  placeholder="Введите ваш телефон"
                  className="w-full bg-white rounded-xl border border-[#C8B99A] px-4 py-3.5 text-[#1F5B4E] text-sm outline-none focus:border-[#1F5B4E] transition placeholder:text-[#A09070]"
                />
                <button className="w-full bg-[#1F5B4E] hover:bg-[#173F37] transition-colors text-white font-bold text-base py-4 rounded-xl shadow mt-1">
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </button>
              </div>

              <div className="mt-5 flex gap-3 items-start">
                <input type="checkbox" id="consent" className="mt-0.5 shrink-0 w-4 h-4 accent-[#1F5B4E]" />
                <label htmlFor="consent" className="text-xs text-[#1F5B4E]/70 italic leading-relaxed cursor-pointer">
                  <span className="font-semibold not-italic text-[#1F5B4E]">Согласие</span>
                  <br />
                  Я согласен на обработку моих персональных данных в соответствии с{' '}
                  <a href="#" className="underline text-[#1F5B4E]">Политикой конфиденциальности</a>,{' '}
                  <a href="#" className="underline text-[#1F5B4E]">Договором оферты</a>,{' '}
                  <a href="#" className="underline text-[#1F5B4E]">Согласием</a> и на получение{' '}
                  <a href="#" className="underline text-[#1F5B4E]">Информационной рассылки</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== НИЖНЯЯ ПЛАШКА (только мобиль) ===== */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/90 backdrop-blur-sm border-t border-[#E8D9B8] py-2 text-center z-50">
        <p className="text-[10px] font-bold tracking-widest text-[#1F5B4E]/60 uppercase">
          С НУЛЯ ДО ПЕРВОГО ИЗДЕЛИЯ
        </p>
      </div>

    </div>
  );
}