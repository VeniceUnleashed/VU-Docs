---
title: SoldierEntityData (Frostbite Container)
---
### Base Classes

[CharacterEntityData](CharacterEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SoldierEntityData()                                                          | Create a new instance of this container type.                                                                             |
| SoldierEntityData(SoldierEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SoldierEntityData([CharacterEntityData](CharacterEntityData) other)          | Upcast an instance of type [CharacterEntityData](CharacterEntityData) to [SoldierEntityData](SoldierEntityData).          |
| SoldierEntityData([ControllableEntityData](ControllableEntityData) other)    | Upcast an instance of type [ControllableEntityData](ControllableEntityData) to [SoldierEntityData](SoldierEntityData).    |
| SoldierEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [SoldierEntityData](SoldierEntityData).      |
| SoldierEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [SoldierEntityData](SoldierEntityData).                    |
| SoldierEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SoldierEntityData](SoldierEntityData).              |
| SoldierEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SoldierEntityData](SoldierEntityData).                            |
| SoldierEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierEntityData](SoldierEntityData).                    |
| SoldierEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierEntityData](SoldierEntityData).              |
| SoldierEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierEntityData](SoldierEntityData). |

## Properties

| Name                      | Type                                                             | Description |
| ------------------------- | ---------------------------------------------------------------- | ----------- |
| flirKeyColor              | [Vec3](/vext/ref/cls/shr/Vec3)                                |             |
| headMaterialPair          | [MaterialContainerPair](MaterialContainerPair)                   |             |
| boneFakePhysics           | [BoneFakePhysicsData](BoneFakePhysicsData)\[\]                   |             |
| autoAim                   | [SoldierAutoAimData](SoldierAutoAimData)                         |             |
| aimingConstraints         | [SoldierAimingConstraintsData](SoldierAimingConstraintsData)     |             |
| headCollision             | [SoldierHeadCollisionData](SoldierHeadCollisionData)             |             |
| characterPhysics          | [CharacterPhysicsData](CharacterPhysicsData)                     |             |
| footMaterialPair          | [MaterialContainerPair](MaterialContainerPair)                   |             |
| sprintSettings            | [SoldierSprintSettingsData](SoldierSprintSettingsData)           |             |
| meshes1p                  | [SoldierMeshData](SoldierMeshData)\[\]                           |             |
| meshes3p                  | [SoldierMeshData](SoldierMeshData)\[\]                           |             |
| hidableMeshParts          | [HidableSoldierMeshWeaponPart](HidableSoldierMeshWeaponPart)\[\] |             |
| sound                     | [SoldierSoundData](SoldierSoundData)                             |             |
| streamGroup1p             | [StreamGroupData](StreamGroupData)                               |             |
| impulseReactionTime       | number                                                           |             |
| healthModule              | [SoldierHealthModuleData](SoldierHealthModuleData)               |             |
| maxHealth                 | number                                                           |             |
| collisionInfo             | [CollisionData](CollisionData)                                   |             |
| voiceOverInfo             | [EntityVoiceOverInfo](EntityVoiceOverInfo)                       |             |
| flirValue                 | number                                                           |             |
| breathControl             | [BreathControlData](BreathControlData)\[\]                       |             |
| explosionDamageModifier   | number                                                           |             |
| uiParts                   | [UIPartData](UIPartData)\[\]                                     |             |
| regenerationDelayModifier | number                                                           |             |
| freeSpaceCheck            | bool                                                             |             |
| proximityCheck            | bool                                                             |             |
| enableGroundmapLighting   | bool                                                             |             |
| showWeaponWhenDead        | bool                                                             |             |
| lowerGunOnOwnTeam         | bool                                                             |             |
| useSpineXRotation         | bool                                                             |             |
| collisionEnabled          | bool                                                             |             |
| physicsControlled         | bool                                                             |             |
| isPushable                | bool                                                             |             |
| humanPlayerControlled     | bool                                                             |             |
| interactiveManDownAllowed | bool                                                             |             |
| showNametag               | bool                                                             |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierEntityData](SoldierEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierEntityData](SoldierEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
