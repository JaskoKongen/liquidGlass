
import React from 'react';

interface IconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  title?: string;
  fillColor?: string;
}

export const PlayIcon: React.FC<IconProps> = ({ className, width = "24", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 448 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'play-icon-title' : undefined}>
    {title && <title id="play-icon-title">{title}</title>}
    <path fill={fillColor} d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
  </svg>
);

export const FastForwardIcon: React.FC<IconProps> = ({ className, width = "24", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 512 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'ff-icon-title' : undefined}>
    {title && <title id="ff-icon-title">{title}</title>}
    <path fill={fillColor} d="M493.5 229.5l-192-160A32.004 32.004 0 00256 96v80.08l-142.12-118.4A23.996 23.996 0 0080 76.84V224H48c-17.67 0-32 14.33-32 32s14.33 32 32 32h32v147.16a23.996 23.996 0 0033.88 20.76L256 335.92V416a32.004 32.004 0 0045.5 26.5l192-160a32.002 32.002 0 000-53zM256 294.63L115.88 414.04V265.37L256 384V294.63zm0-177.26v89.37L115.88 97.96v148.67L256 128v-10.63z" />
  </svg>
);


export const HomeIcon: React.FC<IconProps> = ({ className, width = "40", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 576 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'home-icon-title' : undefined}>
    {title && <title id="home-icon-title">{title}</title>}
    <path fill={fillColor} d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
  </svg>
);

export const LayerGroupIcon: React.FC<IconProps> = ({ className, width = "30", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 512 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'layergroup-icon-title' : undefined}>
    {title && <title id="layergroup-icon-title">{title}</title>}
    <path fill={fillColor} d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className, width = "40", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 640 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'wifi-icon-title' : undefined}>
    {title && <title id="wifi-icon-title">{title}</title>}
    <path fill={fillColor} d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z" />
  </svg>
);

export const MusicIcon: React.FC<IconProps> = ({ className, width = "30", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 512 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'music-icon-title' : undefined}>
    {title && <title id="music-icon-title">{title}</title>}
    <path fill={fillColor} d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className, width = "40", height, title, fillColor = "currentColor" }) => (
  <svg viewBox="0 0 512 512" width={width} height={height ?? width} className={className} aria-labelledby={title ? 'search-icon-title' : undefined}>
    {title && <title id="search-icon-title">{title}</title>}
    <path fill={fillColor} d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
  </svg>
);
