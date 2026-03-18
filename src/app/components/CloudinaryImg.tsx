import type { ImgHTMLAttributes } from "react";
import {
  cloudImageUrl,
  type CloudImageVariant,
  type CloudinaryPublicId,
} from "@/lib/cloudinary";

type CloudinaryImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  publicId: CloudinaryPublicId;
  variant?: CloudImageVariant;
};

export function CloudinaryImg({
  publicId,
  variant,
  loading = "lazy",
  decoding = "async",
  ...rest
}: CloudinaryImgProps) {
  const src = cloudImageUrl(publicId, { variant });

  return (
    <img
      src={src}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
}

