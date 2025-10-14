import BackButton from '@/components/shared/BackButton';
import NavigateButton from '@/components/shared/NavigateButton';
import { Card, CardContent } from '@/components/ui/card';
import { IconAlertHexagon, IconArrowLeft, IconHome } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div className="bg-background relative flex h-screen w-full items-center justify-center p-4">
      <Card className="relative w-full max-w-2xl shadow-2xl">
        <CardContent className="px-8 py-6 sm:px-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative">
              <div className="bg-destructive/10 absolute inset-0 rounded-full blur-2xl" />
              <div className="bg-muted relative rounded-2xl p-6">
                <IconAlertHexagon className="text-muted-foreground h-16 w-16" strokeWidth={1.5} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-muted text-6xl font-bold sm:text-7xl">404</p>
                <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
                  Page Not Found
                </h1>
              </div>
              <p className="text-muted-foreground max-w-md text-lg">
                The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s
                get you back on track.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
              <NavigateButton navigation="/" variant="default" size="lg">
                <IconHome className="mr-2 !h-5 !w-5" />
                Go Home
              </NavigateButton>
              <BackButton variant="outline" size="lg">
                <IconArrowLeft className="mr-2 !h-5 !w-5" />
                Go Back
              </BackButton>
            </div>
          </div>
          <div className="mt-6 w-full text-center">
            <p className="text-muted-foreground text-sm">Need help? Contact support</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
