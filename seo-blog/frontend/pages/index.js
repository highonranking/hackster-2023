import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <h2>Index page</h2>
            <Link legacyBehavior href="/signup">
                <a>Signup</a>
            </Link>
        </Layout>
    );
};

export default Index;