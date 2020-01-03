---
title: Blueprint
---
### Base Classes

[EntityBusData](/vext/ref/fb/entitybusdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Blueprint()                                                          | Create a new instance of this container type.                                                             |
| Blueprint(Blueprint other)                                           | Create a reference copy of an instance of the same type.                                                  |
| Blueprint([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [Blueprint](/vext/ref/fb/blueprint/).                      |
| Blueprint([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [Blueprint](/vext/ref/fb/blueprint/).                          |
| Blueprint([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [Blueprint](/vext/ref/fb/blueprint/).                                      |
| Blueprint([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Blueprint](/vext/ref/fb/blueprint/). |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [Blueprint](/vext/ref/fb/blueprint/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [Blueprint](/vext/ref/fb/blueprint/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
