---
title: MovementComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MovementComponentData()                                                          | Create a new instance of this container type.                                                                                     |
| MovementComponentData(MovementComponentData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MovementComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [MovementComponentData](/vext/ref/fb/movementcomponentdata/).                      |
| MovementComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [MovementComponentData](/vext/ref/fb/movementcomponentdata/).                    |
| MovementComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [MovementComponentData](/vext/ref/fb/movementcomponentdata/).              |
| MovementComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovementComponentData](/vext/ref/fb/movementcomponentdata/). |

## Properties

| Name            | Type                                                 | Description |
| --------------- | ---------------------------------------------------- | ----------- |
| movementBinding | [MovementComponentBinding](/vext/ref/fb/movementcomponentbinding/) |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MovementComponentData](/vext/ref/fb/movementcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MovementComponentData](/vext/ref/fb/movementcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
