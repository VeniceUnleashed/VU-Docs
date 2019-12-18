---
title: CameraComponentSoundData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CameraComponentSoundData()                                                          | Create a new instance of this container type.                                                                                           |
| CameraComponentSoundData(CameraComponentSoundData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CameraComponentSoundData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraComponentSoundData](CameraComponentSoundData). |

## Properties

| Name                       | Type                     | Description |
| -------------------------- | ------------------------ | ----------- |
| switchToAlternateViewSound | [SoundAsset](SoundAsset) |             |
| switchToNormalViewSound    | [SoundAsset](SoundAsset) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraComponentSoundData](CameraComponentSoundData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraComponentSoundData](CameraComponentSoundData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
