---
title: UIAudioEventAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIAudioEventAsset()                                                          | Create a new instance of this container type.                                                                             |
| UIAudioEventAsset(UIAudioEventAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIAudioEventAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset/).                                      |
| UIAudioEventAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset/). |

## Properties

| Name               | Type                                           | Description |
| ------------------ | ---------------------------------------------- | ----------- |
| audioEventMappings | [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping/)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
