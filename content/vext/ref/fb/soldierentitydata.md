---
title: SoldierEntityData
---
### Base Classes

[CharacterEntityData](/vext/ref/fb/characterentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SoldierEntityData()                                                          | Create a new instance of this container type.                                                                             |
| SoldierEntityData(SoldierEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SoldierEntityData([CharacterEntityData](/vext/ref/fb/characterentitydata/) other)          | Upcast an instance of type [CharacterEntityData](/vext/ref/fb/characterentitydata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).          |
| SoldierEntityData([ControllableEntityData](/vext/ref/fb/controllableentitydata/) other)    | Upcast an instance of type [ControllableEntityData](/vext/ref/fb/controllableentitydata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).    |
| SoldierEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).      |
| SoldierEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).                    |
| SoldierEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).              |
| SoldierEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).                            |
| SoldierEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).                    |
| SoldierEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/).              |
| SoldierEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEntityData](/vext/ref/fb/soldierentitydata/). |

## Properties

| Name                      | Type                                                             | Description |
| ------------------------- | ---------------------------------------------------------------- | ----------- |
| flirKeyColor              | [Vec3](/vext/ref/shared/class/vec3)                                |             |
| headMaterialPair          | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/)                   |             |
| boneFakePhysics           | [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata/)\[\]                   |             |
| autoAim                   | [SoldierAutoAimData](/vext/ref/fb/soldierautoaimdata/)                         |             |
| aimingConstraints         | [SoldierAimingConstraintsData](/vext/ref/fb/soldieraimingconstraintsdata/)     |             |
| headCollision             | [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata/)             |             |
| characterPhysics          | [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata/)                     |             |
| footMaterialPair          | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/)                   |             |
| sprintSettings            | [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata/)           |             |
| meshes1p                  | [SoldierMeshData](/vext/ref/fb/soldiermeshdata/)\[\]                           |             |
| meshes3p                  | [SoldierMeshData](/vext/ref/fb/soldiermeshdata/)\[\]                           |             |
| hidableMeshParts          | [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart/)\[\] |             |
| sound                     | [SoldierSoundData](/vext/ref/fb/soldiersounddata/)                             |             |
| streamGroup1p             | [StreamGroupData](/vext/ref/fb/streamgroupdata/)                               |             |
| impulseReactionTime       | number                                                           |             |
| healthModule              | [SoldierHealthModuleData](/vext/ref/fb/soldierhealthmoduledata/)               |             |
| maxHealth                 | number                                                           |             |
| collisionInfo             | [CollisionData](/vext/ref/fb/collisiondata/)                                   |             |
| voiceOverInfo             | [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo/)                       |             |
| flirValue                 | number                                                           |             |
| breathControl             | [BreathControlData](/vext/ref/fb/breathcontroldata/)\[\]                       |             |
| explosionDamageModifier   | number                                                           |             |
| uiParts                   | [UIPartData](/vext/ref/fb/uipartdata/)\[\]                                     |             |
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
| [SoldierEntityData](/vext/ref/fb/soldierentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierEntityData](/vext/ref/fb/soldierentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
