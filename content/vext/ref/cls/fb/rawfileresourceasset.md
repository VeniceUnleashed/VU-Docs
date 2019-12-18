---
title: RawFileResourceAsset (Frostbite Container)
---
### Base Classes

[RawFileAsset](RawFileAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RawFileResourceAsset()                                                          | Create a new instance of this container type.                                                                                   |
| RawFileResourceAsset(RawFileResourceAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| RawFileResourceAsset([RawFileAsset](RawFileAsset) other)                        | Upcast an instance of type [RawFileAsset](RawFileAsset) to [RawFileResourceAsset](RawFileResourceAsset).                        |
| RawFileResourceAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RawFileResourceAsset](RawFileResourceAsset).                                      |
| RawFileResourceAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RawFileResourceAsset](RawFileResourceAsset). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [RawFileResourceAsset](RawFileResourceAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RawFileResourceAsset](RawFileResourceAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
