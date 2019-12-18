---
title: Blueprint (Frostbite Container)
---
### Base Classes

[EntityBusData](EntityBusData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Blueprint()                                                          | Create a new instance of this container type.                                                             |
| Blueprint(Blueprint other)                                           | Create a reference copy of an instance of the same type.                                                  |
| Blueprint([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [Blueprint](Blueprint).                      |
| Blueprint([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [Blueprint](Blueprint).                          |
| Blueprint([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [Blueprint](Blueprint).                                      |
| Blueprint([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Blueprint](Blueprint). |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [Blueprint](Blueprint) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Blueprint](Blueprint) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
