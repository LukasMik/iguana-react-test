import {QueryClient, QueryClientProvider} from "react-query";
import {CaravanList} from "../src/components/CaravanList";
import {Navigation} from "../src/components/Navigation/Navigation";
import {GlobalStyle} from "../src/components/styles/GlobalStyle";
import {Header} from "../src/components/Header/Header";

const queryClient = new QueryClient()


const Home = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle/>
            <Navigation/>
            <Header/>
            <CaravanList/>
        </QueryClientProvider>
    )
}


export default Home
