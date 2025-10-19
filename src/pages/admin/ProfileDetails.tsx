'use client';
import { getAdminPrivate } from '@/actions/admin';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdminDetailsPrivate } from '@/types';
import { createInitials } from '@/utils/create-initials';
import { format } from 'date-fns';
import {
  CalendarDays,
  Mail,
  User,
  Briefcase,
  Code,
  Lightbulb,
  FileText,
  FolderGit2,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ProfileDetails() {
  const [profile, setProfile] = useState<null | AdminDetailsPrivate>(null);

  useEffect(() => {
    async function getAdmin() {
      const data = await getAdminPrivate();
      setProfile(data);
    }
    getAdmin();
  }, []);

  const skillsList = profile?.skills ? profile?.skills.split(',').map((s) => s.trim()) : [];

  return (
    <div>
      <Card className="border-2 shadow-lg">
        <CardContent className="p-8">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-shrink-0">
              <Avatar className="border-background ring-primary h-40 w-40 border-4 shadow-xl ring-2">
                <AvatarImage src={profile?.profile} alt={profile?.name} />
                <AvatarFallback className="text-4xl font-semibold">
                  {createInitials(profile?.name || '')}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">{profile?.name}</h1>
                <p className="text-muted-foreground mt-1 text-lg">@{profile?.username}</p>
              </div>

              <p className="text-foreground/90 text-lg leading-relaxed">{profile?.bio}</p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>{profile?.email}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>Joined {format(profile?.createdAt || new Date(), 'PP')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
                <div className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors">
                  <Code className="text-foreground/70 h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{profile?._count.techSkills}</div>
                    <div className="text-muted-foreground text-xs">Tech Skills</div>
                  </div>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors">
                  <FolderGit2 className="text-foreground/70 h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{profile?._count.projects}</div>
                    <div className="text-muted-foreground text-xs">Projects</div>
                  </div>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors">
                  <FileText className="text-foreground/70 h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{profile?._count.blogs}</div>
                    <div className="text-muted-foreground text-xs">Blogs</div>
                  </div>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors">
                  <Briefcase className="text-foreground/70 h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{profile?._count.experiences}</div>
                    <div className="text-muted-foreground text-xs">Experiences</div>
                  </div>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors">
                  <Lightbulb className="text-foreground/70 h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{profile?._count.softSkills}</div>
                    <div className="text-muted-foreground text-xs">Soft Skills</div>
                  </div>
                </div>
                <div className="bg-muted/50 hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors">
                  <User className="text-foreground/70 h-5 w-5" />
                  <div>
                    <div className="text-2xl font-bold">{profile?._count.tools}</div>
                    <div className="text-muted-foreground text-xs">Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="bg-muted/50 h-auto w-full justify-start rounded-lg p-1">
            <TabsTrigger
              value="about"
              className="data-[state=active]:bg-background px-6 py-3 data-[state=active]:shadow-sm"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="story"
              className="data-[state=active]:bg-background px-6 py-3 data-[state=active]:shadow-sm"
            >
              Story
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-background px-6 py-3 data-[state=active]:shadow-sm"
            >
              Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
                <Separator className="mb-6" />
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-foreground/90 text-base leading-relaxed whitespace-pre-line">
                    {profile?.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="story" className="mt-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-semibold">My Journey</h2>
                <Separator className="mb-6" />
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-foreground/90 text-base leading-relaxed whitespace-pre-line">
                    {profile?.story}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-semibold">Skills & Expertise</h2>
                <Separator className="mb-6" />
                {skillsList.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm font-medium transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No skills listed yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
