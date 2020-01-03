---
title: UIHardcoreCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIHardcoreCompData()                                                          | Create a new instance of this container type.                                                                               |
| UIHardcoreCompData(UIHardcoreCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIHardcoreCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIHardcoreCompData](UIHardcoreCompData).                  |
| UIHardcoreCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIHardcoreCompData](UIHardcoreCompData).                                      |
| UIHardcoreCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIHardcoreCompData](UIHardcoreCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIHardcoreCompData](UIHardcoreCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIHardcoreCompData](UIHardcoreCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
