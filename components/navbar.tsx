"use client"

import { Button } from "@/components/ui/button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react" // Import useState para gerenciar estado
import type React from "react"

export default function Navbar() {
  const [isRegisterOpen, setRegisterOpen] = useState(false)
  const [isLoginOpen, setLoginOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-purple-500" />
          <span className="text-white font-medium text-xl">L4IV</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/features">Novidades</NavLink>
          <NavLink href="/how-it-works">Como funciona?</NavLink>
          <NavLink href="/examples">Exemplos</NavLink>
          <NavLink href="/pricing">Preços</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-white hover:text-purple-400"
            onClick={() => setRegisterOpen(true)} // Abre o pop-up de cadastro
          >
            Cadastrar
          </Button>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setLoginOpen(true)} // Abre o pop-up de login
          >
            Logar
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </motion.nav>

      {isRegisterOpen && (
        <Popup onClose={() => setRegisterOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Cadastro</h2>
          {/* Formulário de cadastro */}
          <form>
            <input
              type="text"
              placeholder="Nome"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Cadastrar
            </Button>
          </form>
        </Popup>
      )}

      {isLoginOpen && (
        <Popup onClose={() => setLoginOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Login</h2>
          {/* Formulário de login */}
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Logar
            </Button>
          </form>
        </Popup>
      )}
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}

function Popup({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
