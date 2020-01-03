---
title: RaycastManager
---
## Description

## Methods

| Type                                          | Name                                      | Parameters                                                                                          |
| --------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Entity](/vext/ref/shared/class/entity)         | [GetEntityInRaycast](#getentityinraycast) | float **distance**                                                                                  |
| [RayCastHit](/vext/ref/shared/class/raycasthit) | [Raycast](#raycast)                       | [Vec3](/vext/ref/shared/class/vec3) **from**, [Vec3](/vext/ref/shared/class/vec3) **to**, int **flags** |
| [Entity](/vext/ref/shared/class/entity)\[\]     | [SpatialRayCast](#spatialraycast)         | [Vec3](/vext/ref/shared/class/vec3) **from**, [Vec3](/vext/ref/shared/class/vec3) **to**, int **flags** |

### GetEntityInRaycast

> [Entity](/vext/ref/shared/class/entity) **GetEntityInRaycast**(float **distance**)

#### Parameters

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| distance | float |             |

### Raycast

> [RayCastHit](/vext/ref/shared/class/raycasthit) **Raycast**([Vec3](/vext/ref/shared/class/vec3) **from**, [Vec3](/vext/ref/shared/class/vec3) **to**, int **flags**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| from  | [Vec3](/vext/ref/shared/class/vec3) |             |
| to    | [Vec3](/vext/ref/shared/class/vec3) |             |
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

> [Entity](/vext/ref/shared/class/entity)\[\] **SpatialRaycast**([Vec3](/vext/ref/shared/class/vec3) **from**, [Vec3](/vext/ref/shared/class/vec3) **to**, int **flags**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| from  | [Vec3](/vext/ref/shared/class/vec3) |             |
| to    | [Vec3](/vext/ref/shared/class/vec3) |             |
| flags | int                               |             |
