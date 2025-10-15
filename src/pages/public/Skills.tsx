import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData } from '@/constants/Skills';

export default function Skills() {
  return (
    <Section>
      <SectionTitle
        header="My Skills"
        title="Expertise Across Key Areas"
        summary="Showcasing my technical, tool, and soft skill proficiencies."
      />
      {skillsData.map((category, index) => (
        <Card key={index} className="border-border/50 transition-all hover:shadow-md">
          <CardHeader className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-md">
              {category.icon}
            </div>
            <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground px-3 py-1 text-sm transition-colors duration-300 select-none"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </Section>
  );
}
