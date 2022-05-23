---
title: SoldierEntity
---

Inherits from [ControllableEntity](/vext/ref/client/type/controllableentity)

## Summary

### Constructors

|  |
| --- |
| **[SoldierEntity](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |
| **[SoldierEntity](#constructor-1)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[SoldierEntity](#constructor-2)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[SoldierEntity](#constructor-3)**(other: [GameEntity](/vext/ref/client/type/gameentity)) |
| **[SoldierEntity](#constructor-4)**(other: [PhysicsEntity](/vext/ref/client/type/physicsentity)) |
| **[SoldierEntity](#constructor-5)**(other: [ControllableEntity](/vext/ref/client/type/controllableentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "worldTransform" true >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "alive" true >}} | bool |
| {{< prop "deathTimer" true >}} | float |
| {{< prop "player" true >}} | [Player](/vext/ref/client/type/player) \| nil |
| {{< prop "health" true >}} | float |
| {{< prop "authoritativeYaw" >}} | float |
| {{< prop "authoritativePitch" >}} | float |
| {{< prop "aimingEnable" >}} | bool |
| {{< prop "forceInvisible" >}} | bool |
| {{< prop "sprintRecoveryTimer" >}} | float |
| {{< prop "wasSprinting" >}} | bool |
| {{< prop "weaponsComponent" true >}} | [SoldierWeaponsComponent](/vext/ref/client/type/soldierweaponscomponent) |
| {{< prop "ragdollComponent" true >}} | [RagdollComponent](/vext/ref/client/type/ragdollcomponent) |
| {{< prop "isManDown" true >}} | bool |
| {{< prop "isAlive" true >}} | bool |
| {{< prop "isDead" true >}} | bool |
| {{< prop "isDying" true >}} | bool |
| {{< prop "isInteractiveManDown" true >}} | bool |
| {{< prop "isFiring" true >}} | bool |
| {{< prop "isReloading" true >}} | bool |
| {{< prop "pose" true >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |
| {{< prop "pendingPose" true >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[SetPosition](#setposition)**(position: [Vec3](/vext/ref/shared/type/vec3)) | void |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [SoldierEntity](/vext/ref/client/type/soldierentity) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierEntity {#constructor-0}

> **SoldierEntity**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

### SoldierEntity {#constructor-1}

> **SoldierEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### SoldierEntity {#constructor-2}

> **SoldierEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### SoldierEntity {#constructor-3}

> **SoldierEntity**(other: [GameEntity](/vext/ref/client/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/client/type/gameentity) |  |

### SoldierEntity {#constructor-4}

> **SoldierEntity**(other: [PhysicsEntity](/vext/ref/client/type/physicsentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsEntity](/vext/ref/client/type/physicsentity) |  |

### SoldierEntity {#constructor-5}

> **SoldierEntity**(other: [ControllableEntity](/vext/ref/client/type/controllableentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ControllableEntity](/vext/ref/client/type/controllableentity) |  |

## Properties

### {{% prop-heading "worldTransform" true %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "alive" true %}}

> **bool**

### {{% prop-heading "deathTimer" true %}}

> **float**

### {{% prop-heading "player" true %}}

> **[Player](/vext/ref/client/type/player)** \| **nil**

### {{% prop-heading "health" true %}}

> **float**

### {{% prop-heading "authoritativeYaw" %}}

> **float**

### {{% prop-heading "authoritativePitch" %}}

> **float**

### {{% prop-heading "aimingEnable" %}}

> **bool**

### {{% prop-heading "forceInvisible" %}}

> **bool**

### {{% prop-heading "sprintRecoveryTimer" %}}

> **float**

### {{% prop-heading "wasSprinting" %}}

> **bool**

### {{% prop-heading "weaponsComponent" true %}}

> **[SoldierWeaponsComponent](/vext/ref/client/type/soldierweaponscomponent)**

### {{% prop-heading "ragdollComponent" true %}}

> **[RagdollComponent](/vext/ref/client/type/ragdollcomponent)**

### {{% prop-heading "isManDown" true %}}

> **bool**

### {{% prop-heading "isAlive" true %}}

> **bool**

### {{% prop-heading "isDead" true %}}

> **bool**

### {{% prop-heading "isDying" true %}}

> **bool**

### {{% prop-heading "isInteractiveManDown" true %}}

> **bool**

### {{% prop-heading "isFiring" true %}}

> **bool**

### {{% prop-heading "isReloading" true %}}

> **bool**

### {{% prop-heading "pose" true %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

### {{% prop-heading "pendingPose" true %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

## Methods

### SetPosition {#setposition}

> **SetPosition**(position: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **position** | [Vec3](/vext/ref/shared/type/vec3) |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [SoldierEntity](/vext/ref/client/type/soldierentity)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [SoldierEntity](/vext/ref/client/type/soldierentity) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

