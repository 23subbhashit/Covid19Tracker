import Deaths from '@/components/Body/Deaths'
import Cases from '@/components/Body/Cases'
import Recovered from '@/components/Body/Recovered'
import Home from '@/components/Body/Home'


export const routes=[
    { path : '/' , component : Home },
    { path : '/deaths' , component : Deaths },
    { path : '/cases' , component : Cases },
    { path : '/recovered' , component : Recovered },
]