---
title: WeaponSocketObjectData
---
### Base Classes

[SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponSocketObjectData()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponSocketObjectData(WeaponSocketObjectData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponSocketObjectData([SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) other)        | Upcast an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) to [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/).        |
| WeaponSocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/). |

## Properties

| Name                  | Type           | Description |
| --------------------- | -------------- | ----------- |
| referencedAssetHashes | number\[\]     |             |
| asset1p               | [Asset](/vext/ref/fb/asset/) |             |
| asset1pzoom           | [Asset](/vext/ref/fb/asset/) |             |
| asset3p               | [Asset](/vext/ref/fb/asset/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
