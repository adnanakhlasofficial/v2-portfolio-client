'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { IconAlertHexagon, IconCode, IconDatabase } from '@tabler/icons-react';
import { useState } from 'react';

export function DevelopmentNoticeModal() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl [&>button]:hidden">
        <DialogHeader>
          <div className="mb-2 flex items-center gap-3">
            <div className="bg-muted rounded-full p-2.5">
              <IconAlertHexagon className="text-muted-foreground h-6 w-6" />
            </div>
            <DialogTitle className="text-2xl">Development Mode</DialogTitle>
          </div>
          <DialogDescription className="pt-2 text-base leading-relaxed">
            This website is currently under active development. Some features may not work as
            expected.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-muted/50 flex gap-3 rounded-lg border p-4">
            <IconCode className="text-muted-foreground mt-0.5 h-5 w-5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Features in Progress</p>
              <p className="text-muted-foreground text-sm">
                Certain functionalities are still being implemented and refined.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 flex gap-3 rounded-lg border p-4">
            <IconDatabase className="text-muted-foreground mt-0.5 h-5 w-5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Test Data in Use</p>
              <p className="text-muted-foreground text-sm">
                The application is displaying dummy data from the database for testing purposes.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => setOpen(false)} className="px-6">
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
