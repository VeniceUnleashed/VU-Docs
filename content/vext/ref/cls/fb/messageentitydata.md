---
title: MessageEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MessageEntityData()                                                          | Create a new instance of this container type.                                                                             |
| MessageEntityData(MessageEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MessageEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MessageEntityData](MessageEntityData).                            |
| MessageEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MessageEntityData](MessageEntityData).                    |
| MessageEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MessageEntityData](MessageEntityData).              |
| MessageEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MessageEntityData](MessageEntityData). |

## Properties

| Name               | Type                                         | Description |
| ------------------ | -------------------------------------------- | ----------- |
| messageSid         | string                                       |             |
| additionalMessages | [MessageLineData](MessageLineData)\[\]       |             |
| messageType        | [UIMessageEntityType](UIMessageEntityType)   |             |
| displayTime        | number                                       |             |
| entryInputAction   | [EntryInputActionEnum](EntryInputActionEnum) |             |
| enabled            | bool                                         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MessageEntityData](MessageEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MessageEntityData](MessageEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
