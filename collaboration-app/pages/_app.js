import '../styles/AuthForm.module.css';
import '../public/styles.css';
import { AuthProvider } from '../context/AuthContext';

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}
