---
title: RaycastManager (Client Library)
---
## Description

## Methods

| Type                                          | Name                                      | Parameters                                                                                          |
| --------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Entity](/vext/ref/cls/shr/entity)         | [GetEntityInRaycast](#getentityinraycast) | float **distance**                                                                                  |
| [RayCastHit](/vext/ref/cls/shr/raycasthit) | [Raycast](#raycast)                       | [Vec3](/vext/ref/cls/shr/vec3) **from**, [Vec3](/vext/ref/cls/shr/vec3) **to**, int **flags** |
| [Entity](/vext/ref/cls/shr/entity)\[\]     | [SpatialRayCast](#spatialraycast)         | [Vec3](/vext/ref/cls/shr/vec3) **from**, [Vec3](/vext/ref/cls/shr/vec3) **to**, int **flags** |

### GetEntityInRaycast

> [Entity](/vext/ref/cls/shr/entity) **GetEntityInRaycast**(float **distance**)

#### Parameters

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| distance | float |             |

### Raycast

> [RayCastHit](/vext/ref/cls/shr/raycasthit) **Raycast**([Vec3](/vext/ref/cls/shr/vec3) **from**, [Vec3](/vext/ref/cls/shr/vec3) **to**, int **flags**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| from  | [Vec3](/vext/ref/cls/shr/vec3) |             |
| to    | [Vec3](/vext/ref/cls/shr/vec3) |             |
| flags | int                               |             |

#### Flags

| Name               | Description |
| ------------------ | ----------- |
| CheckDetailMesh    |             |
| DontCheckWater     |             |
| DontCheckTerrain   |             |
| DontCheckRagdoll   |             |
| DontCheckCharacter |             |
| DontCheckGroup     |             |
| DontCheckPhantoms  |             |

### SpatialRaycast

> [Entity](/vext/ref/cls/shr/entity)\[\] **SpatialRaycast**([Vec3](/vext/ref/cls/shr/vec3) **from**, [Vec3](/vext/ref/cls/shr/vec3) **to**, int **flags**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| from  | [Vec3](/vext/ref/cls/shr/vec3) |             |
| to    | [Vec3](/vext/ref/cls/shr/vec3) |             |
| flags | int                               |             |
