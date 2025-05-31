export type ProductSingle = {
    title: string;
    description: string;
    price: string;
    discount?: string;
    originalPrice?: string;
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




/* components props start*/

export type InputProps = {
    name: string;
    placeholder?: string;
    type: string;
    label?: string;
    id?: string;
    classes?: string
}

export interface SelectOption {
    label: string
    value: string | number
}

export interface SelectProps {
    name: string
    id?: string
    label?: string
    options: SelectOption[]
    placeholder?: string
    classes?: string
}


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

export interface CheckboxProps {
    id: string;
    label?: string;
    name?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export interface BillingBoxProps {
    inputBox: React.ReactNode;
    imgSrc: string;
    price: string;
    title: string;
}

export interface OrderSummaryItemProps {

    title: string; rate: number; price: number; oldPrice: number; img: string;

}


/* components props end*/
