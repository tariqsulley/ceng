import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["firebase", "firebase/app", "firebase/auth","firebase/database", "firebase/firestore", "firebase/analytics"],
}
})
