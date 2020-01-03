---
title: UIPresenceCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| UIPresenceCompData()                                                          | Create a new instance of this container type.                                                                               |
| UIPresenceCompData(UIPresenceCompData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| UIPresenceCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIPresenceCompData](UIPresenceCompData).                  |
| UIPresenceCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIPresenceCompData](UIPresenceCompData).                                      |
| UIPresenceCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIPresenceCompData](UIPresenceCompData). |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPresenceCompData](UIPresenceCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIPresenceCompData](UIPresenceCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
