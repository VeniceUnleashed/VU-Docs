---
title: VoiceOverIntervalNode
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverIntervalNode()                                                          | Create a new instance of this container type.                                                                                     |
| VoiceOverIntervalNode(VoiceOverIntervalNode other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VoiceOverIntervalNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverIntervalNode](VoiceOverIntervalNode).  |
| VoiceOverIntervalNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverIntervalNode](VoiceOverIntervalNode).                      |
| VoiceOverIntervalNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverIntervalNode](VoiceOverIntervalNode). |

## Properties

| Name       | Type                                                 | Description |
| ---------- | ---------------------------------------------------- | ----------- |
| threshold  | [VoiceOverValueConnection](VoiceOverValueConnection) |             |
| time       | [VoiceOverValue](VoiceOverValue)                     |             |
| falseValue | [VoiceOverValue](VoiceOverValue)                     |             |
| trueValue  | [VoiceOverValue](VoiceOverValue)                     |             |
| interval   | [VoiceOverInterval](VoiceOverInterval)               |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverIntervalNode](VoiceOverIntervalNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverIntervalNode](VoiceOverIntervalNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
