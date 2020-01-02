---
title: RegularSocketObjectData
---
### Base Classes

[SocketObjectData](SocketObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| RegularSocketObjectData()                                                          | Create a new instance of this container type.                                                                                         |
| RegularSocketObjectData(RegularSocketObjectData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| RegularSocketObjectData([SocketObjectData](SocketObjectData) other)                | Upcast an instance of type [SocketObjectData](SocketObjectData) to [RegularSocketObjectData](RegularSocketObjectData).                |
| RegularSocketObjectData([SocketObjectDataBase](SocketObjectDataBase) other)        | Upcast an instance of type [SocketObjectDataBase](SocketObjectDataBase) to [RegularSocketObjectData](RegularSocketObjectData).        |
| RegularSocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RegularSocketObjectData](RegularSocketObjectData). |

## Properties

| Name             | Type                                                        | Description |
| ---------------- | ----------------------------------------------------------- | ----------- |
| transform        | [LinearTransform](/vext/ref/shared/class/LinearTransform)     |             |
| mesh3pTransforms | [LinearTransform](/vext/ref/shared/class/LinearTransform)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RegularSocketObjectData](RegularSocketObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RegularSocketObjectData](RegularSocketObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
