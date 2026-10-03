'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Scan,
  Eye,
  Activity,
  ChevronDown,
  ArrowRight,
  Clock,
  Layers,
  CheckCircle2,
  Calendar,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Sliders,
  Award,
  Gem,
  Check,
  Maximize2
} from 'lucide-react';

// Link oficial do WhatsApp configurado com a mensagem padrão
const WHATSAPP_BASE_URL = 'https://wa.me/5519994656845';
const WHATSAPP_DEFAULT_TEXT = 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20de%20visagismo%20e%20reabilita%C3%A7%C3%A3o%20oral.';
const WHATSAPP_DEFAULT_URL = `${WHATSAPP_BASE_URL}?text=${WHATSAPP_DEFAULT_TEXT}`;

// Dados dos tratamentos do Scanner Interativo 3D
const TREATMENTS = [
  {
    id: 'lentes',
    title: 'Lentes de Porcelana Ultra-Finas',
    shortName: 'Lentes de Contato E-Max',
    tagline: 'Estratificação artesanal com precisão biomimética',
    tempoMedio: '14 a 21 dias',
    sessoes: '3 consultas clínicas',
    focoEstetico: 'Translucidez incisal, proporção áurea (1:1.618) e alinhamento do zênite',
    espessura: '0.2mm a 0.3mm (dissilicato de lítio prensado)',
    indicacao: 'Microdontia, diastemas, pigmentações intrínsecas e restauração da harmonia facial',
    tecnologia: 'Escaneamento iTero 5D + Cad/Cam 5 eixos + Microscopia Zeiss',
    metricas: {
      preservacaoBiologica: '98%',
      estabilidadeCor: '100%',
      tenacidade: '470 MPa',
      aderencia: 'Adesão silanizada definitiva',
    },
    waMessage: 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20Lentes%20de%20Porcelana%20Ultra-Finas%20no%20Atelier%20Lumina.',
  },
  {
    id: 'allon4',
    title: 'Reabilitação All-on-4 em Carga Imediata',
    shortName: 'Carga Imediata All-on-4',
    tagline: 'Recomposição integral da oclusão e suporte labial em até 72h',
    tempoMedio: '24h a 72h (Protocolo Fixo)',
    sessoes: '2 a 3 etapas guiadas',
    focoEstetico: 'Rejuvenescimento do terço inferior, sustentação perioral e sorriso contínuo',
    espessura: 'Estrutura monobloco em Titânio Grau 5 com Zircônia Translúcida Multi-Layer',
    indicacao: 'Perdas dentárias múltiplas, atrofia óssea severa ou reabilitação total',
    tecnologia: 'Tomografia Computadorizada Cone Beam + Guia Estereolitográfico 3D',
    metricas: {
      preservacaoBiologica: 'Sem enxertos ósseos complexos',
      estabilidadeCor: '100% Inalterável',
      tenacidade: '1.200 MPa (Zircônia)',
      aderencia: 'Osteointegração com torque controlado',
    },
    waMessage: 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20Reabilita%C3%A7%C3%A3o%20All-on-4%20em%20Carga%20Imediata%20no%20Atelier%20Lumina.',
  },
  {
    id: 'alinhamento',
    title: 'Alinhamento Invisível Guiado',
    shortName: 'Ortodontia Digital Guiada',
    tagline: 'Nivelamento biomecânico milimétrico pré-reabilitação estética',
    tempoMedio: '4 a 9 meses',
    sessoes: 'Check-ups digitais a cada 45 dias',
    focoEstetico: 'Expansão harmônica dos corredores bucais e correção axial das coroas',
    espessura: 'Polímeros SmartTrack de 0.75mm com forças contínuas fisiológicas',
    indicacao: 'Apinhamentos, rotações, mordidas cruzadas e preparação para laminados cerâmicos',
    tecnologia: 'Simulador ClinCheck 3D + Inteligência Preditiva de Movimento',
    metricas: {
      preservacaoBiologica: '100% Livre de desgastes prévios',
      estabilidadeCor: 'Totalmente transparente',
      tenacidade: 'Memória elástica contínua',
      aderencia: 'Removível para higiene e alimentação',
    },
    waMessage: 'Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20Alinhamento%20Invis%C3%ADvel%20Guiado%20no%20Atelier%20Lumina.',
  },
];

// Perguntas e Respostas do FAQ Estratégico
const FAQ_ITEMS = [
  {
    question: 'Qual é a durabilidade real das lentes de porcelana ao longo dos anos?',
    answer:
      'As lentes confeccionadas em dissilicato de lítio (IPS e.max) e cerâmicas feldspáticas de alta densidade possuem longevidade comprovada em estudos clínicos de longo prazo superior a 15 a 20 anos. O material cerâmico não sofre alteração cromática (não amarela com café, vinho ou tempo) e possui módulo de elasticidade similar ao esmalte dental natural. Com o protocolo de cimentação resinosa silanizada e as manutenções preventivas semestrais no Atelier Lumina, a integração com o dente é definitiva e biologicamente estável.',
  },
  {
    question: 'É necessário desgaste biológico da estrutura dental para receber as lentes?',
    answer:
      'Trabalhamos sob a rígida filosofia da Odontologia Minimamente Invasiva. Graças à tecnologia de escaneamento intraoral iTero 5D e à precisão de usinagem micrométrica, a espessura de nossas lentes atinge apenas 0.2mm a 0.3mm — a espessura de uma lente de contato ocular. Na grande maioria dos casos, realizamos apenas micro-lapidações superficiais de acomodação no esmalte (camada externa e sem inervação), preservando a integridade da dentina e a vitalidade biológica da polpa.',
  },
  {
    question: 'Pacientes com bruxismo severo ou apertamento noturno podem fazer o tratamento?',
    answer:
      'Sim. O bruxismo não é contraindicação para o tratamento estético no Atelier Lumina. Realizamos previamente um mapeamento oclusal digital computadorizado (T-Scan) para reequilibrar os pontos de contato e dissipar cargas mastigatórias excessivas. Além disso, utilizamos cerâmicas de alta tenacidade mecânica (até 470 MPa) e finalizamos cada reabilitação com o escaneamento e entrega de uma Placa Miorrelaxante de Desprogramação Neuromuscular em resina polimerizada 3D, garantindo total blindagem das peças cerâmicas durante o sono.',
  },
  {
    question: 'Qual é o protocolo de manutenção preventiva e acompanhamento pós-procedimento?',
    answer:
      'Recomendamos um retorno semestral para o Protocolo de Longevidade Lumina. Nessa sessão exclusiva em nosso ambiente privativo no Cambuí, realizamos profilaxia ultrassônica piezoelétrica de precisão, polimento cerâmico de alto brilho com pastas diamantadas sub-mícron e um escaneamento digital 3D comparativo de controle. Isso garante a perfeita saúde da margem gengival e a perpetuidade do brilho perolado original das suas porcelanas.',
  },
];

export default function HomePage() {
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scannerMode, setScannerMode] = useState<'visagismo' | 'oclusao' | 'translucidez'>('visagismo');

  const currentTreatment = TREATMENTS[activeTreatment];

  return (
    <div className="min-h-screen bg-[#050505] text-[#E8E6E1] relative overflow-hidden selection:bg-[#C5A880]/30 selection:text-[#FFF8EE]">
      {/* Background radial luxury lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.11)_0%,rgba(20,16,8,0.06)_50%,transparent_75%)] blur-3xl opacity-80" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.06)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.05)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-grid-gold opacity-30" />
      </div>

      {/* 1. Header Flutuante em Vidro Fosco */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto rounded-full glass-obsidian border-gold-hairline px-5 sm:px-8 py-3 flex items-center justify-between shadow-2xl">
          {/* Marca e CROSP */}
          <a href="#" className="flex flex-col group text-left">
            <span className="font-serif-luxury text-sm sm:text-base tracking-[0.22em] text-[#F3EFE6] font-medium group-hover:text-[#C5A880] transition-colors">
              LUMINA <span className="font-light text-[#C5A880]">ATELIER ORAL</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#8F887C] uppercase font-mono">
              CROSP 104.920 • CAMBUÍ, CAMPINAS
            </span>
          </a>

          {/* Status Clínico (Desktop) */}
          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#120F0A]/80 border border-[#C5A880]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-xs text-[#D8D2C6] tracking-wide font-sans-luxury">
              Laboratório Digital 3D Próprio em Operação
            </span>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase text-[#ADA495]">
            <a href="#arquitetura" className="hover:text-[#E8E6E1] transition-colors">Filosofia</a>
            <a href="#scanner" className="hover:text-[#C5A880] transition-colors flex items-center gap-1">
              <Scan className="w-3 h-3 text-[#C5A880]" />
              Scanner 3D
            </a>
            <a href="#pilares" className="hover:text-[#E8E6E1] transition-colors">Engenharia Oral</a>
            <a href="#faq" className="hover:text-[#E8E6E1] transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-[#E8E6E1] transition-colors">Atelier</a>
          </nav>

          {/* Botão de Ação Primário WhatsApp */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wider text-[#050505] bg-gradient-to-r from-[#D7BE96] via-[#E8D7B8] to-[#C5A880] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(197,168,128,0.35)] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Avaliação Exclusiva</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-[#C5A880]/30 text-[#E8D7B8]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 mx-auto max-w-lg rounded-2xl glass-obsidian border-gold-hairline p-5 shadow-2xl flex flex-col gap-4 text-sm"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-white/5 text-xs text-[#C5A880]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                Laboratório Digital 3D Próprio em Operação
              </div>
              <a
                href="#arquitetura"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D8D2C6] hover:text-[#C5A880] transition-colors py-1"
              >
                Filosofia & Proporção Áurea
              </a>
              <a
                href="#scanner"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D8D2C6] hover:text-[#C5A880] transition-colors py-1 flex items-center justify-between"
              >
                <span>Simulador Intraoral 3D</span>
                <Scan className="w-4 h-4 text-[#C5A880]" />
              </a>
              <a
                href="#pilares"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D8D2C6] hover:text-[#C5A880] transition-colors py-1"
              >
                Os Três Pilares Clínicos
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D8D2C6] hover:text-[#C5A880] transition-colors py-1"
              >
                Dúvidas Clínicas Frequentes
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#D8D2C6] hover:text-[#C5A880] transition-colors py-1"
              >
                Atelier Privativo (Cambuí)
              </a>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold tracking-wider text-[#050505] bg-gradient-to-r from-[#D7BE96] to-[#C5A880]"
              >
                Solicitar Horário no WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-28 sm:pt-36">
        {/* 2. Hero Section de Alto Impacto Visual */}
        <section id="arquitetura" className="relative px-4 sm:px-8 max-w-7xl mx-auto pt-6 pb-20 sm:pb-28">
          <div className="flex flex-col items-center text-center">
            {/* Badge Lapidado */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#120F0A]/90 text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#D7BE96] mb-8 shadow-[0_0_20px_rgba(197,168,128,0.12)]"
            >
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>ARQUITETURA DO SORRISO & PROPORÇÃO ÁUREA</span>
            </motion.div>

            {/* Headline Serifada Imponente */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12] tracking-tight text-[#FAF7F2] max-w-5xl"
            >
              A exatidão da tecnologia digital esculpida na{' '}
              <span className="italic font-normal bg-gradient-to-r from-[#EFE5D3] via-[#D8BC93] to-[#B89664] bg-clip-text text-transparent">
                naturalidade da porcelana artesanal.
              </span>
            </motion.h1>

            {/* Subheadline Cirúrgica */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 sm:mt-8 font-sans-luxury text-sm sm:text-lg md:text-xl text-[#A69E90] max-w-3xl leading-relaxed font-light"
            >
              Lentes de contato ultrafinas e reabilitações implantossuportadas projetadas por escaneamento tridimensional e visagismo, respeitando a anatomia muscular e a expressão única do seu rosto.
            </motion.p>

            {/* CTAs do Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wider text-[#050505] bg-gradient-to-r from-[#DFCAAA] via-[#EFE2CC] to-[#C5A880] hover:brightness-110 transition-all shadow-[0_0_35px_rgba(197,168,128,0.4)] group cursor-pointer"
              >
                <span>Agendar Análise de Visagismo Digital</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#scanner"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium tracking-wider text-[#D8D2C6] border border-[#C5A880]/30 hover:border-[#C5A880] hover:bg-[#141008] transition-all"
              >
                <Scan className="w-4 h-4 text-[#C5A880]" />
                <span>Explorar Scanner Interativo 3D</span>
              </a>
            </motion.div>

            {/* Visualizer da Proporção Áurea e Visagismo Facial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full mt-14 sm:mt-16 rounded-3xl glass-card p-6 sm:p-10 relative overflow-hidden shadow-2xl"
            >
              {/* Moldura de precisão e marcadores milimétricos */}
              <div className="absolute top-3 left-4 text-[9px] font-mono text-[#8F887C] tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                GOLDEN RATIO COMPASS • PHI = 1.618033
              </div>
              <div className="absolute top-3 right-4 text-[9px] font-mono text-[#8F887C] tracking-widest hidden sm:block">
                TOLERÂNCIA MICROMÉTRICA: ±0.015mm
              </div>

              {/* Grid visual com simulação matemática da curva de sorriso */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
                {/* Lado Esquerdo: Representação Gráfica Fibonacci & Visagismo */}
                <div className="lg:col-span-7 relative bg-[#090806] rounded-2xl border border-[#C5A880]/20 p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-mono flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5" />
                      Mapeamento Facial Tridimensional
                    </span>
                    <span className="text-[10px] font-mono text-[#9B9284] bg-[#141008] px-2 py-0.5 rounded border border-[#C5A880]/20">
                      MODO: VISAGISMO DINÂMICO
                    </span>
                  </div>

                  {/* SVG Ilustrativo da Proporção Áurea e Curva do Sorriso */}
                  <div className="relative h-64 sm:h-72 w-full flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid de fundo */}
                      <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(197, 168, 128, 0.08)" strokeWidth="0.5" />
                        </pattern>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#DFC8A5" />
                          <stop offset="50%" stopColor="#C5A880" />
                          <stop offset="100%" stopColor="#96774E" />
                        </linearGradient>
                      </defs>
                      <rect width="600" height="300" fill="url(#smallGrid)" />

                      {/* Eixos anatômicos do rosto */}
                      {/* Linha Bipupilar */}
                      <line x1="50" y1="60" x2="550" y2="60" stroke="rgba(197, 168, 128, 0.25)" strokeDasharray="3 3" strokeWidth="1" />
                      <text x="60" y="52" fill="#8F887C" fontSize="10" fontFamily="monospace">LINHA BIPUPILAR HORIZONTAL</text>

                      {/* Linha Média Facial */}
                      <line x1="300" y1="20" x2="300" y2="280" stroke="rgba(197, 168, 128, 0.35)" strokeDasharray="4 2" strokeWidth="1" />
                      <text x="310" y="35" fill="#C5A880" fontSize="10" fontFamily="monospace">EIXO MEDIANO DE SIMETRIA (0.00mm)</text>

                      {/* Curvatura Incisal Anatômica (Sorriso Aveludado) */}
                      <path
                        d="M 120 180 Q 300 240 480 180"
                        stroke="url(#goldGradient)"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <text x="380" y="245" fill="#D7BE96" fontSize="10" fontFamily="monospace">CURVATURA INCISAL / PROPORÇÃO PHI</text>

                      {/* Zênites Gengivais (Dentes Anteriores Superiores) */}
                      {/* Centrais */}
                      <ellipse cx="270" cy="140" rx="22" ry="38" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" strokeDasharray="2 2" fill="rgba(197, 168, 128, 0.05)" />
                      <ellipse cx="330" cy="140" rx="22" ry="38" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" strokeDasharray="2 2" fill="rgba(197, 168, 128, 0.05)" />
                      {/* Laterais (Proporção 1:0.618 em relação ao central) */}
                      <ellipse cx="225" cy="145" rx="16" ry="34" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="2 2" fill="rgba(197, 168, 128, 0.03)" />
                      <ellipse cx="375" cy="145" rx="16" ry="34" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" strokeDasharray="2 2" fill="rgba(197, 168, 128, 0.03)" />
                      {/* Caninos */}
                      <ellipse cx="185" cy="150" rx="17" ry="36" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="2 2" fill="rgba(197, 168, 128, 0.02)" />
                      <ellipse cx="415" cy="150" rx="17" ry="36" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" strokeDasharray="2 2" fill="rgba(197, 168, 128, 0.02)" />

                      {/* Pontos de ancoragem e medição com glow */}
                      <circle cx="300" cy="180" r="4" fill="#E8D7B8" />
                      <circle cx="270" cy="102" r="3" fill="#C5A880" />
                      <circle cx="330" cy="102" r="3" fill="#C5A880" />
                      <circle cx="225" cy="111" r="3" fill="#C5A880" />
                      <circle cx="375" cy="111" r="3" fill="#C5A880" />

                      {/* Espiral áurea sutil */}
                      <path
                        d="M 300 180 A 20 20 0 0 1 320 200 A 40 40 0 0 1 280 240 A 80 80 0 0 1 200 160 A 140 140 0 0 1 340 20"
                        stroke="rgba(197, 168, 128, 0.18)"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>

                    {/* Badge flutuante de precisão */}
                    <div className="absolute bottom-3 left-3 bg-[#0A0A0A]/90 border border-[#C5A880]/30 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#D7BE96] flex items-center gap-2">
                      <Activity className="w-3 h-3 text-[#C5A880] animate-pulse" />
                      <span>CORREDOR BUCAL: EXPANSÃO EQUILIBRADA (1.618 PHI)</span>
                    </div>
                  </div>
                </div>

                {/* Lado Direito: Especificações Científicas e Valores */}
                <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                      PROTOCOLO BIOMIMÉTICO
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-[#FAF7F2]">
                      Harmonia planejada antes de tocar em qualquer dente.
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A59E92] leading-relaxed">
                    Nenhum sorriso no Lumina é padronizado. Cruzamos a dinâmica do lábio em repouso e sorriso aberto com a linha bipupilar e as curvas de zênite gengival para entregar cerâmicas que parecem ter nascido com você.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#14110C] border border-[#C5A880]/15">
                      <div className="p-1.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                        <Eye className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-[#FAF7F2] block">Diagnóstico de Visagismo Facial</span>
                        <span className="text-[#8F887C] text-[11px]">Equilíbrio morfológico com temperamento e formato da face</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#14110C] border border-[#C5A880]/15">
                      <div className="p-1.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880]">
                        <Scan className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-[#FAF7F2] block">Escaneamento Óptico 3D de Alta Resolução</span>
                        <span className="text-[#8F887C] text-[11px]">6.000 fotos intraorais por segundo sem pastas de moldagem</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicadores de Excelência Clínica (Obrigatórios) */}
              <div className="mt-10 pt-8 border-t border-[#C5A880]/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Métrica 1 */}
                <div className="p-5 rounded-2xl bg-[#0F0C08]/60 border border-[#C5A880]/20 hover:border-[#C5A880]/40 transition-colors">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-luxury text-3xl sm:text-4xl text-[#E8D7B8] font-semibold">
                      0.2mm
                    </span>
                    <span className="text-xs font-mono text-[#C5A880] tracking-wider uppercase">
                      Micro-Espessura
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#A59E92] leading-relaxed">
                    Espessura mínima das facetas e lentes em dissilicato de lítio (E-Max), permitindo preservação biológica máxima do esmalte natural.
                  </p>
                </div>

                {/* Métrica 2 */}
                <div className="p-5 rounded-2xl bg-[#0F0C08]/60 border border-[#C5A880]/20 hover:border-[#C5A880]/40 transition-colors">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-luxury text-3xl sm:text-4xl text-[#E8D7B8] font-semibold">
                      iTero 5D
                    </span>
                    <span className="text-xs font-mono text-[#C5A880] tracking-wider uppercase">
                      Digital Scanner
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#A59E92] leading-relaxed">
                    Escaneamento intraoral tridimensional em alta fidelidade óptica. Elimina totalmente as moldagens desconfortáveis com pastas e moldeiras.
                  </p>
                </div>

                {/* Métrica 3 */}
                <div className="p-5 rounded-2xl bg-[#0F0C08]/60 border border-[#C5A880]/20 hover:border-[#C5A880]/40 transition-colors">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-luxury text-3xl sm:text-4xl text-[#E8D7B8] font-semibold">
                      Previsibilidade 3D
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#A59E92] leading-relaxed">
                    Teste estético direto em boca (Mock-up) antes de qualquer intervenção clínica. Você vê e aprova o seu novo sorriso no espelho com antecedência.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. O Scanner Interativo de Sorriso (Showcase de Visagismo) */}
        <section id="scanner" className="relative px-4 sm:px-8 max-w-7xl mx-auto py-20 sm:py-28 border-t border-[#C5A880]/15">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A880]/30 bg-[#120F0A] text-[11px] font-mono tracking-widest text-[#C5A880] uppercase mb-4">
              <Scan className="w-3.5 h-3.5" />
              TECNOLOGIA CLÍNICA • VISAGISMO DIGITAL 3D
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-tight">
              O Scanner Interativo de Sorriso
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A8A093] font-light">
              Explore os parâmetros milimétricos dos nossos três principais protocolos de alta complexidade e comprove o rigor de engenharia por trás de cada caso.
            </p>
          </div>

          {/* Painel Central do Scanner */}
          <div className="rounded-3xl glass-card border-gold-hairline p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            {/* Seletor de Tratamentos (3 Abas Interativas) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {TREATMENTS.map((treatment, index) => {
                const isSelected = activeTreatment === index;
                return (
                  <button
                    key={treatment.id}
                    onClick={() => setActiveTreatment(index)}
                    className={`relative p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#18140E] border-[#C5A880] shadow-[0_0_25px_rgba(197,168,128,0.2)]'
                        : 'bg-[#0B0907]/70 border-white/5 hover:border-[#C5A880]/30 text-[#8E867A]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${isSelected ? 'text-[#C5A880]' : 'text-[#6F685D]'}`}>
                        PROTOCOLO 0{index + 1}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#C5A880] shadow-[0_0_8px_#C5A880]" />
                      )}
                    </div>
                    <span className={`text-sm sm:text-base font-serif-luxury font-medium ${isSelected ? 'text-[#FAF7F2]' : 'text-[#ADA598]'}`}>
                      {treatment.title}
                    </span>
                    <span className="text-[11px] text-[#827A6E] mt-1 font-sans-luxury">
                      {treatment.tempoMedio}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Display Dinâmico do Tratamento Selecionado */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTreatment.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Coluna Visual e Parâmetros Gráficos (7 Cols) */}
                <div className="lg:col-span-7 bg-[#090806] rounded-2xl border border-[#C5A880]/25 p-6 relative overflow-hidden">
                  {/* Top Bar do Monitor */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 text-[11px] font-mono">
                    <div className="flex items-center gap-2 text-[#C5A880]">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                      ESCANER DIGITAL ATIVO // PROTOCOLO {currentTreatment.shortName.toUpperCase()}
                    </div>
                    <div className="text-[#80776A]">TAXA DE AMOSTRAGEM: 50µm</div>
                  </div>

                  {/* Modos de visualização do scanner */}
                  <div className="flex gap-2 my-4">
                    <button
                      onClick={() => setScannerMode('visagismo')}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                        scannerMode === 'visagismo'
                          ? 'bg-[#C5A880] text-[#050505] font-semibold'
                          : 'bg-[#14110C] text-[#A69E90] border border-white/5'
                      }`}
                    >
                      PROPORÇÃO PHI
                    </button>
                    <button
                      onClick={() => setScannerMode('oclusao')}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                        scannerMode === 'oclusao'
                          ? 'bg-[#C5A880] text-[#050505] font-semibold'
                          : 'bg-[#14110C] text-[#A69E90] border border-white/5'
                      }`}
                    >
                      ANÁLISE DE FORÇA OCLUSAL
                    </button>
                    <button
                      onClick={() => setScannerMode('translucidez')}
                      className={`px-3 py-1 rounded-full text-[10px] font-mono transition-all ${
                        scannerMode === 'translucidez'
                          ? 'bg-[#C5A880] text-[#050505] font-semibold'
                          : 'bg-[#14110C] text-[#A69E90] border border-white/5'
                      }`}
                    >
                      ESTRATIFICAÇÃO CERÂMICA
                    </button>
                  </div>

                  {/* Área Gráfica do Módulo */}
                  <div className="relative h-60 sm:h-72 w-full rounded-xl bg-gradient-to-b from-[#110D08] to-[#070605] border border-[#C5A880]/15 flex items-center justify-center p-4">
                    {/* Linhas de Retícula Milimétrica */}
                    <div className="absolute inset-0 bg-grid-gold opacity-20 pointer-events-none" />

                    {scannerMode === 'visagismo' && (
                      <div className="relative text-center w-full max-w-md">
                        <div className="inline-block p-3 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 mb-3 text-[#D7BE96]">
                          <Compass className="w-8 h-8" />
                        </div>
                        <h4 className="font-serif-luxury text-lg text-[#FAF7F2]">
                          Proporção Áurea e Zênites Simétricos
                        </h4>
                        <p className="text-xs text-[#8F887C] mt-1 max-w-sm mx-auto">
                          Relação largura/altura padronizada em 78% com espelhamento biométrico dos incisivos centrais e guia canina funcional.
                        </p>
                        <div className="mt-4 flex justify-center gap-6 font-mono text-[10px] text-[#C5A880]">
                          <span>ALTURA INCISAL: 10.4mm</span>
                          <span>LARGURA: 8.2mm</span>
                          <span>RATIO: 1.618 (PHI)</span>
                        </div>
                      </div>
                    )}

                    {scannerMode === 'oclusao' && (
                      <div className="relative text-center w-full max-w-md">
                        <div className="inline-block p-3 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 mb-3 text-[#D7BE96]">
                          <Activity className="w-8 h-8 text-[#C5A880]" />
                        </div>
                        <h4 className="font-serif-luxury text-lg text-[#FAF7F2]">
                          Equilíbrio de Carga Dinâmica T-Scan
                        </h4>
                        <p className="text-xs text-[#8F887C] mt-1 max-w-sm mx-auto">
                          Dissipação homogênea de vetores de mastigação protegendo tanto o esmalte quanto as estruturas radiculares e implantes.
                        </p>
                        <div className="mt-4 flex justify-center gap-6 font-mono text-[10px] text-[#C5A880]">
                          <span>TORQUE MÁX: 35N.cm</span>
                          <span>SIMETRIA BILATERAL: 50.2% / 49.8%</span>
                        </div>
                      </div>
                    )}

                    {scannerMode === 'translucidez' && (
                      <div className="relative text-center w-full max-w-md">
                        <div className="inline-block p-3 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 mb-3 text-[#D7BE96]">
                          <Gem className="w-8 h-8 text-[#C5A880]" />
                        </div>
                        <h4 className="font-serif-luxury text-lg text-[#FAF7F2]">
                          Opalescência & Gradiente de Transparência
                        </h4>
                        <p className="text-xs text-[#8F887C] mt-1 max-w-sm mx-auto">
                          Terço incisal com halo azulado translúcido idêntico ao esmalte jovem e terço cervical com saturação aquecida de dentina pura.
                        </p>
                        <div className="mt-4 flex justify-center gap-6 font-mono text-[10px] text-[#C5A880]">
                          <span>ESMALTES: IPS e.max Ceram</span>
                          <span>OPALESCÊNCIA: NATIVA</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4 Métricas Rápidas do Procedimento */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    <div className="bg-[#120F0A] p-2.5 rounded-xl border border-white/5 text-left">
                      <span className="text-[10px] font-mono text-[#80776A] block">PRESERVAÇÃO</span>
                      <span className="text-xs font-semibold text-[#E8D7B8]">{currentTreatment.metricas.preservacaoBiologica}</span>
                    </div>
                    <div className="bg-[#120F0A] p-2.5 rounded-xl border border-white/5 text-left">
                      <span className="text-[10px] font-mono text-[#80776A] block">ESTABILIDADE</span>
                      <span className="text-xs font-semibold text-[#E8D7B8]">{currentTreatment.metricas.estabilidadeCor}</span>
                    </div>
                    <div className="bg-[#120F0A] p-2.5 rounded-xl border border-white/5 text-left">
                      <span className="text-[10px] font-mono text-[#80776A] block">RESISTÊNCIA</span>
                      <span className="text-xs font-semibold text-[#E8D7B8]">{currentTreatment.metricas.tenacidade}</span>
                    </div>
                    <div className="bg-[#120F0A] p-2.5 rounded-xl border border-white/5 text-left">
                      <span className="text-[10px] font-mono text-[#80776A] block">INTEGRAÇÃO</span>
                      <span className="text-xs font-semibold text-[#E8D7B8]">{currentTreatment.metricas.aderencia}</span>
                    </div>
                  </div>
                </div>

                {/* Coluna de Especificação e Agendamento Direto (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-mono text-[#C5A880] tracking-widest uppercase">
                        ESPECIFICAÇÃO CLÍNICA
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF7F2] mt-1">
                        {currentTreatment.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A8A093] mt-2 font-light">
                        {currentTreatment.tagline}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#14110C] border border-[#C5A880]/15">
                        <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-medium text-[#FAF7F2] block">Tempo Médio Estimado</span>
                          <span className="text-xs text-[#8F887C]">{currentTreatment.tempoMedio} • {currentTreatment.sessoes}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#14110C] border border-[#C5A880]/15">
                        <Layers className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-medium text-[#FAF7F2] block">Foco Estético & Visagismo</span>
                          <span className="text-xs text-[#8F887C]">{currentTreatment.focoEstetico}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#14110C] border border-[#C5A880]/15">
                        <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-medium text-[#FAF7F2] block">Espessura e Engenharia de Materiais</span>
                          <span className="text-xs text-[#8F887C]">{currentTreatment.espessura}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-[#14110C] border border-[#C5A880]/15">
                        <Scan className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-medium text-[#FAF7F2] block">Tecnologia Embarcada</span>
                          <span className="text-xs text-[#8F887C]">{currentTreatment.tecnologia}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA de Reserva com link para WhatsApp específico */}
                  <div className="pt-2">
                    <a
                      href={`${WHATSAPP_BASE_URL}?text=${currentTreatment.waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-sm font-medium tracking-wider text-[#050505] bg-gradient-to-r from-[#DFCAAA] via-[#EFE2CC] to-[#C5A880] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(197,168,128,0.35)] group cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Reservar Horário para este Procedimento</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <span className="block text-center text-[10px] text-[#7F776B] font-mono mt-2">
                      ATENDIMENTO PRIVATIVO COM HORA MARCADA NO CAMBUÍ
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 4. Os Três Pilares da Engenharia Oral Lumina */}
        <section id="pilares" className="relative px-4 sm:px-8 max-w-7xl mx-auto py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              FILOSOFIA BIOMIMÉTICA & TECNOLÓGICA
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2]">
              Os Três Pilares da Engenharia Oral Lumina
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A8A093] font-light">
              A união definitiva entre o rigor científico contemporâneo e o artesanato cerâmico de alta joalheria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloco 1: Mimetismo com o Esmalte Natural */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass-card border-gold-hairline p-8 flex flex-col justify-between relative group hover:border-[#C5A880]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif-luxury text-3xl text-[#C5A880]/40 font-light">I</span>
                  <div className="p-3 rounded-2xl bg-[#18130B] border border-[#C5A880]/30 text-[#D7BE96] group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#FAF7F2] mb-4">
                  Mimetismo com o Esmalte Natural
                </h3>
                <p className="text-sm text-[#A8A093] leading-relaxed font-light">
                  Porcelanas feldspáticas e dissilicato de lítio estratificadas à mão por mestres ceramistas dedicados. Reproduzimos a fluorescência, a opalescência e os halos de translucidez presentes unicamente nos dentes naturais intactos, sem o aspecto plano ou artificial de restaurações comuns.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-[#C5A880]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Estratificação em 7 camadas de pó</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Brilho perolado permanente</span>
                </div>
              </div>
            </motion.div>

            {/* Bloco 2: Cirurgia Guiada por Tomografia */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass-card border-gold-hairline p-8 flex flex-col justify-between relative group hover:border-[#C5A880]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif-luxury text-3xl text-[#C5A880]/40 font-light">II</span>
                  <div className="p-3 rounded-2xl bg-[#18130B] border border-[#C5A880]/30 text-[#D7BE96] group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#FAF7F2] mb-4">
                  Cirurgia Guiada por Tomografia
                </h3>
                <p className="text-sm text-[#A8A093] leading-relaxed font-light">
                  Instalação de implantes osseointegráveis sem cortes com bisturi e sem necessidade de suturas convencionais. Através da fusão de tomografias cone-beam e guias cirúrgicos prototipados em 3D, o posicionamento é micrométrico, proporcionando pós-operatório sem inchaço e retorno imediato às atividades.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-[#C5A880]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Zero incisões desnecessárias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Recuperação indolor e rápida</span>
                </div>
              </div>
            </motion.div>

            {/* Bloco 3: Atendimento em Ambiente Privativo */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass-card border-gold-hairline p-8 flex flex-col justify-between relative group hover:border-[#C5A880]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif-luxury text-3xl text-[#C5A880]/40 font-light">III</span>
                  <div className="p-3 rounded-2xl bg-[#18130B] border border-[#C5A880]/30 text-[#D7BE96] group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#FAF7F2] mb-4">
                  Atendimento em Ambiente Privativo
                </h3>
                <p className="text-sm text-[#A8A093] leading-relaxed font-light">
                  Instalações individuais no coração do bairro Cambuí, em Campinas. Boxes clínicos acusticamente isolados que garantem conforto executivo, sigilo profissional e tranquilidade absoluta. Agendamento com intervalo estendido para dedicação exclusiva do cirurgião a cada paciente.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-[#C5A880]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Valet cortesia & lounge VIP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Acústica projetada para discrição</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. A Jornada do Paciente Lumina (Protocolo em 4 Etapas) */}
        <section className="relative px-4 sm:px-8 max-w-7xl mx-auto py-16 sm:py-24 border-t border-[#C5A880]/15">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              PREVISIBILIDADE PASSO A PASSO
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#FAF7F2]">
              Do Escaneamento à Cimentação Definitiva
            </h2>
            <p className="mt-4 text-sm text-[#A8A093] font-light">
              Nossa esteira clínica é desenhada para eliminar qualquer ansiedade por meio de testes práticos em boca.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Check-Up 3D & Visagismo',
                desc: 'Captura intraoral óptica e ensaio fotográfico de alta fidelidade para estudo facial e proporção dental.',
              },
              {
                step: '02',
                title: 'Test-Drive do Sorriso (Mock-up)',
                desc: 'Aplicação de resina bisacrílica temporária sobre seus dentes. Você sai sorrindo e avalia com amigos e família.',
              },
              {
                step: '03',
                title: 'Escultura no Laboratório Próprio',
                desc: 'Fresa robótica de 5 eixos e refinamento manual por ceramistas com pigmentos cerâmicos importados.',
              },
              {
                step: '04',
                title: 'Adesão sob Microscopia',
                desc: 'Cimentação adesiva definitiva dente a dente com magnificação operatória, assegurando vedação marginal perfeita.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0D0B08] border border-[#C5A880]/20 relative">
                <span className="text-3xl font-serif-luxury font-light text-[#C5A880]/30 block mb-3">
                  {item.step}
                </span>
                <h4 className="font-serif-luxury text-lg text-[#FAF7F2] mb-2">{item.title}</h4>
                <p className="text-xs text-[#8F887C] leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FAQ Estratégico de Quebra de Objeções (Framer Motion Accordion) */}
        <section id="faq" className="relative px-4 sm:px-8 max-w-4xl mx-auto py-20 sm:py-28 border-t border-[#C5A880]/15">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              ESCLARECIMENTOS TÉCNICOS
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2]">
              Perguntas Frequentes & Respaldo Clínico
            </h2>
            <p className="mt-4 text-sm text-[#A8A093] font-light">
              Transparência ética integral conforme as diretrizes do Conselho Regional de Odontologia (CROSP).
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-card border-gold-hairline overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="font-serif-luxury text-base sm:text-lg text-[#FAF7F2]">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 p-1.5 rounded-full border border-[#C5A880]/30 text-[#C5A880]"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#A8A093] leading-relaxed font-light border-t border-white/5">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA pós FAQ */}
          <div className="mt-12 text-center p-8 rounded-3xl glass-card border-gold-hairline">
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#FAF7F2] mb-2">
              Ainda possui alguma dúvida específica sobre o seu caso?
            </h3>
            <p className="text-xs sm:text-sm text-[#8F887C] mb-6 max-w-lg mx-auto">
              Nossa equipe clínica privativa está disponível para esclarecer pormenores anatômicos e planejar seu mock-up inicial.
            </p>
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider text-[#050505] bg-gradient-to-r from-[#DFCAAA] to-[#C5A880] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(197,168,128,0.3)]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Falar Diretamente com a Coordenação Clínica</span>
            </a>
          </div>
        </section>

        {/* 7. Localização & Experiência Privativa (Cambuí, Campinas) */}
        <section id="contato" className="relative px-4 sm:px-8 max-w-7xl mx-auto py-16 sm:py-24 border-t border-[#C5A880]/15">
          <div className="rounded-3xl glass-card border-gold-hairline p-8 sm:p-12 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880]">
                  LOCALIZAÇÃO PRIVILEGIADA
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FAF7F2]">
                  No epicentro do Cambuí, com discrição e conforto absoluto.
                </h3>
                <p className="text-sm text-[#A8A093] leading-relaxed font-light">
                  Projetado para receber executivos, empresários e pacientes de toda a Região Metropolitana de Campinas e São Paulo. Contamos com estacionamento com manobrista privativo, lounges individuais com conectividade ultrarrápida e pontualidade rigorosa nos horários.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#D7BE96]">
                    <MapPin className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>Avenida Coronel Silva Telles, Cambuí • Campinas - SP</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#D7BE96]">
                    <Calendar className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>Atendimento exclusivo sob agendamento prévio: Seg à Sex, 08h às 19h</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#D7BE96]">
                    <Award className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>Responsável Técnico Especialista em Prótese Dental e Implantodontia (CROSP 104.920)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0A0806] rounded-2xl border border-[#C5A880]/30 p-6 text-center space-y-5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A880] block">
                  AGENDAMENTO DIGITAL DIRETO
                </span>
                <h4 className="font-serif-luxury text-2xl text-[#FAF7F2]">
                  Inicie sua transformação estética.
                </h4>
                <p className="text-xs text-[#8F887C] leading-relaxed">
                  Clique abaixo para falar diretamente via WhatsApp com nosso concierge clínico e reservar sua primeira consulta de escaneamento intraoral.
                </p>

                <a
                  href={WHATSAPP_DEFAULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-sm font-semibold tracking-wider text-[#050505] bg-gradient-to-r from-[#DFCAAA] via-[#EFE2CC] to-[#C5A880] hover:brightness-110 transition-all shadow-[0_0_25px_rgba(197,168,128,0.4)] group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Conversar no WhatsApp Oficial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="text-[11px] font-mono text-[#7D7569]">
                  WhatsApp Comercial: +55 (19) 99465-6845
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Rodapé Corporativo e Assinatura Obrigatória */}
      <footer className="relative z-10 border-t border-[#C5A880]/20 bg-[#040404] px-4 sm:px-8 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
            {/* Coluna 1: Lumina Atelier Oral */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl tracking-[0.2em] text-[#FAF7F2] font-semibold">
                  LUMINA <span className="font-light text-[#C5A880]">ATELIER ORAL</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#8F887C] uppercase font-mono mt-1">
                  Odontologia Estética & Reabilitação Oral de Alta Precisão
                </span>
              </div>
              <p className="text-xs text-[#8F887C] max-w-md leading-relaxed font-light">
                O Atelier Lumina é dedicado à fusão entre biomimética dental, escaneamento tridimensional iTero 5D e escultura artesanal de porcelana feldspática e dissilicato de lítio, restaurando sorrisos com absoluta naturalidade.
              </p>
              <div className="text-[11px] font-mono text-[#B3A99B] space-y-1">
                <div>Dr. Responsável Técnico • CRO-SP 104.920</div>
                <div>Especialista em Prótese Dentária, Visagismo e Implantodontia</div>
                <div>Bairro Cambuí, Campinas - SP</div>
              </div>
            </div>

            {/* Coluna 2: Protocolos Clínicos */}
            <div className="md:col-span-3 space-y-3 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block">
                PROTOCOLOS EXCLUSIVOS
              </span>
              <ul className="text-xs text-[#8F887C] space-y-2">
                <li>
                  <a href="#scanner" className="hover:text-[#E8D7B8] transition-colors">
                    Lentes de Porcelana E-Max (0.2mm)
                  </a>
                </li>
                <li>
                  <a href="#scanner" className="hover:text-[#E8D7B8] transition-colors">
                    Reabilitação All-on-4 em Carga Imediata
                  </a>
                </li>
                <li>
                  <a href="#scanner" className="hover:text-[#E8D7B8] transition-colors">
                    Alinhadores Invisíveis Guiados por 3D
                  </a>
                </li>
                <li>
                  <a href="#scanner" className="hover:text-[#E8D7B8] transition-colors">
                    Test-Drive de Sorriso com Mock-up
                  </a>
                </li>
                <li>
                  <a href="#scanner" className="hover:text-[#E8D7B8] transition-colors">
                    Oclusão Computadorizada T-Scan
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Ética e Conformidade CROSP */}
            <div className="md:col-span-4 space-y-3 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block">
                CONFORMIDADE ÉTICA & NORMAS
              </span>
              <p className="text-[11px] text-[#787165] leading-relaxed">
                Todas as práticas e comunicações deste portal atendem rigorosamente ao Código de Ética Odontológica e às resoluções do Conselho Federal e Regional de Odontologia de São Paulo (CROSP). As informações aqui contidas possuem caráter exclusivamente informativo e científico. Cada planejamento depende de exame clínico presencial individualizado.
              </p>
              <div className="pt-2 text-xs text-[#C5A880] font-mono">
                Contato Direto: +55 (19) 99465-6845
              </div>
            </div>
          </div>

          {/* Assinatura Oficial Parvus Space (Obrigatória) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7266] gap-4">
            <div className="text-center sm:text-left">
              © 2026 Atelier Oral Lumina. Todos os direitos reservados.
            </div>

            <div className="flex items-center gap-2 text-center sm:text-right font-mono text-[11px]">
              <span>Digital Architecture by</span>
              <a
                href="https://parvuspace.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7BE96] hover:text-[#FFF] font-medium underline underline-offset-4 decoration-[#C5A880]/50 transition-colors"
              >
                Parvus Space
              </a>
              <span className="text-[#555]">|</span>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ADA394] hover:text-[#D7BE96] transition-colors"
              >
                WhatsApp Comercial: +55 (19) 99465-6845
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. Botão Flutuante Permanente de WhatsApp (Micro-conversão Instantânea) */}
      <aside aria-label="Atendimento Privativo" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={WHATSAPP_DEFAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-[#DFCAAA] via-[#EFE2CC] to-[#C5A880] text-[#050505] shadow-[0_0_30px_rgba(197,168,128,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Falar no WhatsApp com o Atelier Oral Lumina"
          aria-label="Atendimento Privativo no WhatsApp"
        >
          {/* Subtle pulse wave */}
          <span className="absolute -inset-1 rounded-full bg-[#C5A880] opacity-40 animate-ping pointer-events-none" />
          <Phone className="w-5 h-5 relative z-10" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-xs tracking-wider pl-0 group-hover:pl-2">
            Atendimento Privativo
          </span>
        </a>
      </aside>
    </div>
  );
}
