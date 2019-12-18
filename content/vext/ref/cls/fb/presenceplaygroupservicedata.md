---
title: PresencePlaygroupServiceData (Frostbite Container)
---
### Base Classes

[PresenceServiceData](PresenceServiceData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| PresencePlaygroupServiceData()                                                          | Create a new instance of this container type.                                                                                                   |
| PresencePlaygroupServiceData(PresencePlaygroupServiceData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| PresencePlaygroupServiceData([PresenceServiceData](PresenceServiceData) other)          | Upcast an instance of type [PresenceServiceData](PresenceServiceData) to [PresencePlaygroupServiceData](PresencePlaygroupServiceData).          |
| PresencePlaygroupServiceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PresencePlaygroupServiceData](PresencePlaygroupServiceData).                                      |
| PresencePlaygroupServiceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PresencePlaygroupServiceData](PresencePlaygroupServiceData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PresencePlaygroupServiceData](PresencePlaygroupServiceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PresencePlaygroupServiceData](PresencePlaygroupServiceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
