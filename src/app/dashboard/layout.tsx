type DashLayoutProps = Readonly<{
    children: React.ReactNode
}>

export default function DashLayout({ children }: DashLayoutProps) {
    return <div>
        <div>ChildLayout</div>
        {children}
    </div>
}