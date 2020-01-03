---
title: RegularSocketObjectData
---
### Base Classes

[SocketObjectData](/vext/ref/fb/socketobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| RegularSocketObjectData()                                                          | Create a new instance of this container type.                                                                                         |
| RegularSocketObjectData(RegularSocketObjectData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| RegularSocketObjectData([SocketObjectData](/vext/ref/fb/socketobjectdata/) other)                | Upcast an instance of type [SocketObjectData](/vext/ref/fb/socketobjectdata/) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata/).                |
| RegularSocketObjectData([SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) other)        | Upcast an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase/) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata/).        |
| RegularSocketObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata/). |

## Properties

| Name             | Type                                                        | Description |
| ---------------- | ----------------------------------------------------------- | ----------- |
| transform        | [LinearTransform](/vext/ref/shared/class/lineartransform)     |             |
| mesh3pTransforms | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
