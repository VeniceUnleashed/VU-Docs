---
title: ExplosionEntity
---

Inherits from [GameEntity](/vext/ref/server/type/gameentity)

## Summary

### Constructors

|  |
| --- |
| **[ExplosionEntity](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[ExplosionEntity](#constructor-1)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[ExplosionEntity](#constructor-2)**(other: [GameEntity](/vext/ref/server/type/gameentity)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Detonate](#detonate)**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform), impactNormal: [Vec3](/vext/ref/shared/type/vec3), damageMultiplier: float, shooterPlayer: [Player](/vext/ref/server/type/player) \| nil) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ExplosionEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ExplosionEntity {#constructor-0}

> **ExplosionEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### ExplosionEntity {#constructor-1}

> **ExplosionEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### ExplosionEntity {#constructor-2}

> **ExplosionEntity**(other: [GameEntity](/vext/ref/server/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/server/type/gameentity) |  |

## Methods

### Detonate {#detonate}

> **Detonate**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform), impactNormal: [Vec3](/vext/ref/shared/type/vec3), damageMultiplier: float, shooterPlayer: [Player](/vext/ref/server/type/player) \| nil)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **impactNormal** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **damageMultiplier** | float |  |
| **shooterPlayer** | [Player](/vext/ref/server/type/player) \| nil |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

