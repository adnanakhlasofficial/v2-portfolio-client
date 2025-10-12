import BackButton from '@/components/shared/BackButton';
import NavigateButton from '@/components/shared/NavigateButton';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Construction, Home } from 'lucide-react';

export default function UnderDevelopment() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <Card className="relative w-full max-w-2xl shadow-2xl">
        <CardContent className="px-8 py-6 sm:px-12">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="relative">
              <div className="bg-primary/10 absolute inset-0 rounded-full blur-2xl" />
              <div className="bg-muted relative rounded-2xl p-6">
                <Construction
                  className="text-muted-foreground h-16 w-16 animate-pulse"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
                Under Development
              </h1>
              <p className="text-muted-foreground max-w-md text-lg">
                We&apos;re working hard to bring you something amazing. This page is currently being
                crafted with care.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
              <NavigateButton navigation="/" variant="default" size="lg">
                <Home className="mr-2 !h-5 !w-5" />
                Go Home
              </NavigateButton>
              <BackButton variant="outline" size="lg">
                <ArrowLeft className="mr-2 !h-5 !w-5" />
                Go Back
              </BackButton>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground text-sm">
                Expected completion:{' '}
                <span className="text-foreground font-semibold">Coming Soon</span>
              </p>
            </div>
          </div>
          <div className="mt-6 w-full text-center">
            <p className="text-muted-foreground text-sm">Thank you for your patience</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
