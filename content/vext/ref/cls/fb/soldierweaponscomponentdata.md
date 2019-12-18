---
title: SoldierWeaponsComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponsComponentData()                                                          | Create a new instance of this container type.                                                                                                 |
| SoldierWeaponsComponentData(SoldierWeaponsComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SoldierWeaponsComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierWeaponsComponentData](SoldierWeaponsComponentData).                      |
| SoldierWeaponsComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierWeaponsComponentData](SoldierWeaponsComponentData).                    |
| SoldierWeaponsComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierWeaponsComponentData](SoldierWeaponsComponentData).              |
| SoldierWeaponsComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierWeaponsComponentData](SoldierWeaponsComponentData). |

## Properties

| Name                        | Type                                                       | Description |
| --------------------------- | ---------------------------------------------------------- | ----------- |
| aimDir                      | [LinearTransform](/vext/ref/cls/shr/LinearTransform)    |             |
| weaponSkeleton              | [SkeletonAsset](SkeletonAsset)                             |             |
| primaryWeaponId             | number                                                     |             |
| animatedWeaponBinding       | [AnimatedWeaponBinding](AnimatedWeaponBinding)             |             |
| animated1pOnlyWeaponBinding | [Animated1pOnlyWeaponBinding](Animated1pOnlyWeaponBinding) |             |
| animated3pOnlyWeaponBinding | [Animated3pOnlyWeaponBinding](Animated3pOnlyWeaponBinding) |             |
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
| [SoldierWeaponsComponentData](SoldierWeaponsComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierWeaponsComponentData](SoldierWeaponsComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
