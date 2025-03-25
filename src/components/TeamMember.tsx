
interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({ image, name, role, description }: TeamMemberProps) => {
  return (
    <div className="card-wellness card-hover">
      <div className="aspect-square rounded-lg bg-wellness-lightBlue overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
          loading="lazy"
        />
      </div>
      <h3 className="text-wellness-blue font-semibold text-lg">{name}</h3>
      <p className="text-wellness-green font-medium text-sm mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TeamMember;
