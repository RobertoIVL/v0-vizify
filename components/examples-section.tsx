"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FloatingPaper } from "@/components/floating-paper"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ExamplesSection() {
  const [activeTab, setActiveTab] = useState("aaa")

  const games = [
    {
      id: "aaa",
      title: "Jogos AAA",
      examples: [
        {
          name: "Cyberpunk 2077",
          image: "/placeholder.svg?height=200&width=350",
          description: "Explore Night City com gráficos impressionantes.",
        },
        {
          name: "Red Dead Redemption 2",
          image: "/placeholder.svg?height=200&width=350",
          description: "Experimente o vasto mundo aberto do oeste selvagem",
        },
        {
          name: "Elden Ring",
          image: "/placeholder.svg?height=200&width=350",
          description: "Enfrente os desafios deste RPG soulslike.",
        },
      ],
    },
    {
      id: "indie",
      title: "Jogos Indie",
      examples: [
        {
          name: "Hades",
          image: "/placeholder.svg?height=200&width=350",
          description: "Desfrute deste roguelike aclamado pela crítica sem esperar pelo download.",
        },
        {
          name: "Hollow Knight",
          image: "/placeholder.svg?height=200&width=350",
          description: "Explore o vasto mundo subterrâneo com acesso imediato a todas as atualizações.",
        },
        {
          name: "Stardew Valley",
          image: "/placeholder.svg?height=200&width=350",
          description: "Gerencie sua fazenda e conecte-se com a comunidade sem instalação.",
        },
      ],
    },
    {
      id: "multiplayer",
      title: "Multiplayer",
      examples: [
        {
          name: "Counter-Strike 2",
          image: "/placeholder.svg?height=200&width=350",
          description: "Jogue competitivamente com amigos sem preocupações com atualizações ou patches.",
        },
        {
          name: "Dota 2",
          image: "/placeholder.svg?height=200&width=350",
          description: "Participe de batalhas MOBA intensas com acesso a todos os heróis.",
        },
        {
          name: "Apex Legends",
          image: "/placeholder.svg?height=200&width=350",
          description: "Entre na arena battle royale instantaneamente sem downloads extensos.",
        },
      ],
    },
  ]

  return (
    <div className="relative min-h-[calc(100vh-76px)]">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={10} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Exemplos</span>{" "}
            de Jogos
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Veja alguns dos milhares de jogos disponíveis em nossa plataforma. 
          </p>
        </motion.div>

        <Tabs defaultValue="aaa" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-12 bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-lg">
            {games.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300"
                onClick={() => setActiveTab(category.id)}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {games.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.examples.map((game, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                  >
                    <div className="relative">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <h3 className="text-xl font-bold text-white p-4">{game.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-400 mb-4">{game.description}</p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Jogar Agora</Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">E muito mais!</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Estes são apenas alguns exemplos dos milhares de jogos disponíveis em nossa plataforma. Registre-se hoje e
            tenha acesso a toda a biblioteca Steam!
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
            Ver Biblioteca Completa
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
