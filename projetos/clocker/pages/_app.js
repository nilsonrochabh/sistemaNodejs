import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../components/Auth"
import { ptBR} from 'date-fns/locale'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
