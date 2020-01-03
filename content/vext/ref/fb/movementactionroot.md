---
title: MovementActionRoot
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MovementActionRoot()                                                          | Create a new instance of this container type.                                                                               |
| MovementActionRoot(MovementActionRoot other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MovementActionRoot([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [MovementActionRoot](MovementActionRoot).                                      |
| MovementActionRoot([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovementActionRoot](MovementActionRoot). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| startSequence | [MovementActionData](MovementActionData) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MovementActionRoot](MovementActionRoot) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MovementActionRoot](MovementActionRoot) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
