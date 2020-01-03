---
title: CharacterWeaponComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| CharacterWeaponComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| CharacterWeaponComponentData(CharacterWeaponComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| CharacterWeaponComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata/).                      |
| CharacterWeaponComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata/).                    |
| CharacterWeaponComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata/).              |
| CharacterWeaponComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata/). |

## Properties

| Name                   | Type                                             | Description |
| ---------------------- | ------------------------------------------------ | ----------- |
| defaultWeaponBlueprint | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint/) |             |
| aimBoneName            | string                                           |             |
| weaponSkeleton         | [SkeletonAsset](/vext/ref/fb/skeletonasset/)                   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterWeaponComponentData](/vext/ref/fb/characterweaponcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
