"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const readings = [
  {
    price: "7",
    title: "Pergunta objetiva",
    description: "Uma pergunta direta para uma resposta objetiva através das cartas.",
    format: "1 pergunta com resposta objetiva.",
    areas: null,
    cta: "Quero perguntar",
    disclaimer: null,
  },
  {
    price: "10",
    title: "Pergunta detalhada",
    description: "Uma pergunta aprofundada para explorar melhor a situação apresentada.",
    format: "1 pergunta detalhada.",
    areas: null,
    cta: "Quero minha leitura",
    disclaimer: null,
  },
  {
    price: "40",
    title: "Uma área da vida",
    description: "Uma leitura focada exclusivamente em uma área da sua vida.",
    format: "3 a 7 perguntas detalhadas.",
    areas: ["Amor", "Carreira", "Finanças", "Outras áreas compatíveis com a proposta da consulta"],
    cta: "Escolher minha área",
    disclaimer: null,
  },
  {
    price: "60",
    title: "Leitura completa",
    description: "Uma leitura mais ampla para observar diferentes áreas da vida.",
    format: "7 a 11 perguntas detalhadas.",
    areas: ["Amor", "Finanças", "Saúde", "Carreira", "Outros aspectos relevantes"],
    cta: "Quero uma leitura completa",
    disclaimer: "Questões relacionadas à saúde não substituem avaliação ou orientação de profissionais qualificados.",
  },
  {
    price: "90",
    title: "Mandala anual",
    description: "Uma leitura ampla para observar tendências, reflexões e possibilidades ao longo do seu ano.",
    format: "Leitura anual, organizada por períodos e temas.",
    areas: null,
    cta: "Fazer minha mandala",
    disclaimer: null,
  },
];

const faqItems = [
  {
    question: "O que preciso enviar depois do pagamento?",
    answer: "Depois da confirmação do pagamento, é só entrar em contato pelo Instagram e enviar as informações e perguntas necessárias para a realização da consulta. Se algo mais for preciso, será solicitado pelo chat.",
  },
  {
    question: "Quanto tempo demora para receber minha leitura?",
    answer: "O prazo para realização e envio da leitura é de até 48 horas, considerando o atendimento dentro do horário comercial, contado a partir do momento em que todas as informações necessárias forem recebidas.",
  },
  {
    question: "Como recebo minha leitura?",
    answer: "A leitura é realizada de forma personalizada e enviada pelo chat do Instagram.",
  },
  {
    question: "Posso remarcar minha consulta?",
    answer: "Sim. A remarcação pode ser solicitada enquanto a leitura ainda não tiver sido realizada. A nova data é combinada diretamente pelo chat, permanecendo necessário o pagamento antes da realização da consulta.",
  },
  {
    question: "Posso cancelar depois de pagar?",
    answer: "O cancelamento pode ser solicitado enquanto a leitura ainda não tiver sido realizada, observadas as regras aplicáveis às compras feitas pela internet. Após a leitura ser realizada e enviada, o serviço é considerado prestado. Os detalhes estão na Política de Reembolso e Cancelamento.",
  },
];

const steps = [
  { num: "01", title: "Escolha sua leitura" },
  { num: "02", title: "Faça o pagamento" },
  { num: "03", title: "Envie suas perguntas pelo Instagram" },
  { num: "04", title: "Receba sua leitura" },
];

const testimonials = [
  { text: "[DEPOIMENTO REAL]", name: "[PRIMEIRO NOME]" },
  { text: "[DEPOIMENTO REAL 2]", name: "[PRIMEIRO NOME 2]" },
  { text: "[DEPOIMENTO REAL 3]", name: "[PRIMEIRO NOME 3]" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b ${scrolled ? "border-gold/20 bg-paper/90 backdrop-blur-lg" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span className="min-w-0">
            <span className="wordmark block truncate text-[0.95rem] text-ink sm:text-lg">Maison Arcane</span>
            <span className="script-light -mt-1 block text-xs sm:text-sm text-gold-soft/70">lectures de tarot</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          <a href="#inicio" className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold-soft">Início</a>
          <a href="#leituras" className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold-soft">Leituras</a>
          <a href="#sobre" className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold-soft">Sobre</a>
          <a href="#depoimentos" className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold-soft">Depoimentos</a>
          <a href="#faq" className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold-soft">FAQ</a>
          <a href="#" className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 transition-colors hover:text-gold-soft">Políticas</a>
          <a href="#leituras" className="btn-base btn-outline-gold !min-h-0 !px-5 !py-2.5">Abrir as cartas</a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/40 text-gold-soft transition-colors hover:bg-gold/15 lg:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gold/20 bg-paper/95 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-4 px-5 py-6 text-sm">
              <a href="#inicio" onClick={() => setMenuOpen(false)} className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 hover:text-gold-soft transition-colors">Início</a>
              <a href="#leituras" onClick={() => setMenuOpen(false)} className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 hover:text-gold-soft transition-colors">Leituras</a>
              <a href="#sobre" onClick={() => setMenuOpen(false)} className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 hover:text-gold-soft transition-colors">Sobre</a>
              <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 hover:text-gold-soft transition-colors">Depoimentos</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/75 hover:text-gold-soft transition-colors">FAQ</a>
              <a href="#leituras" onClick={() => setMenuOpen(false)} className="btn-base btn-wine mt-2 text-center">Abrir as cartas</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="grain vignette relative isolate min-h-[92vh] overflow-hidden">
      <Image
        src="/hero-mesa.jpg"
        alt="Mesa antiga de cartomante em Paris ao fim da tarde, com cartas de Tarot, vela acesa, rosas secas e xícara de café"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[68%_center]"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-cocoa-deep/55 lg:bg-transparent lg:[background-image:var(--gradient-veil)]" />
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pt-32 pb-20 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3">
            <p className="eyebrow-light">Paris · lectures de tarot</p>
          </div>
          <h1 className="mt-7 font-display text-[2.6rem] leading-[1.06] text-paper sm:text-6xl lg:text-7xl">
            Entre, sente-se.
            <span className="mt-2 block italic text-gold-soft">As cartas já estão sobre a mesa.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-paper/75 sm:text-lg">
            Leituras de Tarot feitas de forma personalizada, intuitiva e reservada.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#leituras" className="btn-base btn-wine">Abrir as cartas</a>
            <a href="#leituras" className="btn-base btn-outline-gold">Ver leituras</a>
          </div>
          <p className="script-light mt-10 max-w-sm text-xl leading-snug sm:text-2xl">
            uma pergunta pode mudar a forma de olhar para a resposta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AvantDeCommencer() {
  return (
    <section className="texture-paper surface-paper relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <p className="eyebrow">Avant de commencer</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-5xl">
            Talvez você já saiba o que quer perguntar.
          </h2>
          <div className="flex items-center justify-center gap-3 mt-8 text-gold" aria-hidden="true">
            <span className="rule-gold w-16 sm:w-28" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 opacity-80">
              <path d="M12 2.4c.7 4.3 2.7 7.2 8.1 9.6-5.3 2.1-7.3 5.2-8.1 9.9-.9-4.7-3-7.7-8.2-9.9C9.2 9.7 11.2 6.7 12 2.4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <span className="rule-gold w-16 sm:w-28" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
            O Tarot pode ser uma forma de olhar para uma situação por outro ângulo, organizar sentimentos e refletir sobre caminhos possíveis. Cada leitura é feita de maneira personalizada, respeitando a pergunta e o momento de quem consulta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ReadingCard({ reading, index }: { reading: typeof readings[0]; index: number }) {
  const [accepted, setAccepted] = useState(false);

  const icons = [
    <svg key="0" viewBox="0 0 48 32" fill="none" className="h-9 w-9 shrink-0 text-wine/70 transition-transform duration-700 group-hover:rotate-3"><path d="M2 16.5C8 7.5 15.5 3 24 3.2c8.6.2 16 5 22 13.3-6.2 8.4-13.6 12.6-22 12.4C15.4 28.7 8 24.2 2 16.5Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /><circle cx="24" cy="16" r="6.2" stroke="currentColor" strokeWidth="1.1" /><circle cx="24" cy="16" r="2.1" fill="currentColor" /><path d="M24 1v-1M9 6 7.6 4.2M39 6l1.5-1.9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>,
    <svg key="1" viewBox="0 0 36 36" fill="none" className="h-9 w-9 shrink-0 text-wine/70 transition-transform duration-700 group-hover:rotate-3"><path d="M25.5 3.4C17 3.9 10.3 11 10.6 19.6c.3 8.1 6.9 14.5 15 14.6-6-2.9-9.9-9-10.1-15.6C15.2 12 19.3 6 25.5 3.4Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" /><path d="M29 9.5l.9 2.6 2.6.9-2.6 1-.9 2.5-1-2.5-2.5-1 2.5-.9.9-2.6Z" fill="currentColor" opacity=".8" /></svg>,
    <svg key="2" viewBox="0 0 36 40" fill="none" className="h-9 w-9 shrink-0 text-wine/70 transition-transform duration-700 group-hover:rotate-3"><path d="M18 5.5c4.4 0 7.6 2.9 7.6 6.9 0 4.3-3.2 7.3-7.6 7.3s-7.7-3-7.7-7.3c0-4 3.3-6.9 7.7-6.9Z" stroke="currentColor" strokeWidth="1.1" /><path d="M18 9.2c2.2 0 3.8 1.4 3.8 3.3 0 2-1.6 3.4-3.8 3.4s-3.9-1.4-3.9-3.4c0-1.9 1.7-3.3 3.9-3.3Z" stroke="currentColor" strokeWidth="1" /><path d="M18 19.7V35" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /><path d="M18 25.6c-2.6-2.4-5.3-2.6-7.4-1.6 1 2.6 3.6 4.2 7.4 3.6ZM18 30.4c2.5-2.3 5.1-2.5 7.2-1.5-1 2.5-3.5 4-7.2 3.4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" /></svg>,
    <svg key="3" viewBox="0 0 36 36" fill="none" className="h-9 w-9 shrink-0 text-wine/70 transition-transform duration-700 group-hover:rotate-3"><path d="M18 2.5c1.1 6.8 4.4 11.4 12.8 15.2C22.6 21 19.2 25.9 18 33.4c-1.4-7.4-4.7-12.2-12.9-15.7C13.5 14.2 16.8 9.4 18 2.5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" /><circle cx="18" cy="18" r="1.6" fill="currentColor" /></svg>,
    <svg key="4" viewBox="0 0 40 40" fill="none" className="h-9 w-9 shrink-0 text-wine/70 transition-transform duration-700 group-hover:rotate-3"><circle cx="20" cy="20" r="8.2" stroke="currentColor" strokeWidth="1.1" /><path d="M20 3.2v5.4M20 31.6V37M3.4 20h5.3M31.4 20h5.3M8.2 8l3.8 3.9M28.2 28.3l3.7 3.7M31.8 8.2 28 12M12 28.2 8.2 32" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /><path d="M17.5 19c.8.9 1.7 1.3 2.6 1.3s1.8-.4 2.5-1.3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>,
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      custom={index * 0.07}
      className="group h-full"
    >
      <article className="card-fiche flex h-full flex-col p-6 sm:p-7">
        <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <p className="eyebrow">R$ {reading.price}</p>
            <h3 className="mt-2 font-display text-3xl text-ink">{reading.title}</h3>
          </div>
          {icons[index]}
        </div>
        <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
          {reading.description}
        </p>
        <div className="relative mt-5 space-y-3 border-t border-gold/25 pt-4">
          <p className="text-sm text-ink/80">
            <span className="eyebrow mr-2">Formato</span>
            <span className="block pt-1">{reading.format}</span>
          </p>
          {reading.areas && (
            <div>
              <p className="eyebrow">Áreas</p>
              <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink/80">
                {reading.areas.map((area) => (
                  <li key={area} className="before:mr-2 before:text-gold before:content-['·']">{area}</li>
                ))}
              </ul>
            </div>
          )}
          {reading.disclaimer && (
            <p className="script text-base leading-snug">{reading.disclaimer}</p>
          )}
        </div>
        <div className="relative mt-auto pt-6">
          <div className="flex items-start gap-3 rounded-sm bg-muted/60 p-3">
            <input
              id={`reading-${index}`}
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-wine"
            />
            <label htmlFor={`reading-${index}`} className="text-xs leading-relaxed text-ink/85">
              Declaro que li e estou de acordo com as{" "}
              <a href="#" className="underline decoration-gold underline-offset-2 hover:text-wine">Políticas de Atendimento</a>,{" "}
              <a href="#" className="underline decoration-gold underline-offset-2 hover:text-wine">Reembolso</a>,{" "}
              <a href="#" className="underline decoration-gold underline-offset-2 hover:text-wine">Uso</a>{" "}
              e{" "}
              <a href="#" className="underline decoration-gold underline-offset-2 hover:text-wine">Privacidade</a>.
            </label>
          </div>
          <button
            disabled={!accepted}
            className="btn-base btn-wine mt-4 w-full disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {reading.cta}
          </button>
        </div>
      </article>
    </motion.div>
  );
}

function Leituras() {
  return (
    <section id="leituras" className="texture-paper surface-paper relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center">
          <p className="eyebrow">Le menu</p>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Escolha sua leitura</h2>
          <p className="script mt-3 text-xl text-ink sm:text-2xl">cada carta responde à sua maneira</p>
          <div className="flex items-center justify-center gap-3 mt-8 text-gold" aria-hidden="true">
            <span className="rule-gold w-16 sm:w-28" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 opacity-80">
              <path d="M12 2.4c.7 4.3 2.7 7.2 8.1 9.6-5.3 2.1-7.3 5.2-8.1 9.9-.9-4.7-3-7.7-8.2-9.9C9.2 9.7 11.2 6.7 12 2.4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <span className="rule-gold w-16 sm:w-28" />
          </div>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {readings.map((reading, i) => (
            <ReadingCard key={reading.title} reading={reading} index={i} />
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          <p>O pagamento é feito pela plataforma Cakto. Nenhum dado de cartão é solicitado ou armazenado dentro deste site.</p>
          <a href="#" className="mt-4 inline-block underline decoration-gold underline-offset-4 transition-colors hover:text-wine">
            Já fez o pagamento? Veja o próximo passo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="grain surface-forest relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="max-w-xl">
          <p className="eyebrow-light">Le rituel</p>
          <h2 className="mt-4 font-display text-4xl text-paper sm:text-5xl">Como funciona?</h2>
          <p className="mt-5 text-base leading-relaxed text-paper/70">
            As leituras são realizadas de forma personalizada e enviadas pelo chat do Instagram.
          </p>
        </motion.div>

        <ol className="mt-14 grid gap-px overflow-hidden border border-gold/25 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.li
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={i * 0.09}
              className="relative bg-forest-deep/60 p-7 outline outline-gold/15 transition-colors duration-500 hover:bg-cocoa-deep/50"
            >
              <span className="font-display text-5xl text-gold-soft/60">{step.num}</span>
              <h3 className="mt-3 font-display text-2xl text-paper">{step.title}</h3>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="texture-paper surface-paper relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative">
          <div className="relative overflow-hidden border border-gold" style={{ boxShadow: "inset 0 0 0 1px oklch(71% 0.088 78 / 0.16)" }}>
            <Image
              src="/sobre-retrato.jpg"
              alt="Mãos embaralhando cartas de Tarot sobre uma mesa antiga à luz de vela"
              width={1104}
              height={1312}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="script absolute -bottom-6 right-2 text-2xl text-ink/60">à la l&apos;une d&apos;une bougie</span>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={1}>
          <p className="eyebrow">La maison</p>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Quem está por trás das cartas?</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/85">
            <p>[ADICIONAR TEXTO SOBRE A MAISON ARCANE]</p>
            <p>Cada leitura é conduzida com cuidado, atenção e discrição. O que é dito sobre a mesa permanece sobre a mesa.</p>
          </div>
          <div className="mt-10 border-t border-gold/40 pt-6">
            <p className="font-display text-5xl text-wine sm:text-6xl">+ [NÚMERO DE PESSOAS ATENDIDAS]</p>
            <p className="eyebrow mt-2">pessoas já atendidas</p>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-muted-foreground">
              Número referente a pessoas atendidas pela Maison Arcane, incluindo atendimentos realizados fora deste site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="depoimentos" className="grain surface-night relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <p className="eyebrow-light">Les voix</p>
          <h2 className="mt-4 font-display text-4xl text-paper sm:text-5xl">Quem já passou pela mesa</h2>
          <div className="flex items-center justify-center gap-3 mt-8 text-gold-soft/70" aria-hidden="true">
            <span className="rule-gold w-16 sm:w-28" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 opacity-80">
              <path d="M12 2.4c.7 4.3 2.7 7.2 8.1 9.6-5.3 2.1-7.3 5.2-8.1 9.9-.9-4.7-3-7.7-8.2-9.9C9.2 9.7 11.2 6.7 12 2.4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <span className="rule-gold w-16 sm:w-28" />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} custom={1} className="mt-12">
          <figure className="mx-auto max-w-2xl border border-gold/30 bg-cocoa-deep/40 px-6 py-12 sm:px-12" style={{ boxShadow: "inset 0 0 0 1px oklch(71% 0.088 78 / 0.16)" }}>
            <span className="font-display text-6xl leading-none text-gold-soft/50" aria-hidden="true">&quot;</span>
            <blockquote className="mt-2 font-display text-2xl leading-snug text-paper/90 sm:text-3xl">
              {testimonials[current].text}
            </blockquote>
            <figcaption className="script-light mt-6 text-2xl">— {testimonials[current].name}</figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-soft transition-colors hover:bg-gold/15"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-paper/25 hover:bg-paper/50"}`}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  aria-current={i === current}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-soft transition-colors hover:bg-gold/15"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-paper/45">
            Os depoimentos são publicados somente com autorização de quem os escreveu e exibem apenas o primeiro nome. A retirada pode ser solicitada a qualquer momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="texture-paper surface-paper relative py-16 sm:py-20">
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <svg viewBox="0 0 36 36" fill="none" className="mx-auto h-9 w-9 text-gold" aria-hidden="true">
            <path d="M25.5 3.4C17 3.9 10.3 11 10.6 19.6c.3 8.1 6.9 14.5 15 14.6-6-2.9-9.9-9-10.1-15.6C15.2 12 19.3 6 25.5 3.4Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
            <path d="M29 9.5l.9 2.6 2.6.9-2.6 1-.9 2.5-1-2.5-2.5-1 2.5-.9.9-2.6Z" fill="currentColor" opacity=".8" />
          </svg>
          <p className="mt-6 font-display text-xl leading-relaxed text-ink/85 sm:text-2xl">
            As leituras de Tarot possuem caráter espiritual, simbólico, reflexivo e de entretenimento. As interpretações não representam garantias ou previsões absolutas sobre acontecimentos futuros.
          </p>
          <span className="rule-gold mx-auto mt-8 block w-24" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            As consultas não substituem orientação ou acompanhamento de profissionais qualificados, especialmente nas áreas de saúde, psicologia, direito e finanças.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FaqItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }} variants={fadeUp} custom={index * 0.05}>
      <div className="py-5">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full cursor-pointer items-start justify-between gap-4 text-left font-display text-xl text-ink transition-colors hover:text-wine sm:text-2xl"
        >
          <span className="min-w-0">{item.question}</span>
          <span className={`mt-1 shrink-0 text-gold transition-transform duration-500 ${open ? "rotate-45" : ""}`} aria-hidden="true">
            <Plus size={20} />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="texture-paper surface-paper relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center">
          <p className="eyebrow">Les questions</p>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">Perguntas frequentes</h2>
          <div className="flex items-center justify-center gap-3 mt-8 text-gold" aria-hidden="true">
            <span className="rule-gold w-16 sm:w-28" />
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 opacity-80">
              <path d="M12 2.4c.7 4.3 2.7 7.2 8.1 9.6-5.3 2.1-7.3 5.2-8.1 9.9-.9-4.7-3-7.7-8.2-9.9C9.2 9.7 11.2 6.7 12 2.4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
            </svg>
            <span className="rule-gold w-16 sm:w-28" />
          </div>
        </motion.div>

        <div className="mt-12 divide-y divide-gold/30 border-y border-gold/30">
          {faqItems.map((item, i) => (
            <FaqItem key={item.question} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="grain vignette relative isolate overflow-hidden">
      <Image
        src="/cta-mesa.jpg"
        alt="Mesa de Tarot com vela acesa, rosas vermelhas, papéis e objetos antigos"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-cocoa-deep/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-28 text-center sm:py-36 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <h2 className="font-display text-4xl leading-tight text-paper sm:text-6xl">
            Talvez a pergunta já esteja na sua cabeça.
          </h2>
          <p className="script-light mt-5 text-2xl sm:text-3xl">Agora só falta colocá-la sobre a mesa.</p>
          <a href="#leituras" className="btn-base btn-wine mt-10">Abrir as cartas</a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="grain surface-night relative border-t border-gold/25">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-gold-soft/70" aria-hidden="true">
          <span className="rule-gold w-16 sm:w-28" />
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 opacity-80">
            <path d="M12 2.4c.7 4.3 2.7 7.2 8.1 9.6-5.3 2.1-7.3 5.2-8.1 9.9-.9-4.7-3-7.7-8.2-9.9C9.2 9.7 11.2 6.7 12 2.4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          </svg>
          <span className="rule-gold w-16 sm:w-28" />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="wordmark text-lg text-paper">Maison Arcane</p>
            <p className="script-light mt-1 text-lg">lectures de tarot</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              As leituras possuem caráter simbólico, reflexivo e de entretenimento.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <p className="eyebrow-light">Navegar</p>
            <ul className="mt-4 space-y-2">
              <li><a href="#inicio" className="text-sm text-paper/75 transition-colors hover:text-gold-soft">Início</a></li>
              <li><a href="#leituras" className="text-sm text-paper/75 transition-colors hover:text-gold-soft">Leituras</a></li>
              <li><a href="#sobre" className="text-sm text-paper/75 transition-colors hover:text-gold-soft">Sobre</a></li>
              <li><a href="#faq" className="text-sm text-paper/75 transition-colors hover:text-gold-soft">FAQ</a></li>
              <li><a href="#" className="text-sm text-paper/75 transition-colors hover:text-gold-soft">Políticas</a></li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow-light">Atendimento</p>
            <p className="mt-4 text-sm text-paper/55">
              Instagram: <span className="text-gold-soft/80">[LINK INSTAGRAM DA MAISON ARCANE]</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              O Instagram é o canal principal de contato da Maison Arcane.
            </p>
            <p className="mt-3 text-xs text-paper/40">(endereço do Instagram a ser preenchido)</p>
          </div>
        </div>

        <p className="mt-14 border-t border-gold/15 pt-6 text-xs tracking-wide text-paper/45">
          © 2026 Maison Arcane. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <AvantDeCommencer />
        <Leituras />
        <ComoFunciona />
        <Sobre />
        <Depoimentos />
        <Disclaimer />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
