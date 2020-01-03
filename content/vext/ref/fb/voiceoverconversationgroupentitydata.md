---
title: VoiceOverConversationGroupEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverConversationGroupEntityData()                                                          | Create a new instance of this container type.                                                                                                                   |
| VoiceOverConversationGroupEntityData(VoiceOverConversationGroupEntityData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| VoiceOverConversationGroupEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VoiceOverConversationGroupEntityData](/vext/ref/fb/voiceoverconversationgroupentitydata/).                            |
| VoiceOverConversationGroupEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VoiceOverConversationGroupEntityData](/vext/ref/fb/voiceoverconversationgroupentitydata/).                    |
| VoiceOverConversationGroupEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VoiceOverConversationGroupEntityData](/vext/ref/fb/voiceoverconversationgroupentitydata/).              |
| VoiceOverConversationGroupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConversationGroupEntityData](/vext/ref/fb/voiceoverconversationgroupentitydata/). |

## Properties

| Name       | Type                                                               | Description |
| ---------- | ------------------------------------------------------------------ | ----------- |
| queueGroup | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup/) |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverConversationGroupEntityData](/vext/ref/fb/voiceoverconversationgroupentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverConversationGroupEntityData](/vext/ref/fb/voiceoverconversationgroupentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
