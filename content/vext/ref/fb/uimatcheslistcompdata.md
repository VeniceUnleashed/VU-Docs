---
title: UIMatchesListCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIMatchesListCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIMatchesListCompData(UIMatchesListCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIMatchesListCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIMatchesListCompData](UIMatchesListCompData).                  |
| UIMatchesListCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIMatchesListCompData](UIMatchesListCompData).                                      |
| UIMatchesListCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMatchesListCompData](UIMatchesListCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMatchesListCompData](UIMatchesListCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMatchesListCompData](UIMatchesListCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
