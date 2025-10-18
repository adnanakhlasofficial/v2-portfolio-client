import { getAdminPublic } from '@/actions/admin';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { getImageBlurDataUrl } from '@/utils/generate-img-blur-url';
import { IconBook, IconBriefcase2, IconFolderCode } from '@tabler/icons-react';
import Image from 'next/image';

export default async function About() {
  const admin = await getAdminPublic();
  const imageBlurDataUrl = await getImageBlurDataUrl(admin.profile);

  const stats = [
    {
      label: 'Blogs',
      count: admin?._count?.blogs,
      icon: IconBook,
    },
    {
      label: 'Projects',
      count: admin?._count?.projects,
      icon: IconFolderCode,
    },
    {
      label: 'Experience',
      count: admin?._count?.experiences,
      icon: IconBriefcase2,
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
          <div className="group relative grow">
            <div className="bg-primary/30 absolute -inset-1 rounded-2xl opacity-70 blur-xl transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" />
            <Card className="overflow-hidden p-0 lg:w-md 2xl:w-xl">
              <CardContent className="aspect-square overflow-hidden p-0">
                <Image
                  src={admin.profile}
                  alt={admin.name}
                  placeholder="blur"
                  blurDataURL={imageBlurDataUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="relative h-full w-full rounded-lg object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-foreground mb-2 text-3xl font-bold">{admin.name}</h3>
            {/* <p className="text-muted-foreground mb-4">{admin.email}</p> */}
            <p className="text-foreground text-lg leading-relaxed">{admin.story}</p>
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
