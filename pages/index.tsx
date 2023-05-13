import {PageWrapper} from "../src/components/styles/PageWrapper.styles";
import {QueryClient, QueryClientProvider} from "react-query";
import {CaravanList} from "../src/components/CaravanList/CaravanList";
import {Navigation} from "../src/components/Navigation/Navigation";
import {GlobalStyle} from "../src/components/styles/GlobalStyle";

const queryClient = new QueryClient()


const Home = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle/>
            <Navigation/>
            <PageWrapper>
                {/*    Header*/}
                <CaravanList/>
            </PageWrapper>
        </QueryClientProvider>
    )
}


export default Home
