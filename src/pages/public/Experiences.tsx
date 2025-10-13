import ExperiencesSection from '@/components/public/Experiences/ExperiencesSection';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';

export default function Experiences() {
  return (
    <Section>
      <SectionTitle
        header="Career Highlights"
        title="Roles, Projects & Achievements"
        summary="Showcasing impactful work, technical growth, and real-world problem solving."
      />
      <ExperiencesSection />
    </Section>
  );
}
