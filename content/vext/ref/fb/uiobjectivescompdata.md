---
title: UIObjectivesCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIObjectivesCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIObjectivesCompData(UIObjectivesCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIObjectivesCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIObjectivesCompData](UIObjectivesCompData).                  |
| UIObjectivesCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIObjectivesCompData](UIObjectivesCompData).                                      |
| UIObjectivesCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIObjectivesCompData](UIObjectivesCompData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIObjectivesCompData](UIObjectivesCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIObjectivesCompData](UIObjectivesCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
