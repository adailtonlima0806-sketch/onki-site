import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Video, Share2, TrendingUp, Megaphone, Sparkles } from 'lucide-react';

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Sparkles,
      title: 'Método ONKI',
      description: 'Nosso processo autoral une estratégia, criatividade, tecnologia e humanidade em uma sequência pensada para gerar impacto real. Temos uma forma própria de trabalhar — com escuta, análise, criação e execução — mas adaptamos cada etapa às necessidades, histórias e objetivos de quem confiou em nós. É método, não fórmula engessada.',
      popular: true,
      featured: true,
    },
    {
      icon: Video,
      title: 'Produção de Vídeos',
      description: 'Criamos conteúdo audiovisual que conta histórias, engaja audiências e fortalece sua marca.',
    },
    {
      icon: Share2,
      title: 'Gestão de Redes Sociais',
      description: 'Estratégias de conteúdo e presença digital que conectam sua marca ao público certo.',
    },
    {
      icon: TrendingUp,
      title: 'Pré-vendas',
      description: 'Estruturamos processos que qualificam leads e aceleram sua jornada de vendas.',
    },
    {
      icon: Megaphone,
      title: 'Tráfego Pago',
      description: 'Campanhas otimizadas que geram resultados mensuráveis e ROI positivo.',
    },
  ];

  return (
    <section id="servicos" ref={ref} className="py-32 md:py-40 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl mb-8 tracking-tight">
            O Que Fazemos
          </h2>
          <p className="text-lg md:text-xl opacity-80">
            Soluções integradas para marcas que querem ir além
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className={`group p-8 border hover:border-white/30 transition-all duration-300 hover:bg-white/5 rounded-lg relative ${
                service.featured ? 'md:col-span-2 border-white/20 bg-white/5' : 'border-white/10'
              }`}
            >
              {service.featured && (
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(255, 255, 255, 0)',
                      '0 0 20px rgba(255, 255, 255, 0.1)',
                      '0 0 0px rgba(255, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-xs tracking-wider">
                  MAIS POPULAR
                </div>
              )}
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <service.icon size={24} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className={service.featured ? 'max-w-4xl' : ''}>
                  <h3 className="text-xl mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="opacity-75 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}