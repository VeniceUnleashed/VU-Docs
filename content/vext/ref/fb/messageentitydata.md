---
title: MessageEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MessageEntityData()                                                          | Create a new instance of this container type.                                                                             |
| MessageEntityData(MessageEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MessageEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [MessageEntityData](/vext/ref/fb/messageentitydata/).                            |
| MessageEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MessageEntityData](/vext/ref/fb/messageentitydata/).                    |
| MessageEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MessageEntityData](/vext/ref/fb/messageentitydata/).              |
| MessageEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MessageEntityData](/vext/ref/fb/messageentitydata/). |

## Properties

| Name               | Type                                         | Description |
| ------------------ | -------------------------------------------- | ----------- |
| messageSid         | string                                       |             |
| additionalMessages | [MessageLineData](/vext/ref/fb/messagelinedata/)\[\]       |             |
| messageType        | [UIMessageEntityType](/vext/ref/fb/uimessageentitytype/)   |             |
| displayTime        | number                                       |             |
| entryInputAction   | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| enabled            | bool                                         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MessageEntityData](/vext/ref/fb/messageentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MessageEntityData](/vext/ref/fb/messageentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
