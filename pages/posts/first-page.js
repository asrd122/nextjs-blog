import Link from 'next/link';

export default function FirstPage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Hi, I'm MK!</h2>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>I am a 24th grader in the Department of Information Systems at Hanyang University.</p>
            <div style={{ marginTop: '30px' }}>
                <Link href="/">Back to home</Link> //GO TO "/"(MAIN PAGE)
            </div>
        </div>
    );
}
