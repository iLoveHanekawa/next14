export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html>
        <body>
            <div>Maketing layout</div>
            {children}
        </body>
    </html>
}