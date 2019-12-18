---
title: SkinnedSocketObjectData (Frostbite Container)
---
### Base Classes

[SocketObjectData](SocketObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| SkinnedSocketObjectData()                                                          | Create a new instance of this container type.                                                                                         |
| SkinnedSocketObjectData(SkinnedSocketObjectData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| SkinnedSocketObjectData([SocketObjectData](SocketObjectData) other)                | Upcast an instance of type [SocketObjectData](SocketObjectData) to [SkinnedSocketObjectData](SkinnedSocketObjectData).                |
| SkinnedSocketObjectData([SocketObjectDataBase](SocketObjectDataBase) other)        | Upcast an instance of type [SocketObjectDataBase](SocketObjectDataBase) to [SkinnedSocketObjectData](SkinnedSocketObjectData).        |
| SkinnedSocketObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SkinnedSocketObjectData](SkinnedSocketObjectData). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| faceposerLibraryIndex | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SkinnedSocketObjectData](SkinnedSocketObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SkinnedSocketObjectData](SkinnedSocketObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
