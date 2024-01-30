import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server"

const Dashboard = () => {
    const {getUser} = getKindeServerSession()
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard