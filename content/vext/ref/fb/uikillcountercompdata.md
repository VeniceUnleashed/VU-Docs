---
title: UIKillCounterCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIKillCounterCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIKillCounterCompData(UIKillCounterCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIKillCounterCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIKillCounterCompData](UIKillCounterCompData).                  |
| UIKillCounterCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIKillCounterCompData](UIKillCounterCompData).                                      |
| UIKillCounterCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIKillCounterCompData](UIKillCounterCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIKillCounterCompData](UIKillCounterCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIKillCounterCompData](UIKillCounterCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
