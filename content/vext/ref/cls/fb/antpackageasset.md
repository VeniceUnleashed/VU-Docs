---
title: AntPackageAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| AntPackageAsset()                                                          | Create a new instance of this container type.                                                                         |
| AntPackageAsset(AntPackageAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| AntPackageAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AntPackageAsset](AntPackageAsset).                                      |
| AntPackageAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AntPackageAsset](AntPackageAsset). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| win32FileName | string                               |             |
| xePs3FileName | string                               |             |
| packagingType | [AntPackagingType](AntPackagingType) |             |
| streamingGuid | [Guid](/vext/ref/cls/shr/Guid)    |             |
| chunkSize     | number                               |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AntPackageAsset](AntPackageAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AntPackageAsset](AntPackageAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
