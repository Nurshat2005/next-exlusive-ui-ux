interface IStoresType {
  active: boolean;
  toggleActive: () => void;
}

interface FakeProduct {
  id: number;
  price: number;
  image: string;
  description: string;
  title: string;
  category: string;
  rating: number;
  style: string;
}
