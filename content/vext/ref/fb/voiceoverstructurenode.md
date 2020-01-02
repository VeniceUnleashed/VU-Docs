---
title: VoiceOverStructureNode
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
| VoiceOverStructureNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverStructureNode](VoiceOverStructureNode). |

## Properties

| Name     | Type                                             | Description |
| -------- | ------------------------------------------------ | ----------- |
| flowMode | [VoiceOverLogicFlowMode](VoiceOverLogicFlowMode) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverStructureNode](VoiceOverStructureNode) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverStructureNode](VoiceOverStructureNode) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
