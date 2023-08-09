import IconMenu from '../components/TopNav';

function ErrorPage() {
    return(
        <>
            <IconMenu></IconMenu>
            <main>
                <h1>Something isn't right.</h1>
                <p>The page you requested isn't found.</p>
            </main>
        </>
    );
}

export default ErrorPage;