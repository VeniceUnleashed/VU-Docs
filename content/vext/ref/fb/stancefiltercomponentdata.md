---
title: StanceFilterComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| StanceFilterComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| StanceFilterComponentData(StanceFilterComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| StanceFilterComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata/).                      |
| StanceFilterComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata/).                    |
| StanceFilterComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata/).              |
| StanceFilterComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata/). |

## Properties

| Name                   | Type                                     | Description |
| ---------------------- | ---------------------------------------- | ----------- |
| validStances           | number\[\]                               |             |
| stanceChangeTime       | number                                   |             |
| actionsToFilter        | [ActionSuppressor](/vext/ref/fb/actionsuppressor/)\[\] |             |
| filterSpecificActions  | bool                                     |             |
| undoParentStanceFilter | bool                                     |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StanceFilterComponentData](/vext/ref/fb/stancefiltercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
