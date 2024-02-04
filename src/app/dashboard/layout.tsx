type DashLayoutProps = Readonly<{
    children: React.ReactNode
}>

export default function DashLayout({ children }: DashLayoutProps): JSX.Element {
    return <div>
        <div>ChildLayout</div>
        {children}
    </div>
}