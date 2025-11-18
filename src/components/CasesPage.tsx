import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight, TrendingUp, Users, Award, Target } from 'lucide-react';

export function CasesPage() {
  const cases = [
    {
      title: 'Campanha Audiovisual - Cliente A',
      description: 'Produção completa de vídeos institucionais que resultaram em +150% de engajamento nas redes sociais. Estratégia integrada incluiu roteirização, produção, pós-produção e distribuição multicanal.',
      image: 'https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYzMzMyMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: '+150% engajamento', value: '150%' },
        { icon: Users, label: '500k+ visualizações', value: '500k+' },
        { icon: Award, label: '12 vídeos produzidos', value: '12' },
      ],
      category: 'Produção Audiovisual',
    },
    {
      title: 'Estratégia Digital - Cliente B',
      description: 'Gestão integrada de redes sociais e tráfego pago, gerando crescimento de 200% em conversões. Desenvolvimento de persona, calendário editorial estratégico e otimização contínua de campanhas.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NjMyOTIzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: '+200% conversões', value: '200%' },
        { icon: Target, label: 'ROI de 4.5x', value: '4.5x' },
        { icon: Users, label: '+80k seguidores', value: '80k+' },
      ],
      category: 'Marketing Digital',
    },
    {
      title: 'Automação com IA - Cliente C',
      description: 'Implementação de agentes inteligentes que otimizaram o processo de pré-vendas, reduzindo custos em 40%. Sistema automatizado de qualificação de leads e atendimento inicial com IA conversacional.',
      image: 'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBncm93dGh8ZW58MXx8fHwxNzYzMzcyNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: '-40% custos', value: '-40%' },
        { icon: Users, label: '1000+ leads/mês', value: '1000+' },
        { icon: Award, label: '95% satisfação', value: '95%' },
      ],
      category: 'Inteligência Artificial',
    },
    {
      title: 'Rebranding Cultural - Cliente D',
      description: 'Reestruturação completa de marca com foco em conexão cultural, aumentando awareness em 180%. Projeto incluiu nova identidade visual, manifesto de marca e campanha de lançamento integrada.',
      image: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzI5NTExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      metrics: [
        { icon: TrendingUp, label: '+180% awareness', value: '180%' },
        { icon: Users, label: '2M+ impressões', value: '2M+' },
        { icon: Award, label: 'Prêmio Marketing', value: '1' },
      ],
      category: 'Branding & Cultura',
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
            Cases de Sucesso
          </h1>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed">
            Conheça projetos que transformaram marcas através de estratégias criativas 
            e orientadas a resultados. Cada case representa nossa dedicação em gerar valor real.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {cases.map((caseItem, index) => (
            <motion.article
              key={caseItem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                  <ImageWithFallback
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="inline-block px-4 py-2 border border-white/20 text-sm mb-6 tracking-wide">
                  {caseItem.category}
                </div>
                
                <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
                  {caseItem.title}
                </h2>
                
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                  {caseItem.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6">
                  {caseItem.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-white/10 p-4 hover:border-white/30 transition-colors duration-300"
                    >
                      <metric.icon size={20} className="opacity-75 mb-3" />
                      <div className="text-2xl mb-2 tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-xs opacity-60 leading-relaxed">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mt-32 pt-24 border-t border-white/10"
        >
          <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
            Pronto para ser o nosso próximo case?
          </h2>
          <p className="text-lg opacity-70 mb-8">
            Vamos criar juntos uma história de sucesso para sua marca
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent('Olá, vim pelo site da ONKI e quero saber mais sobre os serviços.');
              const phoneNumber = '5511999999999'; // Substitua pelo número real
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="px-12 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            <span className="tracking-wide">Entre em Contato</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}