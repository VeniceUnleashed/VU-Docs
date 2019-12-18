---
title: WeaponSocketObjectData (Frostbite Container)
---
### Base Classes

[SocketObjectDataBase](SocketObjectDataBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponSocketObjectData()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponSocketObjectData(WeaponSocketObjectData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponSocketObjectData([SocketObjectDataBase](SocketObjectDataBase) other)        | Upcast an instance of type [SocketObjectDataBase](SocketObjectDataBase) to [WeaponSocketObjectData](WeaponSocketObjectData).        |
| WeaponSocketObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponSocketObjectData](WeaponSocketObjectData). |

## Properties

| Name                  | Type           | Description |
| --------------------- | -------------- | ----------- |
| referencedAssetHashes | number\[\]     |             |
| asset1p               | [Asset](Asset) |             |
| asset1pzoom           | [Asset](Asset) |             |
| asset3p               | [Asset](Asset) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponSocketObjectData](WeaponSocketObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponSocketObjectData](WeaponSocketObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
