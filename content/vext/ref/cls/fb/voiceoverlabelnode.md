---
title: VoiceOverLabelNode (Frostbite Container)
---
### Base Classes

[VoiceOverExpressionNode](VoiceOverExpressionNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverLabelNode()                                                          | Create a new instance of this container type.                                                                               |
| VoiceOverLabelNode(VoiceOverLabelNode other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| VoiceOverLabelNode([VoiceOverExpressionNode](VoiceOverExpressionNode) other)  | Upcast an instance of type [VoiceOverExpressionNode](VoiceOverExpressionNode) to [VoiceOverLabelNode](VoiceOverLabelNode).  |
| VoiceOverLabelNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverLabelNode](VoiceOverLabelNode).                      |
| VoiceOverLabelNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverLabelNode](VoiceOverLabelNode). |

## Properties

| Name                | Type                                                   | Description |
| ------------------- | ------------------------------------------------------ | ----------- |
| sources             | [VoiceOverLabelSource](VoiceOverLabelSource)\[\]       |             |
| falseValue          | [VoiceOverValue](VoiceOverValue)                       |             |
| trueValue           | [VoiceOverValue](VoiceOverValue)                       |             |
| wantedLabels        | [VoiceOverLabel](VoiceOverLabel)\[\]                   |             |
| unwantedLabels      | [VoiceOverLabel](VoiceOverLabel)\[\]                   |             |
| sourceMode          | [VoiceOverLabelSourceMode](VoiceOverLabelSourceMode)   |             |
| wantedCompareMode   | [VoiceOverLabelCompareMode](VoiceOverLabelCompareMode) |             |
| unwantedCompareMode | [VoiceOverLabelCompareMode](VoiceOverLabelCompareMode) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverLabelNode](VoiceOverLabelNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverLabelNode](VoiceOverLabelNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
