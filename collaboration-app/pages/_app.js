import { AuthProvider } from '../context/AuthContext';
import '../styles/AuthForm.module.css';
import '../public/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}



export default MyApp;
