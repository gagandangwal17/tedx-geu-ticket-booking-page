import LayoutHeader from './header'

export default function Layout({ children }) {
    return (
        <div>
            <LayoutHeader />
            {children}
        </div>
    )
}
