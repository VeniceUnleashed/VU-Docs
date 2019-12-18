---
title: MeshLodGroup (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| MeshLodGroup()                                                          | Create a new instance of this container type.                                                                   |
| MeshLodGroup(MeshLodGroup other)                                        | Create a reference copy of an instance of the same type.                                                        |
| MeshLodGroup([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MeshLodGroup](MeshLodGroup).                                      |
| MeshLodGroup([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MeshLodGroup](MeshLodGroup). |

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
| [MeshLodGroup](MeshLodGroup) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MeshLodGroup](MeshLodGroup) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
