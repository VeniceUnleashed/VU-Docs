---
title: HeightfieldTreeAsset (Frostbite Container)
---
### Base Classes

[RasterTreeAsset](RasterTreeAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| HeightfieldTreeAsset()                                                          | Create a new instance of this container type.                                                                                   |
| HeightfieldTreeAsset(HeightfieldTreeAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| HeightfieldTreeAsset([RasterTreeAsset](RasterTreeAsset) other)                  | Upcast an instance of type [RasterTreeAsset](RasterTreeAsset) to [HeightfieldTreeAsset](HeightfieldTreeAsset).                  |
| HeightfieldTreeAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [HeightfieldTreeAsset](HeightfieldTreeAsset). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| minHeightWidth          | number |             |
| minHeightSamplesPerSide | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [HeightfieldTreeAsset](HeightfieldTreeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [HeightfieldTreeAsset](HeightfieldTreeAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
