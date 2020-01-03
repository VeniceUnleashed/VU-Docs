---
title: MovementActionGroupData
---
### Base Classes

[MovementActionData](/vext/ref/fb/movementactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| MovementActionGroupData()                                                          | Create a new instance of this container type.                                                                                         |
| MovementActionGroupData(MovementActionGroupData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| MovementActionGroupData([MovementActionData](/vext/ref/fb/movementactiondata/) other)            | Upcast an instance of type [MovementActionData](/vext/ref/fb/movementactiondata/) to [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata/).            |
| MovementActionGroupData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata/). |

## Properties

| Name              | Type                                         | Description |
| ----------------- | -------------------------------------------- | ----------- |
| actions           | [MovementActionData](/vext/ref/fb/movementactiondata/)\[\] |             |
| runSimultaneously | bool                                         |             |
| restartChildren   | bool                                         |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MovementActionGroupData](/vext/ref/fb/movementactiongroupdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
