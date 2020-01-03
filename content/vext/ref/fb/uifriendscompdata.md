---
title: UIFriendsCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIFriendsCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIFriendsCompData(UIFriendsCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIFriendsCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIFriendsCompData](UIFriendsCompData).                  |
| UIFriendsCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIFriendsCompData](UIFriendsCompData).                                      |
| UIFriendsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIFriendsCompData](UIFriendsCompData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIFriendsCompData](UIFriendsCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIFriendsCompData](UIFriendsCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
