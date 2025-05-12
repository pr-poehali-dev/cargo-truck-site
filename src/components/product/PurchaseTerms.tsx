
import Icon from '@/components/ui/icon';

/**
 * Компонент с условиями покупки
 */
const PurchaseTerms = () => {
  return (
    <div className="bg-secondary/50 p-4 rounded-lg">
      <h3 className="font-medium mb-2">Условия покупки:</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm">
          <Icon name="Check" className="h-4 w-4 text-primary" />
          <span>Лизинг от 6 месяцев</span>
        </li>
        <li className="flex items-center gap-2 text-sm">
          <Icon name="Check" className="h-4 w-4 text-primary" />
          <span>Кредит от 9.9% годовых</span>
        </li>
        <li className="flex items-center gap-2 text-sm">
          <Icon name="Check" className="h-4 w-4 text-primary" />
          <span>Trade-in вашей текущей техники</span>
        </li>
        <li className="flex items-center gap-2 text-sm">
          <Icon name="Check" className="h-4 w-4 text-primary" />
          <span>Гарантия 1 год или 100 000 км</span>
        </li>
      </ul>
    </div>
  );
};

export default PurchaseTerms;
