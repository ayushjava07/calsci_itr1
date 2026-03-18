import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import type { CloudinaryImage } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dhirmdjpz",
  },
});

export type CloudinaryPublicId =
  | "fh1_zx1vti"
  | "calcpanda_lqfnoo"
  | "home-calsci_ceoagc"
  | "Appcalcul_qybiay"
  | "app-header_noczbw"
  | "calculator-panda_tlkxos"
  | "subscriber-panda-copy-0_wqoiqx"
  | "subscriber-panda_roq4e9"
  | "chatapp-panda_uuwb7y"
  | "app_graph_cigenu"
  | "app_own_qamxng";

export type CloudImageVariant = "hero" | "card" | "icon";

const VARIANT_WIDTHS: Record<CloudImageVariant, number> = {
  hero: 1600,
  card: 800,
  icon: 256,
};

type BuildCloudImageOptions = {
  variant?: CloudImageVariant;
  width?: number;
};

export function buildCloudImage(
  publicId: CloudinaryPublicId,
  options: BuildCloudImageOptions = {}
): CloudinaryImage {
  const img = cloudinary.image(publicId);
  const width = options.width ?? VARIANT_WIDTHS[options.variant ?? "card"];

  img
    .resize(scale().width(width))
    .delivery(format("auto"))
    .delivery(quality("auto"));

  return img;
}

export function cloudImageUrl(
  publicId: CloudinaryPublicId,
  options?: BuildCloudImageOptions
): string {
  return buildCloudImage(publicId, options).toURL();
}

