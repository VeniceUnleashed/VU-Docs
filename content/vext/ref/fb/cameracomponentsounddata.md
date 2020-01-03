---
title: CameraComponentSoundData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CameraComponentSoundData()                                                          | Create a new instance of this container type.                                                                                           |
| CameraComponentSoundData(CameraComponentSoundData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CameraComponentSoundData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata/). |

## Properties

| Name                       | Type                     | Description |
| -------------------------- | ------------------------ | ----------- |
| switchToAlternateViewSound | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| switchToNormalViewSound    | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
