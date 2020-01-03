---
title: RawFileResourceAsset
---
### Base Classes

[RawFileAsset](/vext/ref/fb/rawfileasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RawFileResourceAsset()                                                          | Create a new instance of this container type.                                                                                   |
| RawFileResourceAsset(RawFileResourceAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| RawFileResourceAsset([RawFileAsset](/vext/ref/fb/rawfileasset/) other)                        | Upcast an instance of type [RawFileAsset](/vext/ref/fb/rawfileasset/) to [RawFileResourceAsset](/vext/ref/fb/rawfileresourceasset/).                        |
| RawFileResourceAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RawFileResourceAsset](/vext/ref/fb/rawfileresourceasset/).                                      |
| RawFileResourceAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RawFileResourceAsset](/vext/ref/fb/rawfileresourceasset/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [RawFileResourceAsset](/vext/ref/fb/rawfileresourceasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RawFileResourceAsset](/vext/ref/fb/rawfileresourceasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
