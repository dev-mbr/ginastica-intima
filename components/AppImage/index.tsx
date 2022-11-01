import Head from "next/head";
import Image from "next/image";
type Dimensions = {
  proportionalHeight?: false;
  default: [number, number];
  sm?: [number, number];
  md?: [number, number];
  lg?: [number, number];
  xl?: [number, number];
};
type ProportionalDimensions = {
  proportionalHeight: true;
  default: [number, number];
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
type BlurEffect = {
  disabled?: boolean;
  rgb: [number, number, number];
};
type Props = {
  src: string;
  alt?: string;
  className?: string;
  dimensions: Dimensions | ProportionalDimensions;
  blurEffect?: BlurEffect;
};
function AppImage({
  src,
  alt = "App Image",
  className = "",
  dimensions = { proportionalHeight: false, default: [0, 0] },
  blurEffect = { disabled: false, rgb: [192, 192, 192] },
}: Props) {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);
  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  const blur = rgbDataURL(...blurEffect.rgb);
  const getHeight = (width: number) => {
    const percentage = (width / dimensions.default[0] - 1) * -1;
    return Math.round(
      dimensions.default[1] - dimensions.default[1] * percentage
    );
  };
  const proportionalStyle = `
  .app-image-${src.replace(/[^\w\s]/gi, "")} {
    width: ${dimensions.default[0]}px;
    height: ${
      dimensions.default
        ? getHeight(dimensions.default[0])
        : dimensions.default[1]
    }px
  }
  @media (min-width: 300px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width:${dimensions.sm}px;
      height: ${
        dimensions.sm
          ? getHeight(dimensions.sm as number)
          : dimensions.default[1]
      }px
    }
  }
  @media (min-width: 640px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${(dimensions.md && dimensions.md) || dimensions.default[0]}px;
      height: ${
        dimensions.md
          ? getHeight(dimensions.md as number)
          : dimensions.default[1]
      }px
    }
  }
  @media (min-width: 1024px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${(dimensions.lg && dimensions.lg) || dimensions.default[0]}px;
      height: ${
        dimensions.lg
          ? getHeight(dimensions.lg as number)
          : dimensions.default[1]
      }px
    }
  }
  @media (min-width: 1280px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${(dimensions.xl && dimensions.xl) || dimensions.default[0]}px;
      height: ${
        dimensions.xl
          ? getHeight(dimensions.xl as number)
          : dimensions.default[1]
      }px
    }
  }
`;
  const style = `
  .app-image-${src.replace(/[^\w\s]/gi, "")} {
    width: ${dimensions.default[0]}px;
    height: ${dimensions.default[1]}px
  }
  @media (min-width: 300px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${
        (dimensions.sm && (dimensions.sm as [number, number])[0]) ||
        dimensions.default[0]
      }px;
      height: ${
        (dimensions.sm && (dimensions.sm as [number, number])[1]) ||
        dimensions.default[1]
      }px
    }
  }
  @media (min-width: 640px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${
        (dimensions.md && (dimensions.md as [number, number])[0]) ||
        dimensions.default[0]
      }px;
      height: ${
        (dimensions.md && (dimensions.md as [number, number])[1]) ||
        dimensions.default[1]
      }px
    }
  }
  @media (min-width: 1024px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${
        (dimensions.lg && (dimensions.lg as [number, number])[0]) ||
        dimensions.default[0]
      }px;
      height: ${
        (dimensions.lg && (dimensions.lg as [number, number])[1]) ||
        dimensions.default[1]
      }px
    }
  }
  @media (min-width: 1280px) {
    .app-image-${src.replace(/[^\w\s]/gi, "")} {
      width: ${
        (dimensions.xl && (dimensions.xl as [number, number])[0]) ||
        dimensions.default[0]
      }px;
      height: ${
        (dimensions.xl && (dimensions.xl as [number, number])[1]) ||
        dimensions.default[1]
      }px
    }
  }
`;
  return (
    <>
      <Head>
        <style scoped>
          {dimensions.proportionalHeight ? proportionalStyle : style}
        </style>
      </Head>
      <div
        className={`app-image-${src.replace(
          /[^\w\s]/gi,
          ""
        )} relative ${className}`}
      >
        <Image
          placeholder={"blur"}
          blurDataURL={!blurEffect.disabled ? blur : undefined}
          fill
          alt={alt}
          src={src}
        />
      </div>
    </>
  );
}
export default AppImage;
