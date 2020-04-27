---
title: RaycastManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetEntityInRaycast](#getentityinraycast)**(distance: float) | [Entity](/vext/ref/shared/type/entity) \| nil |
| **[Raycast](#raycast)**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)) | [RayCastHit](/vext/ref/shared/type/raycasthit) \| nil |
| **[SpatialRaycast](#spatialraycast)**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), flags: [SpatialQueryFlags](/vext/ref/shared/type/spatialqueryflags)) | [Entity](/vext/ref/shared/type/entity){} |
| **[DetailedRaycast](#detailedraycast)**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)) | [RayCastHit](/vext/ref/shared/type/raycasthit){} |

## Methods

### GetEntityInRaycast {#getentityinraycast}

> **GetEntityInRaycast**(distance: float): [Entity](/vext/ref/shared/type/entity) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **distance** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)** \| **nil** |  |

### Raycast {#raycast}

> **Raycast**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)): [RayCastHit](/vext/ref/shared/type/raycasthit) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **flags** | [RayCastFlags](/vext/ref/shared/type/raycastflags) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RayCastHit](/vext/ref/shared/type/raycasthit)** \| **nil** |  |

### SpatialRaycast {#spatialraycast}

> **SpatialRaycast**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), flags: [SpatialQueryFlags](/vext/ref/shared/type/spatialqueryflags)): [Entity](/vext/ref/shared/type/entity){}

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **flags** | [SpatialQueryFlags](/vext/ref/shared/type/spatialqueryflags) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)**{} |  |

### DetailedRaycast {#detailedraycast}

> **DetailedRaycast**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)): [RayCastHit](/vext/ref/shared/type/raycasthit){}

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **maxHits** | int |  |
| **materialFlags** | [MaterialFlags](/vext/ref/shared/type/materialflags) |  |
| **flags** | [RayCastFlags](/vext/ref/shared/type/raycastflags) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RayCastHit](/vext/ref/shared/type/raycasthit)**{} |  |

