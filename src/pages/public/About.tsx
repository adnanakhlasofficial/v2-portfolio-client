import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { user } from '@/constants/Profile';
import { AdminDetailsPublic, ApiResponse } from '@/types';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import Image from 'next/image';


export default async function About() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/public`);
  const data = (await res.json()) as ApiResponse<AdminDetailsPublic>;
  const admin = data?.data;

  const stats = [
    {
      label: 'Blogs',
      count: admin?._count?.blogs,
      icon: BookOpen,
    },
    {
      label: 'Projects',
      count: admin?._count?.projects,
      icon: Briefcase,
    },
    {
      label: 'Experience',
      count: admin?._count?.experiences,
      icon: Award,
    },
  ];

  return (
    <Section>
      <SectionTitle
        header="About Me"
        title="Crafting Scalable Web Experiences"
        summary="I build modular, maintainable systems that blend elegant design with powerful, developer-first engineering principles."
      />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="flex justify-between lg:justify-end">
          <div className="group relative">
            <div className="bg-primary/30 absolute -inset-1 rounded-2xl opacity-70 blur-xl transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" />
            <Card className="relative overflow-hidden p-0 lg:w-md 2xl:w-xl">
              <CardContent className="aspect-[4/3] overflow-hidden p-0">
                <Image
                  src={user.profile}
                  alt={user.name}
                  placeholder="blur"
                  width={300}
                  height={300}
                  className="h-full w-full rounded-lg object-cover object-[0%_100%]"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-foreground mb-2 text-3xl font-bold">{user.name}</h3>
            <p className="text-muted-foreground mb-4">{user.email}</p>
            <p className="text-foreground text-lg leading-relaxed">{user.story}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="col-span-2 mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, count, icon: Icon }) => (
          <Card
            key={label}
            className="group border-border bg-muted/30 hover:bg-muted/50 relative overflow-hidden rounded-2xl border p-6 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <CardContent className="p-0">
              {/* subtle background glow */}
              <div className="bg-primary/5 absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* icon */}
              <div className="mb-3 flex justify-center">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300">
                  <Icon className="text-primary h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              {/* count */}
              <div className="text-foreground text-4xl font-semibold tracking-tight">
                {count ?? 0}
              </div>

              {/* label */}
              <div className="text-muted-foreground mt-1 text-sm font-medium tracking-wide uppercase">
                {label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
