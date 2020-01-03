---
title: WeaponFiringDataAsset
---
### Base Classes

[GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringDataAsset()                                                          | Create a new instance of this container type.                                                                                     |
| WeaponFiringDataAsset(WeaponFiringDataAsset other)                               | Create a reference copy of an instance of the same type.                                                                          |
| WeaponFiringDataAsset([GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/) other)    | Upcast an instance of type [GameDataContainerAsset](/vext/ref/fb/gamedatacontainerasset/) to [WeaponFiringDataAsset](/vext/ref/fb/weaponfiringdataasset/).    |
| WeaponFiringDataAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [WeaponFiringDataAsset](/vext/ref/fb/weaponfiringdataasset/).                                      |
| WeaponFiringDataAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponFiringDataAsset](/vext/ref/fb/weaponfiringdataasset/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponFiringDataAsset](/vext/ref/fb/weaponfiringdataasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponFiringDataAsset](/vext/ref/fb/weaponfiringdataasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
