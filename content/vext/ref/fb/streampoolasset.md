---
title: StreamPoolAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| StreamPoolAsset()                                                          | Create a new instance of this container type.                                                                         |
| StreamPoolAsset(StreamPoolAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| StreamPoolAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StreamPoolAsset](/vext/ref/fb/streampoolasset/).                                      |
| StreamPoolAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamPoolAsset](/vext/ref/fb/streampoolasset/). |

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
| streamStarveMode         | [StreamStarveMode](/vext/ref/fb/streamstarvemode/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [StreamPoolAsset](/vext/ref/fb/streampoolasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StreamPoolAsset](/vext/ref/fb/streampoolasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
