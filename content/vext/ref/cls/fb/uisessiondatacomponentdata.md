---
title: UISessionDataComponentData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UISessionDataComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| UISessionDataComponentData(UISessionDataComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UISessionDataComponentData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UISessionDataComponentData](UISessionDataComponentData).                  |
| UISessionDataComponentData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UISessionDataComponentData](UISessionDataComponentData).                                      |
| UISessionDataComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UISessionDataComponentData](UISessionDataComponentData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UISessionDataComponentData](UISessionDataComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UISessionDataComponentData](UISessionDataComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
