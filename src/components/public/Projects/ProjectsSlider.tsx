'use client';
import { useRef } from 'react';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
import ProjectNavigation from './ProjectNavigation';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  stats: {
    duration: string;
    team: string;
    growth: string;
  };
}

export default function ProjectsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'NexCommerce',
      subtitle: 'Enterprise E-Commerce Platform',
      description:
        'Built a comprehensive e-commerce ecosystem handling 1M+ daily transactions with real-time inventory sync, AI-powered recommendations, and seamless payment integration.',
      category: 'E-Commerce',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      stats: {
        duration: '8 months',
        team: '12 members',
        growth: '+340%',
      },
    },
    {
      id: 2,
      title: 'DataVision Pro',
      subtitle: 'AI-Powered Analytics Platform',
      description:
        'Advanced business intelligence platform leveraging machine learning for predictive analytics, automated insights, and real-time data visualization across multiple data sources.',
      category: 'Analytics',
      tags: ['Python', 'TensorFlow', 'React', 'MongoDB'],
      stats: {
        duration: '10 months',
        team: '15 members',
        growth: '+280%',
      },
    },
    {
      id: 3,
      title: 'MediConnect',
      subtitle: 'Healthcare Management System',
      description:
        'Complete digital health platform connecting patients, doctors, and hospitals with telemedicine, electronic health records, appointment scheduling, and prescription management.',
      category: 'Healthcare',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      stats: {
        duration: '12 months',
        team: '20 members',
        growth: '+450%',
      },
    },
    {
      id: 4,
      title: 'SocialSphere',
      subtitle: 'Next-Gen Social Network',
      description:
        'Revolutionary social platform with real-time messaging, live streaming, content discovery algorithms, and community-building tools serving millions of active users daily.',
      category: 'Social Media',
      tags: ['React Native', 'Firebase', 'GraphQL', 'Redis'],
      stats: {
        duration: '14 months',
        team: '25 members',
        growth: '+520%',
      },
    },
    {
      id: 5,
      title: 'TaskFlow Pro',
      subtitle: 'Team Collaboration Platform',
      description:
        'All-in-one workspace solution combining project management, time tracking, resource planning, and team communication with advanced automation and integration capabilities.',
      category: 'Productivity',
      tags: ['Angular', 'NestJS', 'MongoDB', 'Socket.io'],
      stats: {
        duration: '9 months',
        team: '18 members',
        growth: '+390%',
      },
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-5xl 2xl:max-w-7xl">
      {/* Top-left gradient */}
      {/* <div className="from-primary/30 absolute -top-10 -left-30 hidden h-[600px] w-[600px] rounded-full bg-gradient-to-br to-transparent blur-3xl md:block" /> */}

      {/* Bottom-right gradient */}
      {/* <div className="from-chart-4/30 absolute -right-30 -bottom-10 hidden h-[600px] w-[600px] rounded-full bg-gradient-to-tl to-transparent blur-3xl md:block" /> */}
      <Swiper
        modules={[Navigation, EffectCreative, Autoplay, Pagination]}
        effect="creative"
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        creativeEffect={{
          prev: {
            translate: ['-20%', 0, -500],
            opacity: 0.5,
          },
          next: {
            translate: ['100%', 0, 0],
            opacity: 0,
          },
        }}
        speed={800}
        spaceBetween={30}
        slidesPerView={1}
        loop={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="pb-12"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} swiperRef={swiperRef} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative my-4 flex h-12 w-full flex-row-reverse items-center gap-4">
        {/* Navigation Controls */}
        <ProjectNavigation swiperRef={swiperRef} />
        {/* ✅ Pagination container must be OUTSIDE Swiper */}
        <div className="custom-pagination !my-0 w-full !justify-self-center" />
      </div>
    </div>
  );
}
