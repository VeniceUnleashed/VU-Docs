---
title: SimpleMovementActionBaseData (Frostbite Container)
---
### Base Classes

[MovementActionData](MovementActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleMovementActionBaseData()                                                          | Create a new instance of this container type.                                                                                                   |
| SimpleMovementActionBaseData(SimpleMovementActionBaseData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SimpleMovementActionBaseData([MovementActionData](MovementActionData) other)            | Upcast an instance of type [MovementActionData](MovementActionData) to [SimpleMovementActionBaseData](SimpleMovementActionBaseData).            |
| SimpleMovementActionBaseData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SimpleMovementActionBaseData](SimpleMovementActionBaseData). |

## Properties

| Name          | Type                                                         | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| startTimeInfo | [SimpleMovementActionTimeData](SimpleMovementActionTimeData) |             |
| runTimeInfo   | [SimpleMovementActionTimeData](SimpleMovementActionTimeData) |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SimpleMovementActionBaseData](SimpleMovementActionBaseData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SimpleMovementActionBaseData](SimpleMovementActionBaseData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
