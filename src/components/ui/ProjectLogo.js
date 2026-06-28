import Image from 'next/image';
import { LOGOS } from '@/lib/links';

export default function ProjectLogo({
  slug,
  height = 44,
  className,
  priority = false,
}) {
  const logo = LOGOS[slug];
  if (!logo) return null;
  const width = Math.round((height * logo.width) / logo.height);
  return (
    <Image
      src={logo.src}
      alt=""
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
