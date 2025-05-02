import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-600">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}