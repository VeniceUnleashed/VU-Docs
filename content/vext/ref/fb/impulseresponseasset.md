---
title: ImpulseResponseAsset
---
### Base Classes

[SoundDataAsset](/vext/ref/fb/sounddataasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ImpulseResponseAsset()                                                          | Create a new instance of this container type.                                                                                   |
| ImpulseResponseAsset(ImpulseResponseAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ImpulseResponseAsset([SoundDataAsset](/vext/ref/fb/sounddataasset/) other)                    | Upcast an instance of type [SoundDataAsset](/vext/ref/fb/sounddataasset/) to [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset/).                    |
| ImpulseResponseAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset/).                                      |
| ImpulseResponseAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset/). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
