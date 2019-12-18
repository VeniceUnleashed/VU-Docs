---
title: JoypadNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| JoypadNodeData()                                                          | Create a new instance of this container type.                                                                       |
| JoypadNodeData(JoypadNodeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| JoypadNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [JoypadNodeData](JoypadNodeData).            |
| JoypadNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [JoypadNodeData](JoypadNodeData). |

## Properties

| Name         | Type                                     | Description |
| ------------ | ---------------------------------------- | ----------- |
| leftAnalogX  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| leftAnalogY  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| rightAnalogX | [AudioGraphNodePort](AudioGraphNodePort) |             |
| rightAnalogY | [AudioGraphNodePort](AudioGraphNodePort) |             |
| aButton      | [AudioGraphNodePort](AudioGraphNodePort) |             |
| bButton      | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [JoypadNodeData](JoypadNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [JoypadNodeData](JoypadNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
