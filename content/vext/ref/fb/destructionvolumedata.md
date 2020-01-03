---
title: DestructionVolumeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DestructionVolumeData()                                                          | Create a new instance of this container type.                                                                                     |
| DestructionVolumeData(DestructionVolumeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| DestructionVolumeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionVolumeData](DestructionVolumeData). |

## Properties

| Name                | Type                                                  | Description |
| ------------------- | ----------------------------------------------------- | ----------- |
| boundingBox         | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |             |
| asset               | [DestructionVolumeAsset](DestructionVolumeAsset)      |             |
| impacts             | [Vec4](/vext/ref/shared/class/vec4)\[\]                 |             |
| partToImpactIndices | number\[\]                                            |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionVolumeData](DestructionVolumeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionVolumeData](DestructionVolumeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
