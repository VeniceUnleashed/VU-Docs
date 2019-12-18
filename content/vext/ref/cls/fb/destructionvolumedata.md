---
title: DestructionVolumeData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DestructionVolumeData()                                                          | Create a new instance of this container type.                                                                                     |
| DestructionVolumeData(DestructionVolumeData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| DestructionVolumeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestructionVolumeData](DestructionVolumeData). |

## Properties

| Name                | Type                                                  | Description |
| ------------------- | ----------------------------------------------------- | ----------- |
| boundingBox         | [AxisAlignedBox](/vext/ref/cls/shr/AxisAlignedBox) |             |
| asset               | [DestructionVolumeAsset](DestructionVolumeAsset)      |             |
| impacts             | [Vec4](/vext/ref/cls/shr/Vec4)\[\]                 |             |
| partToImpactIndices | number\[\]                                            |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestructionVolumeData](DestructionVolumeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestructionVolumeData](DestructionVolumeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
