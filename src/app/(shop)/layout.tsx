export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html>
        <body>
            <div>
                Shop Layout
            </div>
            {children}
        </body>
    </html>
}