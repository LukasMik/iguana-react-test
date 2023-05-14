import {QueryClient, QueryClientProvider} from "react-query";
import {CaravanList} from "../src/components/CaravanList";
import {Navigation} from "../src/components/Navigation/Navigation";
import {GlobalStyle} from "../src/components/styles/GlobalStyle";
import {Header} from "../src/components/Header/Header";
import {useAtom} from "jotai";
import {ICaravanType} from "../src/types";
import {activeTypesFilterAtom} from "../src/atoms";
import {useEffect} from "react";

const queryClient = new QueryClient()


const Home = () => {
    const [activeTypesFilter] = useAtom<ICaravanType[]>(activeTypesFilterAtom)

    useEffect(() => {
        console.log(activeTypesFilter)
    }, [activeTypesFilter])
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle/>
            <Navigation/>
            <Header />
            {/* Filters from header: filterByType = [type, type]*/}
            {/*                      filterByPrice = {min: 1000, max: 5000}      */}
            {/*                      filterByBookable = true      */}
            <CaravanList/>
        </QueryClientProvider>
    )
}


export default Home
