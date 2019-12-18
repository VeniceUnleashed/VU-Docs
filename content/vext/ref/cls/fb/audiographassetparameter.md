---
title: AudioGraphAssetParameter (Frostbite Container)
---
### Base Classes

[AudioGraphParameter](AudioGraphParameter)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AudioGraphAssetParameter()                                                          | Create a new instance of this container type.                                                                                           |
| AudioGraphAssetParameter(AudioGraphAssetParameter other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AudioGraphAssetParameter([AudioGraphParameter](AudioGraphParameter) other)          | Upcast an instance of type [AudioGraphParameter](AudioGraphParameter) to [AudioGraphAssetParameter](AudioGraphAssetParameter).          |
| AudioGraphAssetParameter([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AudioGraphAssetParameter](AudioGraphAssetParameter). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AudioGraphAssetParameter](AudioGraphAssetParameter) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AudioGraphAssetParameter](AudioGraphAssetParameter) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
