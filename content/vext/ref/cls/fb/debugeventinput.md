---
title: DebugEventInput (Frostbite Container)
---
### Base Classes

[AudioGraphNodePortGroup](AudioGraphNodePortGroup)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| DebugEventInput()                                                          | Create a new instance of this container type.                                                                         |
| DebugEventInput(DebugEventInput other)                                     | Create a reference copy of an instance of the same type.                                                              |
| DebugEventInput([AudioGraphNodePortGroup](AudioGraphNodePortGroup) other)  | Upcast an instance of type [AudioGraphNodePortGroup](AudioGraphNodePortGroup) to [DebugEventInput](DebugEventInput).  |
| DebugEventInput([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DebugEventInput](DebugEventInput). |

## Properties

| Name                   | Type                                     | Description |
| ---------------------- | ---------------------------------------- | ----------- |
| e                      | [AudioGraphNodePort](AudioGraphNodePort) |             |
| name                   | string                                   |             |
| requireTriggeredAndSet | bool                                     |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [DebugEventInput](DebugEventInput) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DebugEventInput](DebugEventInput) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
