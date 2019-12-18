---
title: WeaponFiringDataAsset (Frostbite Container)
---
### Base Classes

[GameDataContainerAsset](GameDataContainerAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringDataAsset()                                                          | Create a new instance of this container type.                                                                                     |
| WeaponFiringDataAsset(WeaponFiringDataAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| WeaponFiringDataAsset([GameDataContainerAsset](GameDataContainerAsset) other)    | Upcast an instance of type [GameDataContainerAsset](GameDataContainerAsset) to [WeaponFiringDataAsset](WeaponFiringDataAsset).    |
| WeaponFiringDataAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [WeaponFiringDataAsset](WeaponFiringDataAsset).                                      |
| WeaponFiringDataAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponFiringDataAsset](WeaponFiringDataAsset). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponFiringDataAsset](WeaponFiringDataAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponFiringDataAsset](WeaponFiringDataAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
