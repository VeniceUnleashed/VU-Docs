---
title: SimpleMovementActionData
---
### Base Classes

[SimpleMovementActionBaseData](SimpleMovementActionBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                      |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SimpleMovementActionData()                                                                   | Create a new instance of this container type.                                                                                                    |
| SimpleMovementActionData(SimpleMovementActionData other)                                     | Create a reference copy of an instance of the same type.                                                                                         |
| SimpleMovementActionData([SimpleMovementActionBaseData](SimpleMovementActionBaseData) other) | Upcast an instance of type [SimpleMovementActionBaseData](SimpleMovementActionBaseData) to [SimpleMovementActionData](SimpleMovementActionData). |
| SimpleMovementActionData([MovementActionData](MovementActionData) other)                     | Upcast an instance of type [MovementActionData](MovementActionData) to [SimpleMovementActionData](SimpleMovementActionData).                     |
| SimpleMovementActionData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleMovementActionData](SimpleMovementActionData).          |

## Properties

| Name                  | Type                                         | Description |
| --------------------- | -------------------------------------------- | ----------- |
| level                 | number                                       |             |
| action                | [EntryInputActionEnum](EntryInputActionEnum) |             |
| specialAnimationIndex | number                                       |             |
| respawn               | bool                                         |             |
| teleport              | bool                                         |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleMovementActionData](SimpleMovementActionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleMovementActionData](SimpleMovementActionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
