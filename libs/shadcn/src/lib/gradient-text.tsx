import { cn } from '@monthly-party/js-dom';

export function GradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'bg-size animate-bg-position bg-gradient-to-r from-yellow-500 from-30% via-yellow-700 via-50% to-pink-500 to-80% bg-[length:200%_auto] bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </div>
  );
}
