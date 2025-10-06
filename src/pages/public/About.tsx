import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { AdminDetailsPublic, ApiResponse } from '@/types';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default async function About() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/public`);
  const data = (await res.json()) as ApiResponse<AdminDetailsPublic>;
  const admin = data?.data;

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
                  src={admin?.profile}
                  alt={admin?.name}
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
            <h3 className="text-foreground mb-2 text-3xl font-bold">{admin?.name}</h3>
            <p className="text-muted-foreground mb-4">{admin?.email}</p>
            <p className="text-foreground text-lg leading-relaxed">{admin?.story}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 text-center transition-all hover:scale-110 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="mb-2 flex justify-center">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <BookOpen className="text-primary h-6 w-6" />
                  </div>
                </div>
                <div className="text-foreground text-3xl font-bold">{admin?._count?.blogs}</div>
                <div className="text-muted-foreground text-sm">Blogs</div>
              </CardContent>
            </Card>

            <Card className="p-4 text-center transition-all hover:scale-110 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="mb-2 flex justify-center">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <Briefcase className="text-primary h-6 w-6" />
                  </div>
                </div>
                <div className="text-foreground text-3xl font-bold">{admin?._count?.projects}</div>
                <div className="text-muted-foreground text-sm">Projects</div>
              </CardContent>
            </Card>

            <Card className="p-4 text-center transition-all hover:scale-110 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="mb-2 flex justify-center">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <Award className="text-primary h-6 w-6" />
                  </div>
                </div>
                <div className="text-foreground text-3xl font-bold">
                  {admin?._count?.experiences}
                </div>
                <div className="text-muted-foreground text-sm">Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
