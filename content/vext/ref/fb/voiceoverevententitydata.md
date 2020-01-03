---
title: VoiceOverEventEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverEventEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverEventEntityData(VoiceOverEventEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverEventEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata/).                            |
| VoiceOverEventEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata/).                    |
| VoiceOverEventEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata/).              |
| VoiceOverEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata/). |

## Properties

| Name             | Type                                       | Description |
| ---------------- | ------------------------------------------ | ----------- |
| eventPlayer      | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) |             |
| voEvent          | [VoiceOverEvent](/vext/ref/fb/voiceoverevent/)           |             |
| finishedDelay    | number                                     |             |
| extraEventPlayer | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue/) |             |
| triggerDelay     | number                                     |             |
| runOnce          | bool                                       |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverEventEntityData](/vext/ref/fb/voiceoverevententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
