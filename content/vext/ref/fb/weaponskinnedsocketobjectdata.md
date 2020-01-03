---
title: WeaponSkinnedSocketObjectData
---
### Base Classes

[WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponSkinnedSocketObjectData()                                                          | Create a new instance of this container type.                                                                                                     |
| WeaponSkinnedSocketObjectData(WeaponSkinnedSocketObjectData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| WeaponSkinnedSocketObjectData([WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/) other)    | Upcast an instance of type [WeaponSocketObjectData](/vext/ref/fb/weaponsocketobjectdata/) to [WeaponSkinnedSocketObjectData](/vext/ref/fb/weaponskinnedsocketobjectdata/).    |
| WeaponSkinnedSocketObjectData([SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) other)        | Upcast an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) to [WeaponSkinnedSocketObjectData](/vext/ref/fb/weaponskinnedsocketobjectdata/).        |
| WeaponSkinnedSocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponSkinnedSocketObjectData](/vext/ref/fb/weaponskinnedsocketobjectdata/). |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponSkinnedSocketObjectData](/vext/ref/fb/weaponskinnedsocketobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponSkinnedSocketObjectData](/vext/ref/fb/weaponskinnedsocketobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
