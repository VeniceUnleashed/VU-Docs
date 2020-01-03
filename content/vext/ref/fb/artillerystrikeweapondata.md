---
title: ArtilleryStrikeWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ArtilleryStrikeWeaponData()                                                          | Create a new instance of this container type.                                                                                             |
| ArtilleryStrikeWeaponData(ArtilleryStrikeWeaponData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ArtilleryStrikeWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [ArtilleryStrikeWeaponData](ArtilleryStrikeWeaponData).                            |
| ArtilleryStrikeWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [ArtilleryStrikeWeaponData](ArtilleryStrikeWeaponData).                                |
| ArtilleryStrikeWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArtilleryStrikeWeaponData](ArtilleryStrikeWeaponData). |

## Properties

| Name                            | Type                                 | Description |
| ------------------------------- | ------------------------------------ | ----------- |
| maxStrikeDistance               | number                               |             |
| strikeRadius                    | number                               |             |
| spawnHeight                     | number                               |             |
| maxRandomSpawnHeight            | number                               |             |
| strikeCameraOffset              | number                               |             |
| spawnHeightMultiplier           | number                               |             |
| camera                          | [TargetCameraData](TargetCameraData) |             |
| aimingCameraHeight              | number                               |             |
| strikeCameraHeight              | number                               |             |
| aimingCameraOffset              | number                               |             |
| strikeCameraFov                 | number                               |             |
| aimingCameraFov                 | number                               |             |
| delayBeforeAimingCamera         | number                               |             |
| validMinDistance                | number                               |             |
| fireCameraTime                  | number                               |             |
| strikeCameraTime                | number                               |             |
| validMaxDistance                | number                               |             |
| validMaxAngle                   | number                               |             |
| increaseSpawnHeightWithDistance | bool                                 |             |
| enableProjectileTrails          | bool                                 |             |
| enableCameraRotation            | bool                                 |             |
| fireProjectileFromWeapon        | bool                                 |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ArtilleryStrikeWeaponData](ArtilleryStrikeWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ArtilleryStrikeWeaponData](ArtilleryStrikeWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
