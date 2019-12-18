---
title: VoiceOverContainerNode (Frostbite Container)
---
### Base Classes

[VoiceOverStructureNode](VoiceOverStructureNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverContainerNode()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverContainerNode(VoiceOverContainerNode other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverContainerNode([VoiceOverStructureNode](VoiceOverStructureNode) other)    | Upcast an instance of type [VoiceOverStructureNode](VoiceOverStructureNode) to [VoiceOverContainerNode](VoiceOverContainerNode).    |
| VoiceOverContainerNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverContainerNode](VoiceOverContainerNode).                      |
| VoiceOverContainerNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverContainerNode](VoiceOverContainerNode). |

## Properties

| Name              | Type                                                               | Description |
| ----------------- | ------------------------------------------------------------------ | ----------- |
| condition         | [VoiceOverValueConnection](VoiceOverValueConnection)\[\]           |             |
| interval          | [VoiceOverIntervalNode](VoiceOverIntervalNode)                     |             |
| trueRelationship  | [VoiceOverStructureNode](VoiceOverStructureNode)\[\]               |             |
| falseRelationship | [VoiceOverStructureNode](VoiceOverStructureNode)\[\]               |             |
| conditionMode     | [VoiceOverContainerConditionMode](VoiceOverContainerConditionMode) |             |
| probability       | number                                                             |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverContainerNode](VoiceOverContainerNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverContainerNode](VoiceOverContainerNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
