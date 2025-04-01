import { HeaderDashboard } from '@/components/header-dashboard'

export const metadata = {
    title: 'Painel do Site',
    description: 'Esse é o painel demonstrativo do site'
}

export default function DashboardLayout(
    {children} : {children: React.ReactNode}
){
    return (
        <>
            <h3>Menu do dashboard</h3>
            <HeaderDashboard/>
            <br />
            { children }
        </>
    )
}