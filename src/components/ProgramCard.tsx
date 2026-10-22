import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image?: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
}

export default function ProgramCard({
  title,
  description,
  image,
  icon: Icon,
  iconColor,
  iconBgColor,
}: ProgramCardProps) {
  return (
    <div className="program-card relative w-full max-w-xs mx-auto">
      {/* Image */}
      <div className="relative h-40 bg-gradient-to-br from-light-blue to-light-gray">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-navy-primary font-bold text-sm">
            {title}
          </div>
        )}
      </div>

      {/* Icon Badge */}
      <div className={`program-icon-badge ${iconBgColor}`}>
        <Icon size={28} className={iconColor} />
      </div>

      {/* Content */}
      <div className="p-6 pt-10 text-center">
        <h3 className="text-lg font-bold text-navy-primary mb-2">{title}</h3>
        <p className="text-sm text-navy-body">{description}</p>
      </div>
    </div>
  );
}
