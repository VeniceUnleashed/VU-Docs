---
title: UIPlaygroupCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIPlaygroupCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UIPlaygroupCompData(UIPlaygroupCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIPlaygroupCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIPlaygroupCompData](UIPlaygroupCompData).                  |
| UIPlaygroupCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIPlaygroupCompData](UIPlaygroupCompData).                                      |
| UIPlaygroupCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIPlaygroupCompData](UIPlaygroupCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIPlaygroupCompData](UIPlaygroupCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIPlaygroupCompData](UIPlaygroupCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
