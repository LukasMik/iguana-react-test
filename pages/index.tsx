import {PageWrapper} from "../src/components/PageWrapper.styles";
import {QueryClient, QueryClientProvider} from "react-query";
import {CaravanList} from "../src/components/CaravanList/CaravanList";

const queryClient = new QueryClient()


const Home = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <PageWrapper>
                {/*    Navigation*/}
                {/*    Header*/}
                <CaravanList/>
            </PageWrapper>
        </QueryClientProvider>
    )
}


export default Home
