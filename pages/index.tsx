import {PageWrapper} from "../src/components/styles/PageWrapper.styles";
import {QueryClient, QueryClientProvider} from "react-query";
import {CaravanList} from "../src/components/CaravanList/CaravanList";
import StaticImage from "next/image";
import logo from "../src/assets/images/logo.png"
import {Navigation} from "../src/components/Navigation/Navigation";

const queryClient = new QueryClient()


const Home = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Navigation />
            <PageWrapper>
                {/*    Header*/}
                <CaravanList/>
            </PageWrapper>
        </QueryClientProvider>
    )
}


export default Home
