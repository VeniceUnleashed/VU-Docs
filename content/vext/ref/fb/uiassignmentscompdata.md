---
title: UIAssignmentsCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIAssignmentsCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIAssignmentsCompData(UIAssignmentsCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIAssignmentsCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIAssignmentsCompData](UIAssignmentsCompData).                  |
| UIAssignmentsCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIAssignmentsCompData](UIAssignmentsCompData).                                      |
| UIAssignmentsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAssignmentsCompData](UIAssignmentsCompData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIAssignmentsCompData](UIAssignmentsCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIAssignmentsCompData](UIAssignmentsCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
