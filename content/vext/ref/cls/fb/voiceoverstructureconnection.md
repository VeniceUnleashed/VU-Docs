---
title: VoiceOverStructureConnection (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverStructureConnection()                                                          | Create a new instance of this container type.                                                                                                   |
| VoiceOverStructureConnection(VoiceOverStructureConnection other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| VoiceOverStructureConnection([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverStructureConnection](VoiceOverStructureConnection). |

## Properties

| Name        | Type                                                     | Description |
| ----------- | -------------------------------------------------------- | ----------- |
| targetNode  | [VoiceOverStructureNode](VoiceOverStructureNode)         |             |
| targetInput | [VoiceOverRelationshipInput](VoiceOverRelationshipInput) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VoiceOverStructureConnection](VoiceOverStructureConnection) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverStructureConnection](VoiceOverStructureConnection) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
