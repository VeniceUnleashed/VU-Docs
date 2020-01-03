---
title: EventSwitchEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EventSwitchEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| EventSwitchEntityData(EventSwitchEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EventSwitchEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EventSwitchEntityData](/vext/ref/fb/eventswitchentitydata/).                            |
| EventSwitchEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EventSwitchEntityData](/vext/ref/fb/eventswitchentitydata/).                    |
| EventSwitchEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EventSwitchEntityData](/vext/ref/fb/eventswitchentitydata/).              |
| EventSwitchEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSwitchEntityData](/vext/ref/fb/eventswitchentitydata/). |

## Properties

| Name          | Type           | Description |
| ------------- | -------------- | ----------- |
| realm         | [Realm](/vext/ref/fb/realm/) |             |
| outEvents     | number         |             |
| autoIncrement | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventSwitchEntityData](/vext/ref/fb/eventswitchentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventSwitchEntityData](/vext/ref/fb/eventswitchentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
