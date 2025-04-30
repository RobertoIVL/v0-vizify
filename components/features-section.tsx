"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Rocket, Sparkles, Clock, Globe } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-purple-500" />,
      title: "Acesso Instantâneo",
      description: "Tenha acesso imediato a milhares de jogos sem espera ou downloads extensos.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: "100% Seguro",
      description: "Nosso sistema é totalmente seguro e não viola os termos de serviço da Steam.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-500" />,
      title: "Desempenho Otimizado",
      description: "Jogue sem impacto no desempenho, como se o jogo estivesse instalado localmente.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "Novos Lançamentos",
      description: "Acesso a novos lançamentos no mesmo dia em que são disponibilizados na Steam.",
    },
    {
      icon: <Clock className="h-10 w-10 text-purple-500" />,
      title: "Sem Limite de Tempo",
      description: "Jogue quanto tempo quiser, sem restrições de horas ou sessões.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      title: "Multiplayer Global",
      description: "Conecte-se com jogadores do mundo todo em todos os jogos multiplayer.",
    },
  ]

  return (
    <div className="relative min-h-[calc(100vh-76px)]">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={8} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Novidades e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recursos</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Descubra os recursos mais recentes que tornam nossa plataforma a melhor opção para acessar a biblioteca
            Steam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">E muito mais por vir!</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nossa equipe está constantemente trabalhando para adicionar novos recursos e melhorias. Fique atento para
            mais atualizações em breve!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
