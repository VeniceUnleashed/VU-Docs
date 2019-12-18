---
title: VoiceOverConversationGroupEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConversationGroupEntityData()                                                          | Create a new instance of this container type.                                                                                                                   |
| VoiceOverConversationGroupEntityData(VoiceOverConversationGroupEntityData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| VoiceOverConversationGroupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VoiceOverConversationGroupEntityData](VoiceOverConversationGroupEntityData).                            |
| VoiceOverConversationGroupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VoiceOverConversationGroupEntityData](VoiceOverConversationGroupEntityData).                    |
| VoiceOverConversationGroupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VoiceOverConversationGroupEntityData](VoiceOverConversationGroupEntityData).              |
| VoiceOverConversationGroupEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VoiceOverConversationGroupEntityData](VoiceOverConversationGroupEntityData). |

## Properties

| Name       | Type                                                               | Description |
| ---------- | ------------------------------------------------------------------ | ----------- |
| queueGroup | [VoiceOverConversationQueueGroup](VoiceOverConversationQueueGroup) |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConversationGroupEntityData](VoiceOverConversationGroupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VoiceOverConversationGroupEntityData](VoiceOverConversationGroupEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
