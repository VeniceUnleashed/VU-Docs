---
title: MeshLodGroup
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MeshLodGroup()                                                          | Create a new instance of this container type.                                                                   |
| MeshLodGroup(MeshLodGroup other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MeshLodGroup([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MeshLodGroup](/vext/ref/fb/meshlodgroup/).                                      |
| MeshLodGroup([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshLodGroup](/vext/ref/fb/meshlodgroup/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| lod1Distance   | number |             |
| lod2Distance   | number |             |
| lod3Distance   | number |             |
| lod4Distance   | number |             |
| lod5Distance   | number |             |
| shadowDistance | number |             |
| cullScreenArea | number |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [MeshLodGroup](/vext/ref/fb/meshlodgroup/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshLodGroup](/vext/ref/fb/meshlodgroup/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
