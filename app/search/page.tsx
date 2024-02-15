import { format } from "date-fns";
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { getSearchResult } from "../utils/api";
import { SearchResultData } from "../types/app";
import ListingCard from "../components/ListingCard/ListingCard";
import Map from "../components/Map/Map";

type SearchParams = {
    location: string;
    startDate: string;
    endDate: string;
    numOfGuests: string
}
const SearchResult = async ({
    searchParams: {location, startDate, endDate, numOfGuests}, }  : {searchParams: SearchParams ;}) => {
    let formatStartDate;
    let formatEndDate;
    if(startDate && endDate) {
        formatStartDate = format(new Date(startDate), 'dd MMMM yy');
        formatEndDate = format(new Date(endDate), 'dd MMMM yy')
    }
    const range = `${formatStartDate} - ${formatEndDate}`
    const filters = [
        'Cancellation Flexibility',
        'Type of Place',
        'Price',
        'Rooms and Beds',
        'More filters',
      ];
      const searchResultData: SearchResultData = await getSearchResult();
  return (
    <>
        <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`}/>
        <main>
            <section>
                <div className="container flex">
                    <div className="pt-14">
                        <p className='text-xs'>
                            300+ Stays - {range} - for {numOfGuests} guests
                        </p>
                        <h1 className='text-3xl font-semibold mt-2 mb-6 '>
                            Stays in {location}
                        </h1>
                        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                            {filters.map(filter => (
                                <button type="button" className="filter-btn" key={filter}>{filter}</button>
                            ))}
                        </div>
                        <div>
                            {searchResultData.map((listing) => (
                                <ListingCard 
                                    key={listing.title}
                                    img={listing.img}
                                    location={listing.location}
                                    title={listing.title}
                                    description={listing.description}
                                    star={listing.star}
                                    price={listing.price}
                                    total={listing.total}                           
                                    />
                            ))}
                        </div>
                    </div>
                    <div className="hidden xl:inline-flex xl:min-w-[600px]">
                        <Map searchResultData={searchResultData} />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default SearchResult