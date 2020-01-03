---
title: AntEventEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AntEventEntityData()                                                          | Create a new instance of this container type.                                                                               |
| AntEventEntityData(AntEventEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AntEventEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [AntEventEntityData](/vext/ref/fb/antevententitydata/).                    |
| AntEventEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [AntEventEntityData](/vext/ref/fb/antevententitydata/).              |
| AntEventEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AntEventEntityData](/vext/ref/fb/antevententitydata/).                            |
| AntEventEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AntEventEntityData](/vext/ref/fb/antevententitydata/).                    |
| AntEventEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AntEventEntityData](/vext/ref/fb/antevententitydata/).              |
| AntEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntEventEntityData](/vext/ref/fb/antevententitydata/). |

## Properties

| Name              | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| onEnterEvents     | [AntEventData](/vext/ref/fb/anteventdata/)\[\] |             |
| onUpdateEvents    | [AntEventData](/vext/ref/fb/anteventdata/)\[\] |             |
| onLeaveEvents     | [AntEventData](/vext/ref/fb/anteventdata/)\[\] |             |
| sendAsPlayerEvent | bool                             |             |
| autoActivate      | bool                             |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AntEventEntityData](/vext/ref/fb/antevententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntEventEntityData](/vext/ref/fb/antevententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
