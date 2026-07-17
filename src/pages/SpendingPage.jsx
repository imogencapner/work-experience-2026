import { AccountCard } from "../components";
import  SpendingChart  from "./SpendingChart";



export function SpendingPage(){
    return (
<div 
    style={{ marginBottom: '16px' }}>
    <AccountCard 
    name = "Savings Amount" balance="£2,619"> 
    </AccountCard>
    <SpendingChart />
</div>
    )
}