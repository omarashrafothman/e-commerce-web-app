export type ProductSingle = {
    title: string;
    description: string;
    price: string;
    discount?: string;
    originalPrice?: string;
};

export type ProductListProps = {
    title: string;
    products: ProductSingle[];
};


export type BannerProps = {
    bannerTitle: string;
    bannerDescription: string;
    link: string;
    bannerImage?: string
};
export type ListBannerProps = {
    data: BannerProps[];
};



export type AsideProps = {
    listTitle: string;
    listItems: string[];
    btn: string
};
/* product types start*/
export type Review = {
    user: string;
    comment: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    category: string;
    inStock: boolean;
    price: number;
    oldPrice: number;
    images: string[];
    reviews: Review[];
    soldCount: number;
    howToUse?: string;
    unit: "pcs" | "kgs" | "box" | "pack" | string;
    uploadedBy: string;
    rate: number
};

/* product types end*/
