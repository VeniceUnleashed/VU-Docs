---
title: DebugValueInput
---
### Base Classes

[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DebugValueInput()                                                          | Create a new instance of this container type.                                                                         |
| DebugValueInput(DebugValueInput other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DebugValueInput([AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) other)  | Upcast an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup/) to [DebugValueInput](/vext/ref/fb/debugvalueinput/).  |
| DebugValueInput([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugValueInput](/vext/ref/fb/debugvalueinput/). |

## Properties

| Name       | Type                                     | Description |
| ---------- | ---------------------------------------- | ----------- |
| v          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/) |             |
| name       | string                                   |             |
| renderType | [DebugRenderType](/vext/ref/fb/debugrendertype/)       |             |
| min        | number                                   |             |
| max        | number                                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DebugValueInput](/vext/ref/fb/debugvalueinput/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugValueInput](/vext/ref/fb/debugvalueinput/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
