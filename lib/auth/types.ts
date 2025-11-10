export type UserRole = "user" | "admin"

export interface AuthUser {
  id: string
  email: string
  role: UserRole
}

export interface AuthContext {
  user: AuthUser | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}
