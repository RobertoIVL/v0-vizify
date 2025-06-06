"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Standard",
      price: "10%",
      period: "do valor do jogo",
      description: "Ideal para quem quer pagar pouco por jogo",
      features: [
        { included: true, text: "Pague apenas 10% do valor do jogo" },
        { included: true, text: "Disponível para qualquer valor de jogo" },
        { included: true, text: "Entrega direta na conta Steam" },
        { included: true, text: "Sem mensalidade" },
      ],
      highlighted: false,
      buttonText: "Usar Standard",
    },
    {
      name: "Premium",
      price: "R$20,00",
      period: "por mês",
      description: "Para quem compra jogos acima de R$150",
      features: [
        { included: true, text: "1 jogo abaixo de 150 reais grátis" },
        { included: true, text: "Desconto de 5 reais em jogos acima de R$150" },
        { included: true, text: "Entrega direta na conta Steam" },
        { included: true, text: "Acesso antecipado a promoções" },
        { included: true, text: "Suporte rápido" },
      ],
      highlighted: true,
      buttonText: "Assinar Premium",
    },
    {
      name: "Ultimate",
      price: "R$50,00",
      period: "por mês",
      description: "Para quem adquire jogos acima de R$300",
      features: [
        { included: true, text: "1 jogo abaixo de 200 reais grátis" },
        { included: true, text: "Desconto de 15 reais em jogos acima de R$300" },
        { included: true, text: "Entrega instantânea na conta Steam" },
        { included: true, text: "Suporte 24/7 prioritário" },
        { included: true, text: "Benefícios exclusivos e promoções VIP" },
      ],
      highlighted: false,
      buttonText: "Assinar Ultimate",
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
            Planos e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Preços</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades de jogo. Todos os planos incluem acesso à nossa
            plataforma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`
                relative rounded-xl overflow-hidden
                ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-purple-600/20 to-purple-900/20 border-2 border-purple-500"
                    : "bg-white/5 backdrop-blur-sm border border-white/10"
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-purple-600 text-white text-center py-1 text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div className={`p-6 ${plan.highlighted ? "pt-8" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Precisa de um plano personalizado?</h2>
          <p className="text-gray-400 text-lg mb-6">
            Para equipes, empresas ou necessidades específicas, oferecemos planos personalizados. Entre em contato com
            nossa equipe de vendas para mais informações.
          </p>
          <Button size="lg" variant="outline" className="text-white border-purple-500 hover:bg-purple-500/20">
            Falar com Vendas
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
