---
title: VoiceOverGlobalNode (Frostbite Container)
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverGlobalNode()                                                          | Create a new instance of this container type.                                                                                 |
| VoiceOverGlobalNode(VoiceOverGlobalNode other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| VoiceOverGlobalNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverGlobalNode](VoiceOverGlobalNode).  |
| VoiceOverGlobalNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverGlobalNode](VoiceOverGlobalNode).                      |
| VoiceOverGlobalNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverGlobalNode](VoiceOverGlobalNode). |

## Properties

| Name   | Type                                       | Description |
| ------ | ------------------------------------------ | ----------- |
| value  | [VoiceOverValue](VoiceOverValue)           |             |
| field  | [VoiceOverNamedValue](VoiceOverNamedValue) |             |
| object | [VoiceOverObject](VoiceOverObject)         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverGlobalNode](VoiceOverGlobalNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverGlobalNode](VoiceOverGlobalNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
