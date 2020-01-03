---
title: VoiceOverInfoNode
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverInfoNode()                                                          | Create a new instance of this container type.                                                                             |
| VoiceOverInfoNode(VoiceOverInfoNode other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VoiceOverInfoNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverInfoNode](VoiceOverInfoNode).  |
| VoiceOverInfoNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverInfoNode](VoiceOverInfoNode).                      |
| VoiceOverInfoNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverInfoNode](VoiceOverInfoNode). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| object       | [VoiceOverValueConnection](VoiceOverValueConnection) |             |
| value        | [VoiceOverValue](VoiceOverValue)                     |             |
| field        | [VoiceOverNamedValue](VoiceOverNamedValue)           |             |
| expectedType | [VoiceOverObject](VoiceOverObject)                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverInfoNode](VoiceOverInfoNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverInfoNode](VoiceOverInfoNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
