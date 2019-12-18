---
title: DebugValueInput (Frostbite Container)
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DebugValueInput()                                                          | Create a new instance of this container type.                                                                         |
| DebugValueInput(DebugValueInput other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DebugValueInput([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [DebugValueInput](DebugValueInput).  |
| DebugValueInput([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DebugValueInput](DebugValueInput). |

## Properties

| Name       | Type                                     | Description |
| ---------- | ---------------------------------------- | ----------- |
| v          | [AudioGraphNodePort](AudioGraphNodePort) |             |
| name       | string                                   |             |
| renderType | [DebugRenderType](DebugRenderType)       |             |
| min        | number                                   |             |
| max        | number                                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DebugValueInput](DebugValueInput) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DebugValueInput](DebugValueInput) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
