import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

interface IProps {
  swiperRef: React.RefObject<SwiperType | null>;
}

export default function ProjectNavigation({ swiperRef }: IProps) {
  return (
    <div className="absolute z-50 hidden gap-4 lg:flex">
      <Button
        variant="secondary"
        size="icon"
        className="ring-primary h-12 w-12 rounded-full border shadow-lg backdrop-blur-md transition-all duration-150 hover:scale-105 hover:shadow-xl focus:ring-4 active:scale-95"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft className="!h-5 !w-5" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="ring-primary h-12 w-12 rounded-full border shadow-lg backdrop-blur-md transition-all duration-150 hover:scale-105 hover:shadow-xl focus:ring-4 active:scale-95"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight className="!h-5 !w-5" />
      </Button>
    </div>
  );
}
