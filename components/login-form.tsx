"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">Bem-vindo de volta!</h2>
            <p className="text-gray-600">Faça login para acessar sua conta.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <Input
                type="email"
                id="email"
                className="w-full px-4 py-2 focus:ring-2 focus:ring-purple-500"
                placeholder="Digite seu email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Senha
              </label>
              <Input
                type="password"
                id="password"
                className="w-full px-4 py-2 focus:ring-2 focus:ring-purple-500"
                placeholder="Digite sua senha"
              />
            </div>
            <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Entrar
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-4"
          >
            <p className="text-gray-600">
              Não tem uma conta?{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Cadastre-se
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
