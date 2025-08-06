// Image optimization utilities for better SEO and performance

export const optimizedImageProps = {
  loading: "lazy" as const,
  decoding: "async" as const,
  sizes: "100vw",
};

export const criticalImageProps = {
  loading: "eager" as const,
  decoding: "sync" as const,
  fetchPriority: "high" as const,
};

export const getOptimizedImageProps = (isCritical = false) => 
  isCritical ? criticalImageProps : optimizedImageProps;

// Alt text generator for roofing images
export const generateAltText = (
  imageType: "residential" | "commercial" | "emergency" | "maintenance" | "logo",
  location?: string
) => {
  const altTexts = {
    residential: `Luna's Roofing LLC crew installing new residential roof${location ? ` in ${location}, Texas` : " in East Texas"}`,
    commercial: `Professional commercial roofing installation by Luna's Roofing LLC${location ? ` in ${location}, TX` : ""}`,
    emergency: `Emergency roof repair and storm damage restoration${location ? ` in ${location}, Texas` : " by Luna's Roofing"}`,
    maintenance: `Roof maintenance and inspection services${location ? ` in ${location}, TX` : " by Luna's Roofing LLC"}`,
    logo: "Luna's Roofing LLC - Professional Roofing Contractor serving Wills Point, Terrell, Forney, Canton, and Kaufman Texas"
  };

  return altTexts[imageType];
};

// Preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    "/luna_roofing_logo.png",
    "/luna_residential_roofing.png"
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};
