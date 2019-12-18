---
title: VoiceOverEventNode (Frostbite Container)
---
### Base Classes

[VoiceOverStructureNode](VoiceOverStructureNode)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverEventNode()                                                          | Create a new instance of this container type.                                                                               |
| VoiceOverEventNode(VoiceOverEventNode other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| VoiceOverEventNode([VoiceOverStructureNode](VoiceOverStructureNode) other)    | Upcast an instance of type [VoiceOverStructureNode](VoiceOverStructureNode) to [VoiceOverEventNode](VoiceOverEventNode).    |
| VoiceOverEventNode([VoiceOverNode](VoiceOverNode) other)                      | Upcast an instance of type [VoiceOverNode](VoiceOverNode) to [VoiceOverEventNode](VoiceOverEventNode).                      |
| VoiceOverEventNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverEventNode](VoiceOverEventNode). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| interval     | [VoiceOverIntervalNode](VoiceOverIntervalNode)       |             |
| relationship | [VoiceOverStructureNode](VoiceOverStructureNode)\[\] |             |
| redirects    | [VoiceOverValueRedirect](VoiceOverValueRedirect)\[\] |             |
| event        | [VoiceOverEvent](VoiceOverEvent)                     |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverEventNode](VoiceOverEventNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverEventNode](VoiceOverEventNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
