import BannerList from "@/components/bannerList/BannerList"
import asideListData from "../../locals/data/asideData.json";
import AsideList from "@/components/asideList/AsideList";
import BannerListData from "../../locals/data/bannersData.json";
import sectionsData from "../../locals/data/sectionsData.json"
import ProductList from "@/components/productList/ProductList";
function page() {
    return (
        <div className="">
            <div className="w-[95%] mx-auto py-10">

                <div className="flex flex-col md:flex-row gap-6 p-4">
                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4 space-y-8">
                        {asideListData.map((item, index) => {
                            return (
                                <AsideList
                                    key={index}
                                    listTitle={item.listTitle}
                                    listItems={item.listItems}
                                    btn={item.btn}
                                />
                            );
                        })}
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 space-y-10">
                        {/* Banners */}
                        <BannerList data={BannerListData} />

                        {/* Products Sections */}
                        {sectionsData.map((item, idx) => (
                            <ProductList title={item.tittle} products={item.products} key={idx} />
                        ))}
                    </main>
                </div>

            </div>





        </div>
    )
}

export default page