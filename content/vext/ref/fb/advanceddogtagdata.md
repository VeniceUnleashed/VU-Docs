---
title: AdvancedDogTagData
---
### Base Classes

[DogTagData](DogTagData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AdvancedDogTagData()                                                          | Create a new instance of this container type.                                                                               |
| AdvancedDogTagData(AdvancedDogTagData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AdvancedDogTagData([DogTagData](DogTagData) other)                            | Upcast an instance of type [DogTagData](DogTagData) to [AdvancedDogTagData](AdvancedDogTagData).                            |
| AdvancedDogTagData([UnlockAssetBase](UnlockAssetBase) other)                  | Upcast an instance of type [UnlockAssetBase](UnlockAssetBase) to [AdvancedDogTagData](AdvancedDogTagData).                  |
| AdvancedDogTagData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AdvancedDogTagData](AdvancedDogTagData).                                      |
| AdvancedDogTagData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AdvancedDogTagData](AdvancedDogTagData). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| statCode             | string |             |
| statSID              | string |             |
| isStatMeasuredInTime | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AdvancedDogTagData](AdvancedDogTagData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AdvancedDogTagData](AdvancedDogTagData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
