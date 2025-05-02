"use client"

import { Bot } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 z-50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">L4IV</span>
      </Link>
    </motion.nav>
  )
}

export function LoginForm() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      <Navbar />
      <div className="container mx-auto px-6 relative z-10 mt-20">
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