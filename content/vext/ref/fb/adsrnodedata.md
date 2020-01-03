---
title: AdsrNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AdsrNodeData()                                                          | Create a new instance of this container type.                                                                   |
| AdsrNodeData(AdsrNodeData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AdsrNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [AdsrNodeData](/vext/ref/fb/adsrnodedata/).            |
| AdsrNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AdsrNodeData](/vext/ref/fb/adsrnodedata/). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| trigger  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| release  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| a        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| d        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| s        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| r        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| value    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| finished | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [AdsrNodeData](/vext/ref/fb/adsrnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AdsrNodeData](/vext/ref/fb/adsrnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
