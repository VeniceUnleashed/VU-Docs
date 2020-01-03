---
title: SimpleMovementActionData
---
### Base Classes

[SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                      |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| SimpleMovementActionData()                                                                   | Create a new instance of this container type.                                                                                                    |
| SimpleMovementActionData(SimpleMovementActionData other)                                     | Create a reference copy of an instance of the same type.                                                                                         |
| SimpleMovementActionData([SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/) other) | Upcast an instance of type [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/) to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata/). |
| SimpleMovementActionData([MovementActionData](/vext/ref/fb/movementactiondata/) other)                     | Upcast an instance of type [MovementActionData](/vext/ref/fb/movementactiondata/) to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata/).                     |
| SimpleMovementActionData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata/).          |

## Properties

| Name                  | Type                                         | Description |
| --------------------- | -------------------------------------------- | ----------- |
| level                 | number                                       |             |
| action                | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| specialAnimationIndex | number                                       |             |
| respawn               | bool                                         |             |
| teleport              | bool                                         |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
