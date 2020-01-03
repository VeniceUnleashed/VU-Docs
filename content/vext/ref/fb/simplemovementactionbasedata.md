---
title: SimpleMovementActionBaseData
---
### Base Classes

[MovementActionData](/vext/ref/fb/movementactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleMovementActionBaseData()                                                          | Create a new instance of this container type.                                                                                                   |
| SimpleMovementActionBaseData(SimpleMovementActionBaseData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SimpleMovementActionBaseData([MovementActionData](/vext/ref/fb/movementactiondata/) other)            | Upcast an instance of type [MovementActionData](/vext/ref/fb/movementactiondata/) to [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/).            |
| SimpleMovementActionBaseData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/). |

## Properties

| Name          | Type                                                         | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| startTimeInfo | [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata/) |             |
| runTimeInfo   | [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata/) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
