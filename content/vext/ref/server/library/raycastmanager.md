---
title: RaycastManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[DetailedRaycast](#detailedraycast)**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)) | [RayCastHit](/vext/ref/shared/type/raycasthit){} |
| **[CollisionRaycast](#collisionraycast)**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)) | [RayCastHit](/vext/ref/shared/type/raycasthit){} |
| **[DetailedLatencyRaycast](#detailedlatencyraycast)**(latency: float, from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)) | [RayCastHit](/vext/ref/shared/type/raycasthit){} |
| **[CollisionLatencyRaycast](#collisionlatencyraycast)**(latency: float, from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)) | [RayCastHit](/vext/ref/shared/type/raycasthit){} |

## Methods

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

### CollisionRaycast {#collisionraycast}

> **CollisionRaycast**(from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)): [RayCastHit](/vext/ref/shared/type/raycasthit){}

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

### DetailedLatencyRaycast {#detailedlatencyraycast}

> **DetailedLatencyRaycast**(latency: float, from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)): [RayCastHit](/vext/ref/shared/type/raycasthit){}

Perform a detailed mesh raycast while accounting for the provided network latency.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **latency** | float |  |
| **from** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **maxHits** | int |  |
| **materialFlags** | [MaterialFlags](/vext/ref/shared/type/materialflags) |  |
| **flags** | [RayCastFlags](/vext/ref/shared/type/raycastflags) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RayCastHit](/vext/ref/shared/type/raycasthit)**{} |  |

### CollisionLatencyRaycast {#collisionlatencyraycast}

> **CollisionLatencyRaycast**(latency: float, from: [Vec3](/vext/ref/shared/type/vec3), to: [Vec3](/vext/ref/shared/type/vec3), maxHits: int, materialFlags: [MaterialFlags](/vext/ref/shared/type/materialflags), flags: [RayCastFlags](/vext/ref/shared/type/raycastflags)): [RayCastHit](/vext/ref/shared/type/raycasthit){}

Perform a collision mesh raycast while accounting for the provided network latency.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **latency** | float |  |
| **from** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **to** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **maxHits** | int |  |
| **materialFlags** | [MaterialFlags](/vext/ref/shared/type/materialflags) |  |
| **flags** | [RayCastFlags](/vext/ref/shared/type/raycastflags) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RayCastHit](/vext/ref/shared/type/raycasthit)**{} |  |

