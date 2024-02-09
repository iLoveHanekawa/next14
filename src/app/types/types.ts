export type DynamicRouteSegmentConfig = 'auto' | 'force-dynamic' | 'error' | 'force-static';
export type DynamicParamsRouteSegmentConfig = boolean;
export type RevalidateRouteSegmentConfig = false | 0 | number;
export type FetchCacheRouteSegmentConfig = 'auto' | 'default-cache' | 'only-cache' | 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store';
export type RuntimeRouteSegmentConfig = 'nodejs' | 'edge';
export type PreferredRegionRouteSegmentConfig = 'auto' | 'global' | 'home' | string | string[];
export type MaxDuration = number;