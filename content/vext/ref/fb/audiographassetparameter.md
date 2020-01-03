---
title: AudioGraphAssetParameter
---
### Base Classes

[AudioGraphParameter](/vext/ref/fb/audiographparameter/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AudioGraphAssetParameter()                                                          | Create a new instance of this container type.                                                                                           |
| AudioGraphAssetParameter(AudioGraphAssetParameter other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AudioGraphAssetParameter([AudioGraphParameter](/vext/ref/fb/audiographparameter/) other)          | Upcast an instance of type [AudioGraphParameter](/vext/ref/fb/audiographparameter/) to [AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter/).          |
| AudioGraphAssetParameter([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
