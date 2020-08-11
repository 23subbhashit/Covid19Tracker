import Deaths from '@/components/Body/Deaths'
import Cases from '@/components/Body/Cases'
import Recovered from '@/components/Body/Recovered'


export const routes=[
    { path : '/' , component : Deaths },
    { path : '/cases' , component : Cases },
    { path : '/recovered' , component : Recovered },
]