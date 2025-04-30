"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Rocket, Sparkles, Clock, Globe, Database } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"

export function FeaturesSection() {
  const features = [
    {
      icon: <Database className="h-10 w-10 text-purple-500" />,
      title: "Vasta Biblioteca",
      description: "Tenha acesso milhares de jogos pagos da biblioteca Steam.",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500" />,
      title: "Acesso total a conta fornecida",
      description: "Nosso sistema fornece a conta com o acesso ao jogo",
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-500" />,
      title: "Otimizado para Steam",
      description: "Instalação fácil, rápida e prática.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-500" />,
      title: "Grandes jogos",
      description: "Acesso a jogos aclamados pelos jogadores e críticos.",
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
      maintenance: true,
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
              {feature.maintenance && (
                <div className="mt-2 inline-flex items-center rounded-full bg-yellow-500/20 px-2.5 py-0.5 text-xs font-medium text-yellow-400">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                  Em manutenção
                </div>
              )}
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
