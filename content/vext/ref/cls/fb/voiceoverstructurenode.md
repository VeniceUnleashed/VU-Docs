---
title: VoiceOverStructureNode (Frostbite Container)
---
### Base Classes

[VoiceOverNode](VoiceOverNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverStructureNode()                                                          | Create a new instance of this container type.                                                                                       |
| VoiceOverStructureNode(VoiceOverStructureNode other)                              | Create a reference copy of an instance of the same type.                                                                            |
| VoiceOverStructureNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverStructureNode](VoiceOverStructureNode).                      |
| VoiceOverStructureNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverStructureNode](VoiceOverStructureNode). |

## Properties

| Name     | Type                                             | Description |
| -------- | ------------------------------------------------ | ----------- |
| flowMode | [VoiceOverLogicFlowMode](VoiceOverLogicFlowMode) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverStructureNode](VoiceOverStructureNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverStructureNode](VoiceOverStructureNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
