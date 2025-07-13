---
title: ExplosionEntity
---

Inherits from [GameEntity](/vext/ref/server/type/gameentity)

## Summary

### Constructors

|  |
| --- |
| **[ExplosionEntity](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |
| **[ExplosionEntity](#constructor-1)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[ExplosionEntity](#constructor-2)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[ExplosionEntity](#constructor-3)**(other: [GameEntity](/vext/ref/server/type/gameentity)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Detonate](#detonate)**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform), impactNormal: [Vec3](/vext/ref/shared/type/vec3), origin: [Vec3](/vext/ref/shared/type/vec3), latency: float, damageMultiplier: float, externalDamageDirection: [Vec3](/vext/ref/shared/type/vec3), blastAngle: float) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ExplosionEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ExplosionEntity {#constructor-0}

> **ExplosionEntity**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

### ExplosionEntity {#constructor-1}

> **ExplosionEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### ExplosionEntity {#constructor-2}

> **ExplosionEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### ExplosionEntity {#constructor-3}

> **ExplosionEntity**(other: [GameEntity](/vext/ref/server/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/server/type/gameentity) |  |

## Methods

### Detonate {#detonate}

> **Detonate**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform), impactNormal: [Vec3](/vext/ref/shared/type/vec3), origin: [Vec3](/vext/ref/shared/type/vec3), latency: float, damageMultiplier: float, externalDamageDirection: [Vec3](/vext/ref/shared/type/vec3), blastAngle: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **impactNormal** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **origin** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **latency** | float |  |
| **damageMultiplier** | float |  |
| **externalDamageDirection** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **blastAngle** | float |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

