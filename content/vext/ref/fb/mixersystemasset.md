---
title: MixerSystemAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MixerSystemAsset()                                                          | Create a new instance of this container type.                                                                           |
| MixerSystemAsset(MixerSystemAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MixerSystemAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MixerSystemAsset](/vext/ref/fb/mixersystemasset/).                                      |
| MixerSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerSystemAsset](/vext/ref/fb/mixersystemasset/). |

## Properties

| Name   | Type                     | Description |
| ------ | ------------------------ | ----------- |
| groups | [MixGroup](/vext/ref/fb/mixgroup/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MixerSystemAsset](/vext/ref/fb/mixersystemasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MixerSystemAsset](/vext/ref/fb/mixersystemasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
