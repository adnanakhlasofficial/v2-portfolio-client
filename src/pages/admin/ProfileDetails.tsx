import { getAdminPrivate } from '@/actions/admin';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createInitials } from '@/utils/create-initials';
import { BookOpen, Briefcase, FolderOpen, Mail } from 'lucide-react';

export default async function ProfileDetails() {
  const admin = await getAdminPrivate();

  const stats = [
    {
      label: 'Projects',
      count: admin?._count?.projects,
      icon: FolderOpen,
    },
    {
      label: 'Experience',
      count: admin?._count?.experiences,
      icon: Briefcase,
    },
    {
      label: 'Blogs',
      count: admin?._count?.blogs,
      icon: BookOpen,
    },
  ];

  return (
    <div>
      <Card className="border-border/50 bg-card/60 w-full shadow-xl backdrop-blur-md transition hover:shadow-2xl">
        <CardHeader className="flex flex-col items-center space-y-3 pb-0 text-center">
          <Avatar className="border-border h-28 w-28 border-4 shadow-md">
            <AvatarImage src={admin?.profile} alt={admin?.name} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
              {createInitials(admin?.name || '')}
            </AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="text-2xl font-semibold tracking-tight">{admin?.name}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              @{admin?.username}
            </CardDescription>
          </div>

          {admin?.bio && (
            <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
              {admin?.bio}
            </p>
          )}
        </CardHeader>

        <CardContent className="mt-6 space-y-5">
          <div className="border-border/40 bg-muted/30 text-muted-foreground flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm">
            <Mail className="text-primary h-4 w-4" />
            <span>{admin?.email}</span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((item, idx) => (
              <Card
                key={idx}
                className="border-border/40 bg-card/70 text-center shadow-sm backdrop-blur-sm transition hover:shadow-md"
              >
                <CardContent className="pt-6 pb-5">
                  <div className="mb-3 flex justify-center">
                    <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-full">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{item?.count}</div>
                  <div className="text-muted-foreground mt-1 text-xs">{item?.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
