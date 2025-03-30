
interface StatsItemProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatsItem = ({ value, label, icon }: StatsItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {icon && <div className="text-idc-gold mb-3">{icon}</div>}
      <div className="text-4xl font-bold text-idc-navy mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

interface StatsProps {
  items: StatsItemProps[];
}

const Stats = ({ items }: StatsProps) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <StatsItem 
              key={index}
              value={item.value}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
