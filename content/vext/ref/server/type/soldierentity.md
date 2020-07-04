---
title: SoldierEntity
---

Inherits from [ControllableEntity](/vext/ref/server/type/controllableentity)

## Summary

### Constructors

|  |
| --- |
| **[SoldierEntity](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[SoldierEntity](#constructor-1)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[SoldierEntity](#constructor-2)**(other: [GameEntity](/vext/ref/server/type/gameentity)) |
| **[SoldierEntity](#constructor-3)**(other: [PhysicsEntity](/vext/ref/server/type/physicsentity)) |
| **[SoldierEntity](#constructor-4)**(other: [ControllableEntity](/vext/ref/server/type/controllableentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "worldTransform" true >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "player" true >}} | [Player](/vext/ref/server/type/player) \| nil |
| {{< prop "detailedCollisionEnabled" >}} | bool |
| {{< prop "physicsEnabled" >}} | bool |
| {{< prop "forceInvisible" >}} | bool |
| {{< prop "aimingEnabled" >}} | bool |
| {{< prop "maxHealth" >}} | float |
| {{< prop "waterLevel" >}} | float |
| {{< prop "isManDown" true >}} | bool |
| {{< prop "isAlive" true >}} | bool |
| {{< prop "isDead" true >}} | bool |
| {{< prop "isDying" true >}} | bool |
| {{< prop "isInteractiveManDown" true >}} | bool |
| {{< prop "isFiring" true >}} | bool |
| {{< prop "isReloading" true >}} | bool |
| {{< prop "health" >}} | float |
| {{< prop "weaponsComponent" true >}} | [SoldierWeaponsComponent](/vext/ref/server/type/soldierweaponscomponent) |
| {{< prop "pose" true >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |
| {{< prop "pendingPose" >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[SetPosition](#setposition)**(position: [Vec3](/vext/ref/shared/type/vec3)) | void |
| **[Kill](#kill)**() | void |
| **[ApplyCustomization](#applycustomization)**(customizationData: [DataContainer](/vext/ref/shared/type/datacontainer)) | void |
| **[ForceDead](#forcedead)**() | void |
| **[SingleStepEntry](#singlestepentry)**(entryId: int) | void |
| **[SetPose](#setpose)**(pose: [CharacterPoseType](/vext/ref/fb/characterposetype), immediately: bool, overridePending: bool) | void |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [SoldierEntity](/vext/ref/server/type/soldierentity) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierEntity {#constructor-0}

> **SoldierEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### SoldierEntity {#constructor-1}

> **SoldierEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### SoldierEntity {#constructor-2}

> **SoldierEntity**(other: [GameEntity](/vext/ref/server/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/server/type/gameentity) |  |

### SoldierEntity {#constructor-3}

> **SoldierEntity**(other: [PhysicsEntity](/vext/ref/server/type/physicsentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsEntity](/vext/ref/server/type/physicsentity) |  |

### SoldierEntity {#constructor-4}

> **SoldierEntity**(other: [ControllableEntity](/vext/ref/server/type/controllableentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ControllableEntity](/vext/ref/server/type/controllableentity) |  |

## Properties

### {{% prop-heading "worldTransform" true %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "player" true %}}

> **[Player](/vext/ref/server/type/player)** \| **nil**

### {{% prop-heading "detailedCollisionEnabled" %}}

> **bool**

### {{% prop-heading "physicsEnabled" %}}

> **bool**

### {{% prop-heading "forceInvisible" %}}

> **bool**

### {{% prop-heading "aimingEnabled" %}}

> **bool**

### {{% prop-heading "maxHealth" %}}

> **float**

### {{% prop-heading "waterLevel" %}}

> **float**

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

### {{% prop-heading "health" %}}

> **float**

### {{% prop-heading "weaponsComponent" true %}}

> **[SoldierWeaponsComponent](/vext/ref/server/type/soldierweaponscomponent)**

### {{% prop-heading "pose" true %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

### {{% prop-heading "pendingPose" %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

## Methods

### SetPosition {#setposition}

> **SetPosition**(position: [Vec3](/vext/ref/shared/type/vec3))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **position** | [Vec3](/vext/ref/shared/type/vec3) |  |

### Kill {#kill}

> **Kill**()

### ApplyCustomization {#applycustomization}

> **ApplyCustomization**(customizationData: [DataContainer](/vext/ref/shared/type/datacontainer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **customizationData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |

### ForceDead {#forcedead}

> **ForceDead**()

### SingleStepEntry {#singlestepentry}

> **SingleStepEntry**(entryId: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entryId** | int |  |

### SetPose {#setpose}

> **SetPose**(pose: [CharacterPoseType](/vext/ref/fb/characterposetype), immediately: bool, overridePending: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **pose** | [CharacterPoseType](/vext/ref/fb/characterposetype) |  |
| **immediately** | bool |  |
| **overridePending** | bool |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [SoldierEntity](/vext/ref/server/type/soldierentity)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [SoldierEntity](/vext/ref/server/type/soldierentity) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

