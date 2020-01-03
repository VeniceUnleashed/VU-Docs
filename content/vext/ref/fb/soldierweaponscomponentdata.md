---
title: SoldierWeaponsComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponsComponentData()                                                          | Create a new instance of this container type.                                                                                                 |
| SoldierWeaponsComponentData(SoldierWeaponsComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SoldierWeaponsComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata/).                      |
| SoldierWeaponsComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata/).                    |
| SoldierWeaponsComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata/).              |
| SoldierWeaponsComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata/). |

## Properties

| Name                        | Type                                                       | Description |
| --------------------------- | ---------------------------------------------------------- | ----------- |
| aimDir                      | [LinearTransform](/vext/ref/shared/class/lineartransform)    |             |
| weaponSkeleton              | [SkeletonAsset](/vext/ref/fb/skeletonasset/)                             |             |
| primaryWeaponId             | number                                                     |             |
| animatedWeaponBinding       | [AnimatedWeaponBinding](/vext/ref/fb/animatedweaponbinding/)             |             |
| animated1pOnlyWeaponBinding | [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding/) |             |
| animated3pOnlyWeaponBinding | [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding/) |             |
| lockTimeMultiplier          | number                                                     |             |
| grenadeIncrease             | number                                                     |             |
| ammoClipIncreaseMultiplier  | number                                                     |             |
| explosiveIncreaseMultiplier | number                                                     |             |
| underslungGrenadeIncrease   | number                                                     |             |
| useExternalAimDir           | bool                                                       |             |
| unlimitedAmmo               | bool                                                       |             |
| unlimitedMags               | bool                                                       |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponsComponentData](/vext/ref/fb/soldierweaponscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
