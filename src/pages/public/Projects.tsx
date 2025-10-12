import ProjectsSlider from '@/components/public/Projects/ProjectsSlider';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';

export default function Projects() {
  return (
    <Section>
      <SectionTitle
        header="Project Spotlight"
        title="Modular Configs for Scalable Dev"
        summary="Streamlined setup, reusable scripts, instant onboarding, and maintainable architecture patterns."
      />
      <ProjectsSlider />
    </Section>
  );
}
