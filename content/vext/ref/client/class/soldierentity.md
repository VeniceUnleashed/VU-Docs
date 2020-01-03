---
title: SoldierEntity
---
### Base Classes

[PhysicsEntity](/vext/ref/client/class/physicsentity)

## Description

## Constructors

| Constructor                                                                                        | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [SoldierEntity](/vext/ref/client/class/soldierentity)([Entity](/vext/ref/shared/class/entity) **ref**) |             |

## Static Members

| Type                                                    | Name                   | Description |
| ------------------------------------------------------- | ---------------------- | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | SoldierEntity.typeInfo |             |

## Properties

| Name                 | Type                                                                    | Writable | Description |
| -------------------- | ----------------------------------------------------------------------- | -------- | ----------- |
| worldTransform       | [LinearTransform](/vext/ref/shared/class/lineartransform)                 |          |             |
| alive                | bool                                                                    |          |             |
| deathTimer           | float                                                                   |          |             |
| player               | [Player](/vext/ref/client/class/player)                                   |          |             |
| health               | float                                                                   |          |             |
| authorativeYaw       | float                                                                   |          |             |
| authorativePitch     | float                                                                   |          |             |
| aimingEnable         | bool                                                                    |          |             |
| forceInvisible       | bool                                                                    |          |             |
| sprintRecoveryTimer  | float                                                                   |          |             |
| wasSprinting         | bool                                                                    |          |             |
| weaponsComponent     | [SoldierWeaponsComponent](/vext/ref/client/class/soldierweaponscomponent) |          |             |
| ragdollComponent     | [RagdollComponent](/vext/ref/client/class/ragdollcomponent)               |          |             |
| isManDown            | bool                                                                    |          |             |
| isAlive              | bool                                                                    |          |             |
| isDead               | bool                                                                    |          |             |
| isDying              | bool                                                                    |          |             |
| isInteractiveManDown | bool                                                                    |          |             |
| isFiring             | bool                                                                    |          |             |
| isReloading          | bool                                                                    |          |             |

## Operators

| Operator | Parameters                                                    |
| -------- | ------------------------------------------------------------- |
| \==      | [SoldierEntity](/vext/ref/client/class/soldierentity) **other** |

## Methods

| Type | Name                        | Parameters                                     |
| ---- | --------------------------- | ---------------------------------------------- |
| void | [SetPosition](#setposition) | [Vec3](/vext/ref/shared/class/vec3) **position** |

### SetPosition

> void **SetPosition**([Vec3](/vext/ref/shared/class/vec3) **position**)

#### Parameters

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/shared/class/vec3) |             |
