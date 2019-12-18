---
title: CharacterWeaponComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterWeaponComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterWeaponComponentData(CharacterWeaponComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterWeaponComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [CharacterWeaponComponentData](CharacterWeaponComponentData).                      |
| CharacterWeaponComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CharacterWeaponComponentData](CharacterWeaponComponentData).                    |
| CharacterWeaponComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CharacterWeaponComponentData](CharacterWeaponComponentData).              |
| CharacterWeaponComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterWeaponComponentData](CharacterWeaponComponentData). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| defaultWeaponBlueprint | [SoldierWeaponBlueprint](SoldierWeaponBlueprint) |             |
| aimBoneName            | string                                           |             |
| weaponSkeleton         | [SkeletonAsset](SkeletonAsset)                   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterWeaponComponentData](CharacterWeaponComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterWeaponComponentData](CharacterWeaponComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
