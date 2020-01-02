---
title: VoiceOverEventEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| VoiceOverEventEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| VoiceOverEventEntityData(VoiceOverEventEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| VoiceOverEventEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VoiceOverEventEntityData](VoiceOverEventEntityData).                            |
| VoiceOverEventEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VoiceOverEventEntityData](VoiceOverEventEntityData).                    |
| VoiceOverEventEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VoiceOverEventEntityData](VoiceOverEventEntityData).              |
| VoiceOverEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverEventEntityData](VoiceOverEventEntityData). |

## Properties

| Name             | Type                                       | Description |
| ---------------- | ------------------------------------------ | ----------- |
| eventPlayer      | [VoiceOverNamedValue](VoiceOverNamedValue) |             |
| voEvent          | [VoiceOverEvent](VoiceOverEvent)           |             |
| finishedDelay    | number                                     |             |
| extraEventPlayer | [VoiceOverNamedValue](VoiceOverNamedValue) |             |
| triggerDelay     | number                                     |             |
| runOnce          | bool                                       |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VoiceOverEventEntityData](VoiceOverEventEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VoiceOverEventEntityData](VoiceOverEventEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
