---
title: ImpulseResponseAsset
---
### Base Classes

[SoundDataAsset](SoundDataAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ImpulseResponseAsset()                                                          | Create a new instance of this container type.                                                                                   |
| ImpulseResponseAsset(ImpulseResponseAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ImpulseResponseAsset([SoundDataAsset](SoundDataAsset) other)                    | Upcast an instance of type [SoundDataAsset](SoundDataAsset) to [ImpulseResponseAsset](ImpulseResponseAsset).                    |
| ImpulseResponseAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ImpulseResponseAsset](ImpulseResponseAsset).                                      |
| ImpulseResponseAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ImpulseResponseAsset](ImpulseResponseAsset). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ImpulseResponseAsset](ImpulseResponseAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ImpulseResponseAsset](ImpulseResponseAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
