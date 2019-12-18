---
title: SoundPatchAsset (Frostbite Container)
---
### Base Classes

[SoundGraphAsset](SoundGraphAsset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SoundPatchAsset()                                                          | Create a new instance of this container type.                                                                         |
| SoundPatchAsset(SoundPatchAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SoundPatchAsset([SoundGraphAsset](SoundGraphAsset) other)                  | Upcast an instance of type [SoundGraphAsset](SoundGraphAsset) to [SoundPatchAsset](SoundPatchAsset).                  |
| SoundPatchAsset([SoundAsset](SoundAsset) other)                            | Upcast an instance of type [SoundAsset](SoundAsset) to [SoundPatchAsset](SoundPatchAsset).                            |
| SoundPatchAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoundPatchAsset](SoundPatchAsset).                                      |
| SoundPatchAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundPatchAsset](SoundPatchAsset). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| outputNodes            | [AudioGraphNodeData](AudioGraphNodeData)\[\] |             |
| loudness               | number                                       |             |
| aiLoudness             | number                                       |             |
| radius                 | number                                       |             |
| dopplerFactor          | number                                       |             |
| masterPitch            | number                                       |             |
| mixGroup               | [MixGroup](MixGroup)                         |             |
| defaultStopEvent       | [AudioGraphEvent](AudioGraphEvent)           |             |
| defaultStartEvent      | [AudioGraphEvent](AudioGraphEvent)           |             |
| defaultForceInitEvent  | [AudioGraphEvent](AudioGraphEvent)           |             |
| defaultEnterScopeEvent | [AudioGraphEvent](AudioGraphEvent)           |             |
| isPersistent           | bool                                         |             |
| isLooping              | bool                                         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SoundPatchAsset](SoundPatchAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundPatchAsset](SoundPatchAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
