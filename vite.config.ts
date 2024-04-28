import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			name: "dtsky",
			fileName: "dtsky",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
})
