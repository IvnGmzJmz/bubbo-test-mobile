export interface BookCardProps {
    id: string;
    title: string;
    author: string;
    image: string;
    sinopsis: string;
    tryFetch: () => void;
}

export interface BookCardHeaderProps {
    image: string;
}

export interface Book {
    title: string;
    author: string;
    image: string;
    sinopsis: string;
}
  
export interface CreateBookModal {
    isVisible: boolean;
    onClose: () => void;
}

export interface DataModalProps {
    isVisible: boolean;
    onClose: () => void;
    bookData: any;
  }

export interface HomeFetchInterface {
    homeFetch: () => void;
}
  