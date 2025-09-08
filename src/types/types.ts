export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    tags: string[];
    rating: number;
    availabilityStatus: string;
    thumbnail: string;
    images: string[];
    warrantyInformation: string;
    shippingInformation: string;
    reviews: [{
        rating: number;
        comment: string;
        reviewerName: string;
        reviewerEmail: string;
    }]
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface UseProductsOptions {
    category?: string;
    search?: string;
    sortBy?: "price" | "rating";
    order?: "asc" | "desc";
    limit?: number;
    skip?: number;
}