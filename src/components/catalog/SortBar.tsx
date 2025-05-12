
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortBarProps {
  sortValue: string;
  onSortChange: (value: string) => void;
}

const SortBar: React.FC<SortBarProps> = ({ sortValue, onSortChange }) => {
  return (
    <div className="bg-card rounded-lg border p-4 mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium">Сортировка</h3>
        <Select
          value={sortValue || 'popular'}
          onValueChange={onSortChange}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">По популярности</SelectItem>
            <SelectItem value="price-asc">По цене (сначала дешевле)</SelectItem>
            <SelectItem value="price-desc">По цене (сначала дороже)</SelectItem>
            <SelectItem value="name-asc">По названию (А-Я)</SelectItem>
            <SelectItem value="name-desc">По названию (Я-А)</SelectItem>
            <SelectItem value="new">Сначала новинки</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SortBar;
