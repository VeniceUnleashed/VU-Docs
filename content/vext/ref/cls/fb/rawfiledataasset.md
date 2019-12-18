---
title: RawFileDataAsset (Frostbite Container)
---
### Base Classes

[RawFileAsset](RawFileAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RawFileDataAsset()                                                          | Create a new instance of this container type.                                                                           |
| RawFileDataAsset(RawFileDataAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RawFileDataAsset([RawFileAsset](RawFileAsset) other)                        | Upcast an instance of type [RawFileAsset](RawFileAsset) to [RawFileDataAsset](RawFileDataAsset).                        |
| RawFileDataAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RawFileDataAsset](RawFileDataAsset).                                      |
| RawFileDataAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RawFileDataAsset](RawFileDataAsset). |

## Properties

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| rawData | number\[\] |             |
| size    | number     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RawFileDataAsset](RawFileDataAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RawFileDataAsset](RawFileDataAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
