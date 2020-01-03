---
title: AntPackageAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AntPackageAsset()                                                          | Create a new instance of this container type.                                                                         |
| AntPackageAsset(AntPackageAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AntPackageAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AntPackageAsset](/vext/ref/fb/antpackageasset/).                                      |
| AntPackageAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntPackageAsset](/vext/ref/fb/antpackageasset/). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| win32FileName | string                               |             |
| xePs3FileName | string                               |             |
| packagingType | [AntPackagingType](/vext/ref/fb/antpackagingtype/) |             |
| streamingGuid | [Guid](/vext/ref/shared/class/guid)    |             |
| chunkSize     | number                               |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AntPackageAsset](/vext/ref/fb/antpackageasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntPackageAsset](/vext/ref/fb/antpackageasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
