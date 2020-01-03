---
title: SoldierEntityInteractionComponentData
---
### Base Classes

[EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SoldierEntityInteractionComponentData()                                                                       | Create a new instance of this container type.                                                                                                                                  |
| SoldierEntityInteractionComponentData(SoldierEntityInteractionComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                                                       |
| SoldierEntityInteractionComponentData([EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/) other) | Upcast an instance of type [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata/) to [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/). |
| SoldierEntityInteractionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                                   | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/).                                   |
| SoldierEntityInteractionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                                 | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/).                                 |
| SoldierEntityInteractionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                           | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/).                           |
| SoldierEntityInteractionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)              | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/).              |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierEntityInteractionComponentData](/vext/ref/fb/soldierentityinteractioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
