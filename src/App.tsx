import React from 'react';
import { CtaButton } from './components/CtaButton';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ImageCarousel } from './components/ImageCarousel';
import { FaqAccordion } from './components/FaqAccordion';
import {
  CHECKOUT_URL,
  MARQUEE_ICONS,
  GENERAL_TESTIMONIALS,
  OBJECTION_1_SLIDES,
  OBJECTION_2_SLIDES,
  OBJECTION_3_SLIDES,
  PHASES_DATA,
  STEPS_DATA,
  BONUSES_DATA,
  CHECKLIST_ITEMS,
} from './data';

export default function App() {
  return (
    <div className="w-full min-h-screen text-[#111] overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: HERO HEADER
         ========================================================================= */}
      <header className="w-full pt-8 pb-14 px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8 max-w-[340px] sm:max-w-[385px]">
          <img
            src="/images/logo-do-zero-ao-primeiro-hotel.svg"
            alt="DO ZERO AO PRIMEIRO HOTEL"
            className="w-full h-auto"
          />
        </div>

        {/* Hero Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-medium leading-[1.25] text-black/90 max-w-4xl mb-6">
          O método que faz hotéis pagarem até R$2,500 por uma única hospedagem —
          e mulheres comuns, sem seguidores, estão sendo chamadas primeiro.
        </h1>

        {/* Hero Subtitle */}
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg font-medium text-black/90 max-w-3xl mb-10">
          <img
            src="/images/check-2.svg"
            alt="Check"
            className="w-5 h-5 flex-shrink-0"
          />
          <p>
            Mesmo que você não queira aparecer em vídeo e não saiba nada de
            fotografia ou edição.
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-md mx-auto">
          <CtaButton
            text="QUERO ENTENDER COMO"
            href="#como-funciona"
            className="w-full py-4 text-xl"
            showIcon={true}
          />
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: MARQUEE TICKER 1
         ========================================================================= */}
      <MarqueeTicker />

      {/* =========================================================================
          SECTION 3: ATÉ QUANDO VOCÊ VAI CONTINUAR PAGANDO...
         ========================================================================= */}
      <section id="como-funciona" className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center scroll-mt-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black/90 max-w-3xl mx-auto leading-tight mb-4">
          Até quando você vai continuar pagando pra se hospedar, em vez de ser
          paga por isso?
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-medium text-black/80 max-w-2xl mx-auto mb-10">
          Já reparou que tem gente ganhando dinheiro fazendo exatamente o que você
          já faz de graça: viajar e postar?
        </p>

        {/* 4 Red Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mb-12">
          {['SE HOSPEDA', 'TIRA FOTO BONITA', 'POSTA NO INSTAGRAM', 'MAS NUNCA GANHA NENHUM CENTAVO POR ISSO'].map(
            (label, idx) => (
              <div key={idx} className="blocored text-sm sm:text-base md:text-lg">
                <span>{label}</span>
              </div>
            )
          )}
        </div>

        {/* Warning Exclamation Callout */}
        <div className="max-w-2xl mx-auto p-4 md:p-5 rounded-lg border border-dashed border-[#FF4002] bg-[#FF4002]/20 flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 35 35"
              fill="none"
              className="w-9 h-9"
            >
              <path
                d="M1 8C1 6.34315 2.34315 5 4 5H27C28.6569 5 30 6.34315 30 8V31C30 32.6569 28.6569 34 27 34H4C2.34315 34 1 32.6569 1 31V8Z"
                fill="black"
              />
              <path
                d="M5 4C5 2.34315 6.34315 1 8 1H31C32.6569 1 34 2.34315 34 4V27C34 28.6569 32.6569 30 31 30H8C6.34315 30 5 28.6569 5 27V4Z"
                fill="#FF4002"
              />
              <path
                d="M21.5208 8.37646V11.0171L21.2274 18.7254H18.3414L18.064 11.0171V8.37646H21.5208ZM21.5795 23.6332H18V19.9204H21.5795V23.6332Z"
                fill="#FAF5D5"
              />
              <path
                d="M31 0.650391C32.8502 0.650391 34.3496 2.14985 34.3496 4V27C34.3496 28.8502 32.8502 30.3496 31 30.3496H30.3496V31C30.3496 32.8502 28.8502 34.3496 27 34.3496H4C2.14985 34.3496 0.650391 32.8502 0.650391 31V8C0.650391 6.14985 2.14985 4.65039 4 4.65039H4.65039V4C4.65039 2.14985 6.14985 0.650391 8 0.650391H31Z"
                stroke="black"
                strokeWidth="0.7"
              />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-normal text-black leading-relaxed">
            Enquanto isso, tem gente sendo paga pra fazer exatamente o que você já faz de graça em toda viagem: tirar foto e postar.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CANSADA DE vs ENTÃO PROVAVELMENTE JÁ
         ========================================================================= */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="rounded-2xl border-[2.5px] border-black bg-[#FFFCEB] shadow-[-6px_6px_0_0_#000] p-6 sm:p-8 flex flex-col justify-between">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 text-center">
              SE VOCÊ ESTÁ CANSADA DE:
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                'Pagar a diária inteira do próprio bolso',
                'Ver outras mulheres postando fotos de hotéis chiques',
                'Achar que precisa ser famosa pra alguém pagar sua hospedagem',
                'Voltar da viagem só com fotos mas sem dinheiro',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-full border border-black text-black text-sm sm:text-base font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="26"
                    viewBox="0 0 51 41"
                    fill="none"
                    className="w-7 h-6 flex-shrink-0"
                  >
                    <rect width="51" height="40.8" rx="20.4" fill="black" />
                    <path
                      d="M37.159 20.3915C32.5857 20.8069 29.9582 21.1892 28.3451 22.4521C26.4493 23.9312 26.0003 26.6399 25.5014 32.0574C24.9858 26.4405 24.5202 23.7484 22.4415 22.3026C20.8283 21.1725 18.2174 20.8069 13.8438 20.4081C18.4004 19.9927 21.0445 19.6104 22.641 18.3641C24.5535 16.8685 25.0025 14.1763 25.5014 8.74219C25.967 13.7442 26.3828 16.4198 27.9293 17.9652C29.4759 19.5107 32.17 19.9428 37.159 20.3915Z"
                      fill="#FF4002"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border-[2.5px] border-black bg-gradient-to-b from-[#FF4002] to-[#992601] shadow-[-6px_6px_0_0_#000] p-6 sm:p-8 flex flex-col justify-between text-white">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#FAF5D5] mb-6 text-center">
              ENTÃO PROVAVELMENTE VOCÊ TAMBÉM JÁ:
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                'Achou que precisaria aparecer pra conseguir isso',
                'Teve vergonha de pedir hospedagem grátis pro hotel',
                'Achou que precisava de portfólio e experiência pra começar',
                'Pensou que só influenciadora famosa fecha parceria',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-full border border-black bg-[#FFFCEB] text-black text-sm sm:text-base font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="26"
                    viewBox="0 0 51 41"
                    fill="none"
                    className="w-7 h-6 flex-shrink-0"
                  >
                    <rect width="51" height="40.8" rx="20.4" fill="black" />
                    <path
                      d="M37.159 20.3915C32.5857 20.8069 29.9582 21.1892 28.3451 22.4521C26.4493 23.9312 26.0003 26.6399 25.5014 32.0574C24.9858 26.4405 24.5202 23.7484 22.4415 22.3026C20.8283 21.1725 18.2174 20.8069 13.8438 20.4081C18.4004 19.9927 21.0445 19.6104 22.641 18.3641C24.5535 16.8685 25.0025 14.1763 25.5014 8.74219C25.967 13.7442 26.3828 16.4198 27.9293 17.9652C29.4759 19.5107 32.17 19.9428 37.159 20.3915Z"
                      fill="#FF4002"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EU TAMBÉM ERA UMA MULHER COMUM...
         ========================================================================= */}
      <section className="center-98 my-8 py-12 md:py-20 px-4 md:px-8 bg-black rounded-[32px] text-center text-[#FFFBE1]">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium max-w-4xl mx-auto leading-tight mb-12">
          EU TAMBÉM ERA UMA MULHER COMUM. E FOI ASSIM QUE DESCOBRI O CHECKIN REVERSO
        </h2>

        {/* Featured Story Card */}
        <div className="max-w-4xl mx-auto rounded-2xl border-[3px] border-[#FEFAE0] bg-gradient-to-b from-[#FF4002] to-[#992601] shadow-[-7px_7px_0_0_#FEFAE0] p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 text-left">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/mural.avif"
              alt="Ana - Check-in Reverso"
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#FAF5D5] bg-black text-[#FFFBE1] text-sm md:text-base font-medium mb-4 w-fit">
              Meu nome é
            </div>
            <h3 className="text-4xl md:text-5xl font-medium text-[#FFFBE1] mb-6">
              Ana
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#FEFAE0] leading-relaxed font-light mb-4">
              Hoje, já fechei parceria com mais de 650 hotéis e pousadas pelo mundo todo (e a agenda dos próximos 4 meses já está lotada).
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#FEFAE0] leading-relaxed font-light mb-4">
              Já ensinei mais de 3.150 mulheres a fazerem o mesmo, e já faturei mais de R$980 mil só com o Check in Reverso.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#FFFBE1]">
              Mas… nem sempre foi assim
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: O FUNDO DO POÇO AOS 24 ANOS
         ========================================================================= */}
      <section className="center-98 my-8 py-12 md:py-20 px-4 md:px-8 bg-black rounded-[32px] text-center text-[#FFFBE1]">
        {/* Inner Cream Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border-2 border-black bg-[#FFFCEB] text-black p-6 sm:p-10 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-3/5 text-center md:text-left">
              {/* Header with decorative icons */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img
                  src="/images/arrow-down-1.svg"
                  alt="Seta para baixo"
                  className="w-10 h-12"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
                  O FUNDO DO POÇO <span className="text-[#FF4002]">aos 24 anos</span>
                </h2>
                <img
                  src="/images/orange-loading.svg"
                  alt="Loading"
                  className="w-8 h-8 hidden sm:inline-block"
                />
                <img
                  src="/images/asterisco.svg"
                  alt="Asterisco"
                  className="w-8 h-8 hidden sm:inline-block"
                />
              </div>

              {/* Stats badges */}
              <div className="flex flex-col gap-3 mt-6">
                {[
                  'Quarto alugado de 15m².',
                  'Aluguel de R$800.',
                  'Salário de R$1.100 trabalhando na recepção de um hotel.',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-black bg-white shadow-sm text-sm sm:text-base font-medium"
                  >
                    <img
                      src="/images/2705.svg"
                      alt="Check"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/5 flex justify-center">
              <img
                src="/images/ana_triste.avif"
                alt="História no hotel"
                className="w-64 h-auto rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Red Badges List */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {[
            'Via hóspede chegar de carro importado.',
            'Trabalhava todo fim de semana.',
            'Atendia influenciadora se hospedando de graça.',
            'Não tinha dinheiro pra cabelo e unha',
            'Chamada de “sem classe” pela chefe.',
            'Voltava do plantão chorando.',
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-full border border-black bg-[#F60000] text-[#FFFCEB] text-xs sm:text-sm md:text-base font-medium shadow-sm"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: MAS O QUE MAIS DOÍA... NÃO ERA O CANSAÇO
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black/90 mb-3">
          Mas o que mais doía… não era isso...
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black/80 mb-12">
          Era ver hóspede após hóspede vivendo a vida que eu jamais conseguiria ter.
        </p>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-black bg-[#FFFCEB] shadow-[-6px_6px_0_0_#000] p-6 flex flex-col items-center">
            <img
              src="/images/800posts.avif"
              alt="Atendendo mesa"
              className="w-full max-w-sm h-auto rounded-xl mb-4"
            />
            <h3 className="text-lg sm:text-xl font-medium text-black">
              Foram 2 anos atendendo mesa.
            </h3>
          </div>

          <div className="rounded-2xl border border-black bg-[#FFFCEB] shadow-[-6px_6px_0_0_#000] p-6 flex flex-col items-center">
            <img
              src="/images/dec-seguidores.avif"
              alt="Nenhuma viagem"
              className="w-full max-w-sm h-auto rounded-xl mb-4"
            />
            <h3 className="text-lg sm:text-xl font-medium text-black">
              Resultado? Não consegui guardar nem R$1.000.
            </h3>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="max-w-2xl mx-auto p-4 md:p-5 rounded-lg border border-dashed border-[#FF4002] bg-[#FF4002]/20 flex items-center justify-center gap-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-black font-normal">
            Eu olhava pro salário do mês e pensava:{' '}
            <b>"Será que esse tipo de vida é mesmo pra mim?"</b>
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: MARQUEE TICKER 2 (ROTATED BANNER)
         ========================================================================= */}
      <div className="w-full my-12 overflow-hidden py-4">
        <div className="-rotate-2 transform shadow-[-6px_6px_0_0_#FF4002]">
          <MarqueeTicker />
        </div>
      </div>

      {/* =========================================================================
          SECTION 9: A DESCOBERTA QUE MUDOU TUDO
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90">
            A descoberta que mudou
          </h2>
          <img
            src="/images/star-sembg.svg"
            alt="Estrela"
            className="w-10 h-10 sm:w-14 sm:h-14"
          />
          <div className="px-8 py-2.5 rounded-full border border-black bg-[#FFFCEB] shadow-[-5px_5px_0_0_#000] text-4xl sm:text-5xl font-medium text-black">
            tudo
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
          Um dia, eu parei de tentar economizar pra viajar.
          <br />
          <br />
          E comecei a estudar por que certos hóspedes pagavam caro, e o que fazia eles escolherem um lugar em vez de outro.
          <br />
          <br />
          Conversei com hotéis. Analisei hóspedes. Observei cada detalhe que fazia alguém pagar mais por uma estadia. E descobri algo chocante:
        </p>
      </section>

      {/* =========================================================================
          SECTION 10: OS HOTÉIS NÃO PAGAM POR FOTOS... DESEJO
         ========================================================================= */}
      <section className="center-98 my-8 py-16 md:py-24 px-4 md:px-8 bg-black rounded-[32px] text-center text-[#FFFBE1] relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Concentric Pill Borders effect */}
          <div className="p-3 sm:p-5 rounded-[40px] md:rounded-[90px] bg-gradient-to-r from-[#FFFBE1] via-[#FF7B2C] to-[#FF4002] shadow-2xl">
            <div className="p-2 sm:p-3 rounded-[35px] md:rounded-[80px] bg-[#010101] py-10 sm:py-16 px-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/images/return.svg"
                  alt="Ícone de retorno"
                  className="w-20 md:w-28 h-auto"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#FFFBE1] mb-4">
                Os hotéis não pagam por fotos.
              </h2>
              <div className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#FF4002] degradepsico">
                Eles pagam por quem sabe criar Desejo
              </div>
            </div>
          </div>
        </div>

        {/* Small floating marquee angle */}
        <div className="mt-8 rotate-[1.5deg] max-w-4xl mx-auto rounded-full overflow-hidden bg-[#FF4002] py-2">
          <div className="animate-marquee flex items-center gap-6">
            {MARQUEE_ICONS.concat(MARQUEE_ICONS).map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Banner"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none"
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: 1º HOTEL FECHADO EM 7 DIAS...
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black/90 mb-3">
          Quando apliquei isso na minha primeira proposta com o método que hoje chamo de
        </h3>
        <p className="text-3xl sm:text-5xl font-medium text-[#FF4002] mb-12">
          CHECKIN REVERSO...
        </p>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            '1º hotel fechado em 7 dias',
            'R$4.200 faturados em 14 dias',
            '24 hotéis fechados em 3 meses',
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-black text-white p-8 rounded-[32px] flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="60"
                  viewBox="0 0 119 103"
                  fill="none"
                >
                  <path
                    d="M82.3125 54.8296C73.2897 55.6559 68.1057 56.4161 64.9231 58.928C61.1827 61.8695 60.2968 67.2569 59.3125 78.0316C58.2954 66.8603 57.3767 61.506 53.2754 58.6305C50.0928 56.383 44.9416 55.6559 36.3125 54.8627C45.3025 54.0364 50.5193 53.2762 53.6691 50.7973C57.4423 47.8227 58.3282 42.4684 59.3125 31.6606C60.2312 41.6091 61.0514 46.9303 64.1028 50.0041C67.1542 53.0779 72.4694 53.9372 82.3125 54.8296Z"
                    fill="#FF4002"
                  />
                  <path
                    d="M83.4297 2.39648C97.1491 -0.642929 108.139 1.26341 113.687 8.22363C119.234 15.1839 118.642 26.3216 112.62 39.0176C106.629 51.647 95.3949 65.4955 80.3086 77.5205C65.2222 89.5455 49.2167 97.4091 35.5693 100.433C21.85 103.472 10.8603 101.566 5.3125 94.6055C-0.235267 87.6453 0.356801 76.5075 6.37891 63.8115C12.3696 51.182 23.6039 37.3327 38.6904 25.3076C53.7768 13.2826 69.7823 5.42 83.4297 2.39648Z"
                    stroke="#FFFCEB"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-medium leading-snug">
                {stat}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: E NÃO PAROU POR AÍ...
         ========================================================================= */}
      <section className="center-98 my-8 py-16 md:py-24 px-4 md:px-8 bg-black rounded-[32px] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#FF4002] mb-3">
                E NÃO PAROU POR AÍ...
              </h2>
              <p className="text-base sm:text-xl text-[#FFFCEB]">
                De recepcionista de hotel <span className="text-[#FF4002] font-bold mx-1">→</span> hoje sou referência Nacional.
              </p>
            </div>
            <div className="max-w-md w-full">
              <img
                src="/images/icones.avif"
                alt="Conquistas"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* 4 Feature Cream Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Parceira fixa de mais de 130 hotéis pelo mundo',
              'Já apareci em redes de hotelaria por todo o Brasil',
              'Já ensinei o método pra mais de 3.000 mulheres',
              'Fotógrafa Premium (me pagam até R$10.500 por um trabalho que finalizo em menos de 1 dia)',
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFCEB] text-black p-5 rounded-xl flex items-center gap-4 shadow-sm"
              >
                <img
                  src="/images/check-2.svg"
                  alt="Check"
                  className="w-8 h-8 flex-shrink-0"
                />
                <h4 className="text-sm sm:text-base font-medium leading-snug">
                  {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: GATILHO SECRETO DA RIQUEZA
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90 mb-4 leading-tight">
          A descoberta que
          <br />
          <span className="text-[#FF4002]">quebrou o código dos hotéis</span>
        </h2>
        <p className="text-base sm:text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-10">
          Trabalhando na recepção, eu via de perto: algumas hóspedes saíam sem
          pagar nada, e o hotel ainda agradecia. Passei 2 anos observando o
          padrão por trás disso até descobrir algo revolucionário:
        </p>

        {/* Black banner */}
        <div className="rounded-3xl bg-[#020202] p-8 md:p-12 text-[#FFFCEB] max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-[#FFFCEB]">
              O hotel só paga por fotos e vídeos que saibam ativar o{' '}
              <span className="bg-gradient-to-r from-[#FFA043] via-[#FF7B2C] to-[#FF4002] bg-clip-text text-transparent">
                Gatilho Secreto da Riqueza.
              </span>
            </h3>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/Group-1171275278.avif"
              alt="Gatilho Secreto"
              className="w-full max-w-sm h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: ÂNGULO, LUZ, DESEJO
         ========================================================================= */}
      <section className="py-12 px-4 max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-2 text-[#FFFCEB]">
              <img src="/images/1f525.svg" alt="Fogo" className="w-5 h-5" />
              ÂNGULO
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              O ângulo certo faz o lugar parecer mais luxuoso do que é
            </p>
          </div>

          <div className="bg-black text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-2 text-[#FFFCEB]">
              <img src="/images/1f4c5.svg" alt="Calendário" className="w-5 h-5" />
              LUZ
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              A luz certa faz quem vê se imaginar ali dentro
            </p>
          </div>

          <div className="bg-black text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-2 text-[#FFFCEB]">
              <img src="/images/1f381.svg" alt="Presente" className="w-5 h-5" />
              DESEJO
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              A sensação de 'eu preciso estar nesse lugar'
            </p>
          </div>
        </div>

        {/* Black Callout Box */}
        <div className="max-w-2xl mx-auto p-4 md:p-5 rounded-lg border border-dashed border-[#FF4002] bg-black text-white text-center mb-8">
          <p className="text-sm sm:text-base md:text-lg text-white font-normal">
            Se você é capaz de fazer isso, você pode trabalhar produzindo conteúdo para Hotéis, assim como eu.
          </p>
        </div>

        <p className="text-base sm:text-lg text-black/80 max-w-2xl mx-auto leading-relaxed">
          Você já sabe tirar foto, já sabe postar. A diferença entre você e quem já lucra com isso é um único detalhe.
          <br />
          <br />
          E eu vou te ensinar exatamente qual é. Você está a um passo de aprender o Check-in Reverso.
        </p>
      </section>

      {/* =========================================================================
          SECTION 15: DEPOIMENTOS GERAIS
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90 mb-3 leading-tight">
          Mas não acredite
          <br />
          <span className="text-[#FF4002]">apenas no que eu estou falando</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-black/80 mb-10">
          Veja o que pessoas como você estão conquistando com o método:
        </p>

        <ImageCarousel
          images={GENERAL_TESTIMONIALS}
          itemsPerViewMobile={1}
          itemsPerViewDesktop={2}
          autoplayInterval={4500}
          className="max-w-4xl mx-auto"
        />
      </section>

      {/* =========================================================================
          SECTION 16: DO ZERO AO PRIMEIRO HOTEL
         ========================================================================= */}
      <section className="center-98 my-8 py-16 md:py-24 px-4 md:px-8 bg-black rounded-[32px] text-center text-[#FFFBE1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-medium mb-4 leading-tight">
            DO ZERO <span className="text-[#FF4002]">AO PRIMEIRO HOTEL</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#FEFAE0] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Não é apenas um curso. É o único método que ensina o Check-in Reverso na prática — e já fez mulheres comuns fecharem de 3 a 4 trabalhos por mês. Quem se dedica, fecha ainda mais...
          </p>

          {/* 3 Dashed Orange Badges */}
          <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-10">
            {[
              'Mesmo que você nunca tenha fechado uma parceria antes…',
              'Mesmo que ache que “seu perfil não é bom o suficiente”…',
              'Mesmo que comece sem seguidores e só um celular simples.',
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-dashed border-[#FFFBE1] bg-[#FF4002] text-left text-sm sm:text-base md:text-lg font-medium text-[#FFFBE1] shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="24"
                  viewBox="0 0 51 41"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <rect width="51" height="40.8" rx="20.4" fill="black" />
                  <path
                    d="M37.159 20.3915C32.5857 20.8069 29.9582 21.1892 28.3451 22.4521C26.4493 23.9312 26.0003 26.6399 25.5014 32.0574C24.9858 26.4405 24.5202 23.7484 22.4415 22.3026C20.8283 21.1725 18.2174 20.8069 13.8438 20.4081C18.4004 19.9927 21.0445 19.6104 22.641 18.3641C24.5535 16.8685 25.0025 14.1763 25.5014 8.74219C25.967 13.7442 26.3828 16.4198 27.9293 17.9652C29.4759 19.5107 32.17 19.9428 37.159 20.3915Z"
                    fill="#FF4002"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-[#FEFAE0] max-w-3xl mx-auto leading-relaxed font-light">
            O Do Zero ao Primeiro Hotel é o lugar onde eu reuni todo o conhecimento que me fez sair da recepção, fechar mais de 650 hotéis e transformar hospedagens comuns em desejo e autoridade.
            <br />
            <br />
            Através do meu método de tirar fotos e fazer vídeos qualquer mulher com um celular comum também pode fazer até 30 MIL/MÊS assim como eu.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 17: OS RESULTADOS DOS MEUS ALUNOS FALAM POR SI (3 OBJECTIONS)
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90 mb-12">
          Os resultados dos meus
          <br />
          <span className="text-[#FF4002]">alunos falam por si.</span>
        </h2>

        <div className="flex flex-col gap-14">
          {/* Objection 1 */}
          <div className="rounded-2xl border-[10px] md:border-[15px] border-[#FF3737] bg-[#010101] text-white p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF3737] mb-3">
              “Mas eu não tenho seguidores, o hotel nem vai me responder…”
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#FFFBE1] font-light max-w-2xl mx-auto mb-8">
              ✅ Mulheres sem nenhum seguidor já fecharam hospedagem só com o
              portfólio pronto que eu te dou
            </p>
            <ImageCarousel
              images={OBJECTION_1_SLIDES}
              itemsPerViewMobile={1}
              itemsPerViewDesktop={2}
              autoplayInterval={4000}
            />
          </div>

          {/* Objection 2 */}
          <div className="rounded-2xl border-[10px] md:border-[15px] border-[#FF3737] bg-[#010101] text-white p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF3737] mb-3">
              “Mas eu não entendo nada de foto ou edição, nunca vou conseguir”
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#FFFBE1] font-light max-w-2xl mx-auto mb-8">
              ✅ Mulheres sem nenhuma experiência com câmera finalmente encontraram
              no Checkin Reverso um caminho simples, real e pronto pra aplicar
            </p>
            <ImageCarousel
              images={OBJECTION_2_SLIDES}
              itemsPerViewMobile={1}
              itemsPerViewDesktop={2}
              autoplayInterval={4000}
            />
          </div>

          {/* Objection 3 */}
          <div className="rounded-2xl border-[10px] md:border-[15px] border-[#FF3737] bg-[#010101] text-white p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF3737] mb-3">
              “Mas moro numa cidade pequena, aqui não tem hotel chique…”
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#FFFBE1] font-light max-w-2xl mx-auto mb-8">
              ✅ Mulheres de cidades pequenas usaram o Checkin Reverso e fecharam
              parceria até com pousada simples
            </p>
            <ImageCarousel
              images={OBJECTION_3_SLIDES}
              itemsPerViewMobile={1}
              itemsPerViewDesktop={2}
              autoplayInterval={4000}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 18: NA PRÁTICA COMO FUNCIONA O CHECKIN REVERSO? (3 FASES)
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90 mb-4 leading-tight">
          Na prática <span className="text-[#FF4002]">como funciona</span> o Checkin Reverso?
        </h2>
        <p className="text-base sm:text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Eu criei o Do Zero ao Primeiro Hotel pra ser à prova de falhas.
          <br />
          <br />
          Qualquer mulher — independente da cidade, idade ou experiência com câmera — consegue aplicar.
          <br />
          <br />
          Tudo se resume a 3 fases simples que ao aplicar, garantem que você comece ainda nesse final de semana e já consiga pelo menos R$1000 pelos seus primeiros trabalhos.
        </p>

        {/* 3 Phases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {PHASES_DATA.map((phase) => (
            <div
              key={phase.number}
              className="rounded-2xl border-[2.5px] border-black bg-gradient-to-b from-[#FF4002] to-[#992601] shadow-[-6px_6px_0_0_#000] p-6 flex flex-col justify-between text-white text-left"
            >
              <div>
                <img
                  src={phase.image}
                  alt={phase.title}
                  className="w-full h-44 object-cover rounded-xl mb-6 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-[#FFFCEB] mb-2 tracking-wide">
                  {phase.title}
                </h3>
                <p className="text-sm font-light text-[#FAF5D5] italic mb-6">
                  {phase.quote}
                </p>

                <p className="text-sm font-medium text-[#FFFCEB] mb-3">
                  {phase.intro}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {phase.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-[#FFFCEB] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[#FAF5D5] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="max-w-3xl mx-auto p-5 rounded-lg border border-dashed border-[#FF4002] bg-black text-white text-center mb-6">
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
            O Checkin Reverso não é teoria, nem mais um curso raso de fotografia. É um passo a passo validado que guia você por 3 fases: da primeira proposta até fechar hospedagens fixas todo mês.
          </p>
        </div>
        <p className="text-sm sm:text-base text-black/80 font-medium">
          E o melhor: sem achismos, sem depender de sorte, sem precisar ter seguidores.
        </p>
      </section>

      {/* =========================================================================
          SECTION 19: SPOILER - OS 4 BASTIDORES
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto">
        {/* Spoiler Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 text-center md:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#FFFCEB] text-xs sm:text-sm font-medium mb-3">
              <img src="/images/1f6a8.svg" alt="Spoiler" className="w-4 h-4" />
              QUER UM SPOILER?
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black/90 leading-snug">
              NO CHECKIN REVERSO, VOCÊ VAI DESCOBRIR O QUE EXISTE POR TRÁS DE CADA FOTO QUE VENDE
            </h2>
          </div>
          <div className="max-w-xs text-sm sm:text-base text-black/80 md:text-right">
            <p>
              Os bastidores, os erros, os acertos e o exato processo por trás das fotos que os hotéis AMAM.
            </p>
          </div>
        </div>

        {/* 4 Horizontal Steps */}
        <div className="flex flex-col gap-6">
          {STEPS_DATA.map((step) => (
            <div
              key={step.number}
              className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 pb-6 border-b border-[#3F3F3F]/40"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black/90 whitespace-nowrap min-w-[240px]">
                <span className="text-xl sm:text-2xl font-light text-neutral-500 mr-2">
                  {step.number}.
                </span>
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 20: BÔNUS EXCLUSIVOS
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-medium text-black/60 tracking-wider uppercase mb-2">
          O MÉTODO POR SI SÓ, JÁ TE COLOCA HOSPEDADA DE GRAÇA…
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90 mb-4 leading-tight">
          MAS VOCÊ MERECE <span className="text-[#FF4002]">AINDA MAIS</span>
        </h2>
        <p className="text-base sm:text-lg text-black/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Eu decidi turbinar o Checkin Reverso com 4 bônus que poderiam ser vendidos separados. Eles vão acelerar seus resultados e te dar uma vantagem absurda, para começar ainda nesse final de semana.
        </p>

        {/* 4 Bonus Cards */}
        <div className="flex flex-col gap-8">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-3xl border border-[#272C37] bg-[#010101] text-white p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl text-left"
            >
              <div className="w-full md:w-2/5 flex justify-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full max-w-sm h-auto rounded-2xl border border-neutral-700/60 object-cover"
                />
              </div>
              <div className="w-full md:w-3/5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#FF4002] mb-2 leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-sm sm:text-base text-[#FAF5D5] italic mb-4">
                  {bonus.subtitle}
                </p>
                <div className="flex flex-col gap-2 text-sm sm:text-base text-[#FFFBE1]/90 leading-relaxed">
                  {bonus.bullets.map((bullet, bIdx) => (
                    <p key={bIdx}>{bullet}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 21: PRICING & OFFER
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-[#272C37] bg-[#010101] p-6 sm:p-10 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          {/* Left Column: Checklist */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {CHECKLIST_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#FFFBE1] text-[#FAF5D5] text-xs sm:text-sm md:text-base font-medium"
              >
                <span className="w-6 h-6 rounded-full bg-[#FF4002] text-[#FFFBE1] flex items-center justify-center text-xs flex-shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Right Column: Price Box */}
          <div className="w-full lg:w-1/2 bg-[#1A1A1A] border border-[#666] rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center">
            <img
              src="/images/fcc-logo.avif"
              alt="Logo"
              className="w-56 sm:w-64 md:w-72 h-auto mb-5"
            />
            <h3 className="text-base sm:text-lg text-[#FFFBE1] font-light mb-2">
              Tenha acesso a tudo isso por uma condição especial:
            </h3>
            <p className="text-lg sm:text-xl text-[#FFFBE1] font-light mb-1">
              DE <span className="text-[#FF4141] line-through">R$900</span> POR:
            </p>
            <div className="text-4xl sm:text-6xl md:text-7xl font-semibold text-[#FFFBE1] tracking-tight my-2">
              <span className="text-2xl sm:text-3xl font-light align-middle mr-1">
                12x
              </span>
              R$29
            </div>
            <p className="text-base sm:text-lg text-[#FFFBE1] font-light mb-6">
              ou R$ 288 à vista.
            </p>

            <CtaButton
              text="QUERO MINHA VAGA COM DESCONTO"
              variant="secondary"
              className="w-full py-4 text-sm sm:text-base md:text-lg"
              showIcon={false}
            />

            <div className="mt-6 p-3 rounded-xl border border-dashed border-[#FF4002]/50 bg-[#FF4002]/15 text-[#FFFBE1] text-xs sm:text-sm">
              Menos de R$1 por dia para dominar a habilidade que separa quem cresce de quem continua invisível.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 22: 16 DIAS DE GARANTIA
         ========================================================================= */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-[#272C37] bg-[#010101] p-6 sm:p-10 md:p-12 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl">
          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src="/images/16d.avif"
              alt="16 Dias de Garantia"
              className="w-full max-w-xs h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-3/5 text-left">
            <h3 className="text-2xl sm:text-3xl font-medium text-[#FF4002] mb-4 leading-snug">
              Quer testar na prática sem risco nenhum? Sem Problemas! 16 Dias de Garantia
            </h3>
            <div className="text-sm sm:text-base text-[#FFFBE1]/90 space-y-3 font-light leading-relaxed mb-8">
              <p>
                Por que assumo TODO o risco por você? Porque sei que o Checkin Reverso funciona. E quero te provar isso.
              </p>
              <p>
                Enquanto 99% dos métodos te dão apenas 7 dias (porque a lei obriga), eu estou te dando 16 dias completos para testar o Hack das 3 Frases e mandar suas primeiras propostas.
              </p>
              <p className="font-medium text-white">Não gostou? Simples:</p>
              <p className="pl-2">→ Envie um email solicitando reembolso</p>
              <p className="pl-2">→ Receba 100% do seu dinheiro de volta</p>
              <p className="pl-2">
                → Mesmo que o motivo seja pessoal (mudou de ideia, surgiu imprevisto, etc.)
              </p>
              <p>
                Isso é mais que garantia. É prova de confiança. Só quero você aqui se realmente quiser fechar seu primeiro hotel. Ponto final.
              </p>
              <p className="font-semibold text-white">
                O risco é 100% meu. Você só tem a ganhar.
              </p>
            </div>

            <CtaButton
              text="QUERO ENTRAR SEM RISCO NO CHECKIN REVERSO"
              variant="secondary"
              className="w-full py-4 text-sm sm:text-base"
              showIcon={false}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 23: FAQ / PERGUNTAS FREQUENTES
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-black/90 mb-2">
          Ficou com alguma dúvida?
        </h2>
        <p className="text-xs sm:text-sm tracking-wider uppercase text-black/70 font-semibold mb-10">
          ACESSE AS PERGUNTAS FREQUENTES
        </p>

        <FaqAccordion />
      </section>

      {/* =========================================================================
          SECTION 24: ÚLTIMO AVISO - CENÁRIO A vs CENÁRIO B
         ========================================================================= */}
      <section className="center-98 my-8 py-16 md:py-24 px-4 md:px-8 bg-black rounded-[32px] text-center text-[#FFFBE1]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium mb-3 flex items-center justify-center gap-3">
            <img src="/images/26a0.svg" alt="Aviso" className="w-8 h-8" />
            ÚLTIMO AVISO
            <img src="/images/26a0.svg" alt="Aviso" className="w-8 h-8" />
          </h2>
          <p className="text-base sm:text-xl text-[#FEFAE0] font-light mb-12">
            Daqui a 6 meses, onde você estará?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Cenário A */}
            <div className="rounded-2xl border-[2.5px] border-[#FAF5D5] bg-gradient-to-b from-[#FF0202] to-[#990101] shadow-[-6px_6px_0_0_#FAF5D5] p-6 text-center">
              <img
                src="/images/cenario-a.avif"
                alt="Cenário A"
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#FFFCEB] mb-3">
                CENÁRIO A
              </h3>
              <p className="text-sm sm:text-base text-[#FFFCEB] font-light leading-relaxed">
                Ainda trabalhando 8 horas por dia por R$2.200 por mês, enquanto outras mulheres ganham esse valor em uma única hospedagem. Você vende seu tempo por salário, enquanto poderia usar suas fotos e vídeos para transformar hotéis em uma nova fonte de renda.
              </p>
            </div>

            {/* Cenário B */}
            <div className="rounded-2xl border-[2.5px] border-[#FAF5D5] bg-gradient-to-b from-[#FF4002] to-[#992601] shadow-[-6px_6px_0_0_#FAF5D5] p-6 text-center">
              <img
                src="/images/cenario-b.avif"
                alt="Cenário B"
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#FFFCEB] mb-3">
                CENÁRIO B
              </h3>
              <p className="text-sm sm:text-base text-[#FFFCEB] font-light leading-relaxed">
                A Check in IA fecha contratos e deixa seus finais de semana já reservados, se hospedando de graça e ganhando no mínimo R$1000 ou mais em uma única hospedagem. Usando suas fotos e vídeos para transformar hotéis em uma nova fonte de renda.
              </p>
            </div>
          </div>

          {/* Decision Callout */}
          <div className="max-w-2xl mx-auto p-4 md:p-5 rounded-lg border border-dashed border-black bg-[#FAF5D5] text-black text-center">
            <p className="text-sm sm:text-base md:text-lg font-medium">
              A diferença entre esses cenários? A decisão que você toma nos próximos 30 segundos.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 25: FINAL URGENCY & CTA
         ========================================================================= */}
      <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black/90 leading-snug mb-6">
          Cada dia que você adia o seu primeiro Checkin Reverso, é mais uma diária
          saindo do seu bolso à toa, enquanto você perde: tempo, dinheiro e
          experiências.
        </h2>
        <div className="text-base sm:text-lg text-black/80 max-w-2xl mx-auto space-y-3 mb-10 leading-relaxed">
          <p>
            → Amanhã você pode acordar e continuar pagando pra se hospedar como
            sempre fez...
          </p>
          <p>
            → Ou pode acordar já sabendo exatamente como usar o Hack das 3
            Frases, aumentando (e muito) as chances de fechar sua próxima
            hospedagem de graça.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <CtaButton
            text="ENTRAR AGORA NO CHECKIN REVERSO"
            className="w-full py-4 text-base sm:text-lg"
            showIcon={true}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 26: FOOTER
         ========================================================================= */}
      <footer className="w-full bg-black py-6 px-4 text-center text-white text-xs sm:text-sm font-light">
        <p>©Checkin Reverso | Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}
