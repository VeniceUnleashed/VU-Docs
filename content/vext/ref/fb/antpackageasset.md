---
title: AntPackageAsset
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
| AntPackageAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntPackageAsset](AntPackageAsset). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| win32FileName | string                               |             |
| xePs3FileName | string                               |             |
| packagingType | [AntPackagingType](AntPackagingType) |             |
| streamingGuid | [Guid](/vext/ref/shared/class/Guid)    |             |
| chunkSize     | number                               |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [AntPackageAsset](AntPackageAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntPackageAsset](AntPackageAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
