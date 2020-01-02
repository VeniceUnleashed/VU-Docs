---
title: StreamPoolAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| StreamPoolAsset()                                                          | Create a new instance of this container type.                                                                         |
| StreamPoolAsset(StreamPoolAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| StreamPoolAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StreamPoolAsset](StreamPoolAsset).                                      |
| StreamPoolAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamPoolAsset](StreamPoolAsset). |

## Properties

| Name                     | Type                                 | Description |
| ------------------------ | ------------------------------------ | ----------- |
| streamPoolId             | number                               |             |
| streamBufferSizeXenon    | number                               |             |
| streamBufferSizePs3      | number                               |             |
| streamBufferSizeWin32    | number                               |             |
| streamCountXenon         | number                               |             |
| streamCountPs3           | number                               |             |
| streamCountWin32         | number                               |             |
| streamReadBlockSizeXenon | number                               |             |
| streamReadBlockSizePs3   | number                               |             |
| streamReadBlockSizeWin32 | number                               |             |
| streamStarveMode         | [StreamStarveMode](StreamStarveMode) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [StreamPoolAsset](StreamPoolAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StreamPoolAsset](StreamPoolAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
