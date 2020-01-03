---
title: UILifeCounterCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UILifeCounterCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UILifeCounterCompData(UILifeCounterCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UILifeCounterCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UILifeCounterCompData](UILifeCounterCompData).                  |
| UILifeCounterCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UILifeCounterCompData](UILifeCounterCompData).                                      |
| UILifeCounterCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILifeCounterCompData](UILifeCounterCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILifeCounterCompData](UILifeCounterCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILifeCounterCompData](UILifeCounterCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
