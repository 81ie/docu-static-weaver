
import SectionHeader from './SectionHeader';
import ProductsList from './ProductsList';
import SectionBackground from './SectionBackground';

interface Membership {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  type: 'membership';
}

interface MembershipsSectionProps {
  memberships: Membership[];
}

const MembershipsSection = ({ memberships }: MembershipsSectionProps) => {
  return (
    <div className="mt-16">
      <SectionHeader title="MEMBERSHIP PLANS" />
      <SectionBackground type="memberships">
        <ProductsList products={memberships} />
      </SectionBackground>
    </div>
  );
};

export default MembershipsSection;
