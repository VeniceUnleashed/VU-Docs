---
title: SkinnedSocketObjectData
---
### Base Classes

[SocketObjectData](/vext/ref/fb/socketobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SkinnedSocketObjectData()                                                          | Create a new instance of this container type.                                                                                         |
| SkinnedSocketObjectData(SkinnedSocketObjectData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SkinnedSocketObjectData([SocketObjectData](/vext/ref/fb/socketobjectdata/) other)                | Upcast an instance of type [SocketObjectData](/vext/ref/fb/socketobjectdata/) to [SkinnedSocketObjectData](/vext/ref/fb/skinnedsocketobjectdata/).                |
| SkinnedSocketObjectData([SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) other)        | Upcast an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) to [SkinnedSocketObjectData](/vext/ref/fb/skinnedsocketobjectdata/).        |
| SkinnedSocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SkinnedSocketObjectData](/vext/ref/fb/skinnedsocketobjectdata/). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| faceposerLibraryIndex | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SkinnedSocketObjectData](/vext/ref/fb/skinnedsocketobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SkinnedSocketObjectData](/vext/ref/fb/skinnedsocketobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
