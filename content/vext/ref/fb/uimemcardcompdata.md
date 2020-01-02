---
title: UIMemCardCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIMemCardCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIMemCardCompData(UIMemCardCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIMemCardCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIMemCardCompData](UIMemCardCompData).                  |
| UIMemCardCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIMemCardCompData](UIMemCardCompData).                                      |
| UIMemCardCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIMemCardCompData](UIMemCardCompData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIMemCardCompData](UIMemCardCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIMemCardCompData](UIMemCardCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
