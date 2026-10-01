type Props = { src: string; alt: string; className?: string; loading?: "lazy" | "eager" };

/** Shows the whole photo (no crop) over a soft blurred copy of itself, so empty space blends in. */
const FittedImage = ({ src, alt, className = "", loading = "lazy" }: Props) => (
  <div className="relative w-full h-full overflow-hidden">
    <img
      src={src}
      alt=""
      aria-hidden
      loading={loading}
      className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70 saturate-150"
    />
    <div className="absolute inset-0 bg-slate-950/20" aria-hidden />
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`relative w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ${className}`}
    />
  </div>
);

export default FittedImage;
