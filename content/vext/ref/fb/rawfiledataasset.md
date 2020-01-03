---
title: RawFileDataAsset
---
### Base Classes

[RawFileAsset](/vext/ref/fb/rawfileasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RawFileDataAsset()                                                          | Create a new instance of this container type.                                                                           |
| RawFileDataAsset(RawFileDataAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RawFileDataAsset([RawFileAsset](/vext/ref/fb/rawfileasset/) other)                        | Upcast an instance of type [RawFileAsset](/vext/ref/fb/rawfileasset/) to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset/).                        |
| RawFileDataAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset/).                                      |
| RawFileDataAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RawFileDataAsset](/vext/ref/fb/rawfiledataasset/). |

## Properties

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| rawData | number\[\] |             |
| size    | number     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RawFileDataAsset](/vext/ref/fb/rawfiledataasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RawFileDataAsset](/vext/ref/fb/rawfiledataasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
