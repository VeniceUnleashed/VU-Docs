---
title: UIFlagCounterCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIFlagCounterCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIFlagCounterCompData(UIFlagCounterCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIFlagCounterCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIFlagCounterCompData](UIFlagCounterCompData).                  |
| UIFlagCounterCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIFlagCounterCompData](UIFlagCounterCompData).                                      |
| UIFlagCounterCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIFlagCounterCompData](UIFlagCounterCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIFlagCounterCompData](UIFlagCounterCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIFlagCounterCompData](UIFlagCounterCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
