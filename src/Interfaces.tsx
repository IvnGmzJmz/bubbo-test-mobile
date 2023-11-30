export interface BookCardProps {
    id: string;
    title: string;
    author: string;
    image: string;
    sinopsis: string;
    onBookAction: () => void;
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
    onCreateBook: () => void;
    onClose: () => void;
}

export interface DataModalProps {
    isVisible: boolean;
    onClose: () => void;
    bookData: any;
  }

export interface HomeFetchInterface {
    onCreateBook: () => void;
}
  