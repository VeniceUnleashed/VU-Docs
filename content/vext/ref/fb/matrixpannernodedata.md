---
title: MatrixPannerNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MatrixPannerNodeData()                                                          | Create a new instance of this container type.                                                                                   |
| MatrixPannerNodeData(MatrixPannerNodeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MatrixPannerNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata/).            |
| MatrixPannerNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata/). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| inValue      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| frontLeft    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| center       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| frontRight   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| rearLeft     | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| lfe          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| rearRight    | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| farRearLeft  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| farRearRight | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| out          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
