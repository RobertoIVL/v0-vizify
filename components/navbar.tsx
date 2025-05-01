"use client"

import { Button } from "@/components/ui/button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react" // Import useState para gerenciar estado
import Modal from "@/components/ui/modal" // Supondo que exista um componente Modal reutilizável

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
            onClick={() => setRegisterOpen(true)} // Abre o popup de cadastro
          >
            Cadastrar
          </Button>
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => setLoginOpen(true)} // Abre o popup de login
          >
            Logar
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </motion.nav>

      {/* Popup de Cadastro */}
      {isRegisterOpen && (
        <Modal onClose={() => setRegisterOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Cadastro</h2>
          {/* Formulário de cadastro */}
          <form>
            <input type="text" placeholder="Nome" className="mb-2 w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="mb-2 w-full p-2 border rounded" />
            <input type="password" placeholder="Senha" className="mb-4 w-full p-2 border rounded" />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Cadastrar</Button>
          </form>
        </Modal>
      )}

      {/* Popup de Login */}
      {isLoginOpen && (
        <Modal onClose={() => setLoginOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Login</h2>
          {/* Formulário de login */}
          <form>
            <input type="email" placeholder="Email" className="mb-2 w-full p-2 border rounded" />
            <input type="password" placeholder="Senha" className="mb-4 w-full p-2 border rounded" />
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Logar</Button>
          </form>
        </Modal>
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
