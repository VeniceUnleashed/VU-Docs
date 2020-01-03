---
title: JoypadNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| JoypadNodeData()                                                          | Create a new instance of this container type.                                                                       |
| JoypadNodeData(JoypadNodeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| JoypadNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [JoypadNodeData](/vext/ref/fb/joypadnodedata/).            |
| JoypadNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JoypadNodeData](/vext/ref/fb/joypadnodedata/). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| leftAnalogX  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| leftAnalogY  | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| rightAnalogX | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| rightAnalogY | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| aButton      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| bButton      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [JoypadNodeData](/vext/ref/fb/joypadnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [JoypadNodeData](/vext/ref/fb/joypadnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
