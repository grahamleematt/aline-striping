interface ResponsiveImageProps extends Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "srcSet"
> {
  src: string;
  alt: string;
  widths?: number[];
  sizes?: string;
  width: number;
  height: number;
}

function buildSrcSet(src: string, widths: number[]): string {
  const ext = src.lastIndexOf(".");
  const base = src.slice(0, ext);
  const extension = src.slice(ext);

  return widths
    .map((w) => `${base}-${w}w${extension} ${w}w`)
    .concat([`${src} ${widths[widths.length - 1] * 2}w`])
    .join(", ");
}

export function ResponsiveImage({
  src,
  alt,
  widths,
  sizes,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  ...rest
}: ResponsiveImageProps) {
  const srcSet = widths?.length ? buildSrcSet(src, widths) : undefined;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      srcSet={srcSet}
      sizes={sizes}
      {...rest}
    />
  );
}
