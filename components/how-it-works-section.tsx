"use client"

import { motion } from "framer-motion"
import { User, CreditCard, Gamepad2, Headphones } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <User className="h-12 w-12 text-purple-500" />,
      title: "Crie sua conta",
      description: "Registre-se em nossa plataforma com apenas alguns cliques. O processo é rápido e seguro.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-purple-500" />,
      title: "Escolha seu plano",
      description: "Selecione o plano que melhor atende às suas necessidades de jogo e faça o pagamento.",
    },
    {
      icon: <Gamepad2 className="h-12 w-12 text-purple-500" />,
      title: "Conecte sua conta Steam",
      description: "Vincule sua conta Steam existente ou crie uma nova através da nossa plataforma.",
    },
    {
      icon: <Headphones className="h-12 w-12 text-purple-500" />,
      title: "Comece a jogar",
      description: "Acesse instantaneamente toda a biblioteca de jogos e divirta-se sem limitações!",
    },
  ]

  return (
    <div className="relative min-h-[calc(100vh-76px)]">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Funciona?
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Nosso processo é simples e direto. Em apenas quatro passos, você terá acesso a milhares de jogos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 relative"
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/50 z-10">
                {step.icon}
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent hidden md:block" />
              )}

              <div className="md:pt-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Passo {index + 1}: {step.title}
                </h3>
                <p className="text-gray-400 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ainda tem dúvidas?</h2>
          <p className="text-gray-400 text-lg mb-6">
            Nossa equipe de suporte está disponível 24/7 para ajudar com qualquer questão que você possa ter. Não hesite
            em entrar em contato conosco.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Falar com Suporte
          </button>
        </motion.div>
      </div>
    </div>
  )
}
