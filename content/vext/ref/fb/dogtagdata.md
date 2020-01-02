---
title: DogTagData
---
### Base Classes

[UnlockAssetBase](UnlockAssetBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| DogTagData()                                                          | Create a new instance of this container type.                                                               |
| DogTagData(DogTagData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| DogTagData([UnlockAssetBase](UnlockAssetBase) other)                  | Upcast an instance of type [UnlockAssetBase](UnlockAssetBase) to [DogTagData](DogTagData).                  |
| DogTagData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DogTagData](DogTagData).                                      |
| DogTagData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DogTagData](DogTagData). |

## Properties

| Name              | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| nameSID           | string                           |             |
| descriptionSID    | string                           |             |
| imageName         | string                           |             |
| smallImageName    | string                           |             |
| category          | [DogTagCategory](DogTagCategory) |             |
| invertText        | bool                             |             |
| isAlwaysAvailable | bool                             |             |
| excludedOnXenon   | bool                             |             |
| excludedOnPs3     | bool                             |             |
| excludedOnWin32   | bool                             |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [DogTagData](DogTagData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DogTagData](DogTagData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
