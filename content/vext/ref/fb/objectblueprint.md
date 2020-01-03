---
title: ObjectBlueprint
---
### Base Classes

[Blueprint](/vext/ref/fb/blueprint/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ObjectBlueprint()                                                          | Create a new instance of this container type.                                                                         |
| ObjectBlueprint(ObjectBlueprint other)                                     | Create a reference copy of an instance of the same type.                                                              |
| ObjectBlueprint([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [ObjectBlueprint](/vext/ref/fb/objectblueprint/).                              |
| ObjectBlueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [ObjectBlueprint](/vext/ref/fb/objectblueprint/).                      |
| ObjectBlueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [ObjectBlueprint](/vext/ref/fb/objectblueprint/).                          |
| ObjectBlueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ObjectBlueprint](/vext/ref/fb/objectblueprint/).                                      |
| ObjectBlueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ObjectBlueprint](/vext/ref/fb/objectblueprint/). |

## Properties

| Name   | Type                             | Description |
| ------ | -------------------------------- | ----------- |
| object | [GameObjectData](/vext/ref/fb/gameobjectdata/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [ObjectBlueprint](/vext/ref/fb/objectblueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ObjectBlueprint](/vext/ref/fb/objectblueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
